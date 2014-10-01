(ns major-system.cmacros)

(defmacro ^:private reify-bool
  [statement]
  `(if ~statement 1 0))

