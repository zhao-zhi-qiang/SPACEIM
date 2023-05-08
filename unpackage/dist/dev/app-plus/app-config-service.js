
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/singin/login","pages/index/index","pages/singin/signUp","pages/index/searchUser/searchUser","pages/user/userCenter","pages/dynamic/dynamicCenter","pages/contacts/contactsIndex","pages/set/index","pages/set/editInfo","pages/set/editPass","pages/set/feedBack","pages/set/userProtocol","pages/set/privacyPolicy","pages/contacts/groupManager","pages/index/chat/userChatDetail","pages/index/chat/groupChatDetail","pages/index/chat/groupChatSet","pages/index/chat/groupChatAd","pages/index/chat/createGroup","pages/index/searchUser/addFriends","pages/index/searchUser/joinGroup","pages/index/searchUser/userDunamicDetail","pages/index/searchUser/userDynamicVideo","pages/dynamic/sendDynamic"],"window":{"navigationBarTextStyle":"black","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#606060","selectedColor":"#67cfff","borderStyle":"black","backgroundColor":"#ffffff","fontSize":"12","list":[{"pagePath":"pages/index/index","iconPath":"static/public/navbar/message-def.png","selectedIconPath":"static/public/navbar/message-active.png","text":"消息"},{"pagePath":"pages/contacts/contactsIndex","iconPath":"static/public/navbar/friendlist-def.png","selectedIconPath":"static/public/navbar/friendlist-active.png","text":"联系人"},{"pagePath":"pages/dynamic/dynamicCenter","iconPath":"static/public/navbar/friends-def.png","selectedIconPath":"static/public/navbar/friends-active.png","text":"关系圈"},{"pagePath":"pages/user/userCenter","iconPath":"static/public/navbar/user-def.png","selectedIconPath":"static/public/navbar/user-active.png","text":"我的"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"SPACEIM","compilerVersion":"3.7.9","entryPagePath":"pages/singin/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/singin/login","meta":{"isQuit":true},"window":{"navigationBarTitleText":"","navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/singin/signUp","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/searchUser/searchUser","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"","enablePullDownRefresh":false,"navigationBarTextStyle":"white"}},{"path":"/pages/user/userCenter","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/dynamic/dynamicCenter","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/contacts/contactsIndex","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"联系人","enablePullDownRefresh":false}},{"path":"/pages/set/index","meta":{},"window":{"navigationBarTitleText":"设置","enablePullDownRefresh":false}},{"path":"/pages/set/editInfo","meta":{},"window":{"navigationBarTitleText":"信息修改","enablePullDownRefresh":false}},{"path":"/pages/set/editPass","meta":{},"window":{"navigationBarTitleText":"密码修改","enablePullDownRefresh":false}},{"path":"/pages/set/feedBack","meta":{},"window":{"navigationBarTitleText":"建议反馈","enablePullDownRefresh":false}},{"path":"/pages/set/userProtocol","meta":{},"window":{"navigationBarTitleText":"使用协议","enablePullDownRefresh":false}},{"path":"/pages/set/privacyPolicy","meta":{},"window":{"navigationBarTitleText":"隐私政策","enablePullDownRefresh":false}},{"path":"/pages/contacts/groupManager","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/chat/userChatDetail","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"","backgroundColor":"#f3f3f3","backgroundColorTop":"#ffffff","enablePullDownRefresh":false}},{"path":"/pages/index/chat/groupChatDetail","meta":{},"window":{"navigationStyle":"custom","navigationBarTitleText":"","backgroundColor":"#f3f3f3","backgroundColorTop":"#ffffff","enablePullDownRefresh":false}},{"path":"/pages/index/chat/groupChatSet","meta":{},"window":{"navigationBarTitleText":"群组设置","backgroundColorTop":"#ffffff","enablePullDownRefresh":false}},{"path":"/pages/index/chat/groupChatAd","meta":{},"window":{"navigationBarTitleText":"","navigationStyle":"custom","navigationBarShadow":{"colorType":"grey"},"enablePullDownRefresh":false}},{"path":"/pages/index/chat/createGroup","meta":{},"window":{"navigationBarTitleText":"","navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/index/searchUser/addFriends","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/searchUser/joinGroup","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/searchUser/userDunamicDetail","meta":{},"window":{"navigationBarTitleText":"","navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/index/searchUser/userDynamicVideo","meta":{},"window":{"navigationBarTitleText":"","navigationStyle":"custom","enablePullDownRefresh":false}},{"path":"/pages/dynamic/sendDynamic","meta":{},"window":{"navigationBarTitleText":"发布瞬间","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});