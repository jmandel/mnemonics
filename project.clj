(defproject major-system "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-figwheel "0.1.4-SNAPSHOT"]]
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/math.combinatorics "0.0.8"]
                 [org.clojure/clojurescript "0.0-2356"]
                 [figwheel "0.1.4-SNAPSHOT"]
                 [om "0.7.3"]
                 [servant "0.1.3"]
                 [cljs-http "0.1.16"]]
  :cljsbuild {
    :builds [
            { :id "major-web" 
                :source-paths ["src/major_system", "src/figwheel"]
                :compiler { :output-to "resources/public/js/compiled/major-web.js"
                            :output-dir "resources/public/js/compiled/out"
                            :externs ["resources/public/js/externs/jquery-1.9.js"]
                            :optimizations :none
                            :source-map true } }
               {:id "release"
              :source-paths ["src/major_system"]
              :compiler {
                :output-to "resources/public/major_system_prod.js"
                :output-dir "resources/public/prod-out"
                :optimizations :whitespace
                :pretty-print false
                :preamble ["react/react.min.js"]
                :externs ["react/externs/react.js"]
                :source-map "resources/public/major_system_prod.js.map"}}
              ]}
  )
