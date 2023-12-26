import{s as v}from"./index.esm.iDuffFEh.js";import{s as h}from"./index.esm.bYHsqVfZ.js";import{a9 as P,ab as w,aj as O,ak as S,N as j,t as p,v as c,x as i,W as d,al as l,y as u,L as g,T as f,J as B,am as D,z as I,A as E,ar as K,ao as L}from"./entry.5rKgAf99.js";var N=`
@layer primevue {
    .p-fieldset-legend > a,
    .p-fieldset-legend > span {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .p-fieldset-toggleable .p-fieldset-legend a {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
    }

    .p-fieldset-legend-text {
        line-height: 1;
    }
}
`,C={root:function(t){var n=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":n.toggleable}]},legend:"p-fieldset-legend",legendtitle:"p-fieldset-legend-text",togglericon:"p-fieldset-toggler",toggleablecontent:"p-toggleable-content",content:"p-fieldset-content"},k=P.extend({name:"fieldset",css:N,classes:C}),A={name:"BaseFieldset",extends:S,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:k,provide:function(){return{$parentInstance:this}}},F={name:"Fieldset",extends:A,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{ariaId:function(){return w()},buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend}},directives:{ripple:O},components:{PlusIcon:h,MinusIcon:v}};function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(r){T(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function T(e,t,n){return t=V(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(e){var t=M(e,"string");return s(t)=="symbol"?t:String(t)}function M(e,t){if(s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var _=["id"],q=["id","aria-controls","aria-expanded","aria-label"],z=["id","aria-labelledby"];function J(e,t,n,r,a,o){var y=j("ripple");return p(),c("fieldset",l({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"fieldset"}),[i("legend",l({class:e.cx("legend")},e.ptm("legend")),[e.toggleable?g("",!0):d(e.$slots,"legend",{key:0},function(){return[i("span",l({id:o.ariaId+"_header",class:e.cx("legendtitle")},e.ptm("legendtitle")),u(e.legend),17,_)]}),e.toggleable?f((p(),c("a",l({key:1,id:o.ariaId+"_header",tabindex:"0",role:"button","aria-controls":o.ariaId+"_content","aria-expanded":!a.d_collapsed,"aria-label":o.buttonAriaLabel,onClick:t[0]||(t[0]=function(){return o.toggle&&o.toggle.apply(o,arguments)}),onKeydown:t[1]||(t[1]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)})},b(b({},e.toggleButtonProps),e.ptm("toggler"))),[d(e.$slots,"togglericon",{collapsed:a.d_collapsed},function(){return[(p(),B(D(a.d_collapsed?"PlusIcon":"MinusIcon"),l({class:e.cx("togglericon")},e.ptm("togglericon")),null,16,["class"]))]}),d(e.$slots,"legend",{},function(){return[i("span",l({class:e.cx("legendtitle")},e.ptm("legendtitle")),u(e.legend),17)]})],16,q)),[[y]]):g("",!0)],16),I(L,l({name:"p-toggleable-content"},e.ptm("transition")),{default:E(function(){return[f(i("div",l({id:o.ariaId+"_content",class:e.cx("toggleablecontent"),role:"region","aria-labelledby":o.ariaId+"_header"},e.ptm("toggleablecontent")),[i("div",l({class:e.cx("content")},e.ptm("content")),[d(e.$slots,"default")],16)],16,z),[[K,!a.d_collapsed]])]}),_:3},16)],16)}F.render=J;export{F as default};
