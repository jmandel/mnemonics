(ns major-system.combinatorics)

(defmacro ^:private reify-bool
  [statement]
  `(if ~statement 1 0))

