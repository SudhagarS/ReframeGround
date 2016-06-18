(ns frontend.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :refer [register-sub]]))


(register-sub
  :jobs
  (fn [db]
    (reaction (:jobs @db))))

(register-sub
  :section
  (fn [db]
    (reaction (:section @db))))
