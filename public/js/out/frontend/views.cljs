(ns frontend.views
  (:require
    [reagent.core  :as r]
    [re-frame.core :as re-frame]
    [frontend.subs]
    [frontend.handlers]
    [re-frame.core :refer [subscribe dispatch dispatch-sync]]
    [goog.dom :as dom]))

;; -------------------------
;; Views

(defn opening-component
  [opening]
  [:div {:class "opening"} (:title opening)])

(defn opening-compose
  [category-id]
  (let [val (r/atom "")
        save #(do (dispatch [:save-opening category-id @val])
                  (reset! val ""))]
    (r/create-class
      {:reagent-render
       (fn []
         [:div {:class "opening-compose"}
          [:input {:type "text"
                   :placeholder "opening"
                   :value @val
                   :on-change #(reset! val (-> % .-target .-value))
                   :on-key-down #(case (.-which %)
                                  13 (save)
                                  nil)}]])})))

(defn category-component
  [category]
  (let [editing (r/atom false)
        id (:id category)
        title (r/atom (:title category))
        save #(do (dispatch [:edit-category-title id @title])
                  (reset! editing false))]
    (fn [category]
      [:div {:class "category"}
       (if @editing
          [:input {:value @title
                   :on-change #(reset! title (-> % .-target .-value))
                   :on-key-down #(case (.-which %)
                                  13 (save)
                                  nil)}]
          [:span {:class "category-title text-primary"}
                 (str (:title category) " ")])
       [:a.bg-info {:on-click #(reset! editing true)} "Edit"] [:span " "]
       [:a.bg-danger {:on-click #(dispatch [:remove-category id])} "Remove"]
       (for [opening (-> category :openings vals)]
         ^{:key (:id opening)} [opening-component opening])
       [opening-compose (:id category)]
       [:hr]])))

(defn category-compose
  []
  (let [val (r/atom "")
        save #(dispatch [:save-category @val])]
    (r/create-class
      {:reagent-render
        (fn []
          [:div {:class "category-compose"}
            [:input {:type "text"
                    :placeholder "new category"
                    :value @val
                    :on-change #(reset! val (-> % .-target .-value))
                    :on-key-down #(case (.-which %)
                                   13 (do (save) (reset! val ""))
                                   nil)}]])})))

(defn jobs-page []
  (let [jobs (re-frame/subscribe [:jobs])
        section (re-frame/subscribe [:section])]
    [:div {:class "jobs"}
     [:h1 @section]
     (for [category @jobs]
       ^{:key (:id category)} [category-component category])
     [category-compose]]))
