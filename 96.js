(window.webpackJsonpUnataWidgets=window.webpackJsonpUnataWidgets||[]).push([[96],{"085daf6579e1461446f6":function(e,t,i){"use strict";i.r(t);var n=i("8af190b70a6bc55c6f1b"),r=i.n(n),a=i("8a2d1b95e05b6a321e74"),o=i.n(a),c=i("c72272a7287d0d0d7bf8"),l=i("9a0b4e03ea3c43527074");function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function b(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const p={name:o.a.string.isRequired,amount:o.a.string.isRequired,daily_value:o.a.string};p.children=o.a.arrayOf(o.a.shape(p));const u={name:o.a.string.isRequired,amount:o.a.string.isRequired,daily_value:o.a.string,children:o.a.arrayOf(o.a.shape(p)),isChild:o.a.bool,padding:o.a.number,isFirst:o.a.bool},f=Object(c.hb)(e=>({nutritionLine:{borderTop:c.pb.toPx`${e.border.width.regular} solid ${e.color.neutral.grey3}`},nutritionNameLarge:{fontSize:e.size.font.large},nutritionNameNormal:{fontSize:e.size.font.body},lineContainer:{display:"flex",flexDirection:"row",alignItems:"center",paddingTop:"2px",paddingBottom:"2px"},amount:{fontSize:e.size.font.body,paddingRight:e.size.spacing.small,whiteSpace:"nowrap"},dailyValue:{fontSize:e.size.font.large,marginLeft:"auto",whiteSpace:"nowrap"}}),{displayName:"Nutrition Line"}),O="Daily Value",g=Object(n.forwardRef)((e,t)=>{const i=f(e),n=Object(c.ob)(),{amount:r,daily_value:a,name:o,children:s,isChild:d,padding:p=0,isFirst:u}=e,j=p+n.size.spacing.small;return Object(l.c)("li",{ref:t,css:u?void 0:i.nutritionLine,"data-test":"nutrition-line",id:"test",children:[Object(l.c)("div",{css:i.lineContainer,children:[Object(l.c)(c.ab,{align:"left",component:"span",css:d?i.nutritionNameNormal:i.nutritionNameLarge,bold:!d,style:d?{paddingLeft:`${p}px`}:{},"data-test":`nutrition-${o}`,children:[o," "]}),Object(l.c)("span",{css:i.amount,children:[" ",r]}),a&&Object(l.c)(l.a,{children:[Object(l.c)(c.ab,{bold:!0,css:i.dailyValue,children:[" ",a," %"]}),Object(l.b)(c.T,{children:O})]})]}),s&&Object(l.b)("ul",{children:s.map(e=>Object(l.b)(g,b(b({},e),{},{isChild:!0,padding:j,tokens:n}),`line-${o}`))})]})});g.propTypes=u;var j=Object(n.memo)(g);function h(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function m(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?h(Object(i),!0).forEach((function(t){y(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function y(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const w={amount:o.a.string.isRequired,name:o.a.string.isRequired,i18n:o.a.object},v=Object(c.hb)(e=>({flexColContainer:{display:"flex",flexDirection:"column"},flexRowContainer:{display:"flex",justifyContent:"space-between"},amount:{whiteSpace:"nowrap"},perServing:{fontSize:e.size.font.large,lineHeight:1.5,margin:0},calorieLine:{marginBottom:e.size.spacing.xxxSmall},calorieLineText:{fontSize:e.size.font.h2,lineHeight:1}}),{displayName:"CalorieLine"}),P={perServing:"Amount per serving"},x=Object(n.forwardRef)((e,t)=>{const i=v(e),{amount:n,name:r,i18n:a}=e,o=m(m({},P),a);return Object(l.b)("div",{ref:t,children:Object(l.c)("div",{css:i.flexColContainer,children:[Object(l.b)("h3",{css:i.perServing,children:o.perServing}),Object(l.c)("div",{css:[i.flexRowContainer,i.calorieLine],children:[Object(l.b)(c.ab,{bold:!0,"data-test":"Calories",css:[i.calorieLineText],children:r}),Object(l.c)(c.ab,{bold:!0,css:[i.amount,i.calorieLineText],children:[" ",parseInt(n,10)?Math.round(parseInt(n,10)):n]})]})]})})});x.propTypes=w;var S=x;const z=Object(c.hb)(e=>({divider:{borderTop:`${e.color.neutral.black} 6px solid`}}),{displayName:"NutritionDivider"});var C=e=>{const t=z(e);return Object(l.b)("div",{css:t.divider})};const R={disclaimer:o.a.string.isRequired},D=Object(c.hb)(e=>({disclaimer:{fontSize:e.size.font.large,fontWeight:e.font.weight.bold,fontStyle:"italic"}}),{displayName:"NutritionDisclaimerText"}),N=Object(n.forwardRef)((e,t)=>{const i=D(e),{disclaimer:n}=e;return Object(l.b)("p",{ref:t,css:i.disclaimer,children:n})});N.propTypes=R;var T=N;const L={footnote:o.a.string.isRequired},F=Object(c.hb)(e=>({footnote:{marginTop:e.size.base,fontSize:e.size.font.caption}}),{displayName:"NutritionFootnote"}),q=Object(n.forwardRef)((e,t)=>{const i=F(e),{footnote:n}=e;return Object(l.b)("div",{ref:t,css:i.footnote,children:n})});q.propTypes=L;var k=q;function W(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function $(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?W(Object(i),!0).forEach((function(t){B(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):W(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function B(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const E={amount:o.a.string.isRequired,perContainer:o.a.string.isRequired,fields:o.a.array.isRequired,secondaryFields:o.a.array,nutritionDisclaimer:o.a.string,footnote:o.a.string,fullWidth:o.a.bool,i18n:o.a.object},V=Object(c.hb)(e=>({nutrition:{width:"100%",maxWidth:"486px"},fullWidth:{maxWidth:"100%"},label:{borderBottom:c.pb.toPx`${e.color.neutral.black} solid ${e.border.width.thick}`,fontSize:e.size.font.h1,lineHeight:e.size.lineHeight.h2,marginBottom:0,marginTop:0,paddingBottom:"4px"},containerPadding:{paddingTop:"4px",paddingBottom:"4px"},largeFont:{fontSize:e.size.font.large},flexRowContainer:{display:"flex",justifyContent:"space-between"}}),{displayName:"Nutrition"}),H={label:"Nutrition Facts",amount:"Serving Size",perContainer:"Servings Per Container",dailyValue:"% Daily Value"},I=Object(n.forwardRef)((e,t)=>{const i=V(e),{amount:n,fields:a,secondaryFields:o,perContainer:s,fullWidth:b=!1,i18n:d,nutritionDisclaimer:p,footnote:u}=e,f=$($({},H),d),O=a.filter(e=>"calories"!==e.name.toLowerCase()),g=a.find(e=>"calories"===e.name.toLowerCase());return Object(l.c)("div",{tabIndex:"0",ref:t,css:[i.nutrition,b&&i.fullWidth],children:[Object(l.b)("h2",{css:i.label,children:f.label}),p&&Object(l.b)(T,{disclaimer:p}),Object(l.c)("div",{css:i.containerPadding,children:[Object(l.b)(c.ab,{css:i.largeFont,children:s}),Object(l.c)(c.ab,{bold:!0,css:[i.largeFont,i.flexRowContainer],children:[Object(l.b)("span",{"aria-hidden":"true",children:f.amount}),Object(l.b)("span",{children:n})]})]}),Object(l.b)(C,{}),Object(l.b)("div",{css:i.containerPadding,children:Object(l.b)(S,$({},g))}),Object(l.b)(C,{}),Object(l.c)("ul",{children:[Object(l.b)("li",{children:Object(l.b)(c.ab,{css:i.containerPadding,align:"right",bold:!0,children:f.dailyValue})}),O.map(e=>Object(l.b)(j,$({},e),e.name)),o&&Object(l.c)(r.a.Fragment,{children:[Object(l.b)(C,{}),o.map((e,t)=>Object(l.b)(j,$($({},e),{},{isFirst:0===t}),e.name))]})]}),u&&Object(l.c)(r.a.Fragment,{children:[Object(l.b)(C,{}),Object(l.b)(k,{footnote:u})]})]})});I.propTypes=E;var _=I;t.default=_}}]);