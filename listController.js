(window.webpackJsonpUnataWidgets=window.webpackJsonpUnataWidgets||[]).push([[21],{"495e931ac7bb133aecd7":function(e,t,s){"use strict";s.r(t);var i=s("46f8f4ccfe1b73ca4d0c"),l=s.n(i),r=s("c808d8f3b62a083fb08b"),o=s("2befd5a067fda4f72081");t.default=l.a.module("ListControllerModule",[]).controller("ListController",["$sce","$scope","analytics","auth","cartAnalytics","catalogCategoriesService","config","configurableProductService","imageURLService","lang","list","listDetails","listPrintService","productDetailsModal",function(e,t,s,i,l,a,c,d,n,u,m,p,g,f){Object.assign(t,{selectedMap:{},toggleEdit:!1,list:p,listService:m,selectedItems:[],form:{allSelected:!1},loadList:m.loadListToCart,shopContextIntent:i.getContext().intent,config:c,SHOPPING_MODES:r.c,imageURLService:n,listPrintService:g,productDetailsModal:f,configurableProductService:d}),t.selectItem=e=>{const s=m.itemInList(e,{items:t.selectedItems},null,!0);-1!==s?(t.selectedItems.splice(s,1),t.selectedMap[e.store_product.id]=!1,t.form.allSelected=!1):(t.selectedItems.push(e),t.selectedMap[e.store_product.id]=!0,t.selectedItems.length===t.list.items.length&&(t.form.allSelected=!0))},t.selectAll=()=>{t.form.allSelected?t.list.items.forEach(e=>{-1===m.itemInList(e,{items:t.selectedItems},null,!0)&&!t.isItemCurrentlyOutOfStock(e)&&e.store_product.status&&(t.selectedItems.push(e),t.selectedMap[e.store_product.id]=!0)}):(t.selectedItems.length=0,t.list.items.forEach(e=>{t.selectedMap[e.store_product.id]=!1}))},t.removeFromList=(e,s,i=!0)=>{t.isRemoving=!0,m.removeItems(e,s,null,i).then(()=>{e.forEach(e=>{delete t.selectedMap[e.store_product.id]}),t.categorize()}).finally(()=>{t.isRemoving=!1,t.selectedItems.length=0,t.selectedMap={},t.form.allSelected=!1})},t.editName=()=>{t.listService.update(t.list).then(()=>{t.nameForm.name.$setPristine(),t.toggleEdit=!1})},t.editListName=()=>{t.toggleEdit=!0},t.incrementItem=e=>{e.quantity++,t.listService.update(t.list)},t.decrementItem=e=>{e.quantity--,e.quantity<=0?t.removeFromList([e],t.list):t.listService.update(t.list)},t.unavailableItemsExist=e=>e.items.filter(e=>!e.store_product.status||t.isItemCurrentlyOutOfStock(e)).length,t.removeUnavailable=e=>{const s=e.items.filter(e=>!e.store_product.status||t.isItemCurrentlyOutOfStock(e));t.removeFromList(s,e,!1)},t.categorize=(e=!1)=>{t.list.items.forEach((s,i)=>{s.originalIndex=i,e&&(t.selectedMap[s.store_product.id]=!1)}),a.getOrderedCategoriesAndProductsWithCategories(t.list.items).then(({orderedCategories:e,categorizedProducts:s})=>{t.orderedCategories=e,t.categorizedProducts=s})},t.addList=e=>{const s=Object.keys(t.selectedMap).filter(e=>!0===t.selectedMap[e]),i=e.filter(e=>s.includes(e.id)).map(e=>(l.addItem(e.store_product,e.quantity,e.originalIndex,c.analyticsSourceKeys.saveForLaterLists,{}),e));t.loadList(i),t.selectedItems.length=0,t.selectedMap={},t.form.allSelected=!1},t.categorize(!0),t.openModal=e=>{var t;null!==(t=e.store_product)&&void 0!==t&&t.status&&f.open(e.store_product.id,{location:c.analyticsSourceKeys.saveForLaterLists})},t.isItemCurrentlyOutOfStock=e=>!o.m.utils.isProductAvailable(e.store_product),t.outOfStockWarningPopover=e.trustAsHtml(`<div class="restrict-width">\n          <span class="icon-warning add-to-cart__warning" aria-hidden="true"></span> ${u.values.outOfStockDescription}\n        </div>`)}])}}]);