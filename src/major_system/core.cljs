(ns major-system.core
  (:require [clojure.string :as str]
[major-system.combinatorics :as combo]
[cljs.nodejs :as node]))

(node/enable-util-print!)

(declare mnemonics)
(declare tostr)


(def consonants-to-nums { "B" 9 "CH"6 "D" 1 "DH"6 "F" 8 "G" 7 "JH" 6 "K" 7 "L" 5
                          "M" 3 "N" 2 "NG" -1 "P" 9 "R" 4 "S" 0 "SH" 6 "T" 1 "V" 8
                          "Z" 0 "ZH" 6 "ER0" 4 "TH" -1})
(def is-consonant? (set (keys consonants-to-nums)))

(defn as-entry [line]
  (if-let [parsed (re-find #"(^[A-Z']+)  (.*)$" line)]
    {:word (parsed 1) 
     :phonemes (str/split (parsed 2) #"\s+")}))

(defn with-numbers [word]
  (let [consonants (filter is-consonant? (:phonemes word))
        numbers (map consonants-to-nums consonants)]
    (assoc word :numbers numbers)))

(defn add-word [corpus word]
  (update-in corpus [(:numbers word)] (fnil conj []) (:word word)))

(defn load-dict []
  (let [fs (node/require "fs")
        dict (str/split (.readFileSync fs "cmudict/cmudict.0.7a.100") #"\n")]
    (->> dict
         (map as-entry)
         (filter identity)
         (map with-numbers)
         (reduce add-word {}))))

(def words-by-number (load-dict))

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

(defn mnemonics [p]
  (let [patterns (apply-all-breaks p)]
    (->> patterns
         (map words-for-pattern)
         (filter #(every? identity %))))) 

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

(defn -main [& args]
  (let [nums (->> args
                  (mapcat #(.split % ""))
                  (map (js* "parseInt")))]
    (println (tostr (time ( doall (mnemonics nums)))))))

(set! *main-cli-fn* -main)

(println "done loading" (count words-by-number) "unique patterns")
