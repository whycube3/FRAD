webpackJsonp([4],{"0Mo6":function(e,a,s){(e.exports=s("FZ+f")(!1)).push([e.i,"",""])},"7q+i":function(e,a,s){var t=s("CGth");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);s("rjj0")("0170dd7d",t,!1,{sourceMap:!1})},"9LlT":function(e,a,s){"use strict";a.a={BASE_URL:"https://file-repo.herokuapp.com",TINYMCE_STYLE:"body {padding: 3em;}, p{padding: 0 !important;}",API_SIGNATURE:"/api/v1/files/signature",API_IMAGE:"/api/v1/files/image",API_PROFILE:"/api/v1/files/profile",API_DOCUMENT:"/api/v1/files/document",API_PRESENTATION:"/api/v1/files/presentation",API_SPREADSHEET:"/api/v1/files/spreadsheet",API_PDF:"/api/v1/files/pdf",BUCKET_IMAGE:"image",BUCKET_PROFILE:"profile",BUCKET_SIGNATURE:"signature",BUCKET_PRESENTATION:"presentation",BUCKET_SPREADSHEET:"spreadsheet",BUCKET_DOCUMENT:"document",BUCKET_PDF:"pdf"}},CGth:function(e,a,s){(e.exports=s("FZ+f")(!1)).push([e.i,"",""])},F7Gc:function(e,a,s){"use strict";var t=s("mvHQ"),r=s.n(t),i=s("mtWM"),n=s.n(i),o=s("9LlT"),l=s("cON/");a.a={components:{loader:l.a},created:function(){null!==localStorage.getItem("token")&&this.$router.push("/dashboard")},data:function(){return{confirm_password:"",gender:"",username:"",password:"",firstName:"",middleName:"",lastName:"",address:"",department:"",position:"",dateOfBirth:"",registrationLoader:!1,genderOption:["male","female"],departmentOption:["Department of Something","Department of Another"],positionOption:["Admin Aid 1","Admin Aid 2"],warningMsgs:{type:"warn",group:"warning",title:"<span ><span class='fas fa-exclamation-triangle fa-2x'></span><span class='title is-5'> Warning:</span></span>",text:"<p class='subtitle is-5'>asdasd</p>"}}},computed:{},methods:{showNotif:function(e,a,s,t){return{type:e,group:"vnotif",title:"<span ><span class='fas "+s+" fa-2x'></span><span class='title is-5'> "+a+":</span></span>",text:"<p class='subtitle is-5'>"+t+"</p>"}},registerAdmin:function(){var e=this;this.$validator.validateAll().then(function(a){if(a){var s={username:e.username,password:e.password,name:{first_name:e.firstName,middle_name:e.middleName,last_name:e.lastName},gender:e.gender,address:e.address,department:e.department,position:e.position,dateOfBirth:e.dateOfBirth},t={method:"POST",url:o.a.BASE_URL+"/api/v1/admins",data:r()(s),headers:{"Content-Type":"application/json"}};n()(t).then(function(a){e.registrationLoader=!1,e.$notify(e.showNotif("success","Success","fa-check-circle","Registration Successfull")),setTimeout(function(){return e.$router.push("/")},1500)}).catch(function(a){e.registrationLoader=!1,e.$notify(e.showNotif("error","Server Warning","fa-exclamation-triangle",a.response.data.errors))})}})}}}},M1tJ:function(e,a,s){var t=s("0Mo6");"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);s("rjj0")("24ed4c1d",t,!1,{sourceMap:!1})},Y5Gu:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s("F7Gc"),r=s("au2d"),i=!1;var n=function(e){i||s("M1tJ")},o=s("VU/8")(t.a,r.a,!1,n,"data-v-2339929c",null);o.options.__file="pages/register.vue",a.default=o.exports},au2d:function(e,a,s){"use strict";var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",[s("loader",{attrs:{isActive:this.registrationLoader}}),s("section",{staticClass:"hero has-background-white-ter is-fullheight"},[s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-half is-offset-one-quarter"},[s("form",{attrs:{name:"registerForm"}},[s("div",{staticClass:"box"},[s("div",[s("nuxt-link",{staticClass:" has-text-danger",attrs:{to:"/"}},[s("span",{staticClass:"fa fa-chevron-circle-left fa-lg"}),e._v(" \n                    "),s("span",{staticClass:"has-text-danger subtitle is-5"},[e._v("Login")])]),s("br"),s("br")],1),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("p",{attrs:{for:"label"}},[e._v("Username")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"input",class:{"is-danger":e.errors.has("username")},attrs:{name:"username","data-vv-as":"username",type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(a){a.target.composing||(e.username=a.target.value)}}}),s("small",{staticClass:"has-text-danger"},[e._v(e._s(e.errors.first("username")))])]),s("div",{staticClass:"column"},[s("p",{attrs:{for:"label"}},[e._v("Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"},{name:"validate",rawName:"v-validate",value:{required:!0,min:6,is:e.confirm_password},expression:"{required:true, min:6, is:confirm_password}"}],staticClass:"input",class:{"is-danger":e.errors.has("password")},attrs:{name:"password",type:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(a){a.target.composing||(e.password=a.target.value)}}}),s("small",{staticClass:"has-text-danger"},[e._v(e._s(e.errors.first("password")))])]),s("div",{staticClass:"column"},[s("p",{attrs:{for:"label"}},[e._v("Confirm Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.confirm_password,expression:"confirm_password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",class:{"is-danger":e.errors.has("password:is")},attrs:{name:"confirm_password","data-vv-as":"confirm password",type:"password",placeholder:"Confirm Password"},domProps:{value:e.confirm_password},on:{input:function(a){a.target.composing||(e.confirm_password=a.target.value)}}}),s("small",{staticClass:"has-text-danger"},[e._v(e._s(e.errors.first("confirm_password")))]),s("br"),s("small",{staticClass:"has-text-danger"},[e._v(e._s(e.errors.first("password:is")))])])]),s("span",[e._v("Name")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",class:{"is-danger":e.errors.has("name.firstName")},attrs:{name:"name.firstName","data-vv-as":"first name",type:"text",placeholder:"First Name"},domProps:{value:e.firstName},on:{input:function(a){a.target.composing||(e.firstName=a.target.value)}}}),s("small",{staticClass:"has-text-danger"},[e._v(e._s(e.errors.first("name.firstName")))])]),s("div",{staticClass:"column"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.middleName,expression:"middleName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",class:{"is-danger":e.errors.has("name.middleName")},attrs:{name:"name.middleName","data-vv-as":"middle name",type:"text",placeholder:"Middle Name"},domProps:{value:e.middleName},on:{input:function(a){a.target.composing||(e.middleName=a.target.value)}}}),s("small",{staticClass:"has-text-danger"},[e._v(e._s(e.errors.first("name.middleName")))])]),s("div",{staticClass:"column"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",class:{"is-danger":e.errors.has("name.lastName")},attrs:{name:"name.lastName","data-vv-as":"last name",type:"text",placeholder:"Last Name"},domProps:{value:e.lastName},on:{input:function(a){a.target.composing||(e.lastName=a.target.value)}}}),s("small",{staticClass:"has-text-danger"},[e._v(e._s(e.errors.first("name.lastName")))])])]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("p",{attrs:{for:"label"}},[e._v("Address")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",class:{"is-danger":e.errors.has("address")},attrs:{name:"address",type:"text",placeholder:"Street, Barangay, Municipality, Province, City"},domProps:{value:e.address},on:{input:function(a){a.target.composing||(e.address=a.target.value)}}}),s("small",{staticClass:"has-text-danger"},[e._v(e._s(e.errors.first("address")))])]),s("div",{staticClass:"column"},[s("p",{attrs:{for:"label"}},[e._v("Date of Birth")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.dateOfBirth,expression:"dateOfBirth"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",class:{"is-danger":e.errors.has("dateOfBirth")},attrs:{name:"dateOfBirth",type:"date",placeholder:"Street, Barangay, Municipality, Province, City"},domProps:{value:e.dateOfBirth},on:{input:function(a){a.target.composing||(e.dateOfBirth=a.target.value)}}}),s("small",{staticClass:"has-text-danger"},[e._v(e._s(e.errors.first("dateOfBirth")))])])]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("p",{attrs:{for:"label"}},[e._v("Sex")]),s("div",{staticClass:"select is-fullwidth",class:{"is-danger":e.errors.has("gender")}},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"gender"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.gender=a.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[e._v("Please select")]),e._l(e.genderOption,function(a){return s("option",{key:a,staticClass:"is-uppercase",domProps:{value:a}},[e._v(e._s(a))])})],2)]),s("small",{staticClass:"has-text-danger"},[e._v(e._s(e.errors.first("gender")))])]),s("div",{staticClass:"column"},[s("p",{attrs:{for:"label"}},[e._v("Position")]),s("div",{staticClass:"select is-fullwidth",class:{"is-danger":e.errors.has("position")}},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"position"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.position=a.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[e._v("Select Position")]),e._l(e.positionOption,function(a){return s("option",{key:a,domProps:{value:a}},[e._v(e._s(a))])})],2),s("small",{staticClass:"has-text-danger"},[e._v(e._s(e.errors.first("position")))])])]),s("div",{staticClass:"column"},[s("p",{attrs:{for:"label"}},[e._v("Department")]),s("div",{staticClass:"select is-fullwidth",class:{"is-danger":e.errors.has("department")}},[s("select",{directives:[{name:"model",rawName:"v-model",value:e.department,expression:"department"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"department",required:""},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.department=a.target.multiple?s:s[0]}}},[s("option",{attrs:{value:""}},[e._v("Select Department")]),e._l(e.departmentOption,function(a){return s("option",{key:a,domProps:{value:a}},[e._v(e._s(a))])})],2),s("small",{staticClass:"has-text-danger"},[e._v(e._s(e.errors.first("department")))])])])]),s("div",[s("button",{staticClass:"button is-fullwidth is-danger",attrs:{type:"button"},on:{click:e.registerAdmin}},[e._v("Submit")])])])])])])])])])],1)};t._withStripped=!0;var r={render:t,staticRenderFns:[]};a.a=r},"cON/":function(e,a,s){"use strict";var t=s("e0da"),r=s("vnwn"),i=!1;var n=function(e){i||s("7q+i")},o=s("VU/8")(t.a,r.a,!1,n,"data-v-3f9bef8e",null);o.options.__file="components/loader.vue",a.a=o.exports},e0da:function(e,a,s){"use strict";a.a={props:{isActive:Boolean}}},vnwn:function(e,a,s){"use strict";var t=function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"modal",class:{"is-active":this.isActive}},[a("div",{staticClass:"modal-background"}),this._m(0)])};t._withStripped=!0;var r={render:t,staticRenderFns:[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"modal-content",staticStyle:{overflow:"hidden"}},[a("div",{attrs:{id:"cssSpiner"}})])}]};a.a=r}});