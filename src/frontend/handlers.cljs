(ns frontend.handlers
  (:require
    [re-frame.core :refer [register-handler]]))

;; helpers
;; ----------------------
(defn get-next-id
  [coll]
  ((fnil inc 0) (last (keys coll))))

(defn remove-indexes
  [v indexes]
  (into []
        (comp (map-indexed vector)
              (remove (comp (set indexes) first))
              (map second))
        v))

;; handlers
;; ----------------------
(register-handler
  :initialise-db
  (fn
    [_ _]                   ;; Ignore both params (db and v).
    {:section "Play time"
     :jobs (sorted-map)}))

(register-handler
  :save-category
  (fn [db [_ new-category]]
    (let [id (-> db :jobs get-next-id)]
      (update-in db [:jobs] assoc id {:id id
                                      :title new-category
                                      :openings (sorted-map)}))))

(register-handler
  :save-opening
  (fn [db [_ category-id new-opening]]
    (let [id (-> db :jobs (get category-id) :openings get-next-id)]
      (update-in db [:jobs category-id :openings] assoc id {:id  id
                                                            :title new-opening}))))

(register-handler
  :edit-category-title
  (fn [db [_ category-id new-title]]
    (assoc-in db [:jobs category-id :title] new-title)))

(register-handler
  :remove-category
  (fn [db [_ category-id]]
    (update-in db [:jobs] dissoc category-id)))
