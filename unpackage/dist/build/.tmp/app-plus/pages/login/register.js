(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register"],{"022b":function(e,t,n){"use strict";var o=n("4335"),i=n.n(o);i.a},4335:function(e,t,n){},"43f2":function(e,t,n){"use strict";n.r(t);var o=n("5012"),i=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);t["default"]=i.a},"4ce3":function(e,t,n){"use strict";(function(e){n("3632"),n("921b");o(n("66fd"));var t=o(n("b7fc"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},5012:function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n("8812"));function s(e){return e&&e.__esModule?e:{default:e}}var a={data:function(){return{phoneNumber:"",code:"",passwd:"",getCodeText:"获取验证码",getCodeBtnColor:"#ffffff",getCodeisWaiting:!1}},onLoad:function(){},methods:{Timer:function(){},getCode:function(){var t=this;if(e.hideKeyboard(),!this.getCodeisWaiting){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))return e.showToast({title:"请填写正确手机号码",icon:"none"}),!1;this.getCodeText="发送中...",this.getCodeisWaiting=!0,this.getCodeBtnColor="rgba(255,255,255,0.5)",setTimeout(function(){e.showToast({title:"验证码已发送",icon:"none"}),t.code=1234,t.setTimer()},1e3)}},setTimer:function(){var e=this,t=60;this.getCodeText="重新获取(60)",this.Timer=setInterval(function(){if(t<=0)return e.getCodeisWaiting=!1,e.getCodeBtnColor="#ffffff",e.getCodeText="获取验证码",void clearInterval(e.Timer);e.getCodeText="重新获取("+t+")",t--},1e3)},doReg:function(){var t=this;return e.hideKeyboard(),/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber)?1234!=this.code?(e.showToast({title:"验证码不正确",icon:"none"}),!1):(e.showLoading({title:"提交中..."}),void setTimeout(function(){e.getStorage({key:"UserList",success:function(n){n.data.push({username:t.phoneNumber,passwd:(0,i.default)(t.passwd)}),e.setStorage({key:"UserList",data:n.data,success:function(){e.hideLoading(),e.showToast({title:"注册成功",icon:"success"}),setTimeout(function(){e.navigateBack()},1e3)}})},fail:function(n){e.hideLoading(),console.log(o("error"," at pages\\login\\register.vue:118")),e.setStorage({key:"UserList",data:[{username:t.phoneNumber,passwd:(0,i.default)(t.passwd)}],success:function(){e.hideLoading(),e.showToast({title:"注册成功",icon:"success"}),setTimeout(function(){e.navigateBack()},1e3)},fail:function(e){console.log(o("set error:"+JSON.stringify(e)," at pages\\login\\register.vue:131"))}})}})},1e3)):(e.showToast({title:"请填写正确手机号码",icon:"none"}),!1)},toLogin:function(){e.hideKeyboard(),e.redirectTo({url:"login"}),e.navigateBack()}}};t.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},"71a0":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},b7fc:function(e,t,n){"use strict";n.r(t);var o=n("71a0"),i=n("43f2");for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);n("022b");var a=n("2877"),r=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports}},[["4ce3","common/runtime","common/vendor"]]]);