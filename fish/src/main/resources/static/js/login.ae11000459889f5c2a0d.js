webpackJsonp([2],{1:function(t,e,n){n("j1ja"),t.exports=n("AUrF")},AUrF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={name:"loginApp",data:function(){return{}},components:{login:n("K31e").a},methods:{}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"login"}},[e("login")],1)},staticRenderFns:[]};var o=n("VU/8")(s,i,!1,function(t){n("yFfa")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#login",components:{loginApp:o},template:"<loginApp/>"})},K31e:function(t,e,n){"use strict";var a=n("mtWM"),s={name:"login",data:function(){return{username:"",password:""}},methods:{send:function(){a({method:"post",url:"/login",data:{mail:this.username,password:this.password},header:{"Content-Type":"application/json"}}).then(function(t){console.log(t.data),console.log(t.data.uid),""!==t.data.uid&&alert("登录成功！")}).catch(function(t){console.log("请求失败："+t.status+","+t.statusText)})},checkMail:function(){return!!/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(this.user.name)},userLogin:function(){this.checkMail()?this.send():alert("邮箱格式不正确，请重新输入！")}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"}),t._v(" "),n("div",{staticClass:"box"},[n("div",{staticStyle:{width:"20%","padding-top":"8%"}},[n("h2",[t._v("用户登录")]),t._v(" "),n("div",{staticClass:"box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",size:"large",placeholder:"请输入邮箱",autofocus:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",size:"large",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])]),t._v(" "),n("div",{staticClass:"box"},[n("button",{attrs:{type:"primary",size:"large"},on:{click:t.userLogin}},[t._v("登录")]),t._v(" "),t._m(0),t._v(" "),n("a",{attrs:{href:"#"}},[n("button",{staticStyle:{"margin-left":"10px"},attrs:{type:"default",size:"large"},on:{click:function(e){return t.forgetPassword()}}},[t._v("忘记密码")])])]),t._v(" "),n("div")])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/register"}},[e("button",{staticStyle:{"margin-left":"10px"},attrs:{type:"success",size:"large"}},[this._v("注册")])])}]};var o=n("VU/8")(s,i,!1,function(t){n("SNOi")},"data-v-93efbad2",null);e.a=o.exports},SNOi:function(t,e){},yFfa:function(t,e){}},[1]);
//# sourceMappingURL=login.ae11000459889f5c2a0d.js.map