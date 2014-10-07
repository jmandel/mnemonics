(ns major-system.prepare
  (:use clojure.java.io)
  (:require [clojure.string :as str]
            [clojure.math.combinatorics :as combo]
            [clojure.pprint]))

(def consonants-to-nums { "B" 9 "CH"6 "D" 1 "DH"6 "F" 8 "G" 7 "JH" 6 "K" 7 "L" 5
                          "M" 3 "N" 2 "NG" -1 "P" 9 "R" 4 "S" 0 "SH" 6 "T" 1 "V" 8
                          "Z" 0 "ZH" 6 "ER0" 4 "TH" -1})
(def is-consonant? (set (keys consonants-to-nums)))

(defn as-entry [line]
  (if-let [parsed (re-find #"(^[A-Z']+)  (.*+$)" line)]
    {:word (parsed 1) 
     :phonemes (str/split (parsed 2) #"\s+")}))

(defn with-numbers [word]
  (let [consonants (filter is-consonant? (:phonemes word))
        numbers (map consonants-to-nums consonants)]
    (assoc word :numbers numbers)))

(defn add-word [corpus word]
  (update-in corpus [(:numbers word)] (fnil conj []) (:word word)))

(defn load-dict []
  (with-open [dict (reader "cmudict/cmudict.0.7a.100")]
    (->> (line-seq dict)
         (map as-entry)
         (filter identity)
         (map with-numbers)
         (reduce add-word {}))))

(def words-by-number (load-dict))

(defn -main [& args]
  (clojure.pprint/pprint words-by-number))
