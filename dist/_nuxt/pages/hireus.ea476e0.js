(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{179:function(t,e,r){var content=r(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("1930a9a0",content,!0,{sourceMap:!1})},180:function(t,e,r){var content=r(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("51e89552",content,!0,{sourceMap:!1})},183:function(t,e,r){"use strict";r.r(e);var o=r(185),n=r(184),l={components:{Logo:o.default,ColorModePicker:n.default},data:function(){return{menuItems:[{name:"Home",link:"#home"},{name:"Services",link:"#service-row"},{name:"Contact Us",link:"#contact"}]}},methods:{getClasses:function(t){return this.$colorMode.unknown?{}:{preferred:t===this.$colorMode.preference,selected:t===this.$colorMode.value}},activeMenuItem:function(t){return{active:"Home"===t}}}},c=r(19),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-transparent"},[r("div",{staticClass:"container-fluid"},[r("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[r("Logo"),t._v(" "),r("span",{staticClass:"mt-5"})],1),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[r("ul",{staticClass:"navbar-nav ml-auto mb-lg-0"},t._l(t.menuItems,(function(e){return r("li",{key:e.name,staticClass:"nav-item"},[r("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:3e3,offset:-50,container:"#home"},expression:"{ duration: 3000, offset: -50, container: '#home' }"}],staticClass:"nav-link px-4",class:t.activeMenuItem(e),attrs:{"aria-current":"page",href:e.link}},[t._v(t._s(e.name))])])})),0),t._v(" "),r("span",{staticClass:"navbar-text ml-5"},[r("ColorModePicker")],1),t._v(" "),t._m(1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"text-center text-md-left ml-5",attrs:{id:"navbar_button"}},[e("a",{staticClass:"btn btn-success shadow lift mr-1 px-4 py-2 rounded-5",attrs:{href:"/hireus"}},[e("i",{staticClass:"fe fe-arrow-right d-none d-md-inline"}),this._v(" Hire Us\n\t\t\t\t\t")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:r(185).default,ColorModePicker:r(184).default})},184:function(t,e,r){"use strict";r.r(e);var o=r(188),n=r.n(o),l=r(190),c=r.n(l),d={components:{IconLight:n.a,IconDark:c.a},data:function(){return{colors:["light","dark"]}},methods:{getClasses:function(t){return this.$colorMode.unknown?{}:{preferred:t===this.$colorMode.preference,selected:t===this.$colorMode.value}}}},m=(r(191),r(19)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",t._l(t.colors,(function(e){return r("li",{key:e},[r("icon-"+e,{tag:"component",class:t.getClasses(e),on:{click:function(r){t.$colorMode.preference=e}}})],1)})),0)])}),[],!1,null,"0995cab6",null);e.default=component.exports},185:function(t,e,r){"use strict";r.r(e);r(186);var o=r(19),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"NuxtLogo",attrs:{width:"50",height:"auto",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),this._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),this._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},186:function(t,e,r){"use strict";var o=r(179);r.n(o).a},187:function(t,e,r){(e=r(20)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),t.exports=e},188:function(t,e,r){r(63),r(22),r(23),r(9),r(44);var o=r(181),n=r(182);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),c=e.children,d=void 0===c?[]:c,m=data.class,v=data.staticClass,style=data.style,f=data.staticStyle,h=data.attrs,_=void 0===h?{}:h,y=n(data,["class","staticClass","style","staticStyle","attrs"]);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["feather feather-sun",m,v],style:[style,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},_)},y),d.concat([r("circle",{attrs:{cx:"12",cy:"12",r:"5"}}),r("line",{attrs:{x1:"12",y1:"1",x2:"12",y2:"3"}}),r("line",{attrs:{x1:"12",y1:"21",x2:"12",y2:"23"}}),r("line",{attrs:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}}),r("line",{attrs:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}}),r("line",{attrs:{x1:"1",y1:"12",x2:"3",y2:"12"}}),r("line",{attrs:{x1:"21",y1:"12",x2:"23",y2:"12"}}),r("line",{attrs:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}}),r("line",{attrs:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}})]))}}},190:function(t,e,r){r(63),r(22),r(23),r(9),r(44);var o=r(181),n=r(182);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}t.exports={functional:!0,render:function(t,e){var r=e._c,data=(e._v,e.data),c=e.children,d=void 0===c?[]:c,m=data.class,v=data.staticClass,style=data.style,f=data.staticStyle,h=data.attrs,_=void 0===h?{}:h,y=n(data,["class","staticClass","style","staticStyle","attrs"]);return r("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){o(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:["feather feather-moon",m,v],style:[style,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},_)},y),d.concat([r("path",{attrs:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}})]))}}},191:function(t,e,r){"use strict";var o=r(180);r.n(o).a},192:function(t,e,r){(e=r(20)(!1)).push([t.i,"ul[data-v-0995cab6]{list-style:none;padding:0;margin:0}ul li[data-v-0995cab6]{display:inline-block;padding:5px}p[data-v-0995cab6]{margin:0;padding-top:5px;padding-bottom:20px}.feather[data-v-0995cab6]{position:relative;top:0;cursor:pointer;padding:5px;background-color:var(--bg-primary);border:2px solid var(--border-color);margin:0;border-radius:5px;transition:all .1s ease}.feather[data-v-0995cab6]:hover{top:-3px}.feather.preferred[data-v-0995cab6]{border-color:var(--color-primary)}.feather.selected[data-v-0995cab6]{color:var(--color-primary)}",""]),t.exports=e},196:function(t,e,r){var content=r(261);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("48b513d4",content,!0,{sourceMap:!1})},260:function(t,e,r){"use strict";var o=r(196);r.n(o).a},261:function(t,e,r){(e=r(20)(!1)).push([t.i,'.hireus .section-title h1[data-v-6273b726]{font-family:"DM Serif Display",serif;font-size:120px;font-weight:700;letter-spacing:12px}.hireus .section-title[data-v-6273b726]{font-size:28px;line-height:35px}.form-details h5[data-v-6273b726]{color:var(--color-primary)}input[data-v-6273b726],select[data-v-6273b726],textarea[data-v-6273b726]{border:2px solid silver;border-radius:8px;background:transparent;padding:20px 10px}.btn-submit[data-v-6273b726]{padding:20px 10px;border-radius:8px;background-color:var(--color-primary);border-color:var(--color-primary)}.dirty[data-v-6273b726]{border-color:#5a5;background:#efe}.dirty[data-v-6273b726]:focus{outline-color:#8e8}.error[data-v-6273b726],.error[data-v-6273b726]:focus{color:red}.budget[data-v-6273b726]{font-size:23px}.form-status .pending[data-v-6273b726],.form-status .success[data-v-6273b726]{color:var(--color-primary)}',""]),t.exports=e},274:function(t,e,r){"use strict";r.r(e);r(25);var o=r(183),n=r(193),l=r(234),c=r(217),d=r.n(c),m=r(236),v={name:"FormValidation",mixins:[l.validationMixin],components:{Navbar:o.default,VueElevator:n.VueElevator,validationMixin:l.validationMixin},head:{title:"Kenyan Craftsmen of Web and Mobile Apps.",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Kenyan Craftsmen of Web and Mobile Apps"}]},data:function(){return{name:"",email:"",phone:"",project_about:"",project_amount_validation:!0,project_amount:"choose_amount",project_amount_options:[{name:"choose_amount",label:"Choose Amount"},{name:"over_500",label:"Over Kshs 500,000"},{name:"300_500",label:"Ksh 300,000 - Ksh 500,000"},{name:"100_300",label:"Ksh 100,000 - Ksh 300,000"},{name:"30_100",label:"Ksh 30,000 - Ksh 100,000"},{name:"cant_disclose",label:"Cant Disclose"},{name:"not_sure",label:"Not Sure"}],btnSendLoading:!1,submitStatus:null,word:"Go to Top",duration:4e3,mainAudio:"http://tholman.com/elevator.js/music/elevator.mp3",endAudio:"http://tholman.com/elevator.js/music/ding.mp3"}},validations:{name:{required:m.required,minLength:Object(m.minLength)(4)},email:{required:m.required,email:m.email},phone:{required:m.required,minLength:Object(m.minLength)(10)},project_about:{required:m.required,minLength:Object(m.minLength)(4)},project_amount:{required:m.required}},methods:{submit:function(){this.$v.$touch(),this.$v.$invalid?this.submitStatus="ERROR":(this.btnSendLoading=!0,d.a.post("http://localhost:8000/api/sendmail",{name:this.name,email:this.email,phone:this.phone,project_about:this.project_about,project_amount:this.project_amount}).then((function(t){})).catch((function(t){console.log(t)})),this.submitStatus="OK",this.btnSendLoading=!1)}}},f=(r(260),r(19)),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container px-0 py-4"},[r("Navbar"),t._v(" "),r("div",{staticClass:"hireus pt-5"},[t._m(0),t._v(" "),r("div",{staticClass:"container pt-0 form-details"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-xl-12"},[r("form",{staticClass:"col-md-8 offset-md-2 text-left",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[t._m(1),t._v(" "),r("div",{staticClass:"form-group",class:{"form-group--error":t.$v.name.$error}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.name.$model,expression:"$v.name.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{value:"",placeholder:"Name"},domProps:{value:t.$v.name.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.name,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t.submitStatus&&!t.$v.name.required?r("div",{staticClass:"error"},[t._v("Your name is required")]):t._e(),t._v(" "),t.$v.name.minLength?t._e():r("div",{staticClass:"error"},[t._v("Name must have at least "+t._s(t.$v.name.$params.minLength.min)+" letters.")])]),t._v(" "),r("div",{staticClass:"row my-5"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"form-group",class:{"form-group--error":t.$v.email.$error}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.email.$model,expression:"$v.email.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"email",value:"",placeholder:"Email"},domProps:{value:t.$v.email.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.email,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t.submitStatus&&!t.$v.email.required?r("div",{staticClass:"error"},[t._v("Your email is required")]):t._e()])]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"form-group",class:{"form-group--error":t.$v.phone.$error}},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.phone.$model,expression:"$v.phone.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{value:"",placeholder:"Phone"},domProps:{value:t.$v.phone.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.phone,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t.submitStatus&&!t.$v.phone.required?r("div",{staticClass:"error"},[t._v("Your phone number is required")]):t._e(),t._v(" "),t.$v.phone.minLength?t._e():r("div",{staticClass:"error"},[t._v("Phone number must have at least "+t._s(t.$v.phone.$params.minLength.min)+" letters.")])])])]),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"form-group",class:{"form-group--error":t.$v.project_about.$error}},[r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.project_about.$model,expression:"$v.project_about.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{rows:"6",value:"",placeholder:"Tell us about your project."},domProps:{value:t.$v.project_about.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.project_about,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t.submitStatus&&!t.$v.project_about.required?r("div",{staticClass:"error"},[t._v("Please tell us about your project")]):t._e(),t._v(" "),t.$v.project_about.minLength?t._e():r("div",{staticClass:"error"},[t._v("About Project must have at least "+t._s(t.$v.project_about.$params.minLength.min)+" letters.")])]),t._v(" "),r("div",{staticClass:"row my-5 pb-5"},[t._m(3),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"form-group"},[r("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.project_amount.$model,expression:"$v.project_amount.$model",modifiers:{trim:!0}}],staticClass:"form-control selectpicker",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.$v.project_amount,"$model",e.target.multiple?r:r[0])}}},[t._l(t.project_amount_options,(function(e){return r("option",{key:e.name,domProps:{value:e.name}},[t._v(t._s(e.label))])})),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.project_amount_validation,expression:"project_amount_validation"}],staticClass:"error"},[t._v("Please tell us about your project")])],2)])])]),t._v(" "),r("button",{staticClass:"btn btn-primary btn-block btn-submit mt-5",attrs:{type:"submit",disabled:"PENDING"===t.submitStatus}},[t._v("\n              Lets Chat\n              "),r("i",{directives:[{name:"show",rawName:"v-show",value:!t.btnSendLoading,expression:"!btnSendLoading"}],staticClass:"ml-4 fa fa-arrow-right"}),t._v(" "),r("i",{directives:[{name:"show",rawName:"v-show",value:t.btnSendLoading,expression:"btnSendLoading"}],staticClass:"fa fa-spinner fa-spin",staticStyle:{"margin-left":"20px"}})]),t._v(" "),r("span",{staticClass:"form-status"},["OK"===t.submitStatus?r("p",{staticClass:"success"},[t._v("Thanks for your submission!")]):t._e(),t._v(" "),"ERROR"===t.submitStatus?r("p",{staticClass:"error"},[t._v("Please fill the form correctly.")]):t._e(),t._v(" "),"PENDING"===t.submitStatus?r("p",{staticClass:"pending"},[t._v("Sending...")]):t._e(),t._v(" "),r("p",{staticClass:"mt-5 text-center"},[t._v("The information above will be stored only for business purposes.")])])])])])]),t._v(" "),r("VueElevator",{attrs:{word:t.word,duration:t.duration,mainAudio:t.mainAudio,endAudio:t.endAudio}})],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-xl-8"},[e("div",{staticClass:"section-title text-center"},[e("h1",{staticClass:"section-name"},[this._v("HIRE US")]),this._v(" "),e("p",[this._v("Let's get to work! Please answer a couple of short questions about you and your project.")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xl-12 my-5"},[e("div",{staticClass:"text-center"},[e("h5",{},[this._v("ABOUT YOU")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xl-12 my-5"},[e("div",{staticClass:"text-center"},[e("h5",{},[this._v("ABOUT YOUR PROJECT")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6"},[e("p",{staticClass:"budget"},[this._v("What is your budget?")])])}],!1,null,"6273b726",null);e.default=component.exports;installComponents(component,{Navbar:r(183).default})}}]);