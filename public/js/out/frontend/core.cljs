(ns frontend.core
    (:require [reagent.core :as reagent :refer [atom]]
              [re-frame.core :refer [dispatch dispatch-sync]]
              [frontend.views :as views]
              [frontend.handlers]
              [frontend.subs]
              [goog.dom :as dom]))

(enable-console-print!)

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [views/jobs-page] (.getElementById js/document "app")))

(defn init! []
  (dispatch-sync [:initialise-db])
  (mount-root))
