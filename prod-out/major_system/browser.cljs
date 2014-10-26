(ns major-system.browser
  (:require [clojure.string :as str]
            [major-system.combinatorics :as combo]
            [goog.events :as events]
            [cljs.reader :as reader]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true] 
            [servant.core :as servant]
            [servant.worker :as worker]
            [cljs.core.async :refer [chan close! timeout put! take! <! >! sliding-buffer]]
            [cljs-http.client :as http])
  (:require-macros [cljs.core.async.macros :as m :refer [go go-loop]]
                   [servant.macros :refer [defservantfn]]) 
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(enable-console-print!)

(def worker-count 1)

(if (servant/webworker?)
  (take! (http/get "/words-by-number.edn")
         (fn [res] (let [res (reader/read-string (:body res))]
                    (def words-by-number res)))))

(defonce words-by-number nil) 
(println (count words-by-number))

(defn all-breaks [nums]
  (let [n (count nums)
        indices (range 1 n)]
    (mapcat  #(combo/combinations indices %) (range n))))

(defn apply-break [v breaks]
  (let [points (concat [0] breaks [ (count v)])
        sub (partial subvec v)]
    (map  #(apply sub %) (partition 2 1 points))))

(defn apply-all-breaks [nums]
  (let [numsv (vec nums)]
    (map #(apply-break numsv %) (all-breaks numsv))))

(defn words-for-pattern [number-groups]
  (map words-by-number number-groups))

(defservantfn loaded? [] (pos? (count words-by-number)))

(defservantfn mnemonics [pin {:keys [ndrop ntake] :or {ndrop 0 ntake 10}}]
  (let [p (reader/read-string pin)
        patterns (apply-all-breaks p)
        results (->> patterns
                     (map words-for-pattern)
                     (filter #(every? identity %))
                     (drop ndrop)
                     (take ntake))]
    (time (pr-str (doall results)))))

(defn shortest-mnemonics [p]
  (let [ms (mnemonics p)]
    (first  (partition-by count ms))))

(defn random-mnemonic [p]
  (let [ms (mnemonics p)]
    (for [g (partition-by count ms)]
      (map rand-nth (rand-nth g)))))

(defn tostr [ms]
  (interpose
   "\nor...\n\n"
   (for [m ms]
     (apply println-str (interpose "+ \n" m)))))

(defn on-reload []
  (if (servant/webworker?)
    (worker/bootstrap) 
    (do 
      (println "reloaded x2" (servant/webworker?))
      (def servant-channel (servant/spawn-servants worker-count (.-workerUrl js/window)))
      (om/root mnemonics-view
               {:loaded false :ticks 0 :input ""} 
               {:target (.getElementById js/document "main-area")}))))

(defn parse-nums [& args] 
  (println "Parsing" args)
  (->> args
       (mapcat #(.split % ""))
       (map (js* "parseInt"))
       (remove js/isNaN)))

(defn words [app owner]
  (reify
    om/IShouldUpdate
    (should-update [this next-props next-state] true)
    om/IRenderState
    (render-state [_ state]
      (apply dom/div nil (interpose ", " (:words state))))))

(defn mnemonic-group [app owner]
  (reify
    om/IShouldUpdate
    (should-update [this next-props next-state] true)
    om/IRenderState
    (render-state [_ state]
      (let [parts (map (fn [part] (om/build words app {:state {:words part}} )) (:parts state))] 
        (apply dom/div nil (interpose (dom/h2 nil "+") parts))))))

(def input-channel (chan (sliding-buffer 1)))

(defn mnemonics-view [app owner]
  (reify
    om/IWillMount
    (will-mount [_]
      (go-loop [] 
               (<! (timeout 500))
               (let [done (<! (servant/servant-thread servant-channel servant/standard-message loaded?))]
               (om/update! app :loaded done)
               (if-not done (recur))))
      (go-loop [] 
               (<! (timeout 500))
               (om/transact! app :ticks inc)
               (recur))
      (go-loop [] 
               (let [input (<! input-channel)
                     input (parse-nums input)
                     input (pr-str input)
                     _ (println "working to chan " input)
                     result-channel (servant/servant-thread
                                     servant-channel
                                     servant/standard-message
                                     mnemonics input)]
                 (om/update! app :input input)
                 (om/update! app :ticks 0)
                 (om/update! app :working true)
                 (om/update! app :mnemonics [])
                 (om/update! app :mnemonics (reader/read-string (<! result-channel))))
               (om/update! app :working false)
               (recur)))
    om/IRender
    (render [_]
      (dom/div #js {:id "classes"}
              (if (:loaded app)
               (dom/input  
                #js {:type "text"
                     :value  nil
                     :maxLength "20"
                     :placeholder "123-456"
                     :autoFocus true
                     :onChange (fn [e] (put! input-channel (.. e -target -value)))}) 
               (dom/h3 nil "Loading dictionary..."))
               (dom/div nil (if-not (clojure.string/blank? (:input app))
                              (str "Looking for " (:input app))))
               (apply dom/div #js {:id "answers"} 
                      (let [mns (:mnemonics app)
                            parts (map #(om/build mnemonic-group app {:state {:parts %}}) mns )]
                        (interpose (dom/h1 nil (dom/hr nil) "or...") parts) ))))))

(defonce just-at-initial-launch (on-reload))

