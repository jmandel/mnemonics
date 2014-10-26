(ns major-system-figwheel
  (:require [figwheel.client :as fw :include-macros true]
            [major-system.browser :as browser]))

(fw/watch-and-reload
 :jsload-callback (fn [] (browser/on-reload)))
