"use strict";(self.webpackChunkCoursesApp=self.webpackChunkCoursesApp||[]).push([[102],{7102:(H,m,r)=>{r.r(m),r.d(m,{CourseDetailsModule:()=>J});var l=r(6814),p=r(7398),g=r(4664),t=r(4946),f=r(8072),u=r(9310),h=r(2623),v=r(6318),x=r(9333),C=r(4352),Z=r(4825);function A(e,a){if(1&e&&(t.TgZ(0,"span",1),t._uU(1),t.qZA()),2&e){const s=a.ngIf;t.xp6(1),t.Oqu(s)}}let _=(()=>{class e{constructor(){const n=(new Date).setHours(23,59,59,999);this.interval$=function T(e=0,a=C.z){return e<0&&(e=0),(0,Z.H)(e,e,a)}(1e3).pipe((0,p.U)(()=>{const i=n-Date.now();if(0==i)return null;{const o=Math.floor(i%864e5/36e5),c=Math.floor(i%36e5/6e4),d=Math.floor(i%6e4/1e3);return`${o<10?"0"+o:o}:${c<10?"0"+c:c}:${d<10?"0"+d:d}`}}))}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-timer"]],decls:2,vars:3,consts:[["class","float-right py-2 px-3 bg-orange-400 text-white rounded",4,"ngIf"],[1,"float-right","py-2","px-3","bg-orange-400","text-white","rounded"]],template:function(n,i){1&n&&(t.YNc(0,A,2,1,"span",0),t.ALo(1,"async")),2&n&&t.Q6J("ngIf",t.lcZ(1,1,i.interval$))},dependencies:[l.O5,l.Ov],changeDetection:0})}return e})();function y(e,a){if(1&e&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&e){const s=t.oxw().ngIf;t.xp6(1),t.Oqu(s.discountPrice)}}function I(e,a){1&e&&(t.TgZ(0,"span"),t._uU(1,"Add to whislist"),t.qZA())}function w(e,a){1&e&&t._UZ(0,"img",22)}function U(e,a){if(1&e){const s=t.EpF();t.TgZ(0,"div",6)(1,"div",7),t._UZ(2,"app-timer"),t.TgZ(3,"h2",8),t._uU(4),t.qZA(),t.TgZ(5,"p",9),t._uU(6),t.qZA(),t.TgZ(7,"p",10),t._uU(8,"price: "),t.YNc(9,y,2,1,"span",11),t.TgZ(10,"span"),t._uU(11),t.qZA()(),t.TgZ(12,"div",12)(13,"button",13),t.NdJ("click",function(){const o=t.CHM(s).ngIf,c=t.oxw();return t.KtG(c.addToCartHandler(o))}),t._uU(14,"Add to cart"),t.qZA(),t.TgZ(15,"button",14),t.NdJ("click",function(){const o=t.CHM(s).ngIf,c=t.oxw();return t.KtG(!o.isWhislist&&c.addToWishlistHandler(o))}),t.YNc(16,I,2,0,"span",15),t.YNc(17,w,1,0,"ng-template",null,16,t.W1O),t.qZA()()(),t.TgZ(19,"div",17)(20,"button",18),t.NdJ("click",function(){t.CHM(s);const i=t.MAs(23),o=t.oxw();return o.isVideoPlaying?i.pause():i.play(),t.KtG(o.isVideoPlaying=!o.isVideoPlaying)}),t._UZ(21,"img",19),t.qZA(),t._UZ(22,"video",20,21),t.qZA()()}if(2&e){const s=a.ngIf,n=t.MAs(18),i=t.oxw();t.xp6(4),t.Oqu(s.courseName),t.xp6(2),t.hij("by ",s.author,""),t.xp6(3),t.Q6J("ngIf","0"!==s.discountPercentage),t.xp6(1),t.ekj("line-through","0"!==s.discountPercentage),t.xp6(1),t.Oqu(s.actualPrice),t.xp6(4),t.Q6J("disabled",s.isWhislist),t.xp6(1),t.Q6J("ngIf",!s.isWhislist)("ngIfElse",n),t.xp6(5),t.MGl("src","/assets/images/",i.isVideoPlaying?"icons8-pause-50.png":"run_video.svg","",t.LSH)}}function N(e,a){1&e&&(t.TgZ(0,"p",23),t._uU(1,"There is no course with this name"),t.qZA())}const O=function(){return{exact:!0}},D=function(e){return["/courses/",e]};let b=(()=>{class e{constructor(s,n,i,o){this.courseService=s,this.activatedRoute=n,this.cartService=i,this.wishlistService=o,this.isVideoPlaying=!1,this.courseName=this.activatedRoute.snapshot.params.name}get course$(){return this.courseService.allCoursesObs$.pipe((0,p.U)(s=>s?.find(n=>n.courseName=this.courseName)),(0,g.w)(s=>this.wishlistService.allWishlistItemsObs$.pipe((0,p.U)(n=>s?{...s,isWhislist:!!n.find(i=>i.courseName==s?.courseName)}:null))))}get wishlistItems$(){return this.wishlistService.allWishlistItemsObs$}addToCartHandler(s){this.cartService.setCartItems(s)}addToWishlistHandler(s){this.wishlistService.setWishlistItems(s)}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(f.N),t.Y36(u.gz),t.Y36(h.N),t.Y36(v.M))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-course-details"]],decls:14,vars:10,consts:[[1,"container","mx-auto","py-12"],[1,"flex","gap-5","mb-5"],["routerLink","/","routerLinkActive","text-orange-400",3,"routerLinkActiveOptions"],["routerLinkActive","text-orange-400",3,"routerLink"],["class","grid grid-cols-2 gap-10",4,"ngIf","ngIfElse"],["notFound",""],[1,"grid","grid-cols-2","gap-10"],[1,"border","shadow","rounded","flex","flex-col","justify-center","p-4"],[1,"text-2xl","font-bold","mb-5"],[1,"text-lg","mb-4"],[1,"flex","gap-3","mb-5"],[4,"ngIf"],[1,"flex","gap-5"],[1,"w-1/2","py-2","px-3","bg-cyan-900","text-white","rounded",3,"click"],[1,"w-1/2","py-2","px-3","bg-yellow-500","text-white","rounded",3,"disabled","click"],[4,"ngIf","ngIfElse"],["wishlistImage",""],[1,"border","relative","shadow","rounded","p-4"],[1,"absolute","top-1/2","left-1/2","z-10",2,"transform","translate(-50%,-50%)",3,"click"],["width","50",3,"src"],["src","/assets/videos/SampleVideo.mp4","poster","/assets/images/course.jpg"],["videoPlayer",""],["src","/assets/images/icons8-heart-48.png","width","24",1,"mx-auto"],[1,"text-center"]],template:function(n,i){if(1&n&&(t.TgZ(0,"section"),t._UZ(1,"app-page-banner"),t.TgZ(2,"div",0)(3,"div",1)(4,"a",2),t._uU(5,"All Courses"),t.qZA(),t.TgZ(6,"span"),t._uU(7,">>"),t.qZA(),t.TgZ(8,"a",3),t._uU(9),t.qZA()(),t.YNc(10,U,24,10,"div",4),t.ALo(11,"async"),t.YNc(12,N,2,0,"ng-template",null,5,t.W1O),t.qZA()()),2&n){const o=t.MAs(13);t.xp6(4),t.Q6J("routerLinkActiveOptions",t.DdM(7,O)),t.xp6(4),t.Q6J("routerLink",t.VKq(8,D,i.courseName)),t.xp6(1),t.Oqu(i.courseName),t.xp6(1),t.Q6J("ngIf",t.lcZ(11,5,i.course$))("ngIfElse",o)}},dependencies:[l.O5,x.J,u.rH,u.Od,_,l.Ov]})}return e})();var M=r(3878);let J=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#s=this.\u0275inj=t.cJS({imports:[l.ez,M.G,u.Bz.forChild([{path:"",component:b}])]})}return e})()}}]);