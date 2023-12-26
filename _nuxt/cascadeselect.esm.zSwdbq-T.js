import{s as F}from"./index.esm.6xdOGTLj.js";import{s as A}from"./index.esm.IYKhIMEJ.js";import{a9 as R,ab as P,ac as w,aa as a,ad as d,ae as B,af as z,ag as H,ah as N,ak as M,aj as j,i as g,N as U,t as u,v as h,H as D,I as q,al as c,T as W,J as O,am as x,y as I,L as k,an as K,x as v,W as C,B as J,z as V,A as G,ao as Z}from"./entry.5rKgAf99.js";var Q=`
@layer primevue {
    .p-cascadeselect {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
    }

    .p-cascadeselect-trigger {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .p-cascadeselect-label {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        flex: 1 1 auto;
        width: 1%;
        text-overflow: ellipsis;
        cursor: pointer;
    }

    .p-cascadeselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-cascadeselect .p-cascadeselect-panel {
        min-width: 100%;
    }

    .p-cascadeselect-item {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
    }

    .p-cascadeselect-item-content {
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    .p-cascadeselect-group-icon {
        margin-left: auto;
    }

    .p-cascadeselect-items {
        margin: 0;
        padding: 0;
        list-style-type: none;
        min-width: 100%;
    }

    .p-fluid .p-cascadeselect {
        display: flex;
    }

    .p-fluid .p-cascadeselect .p-cascadeselect-label {
        width: 1%;
    }

    .p-cascadeselect-sublist {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        display: none;
    }

    .p-cascadeselect-item-active {
        overflow: visible;
    }

    .p-cascadeselect-item-active > .p-cascadeselect-sublist {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-cascadeselect-enter-from,
    .p-cascadeselect-leave-active {
        opacity: 0;
    }

    .p-cascadeselect-enter-active {
        transition: opacity 150ms;
    }
}
`,X={root:function(e){var n=e.props;return{position:n.appendTo==="self"?"relative":void 0}}},Y={root:function(e){var n=e.instance,i=e.props;return["p-cascadeselect p-component p-inputwrapper",{"p-disabled":i.disabled,"p-focus":n.focused,"p-inputwrapper-filled":i.modelValue,"p-inputwrapper-focus":n.focused||n.overlayVisible,"p-overlay-open":n.overlayVisible}]},label:function(e){var n=e.instance,i=e.props;return["p-cascadeselect-label p-inputtext",{"p-placeholder":n.label===i.placeholder,"p-cascadeselect-label-empty":!n.$slots.value&&(n.label==="p-emptylabel"||n.label.length===0)}]},dropdownButton:"p-cascadeselect-trigger",loadingIcon:"p-cascadeselect-trigger-icon",dropdownIcon:"p-cascadeselect-trigger-icon",panel:function(e){var n=e.instance;return["p-cascadeselect-panel p-component",{"p-input-filled":n.$primevue.config.inputStyle==="filled","p-ripple-disabled":n.$primevue.config.ripple===!1}]},wrapper:"p-cascadeselect-items-wrapper",list:"p-cascadeselect-panel p-cascadeselect-items",item:function(e){var n=e.instance,i=e.processedOption;return["p-cascadeselect-item",{"p-cascadeselect-item-group":n.isOptionGroup(i),"p-cascadeselect-item-active p-highlight":n.isOptionActive(i),"p-focus":n.isOptionFocused(i),"p-disabled":n.isOptionDisabled(i)}]},content:"p-cascadeselect-item-content",text:"p-cascadeselect-item-text",groupIcon:"p-cascadeselect-group-icon",sublist:"p-cascadeselect-sublist"},$=R.extend({name:"cascadeselect",css:Q,classes:Y,inlineStyles:X}),_={name:"BaseCascadeSelect",extends:M,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,placeholder:String,disabled:Boolean,dataKey:null,inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},appendTo:{type:String,default:"body"},loading:{type:Boolean,default:!1},dropdownIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},optionGroupIcon:{type:String,default:void 0},autoOptionFocus:{type:Boolean,default:!0},selectOnFocus:{type:Boolean,default:!1},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:$,provide:function(){return{$parentInstance:this}}},T={name:"CascadeSelectSub",hostName:"CascadeSelect",extends:M,emits:["option-change"],container:null,props:{selectId:String,focusedOptionId:String,options:Array,optionLabel:String,optionValue:String,optionDisabled:null,optionGroupIcon:String,optionGroupLabel:String,optionGroupChildren:{type:[String,Array],default:null},activeOptionPath:Array,level:Number,templates:null,isParentMount:Boolean},data:function(){return{mounted:!1}},watch:{isParentMount:{handler:function(e){e&&d.nestedPosition(this.container,this.level)}}},mounted:function(){(this.isParentMount||this.level===0)&&d.nestedPosition(this.container,this.level),this.mounted=!0},methods:{getOptionId:function(e){return"".concat(this.selectId,"_").concat(e.key)},getOptionLabel:function(e){return this.optionLabel?a.resolveFieldData(e.option,this.optionLabel):e.option},getOptionValue:function(e){return this.optionValue?a.resolveFieldData(e.option,this.optionValue):e.option},isOptionDisabled:function(e){return this.optionDisabled?a.resolveFieldData(e.option,this.optionDisabled):!1},getOptionGroupLabel:function(e){return this.optionGroupLabel?a.resolveFieldData(e.option,this.optionGroupLabel):null},getOptionGroupChildren:function(e){return e.children},isOptionGroup:function(e){return a.isNotEmpty(e.children)},isOptionSelected:function(e){return!this.isOptionGroup(e)&&this.isOptionActive(e)},isOptionActive:function(e){return this.activeOptionPath.some(function(n){return n.key===e.key})},isOptionFocused:function(e){return this.focusedOptionId===this.getOptionId(e)},getOptionLabelToRender:function(e){return this.isOptionGroup(e)?this.getOptionGroupLabel(e):this.getOptionLabel(e)},onOptionClick:function(e,n){this.$emit("option-change",{originalEvent:e,processedOption:n,isFocus:!0})},onOptionChange:function(e){this.$emit("option-change",e)},containerRef:function(e){this.container=e}},directives:{ripple:j},components:{AngleRightIcon:F}},ee=["id","aria-label","aria-selected","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-item-group","data-p-highlight","data-p-focus","data-p-disabled"],te=["onClick"];function ne(t,e,n,i,s,o){var l=g("AngleRightIcon"),p=g("CascadeSelectSub",!0),f=U("ripple");return u(),h("ul",c({ref:o.containerRef,class:t.cx("list")},n.level===0?t.ptm("list"):t.ptm("sublist")),[(u(!0),h(D,null,q(n.options,function(r,y){return u(),h("li",c({key:o.getOptionLabelToRender(r),id:o.getOptionId(r),class:t.cx("item",{processedOption:r}),role:"treeitem","aria-label":o.getOptionLabelToRender(r),"aria-selected":o.isOptionGroup(r)?void 0:o.isOptionSelected(r),"aria-expanded":o.isOptionGroup(r)?o.isOptionActive(r):void 0,"aria-level":n.level+1,"aria-setsize":n.options.length,"aria-posinset":y+1},t.ptm("item"),{"data-p-item-group":o.isOptionGroup(r),"data-p-highlight":o.isOptionActive(r),"data-p-focus":o.isOptionFocused(r),"data-p-disabled":o.isOptionDisabled(r)}),[W((u(),h("div",c({class:t.cx("content"),onClick:function(S){return o.onOptionClick(S,r)}},t.ptm("content")),[n.templates.option?(u(),O(x(n.templates.option),{key:0,option:r.option},null,8,["option"])):(u(),h("span",c({key:1,class:t.cx("text")},t.ptm("text")),I(o.getOptionLabelToRender(r)),17)),o.isOptionGroup(r)?(u(),h(D,{key:2},[n.templates.optiongroupicon?(u(),O(x(n.templates.optiongroupicon),{key:0,"aria-hidden":"true"})):n.optionGroupIcon?(u(),h("span",c({key:1,class:[t.cx("groupIcon"),n.optionGroupIcon],"aria-hidden":"true"},t.ptm("groupIcon")),null,16)):(u(),O(l,c({key:2,class:t.cx("groupIcon"),"aria-hidden":"true"},t.ptm("groupIcon")),null,16,["class"]))],64)):k("",!0)],16,te)),[[f]]),o.isOptionGroup(r)&&o.isOptionActive(r)?(u(),O(p,{key:0,role:"group",class:K(t.cx("sublist")),selectId:n.selectId,focusedOptionId:n.focusedOptionId,options:o.getOptionGroupChildren(r),activeOptionPath:n.activeOptionPath,level:n.level+1,templates:n.templates,optionLabel:n.optionLabel,optionValue:n.optionValue,optionDisabled:n.optionDisabled,optionGroupIcon:n.optionGroupIcon,optionGroupLabel:n.optionGroupLabel,optionGroupChildren:n.optionGroupChildren,onOptionChange:o.onOptionChange,pt:t.pt,unstyled:t.unstyled,isParentMount:s.mounted},null,8,["class","selectId","focusedOptionId","options","activeOptionPath","level","templates","optionLabel","optionValue","optionDisabled","optionGroupIcon","optionGroupLabel","optionGroupChildren","onOptionChange","pt","unstyled","isParentMount"])):k("",!0)],16,ee)}),128))],16)}T.render=ne;var ie={name:"CascadeSelect",extends:_,emits:["update:modelValue","change","focus","blur","click","group-change","before-show","before-hide","hide","show"],outsideClickListener:null,scrollHandler:null,resizeListener:null,overlay:null,searchTimeout:null,searchValue:null,focusOnHover:!1,data:function(){return{id:this.$attrs.id,focused:!1,focusedOptionInfo:{index:-1,level:0,parentKey:""},activeOptionPath:[],overlayVisible:!1,dirty:!1}},watch:{"$attrs.id":function(e){this.id=e||P()},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||P(),this.autoUpdateModel()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(w.clear(this.overlay),this.overlay=null)},methods:{getOptionLabel:function(e){return this.optionLabel?a.resolveFieldData(e,this.optionLabel):e},getOptionValue:function(e){return this.optionValue?a.resolveFieldData(e,this.optionValue):e},isOptionDisabled:function(e){return this.optionDisabled?a.resolveFieldData(e,this.optionDisabled):!1},getOptionGroupLabel:function(e){return this.optionGroupLabel?a.resolveFieldData(e,this.optionGroupLabel):null},getOptionGroupChildren:function(e,n){return a.isString(this.optionGroupChildren)?a.resolveFieldData(e,this.optionGroupChildren):a.resolveFieldData(e,this.optionGroupChildren[n])},isOptionGroup:function(e,n){return Object.prototype.hasOwnProperty.call(e,this.optionGroupChildren[n])},getProccessedOptionLabel:function(e){var n=this.isProccessedOptionGroup(e);return n?this.getOptionGroupLabel(e.option,e.level):this.getOptionLabel(e.option)},isProccessedOptionGroup:function(e){return a.isNotEmpty(e.children)},show:function(e){if(this.$emit("before-show"),this.overlayVisible=!0,this.activeOptionPath=this.hasSelectedOption?this.findOptionPathByValue(this.modelValue):this.activeOptionPath,this.hasSelectedOption&&a.isNotEmpty(this.activeOptionPath)){var n=this.activeOptionPath[this.activeOptionPath.length-1];this.focusedOptionInfo={index:this.autoOptionFocus?n.index:-1,level:n.level,parentKey:n.parentKey}}else this.focusedOptionInfo={index:this.autoOptionFocus?this.findFirstFocusedOptionIndex():-1,level:0,parentKey:""};e&&d.focus(this.$refs.focusInput)},hide:function(e){var n=this,i=function(){n.$emit("before-hide"),n.overlayVisible=!1,n.activeOptionPath=[],n.focusedOptionInfo={index:-1,level:0,parentKey:""},e&&d.focus(n.$refs.focusInput)};setTimeout(function(){i()},0)},onFocus:function(e){this.disabled||(this.focused=!0,this.$emit("focus",e))},onBlur:function(e){this.focused=!1,this.focusedOptionInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled||this.loading){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&a.isPrintableCharacter(e.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(e,e.key));break}},onOptionChange:function(e){var n=e.originalEvent,i=e.processedOption,s=e.isFocus,o=e.isHide;if(!a.isEmpty(i)){var l=i.index,p=i.level,f=i.parentKey,r=i.children,y=a.isNotEmpty(r),L=this.activeOptionPath.filter(function(S){return S.parentKey!==f});L.push(i),this.focusedOptionInfo={index:l,level:p,parentKey:f},this.activeOptionPath=L,y?this.onOptionGroupSelect(n,i):this.onOptionSelect(n,i,o),s&&d.focus(this.$refs.focusInput)}},onOptionSelect:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=this.getOptionValue(n.option);this.activeOptionPath.forEach(function(o){return o.selected=!0}),this.updateModel(e,s),i&&this.hide(!0)},onOptionGroupSelect:function(e,n){this.dirty=!0,this.$emit("group-change",{originalEvent:e,value:n.option})},onContainerClick:function(e){this.disabled||this.loading||((!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide():this.show(),d.focus(this.$refs.focusInput)),this.$emit("click",e))},onOverlayClick:function(e){B.emit("overlay-click",{originalEvent:e,target:this.$el})},onOverlayKeyDown:function(e){switch(e.code){case"Escape":this.onEscapeKey(e);break}},onArrowDownKey:function(e){var n=this.focusedOptionInfo.index!==-1?this.findNextOptionIndex(this.focusedOptionInfo.index):this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(e,n),!this.overlayVisible&&this.show(),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedOptionInfo.index!==-1){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);!i&&this.onOptionChange({originalEvent:e,processedOption:n})}this.overlayVisible&&this.hide(),e.preventDefault()}else{var s=this.focusedOptionInfo.index!==-1?this.findPrevOptionIndex(this.focusedOptionInfo.index):this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(e,s),!this.overlayVisible&&this.show(),e.preventDefault()}},onArrowLeftKey:function(e){var n=this;if(this.overlayVisible){var i=this.visibleOptions[this.focusedOptionInfo.index],s=this.activeOptionPath.find(function(p){return p.key===i.parentKey}),o=this.focusedOptionInfo.parentKey===""||s&&s.key===this.focusedOptionInfo.parentKey,l=a.isEmpty(i.parent);o&&(this.activeOptionPath=this.activeOptionPath.filter(function(p){return p.parentKey!==n.focusedOptionInfo.parentKey})),l||(this.focusedOptionInfo={index:-1,parentKey:s?s.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()}},onArrowRightKey:function(e){if(this.overlayVisible){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);if(i){var s=this.activeOptionPath.some(function(o){return n.key===o.key});s?(this.focusedOptionInfo={index:-1,parentKey:n.key},this.searchValue="",this.onArrowDownKey(e)):this.onOptionChange({originalEvent:e,processedOption:n})}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(e,this.findFirstOptionIndex()),!this.overlayVisible&&this.show(),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(e,this.findLastOptionIndex()),!this.overlayVisible&&this.show(),e.preventDefault()},onEnterKey:function(e){if(!this.overlayVisible)this.onArrowDownKey(e);else if(this.focusedOptionInfo.index!==-1){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);this.onOptionChange({originalEvent:e,processedOption:n}),!i&&this.hide()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.overlayVisible&&this.hide(!0),e.preventDefault()},onTabKey:function(e){if(this.focusedOptionInfo.index!==-1){var n=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(n);!i&&this.onOptionChange({originalEvent:e,processedOption:n})}this.overlayVisible&&this.hide()},onOverlayEnter:function(e){w.set("overlay",e,this.$primevue.config.zIndex.overlay),d.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.scrollInView()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null,this.dirty=!1},onOverlayAfterLeave:function(e){w.clear(e)},alignOverlay:function(){this.appendTo==="self"?d.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=d.getOuterWidth(this.$el)+"px",d.absolutePosition(this.overlay,this.$el))},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){e.overlayVisible&&e.overlay&&!e.$el.contains(n.target)&&!e.overlay.contains(n.target)&&e.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new z(this.$refs.container,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!d.isTouchDevice()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOptionMatched:function(e){return this.isValidOption(e)&&this.getProccessedOptionLabel(e).toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale))},isValidOption:function(e){return a.isNotEmpty(e)&&!this.isOptionDisabled(e.option)},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isSelected:function(e){return this.activeOptionPath.some(function(n){return n.key===e.key})},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidOption(n)})},findLastOptionIndex:function(){var e=this;return a.findLastIndex(this.visibleOptions,function(n){return e.isValidOption(n)})},findNextOptionIndex:function(e){var n=this,i=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(s){return n.isValidOption(s)}):-1;return i>-1?i+e+1:e},findPrevOptionIndex:function(e){var n=this,i=e>0?a.findLastIndex(this.visibleOptions.slice(0,e),function(s){return n.isValidOption(s)}):-1;return i>-1?i:e},findSelectedOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)})},findFirstFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},findOptionPathByValue:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n=n||i===0&&this.processedOptions,!n)return null;if(a.isEmpty(e))return[];for(var s=0;s<n.length;s++){var o=n[s];if(a.equals(e,this.getOptionValue(o.option),this.equalityKey))return[o];var l=this.findOptionPathByValue(e,o.children,i+1);if(l)return l.unshift(o),l}},searchOptions:function(e,n){var i=this;this.searchValue=(this.searchValue||"")+n;var s=-1,o=!1;return this.focusedOptionInfo.index!==-1?(s=this.visibleOptions.slice(this.focusedOptionInfo.index).findIndex(function(l){return i.isOptionMatched(l)}),s=s===-1?this.visibleOptions.slice(0,this.focusedOptionInfo.index).findIndex(function(l){return i.isOptionMatched(l)}):s+this.focusedOptionInfo.index):s=this.visibleOptions.findIndex(function(l){return i.isOptionMatched(l)}),s!==-1&&(o=!0),s===-1&&this.focusedOptionInfo.index===-1&&(s=this.findFirstFocusedOptionIndex()),s!==-1&&this.changeFocusedOptionIndex(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500),o},changeFocusedOptionIndex:function(e,n){this.focusedOptionInfo.index!==n&&(this.focusedOptionInfo.index=n,this.scrollInView(),this.selectOnFocus&&this.onOptionChange({originalEvent:e,processedOption:this.visibleOptions[n],isHide:!1}))},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=e!==-1?"".concat(this.id,"_").concat(e):this.focusedOptionId,i=d.findSingle(this.list,'li[id="'.concat(n,'"]'));i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&(this.focusedOptionInfo.index=this.findFirstFocusedOptionIndex(),this.onOptionChange({processedOption:this.visibleOptions[this.focusedOptionInfo.index],isHide:!1}),!this.overlayVisible&&(this.focusedOptionInfo={index:-1,level:0,parentKey:""}))},updateModel:function(e,n){this.$emit("update:modelValue",n),this.$emit("change",{originalEvent:e,value:n})},createProcessedOptions:function(e){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",l=[];return e&&e.forEach(function(p,f){var r=(o!==""?o+"_":"")+f,y={option:p,index:f,level:i,key:r,parent:s,parentKey:o};y.children=n.createProcessedOptions(n.getOptionGroupChildren(p,i),i+1,y,r),l.push(y)}),l},overlayRef:function(e){this.overlay=e}},computed:{hasSelectedOption:function(){return a.isNotEmpty(this.modelValue)},label:function(){var e=this.placeholder||"p-emptylabel";if(this.hasSelectedOption){var n=this.findOptionPathByValue(this.modelValue),i=a.isNotEmpty(n)?n[n.length-1]:null;return i?this.getOptionLabel(i.option):e}return e},processedOptions:function(){return this.createProcessedOptions(this.options||[])},visibleOptions:function(){var e=this,n=this.activeOptionPath.find(function(i){return i.key===e.focusedOptionInfo.parentKey});return n?n.children:this.processedOptions},equalityKey:function(){return this.optionValue?null:this.dataKey},searchResultMessageText:function(){return a.isNotEmpty(this.visibleOptions)?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionInfo.index!==-1?"".concat(this.id).concat(a.isNotEmpty(this.focusedOptionInfo.parentKey)?"_"+this.focusedOptionInfo.parentKey:"","_").concat(this.focusedOptionInfo.index):null}},components:{CascadeSelectSub:T,Portal:H,ChevronDownIcon:A,SpinnerIcon:N,AngleRightIcon:F}};function b(t){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(t)}function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?E(Object(n),!0).forEach(function(i){oe(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function oe(t,e,n){return e=se(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function se(t){var e=ae(t,"string");return b(e)=="symbol"?e:String(e)}function ae(t,e){if(b(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(b(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var re=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant"];function le(t,e,n,i,s,o){var l=g("SpinnerIcon"),p=g("CascadeSelectSub"),f=g("Portal");return u(),h("div",c({ref:"container",class:t.cx("root"),style:t.sx("root"),onClick:e[5]||(e[5]=function(r){return o.onContainerClick(r)})},t.ptm("root"),{"data-pc-name":"cascadeselect"}),[v("div",c({class:"p-hidden-accessible"},t.ptm("hiddenInputWrapper"),{"data-p-hidden-accessible":!0}),[v("input",c({ref:"focusInput",id:t.inputId,type:"text",class:t.inputClass,style:t.inputStyle,readonly:"",disabled:t.disabled,placeholder:t.placeholder,tabindex:t.disabled?-1:t.tabindex,role:"combobox","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-haspopup":"tree","aria-expanded":s.overlayVisible,"aria-controls":s.id+"_tree","aria-activedescendant":s.focused?o.focusedOptionId:void 0,onFocus:e[0]||(e[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:e[1]||(e[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)})},m(m({},t.inputProps),t.ptm("input"))),null,16,re)],16),v("span",c({class:t.cx("label")},t.ptm("label")),[C(t.$slots,"value",{value:t.modelValue,placeholder:t.placeholder},function(){return[J(I(o.label),1)]})],16),v("div",c({class:t.cx("dropdownButton"),role:"button",tabindex:"-1","aria-hidden":"true"},t.ptm("dropdownButton")),[t.loading?C(t.$slots,"loadingicon",{key:0,class:K(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(u(),h("span",c({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon],"aria-hidden":"true"},t.ptm("loadingIcon")),null,16)):(u(),O(l,c({key:1,class:t.cx("loadingIcon"),spin:"","aria-hidden":"true"},t.ptm("loadingIcon")),null,16,["class"]))]}):C(t.$slots,"dropdownicon",{key:1,class:K(t.cx("dropdownIcon"))},function(){return[(u(),O(x(t.dropdownIcon?"span":"ChevronDownIcon"),c({class:[t.cx("dropdownIcon"),t.dropdownIcon],"aria-hidden":"true"},t.ptm("dropdownIcon")),null,16,["class"]))]})],16),v("span",c({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),I(o.searchResultMessageText),17),V(f,{appendTo:t.appendTo},{default:G(function(){return[V(Z,c({name:"p-connected-overlay",onEnter:o.onOverlayEnter,onAfterEnter:o.onOverlayAfterEnter,onLeave:o.onOverlayLeave,onAfterLeave:o.onOverlayAfterLeave},t.ptm("transition")),{default:G(function(){return[s.overlayVisible?(u(),h("div",c({key:0,ref:o.overlayRef,class:[t.cx("panel"),t.panelClass],style:t.panelStyle,onClick:e[3]||(e[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),onKeydown:e[4]||(e[4]=function(){return o.onOverlayKeyDown&&o.onOverlayKeyDown.apply(o,arguments)})},m(m({},t.panelProps),t.ptm("panel"))),[v("div",c({class:t.cx("wrapper")},t.ptm("wrapper")),[V(p,{id:s.id+"_tree",role:"tree","aria-orientation":"horizontal",selectId:s.id,focusedOptionId:s.focused?o.focusedOptionId:void 0,options:o.processedOptions,activeOptionPath:s.activeOptionPath,level:0,templates:t.$slots,optionLabel:t.optionLabel,optionValue:t.optionValue,optionDisabled:t.optionDisabled,optionGroupIcon:t.optionGroupIcon,optionGroupLabel:t.optionGroupLabel,optionGroupChildren:t.optionGroupChildren,onOptionChange:o.onOptionChange,pt:t.pt,unstyled:t.unstyled},null,8,["id","selectId","focusedOptionId","options","activeOptionPath","templates","optionLabel","optionValue","optionDisabled","optionGroupIcon","optionGroupLabel","optionGroupChildren","onOptionChange","pt","unstyled"])],16),v("span",c({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),I(o.selectedMessageText),17)],16)):k("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])],16)}ie.render=le;export{ie as default};
