(ns frontend.handlers
  (:require
    [re-frame.core :refer [register-handler]]))

(register-handler
  :initialise-db
  (fn
    [_ _]                   ;; Ignore both params (db and v).
    {:section "Play time"
     :jobs [{:id 0
             :title "Comedy"
             :openings [{:id 0 :title "Friends"}
                        {:id 1 :title "Modern Family"}]}
            {:id 1
             :title "Crime"
             :openings [{:id 0 :title "Breaking bad"}
                        {:id 1 :title "Narcos"}]}]}))

(register-handler
  :save-category
  (fn [db [_ new-category]]
    (update-in db [:jobs] conj {:id (count (-> db :jobs))
                                :title new-category
                                :openings []})))

(register-handler
  :save-opening
  (fn [db [_ category-id new-opening]]
    (let [cur-opening-count (-> db :jobs (get category-id) :openings count)]
      (update-in db [:jobs category-id :openings] conj {:id  cur-opening-count
                                                        :title new-opening}))))

(register-handler
  :edit-category-title
  (fn [db [_ category-id new-title]]
    (assoc-in db [:jobs category-id :title] new-title)))
