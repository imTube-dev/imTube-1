webpackJsonp([18],{X6d5:function(n,t,e){"use strict";function i(n){e("mdq6")}Object.defineProperty(t,"__esModule",{value:!0});var l=e("NPwF"),s=(l.a,l.e,e("1DHf")),a=e("rHil"),r={components:{Cell:s.a,Group:a.a}},c=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"style-res"},[e("group",[e("cell",{attrs:{title:"游戏下载",link:"/downGames"}},[e("span",{staticStyle:{color:"#F70968"}})]),n._v(" "),e("cell",{attrs:{title:"活动页",link:"/event"}},[e("span",{staticStyle:{color:"#F70968"}})]),n._v(" "),e("cell",{attrs:{title:"消息页",link:"/message"}},[e("span",{staticStyle:{color:"#F70968"}})]),n._v(" "),e("cell",{attrs:{title:"游戏规则",link:"/rules"}},[e("span",{staticStyle:{color:"#F70968"}})]),n._v(" "),e("cell",{attrs:{title:"代理申请",link:"/agencyApplication"}},[e("span",{staticStyle:{color:"#F70968"}})]),n._v(" "),e("cell",{attrs:{title:"发红包",link:"/redEnvelope"}},[e("span",{staticStyle:{color:"#F70968"}})]),n._v(" "),e("cell",{attrs:{title:"邀请好友有礼",link:"/invitingFriends"}},[e("span",{staticStyle:{color:"#F70968"}})]),n._v(" "),e("cell",{attrs:{title:"游戏记录",link:"/gameRecord"}},[e("span",{staticStyle:{color:"#F70968"}})]),n._v(" "),e("cell",{attrs:{title:"我要当馆长",link:"/becomeCurator"}},[e("span",{staticStyle:{color:"#F70968"}})]),n._v(" "),e("cell",{attrs:{title:"369声明",link:"/statement"}},[e("span",{staticStyle:{color:"#F70968"}})]),n._v(" "),e("cell",{attrs:{title:"问题反馈",link:"/problemFeedback"}},[e("span",{staticStyle:{color:"#F70968"}})]),n._v(" "),e("cell",{attrs:{title:"推广分享",link:"/extendShare"}},[e("span",{staticStyle:{color:"#F70968"}})]),n._v(" "),e("cell",{attrs:{title:"领桌卡中间页",link:"/newPic"}},[e("span",{staticStyle:{color:"#F70968"}})]),n._v(" "),e("cell",{attrs:{title:"游戏下载1",link:"/gameD_page"}},[e("span",{staticStyle:{color:"#F70968"}})]),n._v(" "),e("cell",{attrs:{title:"游戏跳转",link:"/gameJump"}},[e("span",{staticStyle:{color:"#F70968"}})])],1)],1)},o=[],A={render:c,staticRenderFns:o},m=A,p=e("VU/8"),u=i,C=p(r,m,!1,u,null,null);t.default=C.exports},mdq6:function(n,t,e){var i=e("vk9r");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("09a15034",i,!0)},vk9r:function(n,t,e){t=n.exports=e("FZ+f")(!0),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  /* @import '../../style/mixin'; */\n.style-res{\n  font-size:.6rem;\n}\n.sub-item {\n  color: #888;\n}\n.slide {\n  padding: 0 20px;\n  overflow: hidden;\n  max-height: 0;\n  -webkit-transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;\n  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;\n}\n.animate {\n  max-height: 9999px;\n  -webkit-transition-timing-function: cubic-bezier(0.5, 0, 1, 0);\n          transition-timing-function: cubic-bezier(0.5, 0, 1, 0);\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n.weui-cell__ft{\n  text-align: center;\n}\n","",{version:3,sources:["E:/subline items/projectPath/src/page/home/home.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAmEE,kCAAkC;AACpC;EACE,gBAAgB;CACjB;AACD;EACE,YAAY;CACb;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;EACd,iEAAiE;EACjE,yDAAyD;CAC1D;AACD;EACE,mBAAmB;EACnB,+DAA+D;UACvD,uDAAuD;EAC/D,6BAA6B;UACrB,qBAAqB;CAC9B;AACD;EACE,mBAAmB;CACpB",file:"home.vue",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  /* @import '../../style/mixin'; */\n.style-res{\n  font-size:.6rem;\n}\n.sub-item {\n  color: #888;\n}\n.slide {\n  padding: 0 20px;\n  overflow: hidden;\n  max-height: 0;\n  -webkit-transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;\n  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;\n}\n.animate {\n  max-height: 9999px;\n  -webkit-transition-timing-function: cubic-bezier(0.5, 0, 1, 0);\n          transition-timing-function: cubic-bezier(0.5, 0, 1, 0);\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n.weui-cell__ft{\n  text-align: center;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=18.5f20304ff1a8239529d2.js.map