(window.webpackJsonpUnataWidgets=window.webpackJsonpUnataWidgets||[]).push([[20],{ddc0958ced66158be337:function(e,t,o){"use strict";o.r(t);var r=o("4ccd2dc4bb07e67eb6db"),s=o.n(r),n=o("3478ed78d76c28060dce"),c=o.n(n),i=o("ff287e4203ba67f8dff7"),d=o.n(i),a=o("46f8f4ccfe1b73ca4d0c"),m=o.n(a),u=o("2befd5a067fda4f72081"),l=o("f7a3bb3b20756d9db47c");t.default=m.a.module("InStoreListReviewControllerModule",[]).controller("InStoreListReviewController",["$sce","$scope","$state","Restangular","cartService","config","configurableProductService","imageURLService","lang","listPrintService","mobileService","navService","productDetailsModal","rateApp","shoppingSelectorService","sideCartSortModalService","undoRemove","utilService",function(e,t,o,r,n,i,a,m,p,g,v,S,I,h,C,f,w,b){const y=this,A=Object(l.a)(p);Object.assign(y,{$state:o,cartService:n,config:i,configurableProductService:a,imageURLService:m,lang:p,listPrintService:g,shoppingSelectorService:C},{hasCartItems:()=>n.cart.items.length>0,showOrderOnlineButton:n.canOrderOnline()}),y.breadcrumbs=S.getCartListReviewItems();const k=d()(n,"cart.items.length",0),O=i.mobileAppRate.listItemsReviewed;-1!==O&&k>=O&&h.promptAppReview(),y.model={sortType:i.defaultShoppingListSort||"category",sortedProductsBy:{},orderedGroups:{}},y.outOfStockWarningPopover=e.trustAsHtml(`<span class="icon-warning add-to-cart__warning" aria-hidden="true"></span> ${p.values.outOfStockDescription}`),y.setSortType=e=>{y.model.sortType=e},y.newCustomItem={name:""};const P=()=>{y.model.customItems=n.getCustomItems(),y.model.nonCustomItems=n.getNonCustomItems()},_=()=>{n.getCategorizedProductsAndCategories().then(({productsByCategory:e,orderedCategories:t})=>{y.model.sortedProductsBy.category=e,y.model.orderedGroups.category=t})},M=()=>{i.disableAisles||(y.model.sortedProductsBy.aisle=n.getAllProductsByAisle(),y.model.orderedGroups.aisle=c()(y.model.sortedProductsBy.aisle).sort(b.naturalSortFunc))};y.model.isLoading=!0,n.fetch().then(()=>{n.cart.items.length>0&&(s()(n.cart.items,e=>{e.store_product&&(e.isSelected=!1)}),_(),P(),M(),t.$watch(()=>n.lastUpdated,()=>{_(),P(),M()})),y.model.isLoading=!1}),y.updateItemComment=e=>{n.currentEnterpriseService.actions.updateItemComment(e,e.comment),n.sync()},y.addCustomItem=e=>{e.length&&(n.addItem(e,1),y.model.customItemInput="")},y.removeCustomItem=e=>n.removeItem(e),y.goToProductDetailsModal=e=>{e.product_config||I.open(e.store_product.id,{location:i.analyticsSourceKeys.inStoreListReview})},y.openShoppingSelectorModal=()=>{C.open("shoppingContext")},y.addNewCustomItem=function(e){e.length&&(n.addItem(e,1),y.newCustomItem.name="",P())},y.toggleAddCustom=function(e){if(y.model.showAddCustom=e,y.model.showAddCustom){document.querySelector("#add-custom-item-input").focus()}else b.blurAndHideKeyboard()},y.plusButtonClicked=function(){y.toggleAddCustom(!0),y.newCustomItem.name&&y.addNewCustomItem(y.newCustomItem.name)},y.sortOptionNameByValue=e=>{var t;return null===(t=A.find(t=>t.value===e))||void 0===t?void 0:t.name},y.triggerSortModal=()=>{y.showSortModal=!0,f.open({sortOptions:A,sort:y.model.sortType}).then(e=>{y.setSortType(e.sort),y.showSortModal=!1},()=>{y.showSortModal=!1})},y.incrementItem=e=>{y.cartService.incrementItem(e.store_product,1,e.product_config)},y.decrementItem=e=>{e.quantity>1?y.cartService.decrementItem(e.store_product,1,e.product_config):e.showDeleteConfirm=!0},y.updateItemQuantity=(e,t,o)=>{const r=0===e.quantity;if(o&&r)return o(),void(e.quantity=t);const{store_product:s,quantity:n,product_config:c}=e;y.cartService.updateItemQuantity(s,n,null==c?void 0:c.options)},y.removeItem=(e,t)=>{e.showDeleteConfirm=!1;const o=n.removeItem(e,e.product_config&&e.product_config.options);!t&&v.isMobile&&null!=o&&o.then&&o.then(()=>w.showToast(e))},y.emptyList=()=>{y.cartService.clear()},y.deleteCheckedItems=()=>{y.cartService.deleteCheckedItems()},y.uncheckAllItems=()=>{y.cartService.uncheckAllItems()},y.checkedItemsCount=()=>y.cartService.getCheckedItemsCount(),y.checkItem=e=>{n.currentEnterpriseService.actions.updateItemChecked(e,e.checked),n.sync()},y.customItemOnBlur=()=>{!v.isMobileApp()&&v.isMobile&&v.isIOS&&(this.addNewCustomItem(this.newCustomItem.name),this.toggleAddCustom(!1))},y.onlineCartHasItems=()=>{var e,t;return i.newCheckoutFlow.cartReviewPage.enabled&&(null===(e=n.cart)||void 0===e||null===(t=e.items)||void 0===t?void 0:t.length)>0&&!y.isOffline},y.isItemCurrentlyOutOfStock=e=>!u.m.utils.isProductAvailable(e.store_product)}])}}]);