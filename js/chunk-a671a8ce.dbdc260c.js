(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a671a8ce"],{1799:function(t,e,a){"use strict";var i=a("7a23"),s={"aria-label":"Page navigation example"},c={class:"pagination d-flex justify-content-center"},n=Object(i["f"])("span",{"aria-hidden":"true"},"«",-1),l=[n],o=["onClick"],r=Object(i["f"])("span",{"aria-hidden":"true"},"»",-1),d=[r];function p(t,e,a,n,r,p){return Object(i["s"])(),Object(i["e"])("div",null,[Object(i["f"])("nav",s,[Object(i["f"])("ul",c,[Object(i["f"])("li",{class:Object(i["n"])(["page-item",{disabled:1===a.pages.page}])},[Object(i["f"])("a",{class:"page-link",onClick:e[0]||(e[0]=function(t){return p.updatePage(a.pages.page-1)}),"aria-label":"Previous"},l)],2),(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(a.pages.pageArr,(function(t,e){return Object(i["s"])(),Object(i["e"])("li",{class:Object(i["n"])(["page-item",{active:a.pages.page===t}]),key:e},[Object(i["f"])("a",{class:"page-link",onClick:function(e){return p.updatePage(t)}},Object(i["z"])(t),9,o)],2)})),128)),Object(i["f"])("li",{class:Object(i["n"])(["page-item",{disabled:a.pages.page===a.pages.total_page}])},[Object(i["f"])("a",{class:"page-link",onClick:e[1]||(e[1]=function(t){return p.updatePage(a.pages.page+1)}),"aria-label":"Next"},d)],2)])])])}var u={name:"Pagination",props:["pages"],methods:{updatePage:function(t){this.$emit("emit-page",t)}}},f=a("6b0d"),g=a.n(f);const b=g()(u,[["render",p]]);e["a"]=b},"1c9c":function(t,e,a){"use strict";a.r(e);var i=a("7a23"),s=a("f5db"),c=a.n(s),n=a("9a11"),l=a.n(n),o=a("77c4"),r=a.n(o),d=a("d5bf"),p=a.n(d),u={class:"container-xl",style:{"padding-left":"108px","padding-right":"108px"}},f={class:"d-flex"},g={style:{"font-size":"20px","font-weight":"600","margin-top":"90px"}},b=Object(i["f"])("img",{style:{width:"20px"},src:c.a},null,-1),h={class:"ms-1"},m={class:"d-flex justify-content-center"},O={class:"d-flex justify-content-center"},j={class:"row mt-2"},y=["onClick"],A={class:"card mb-2 cardModalShowadow",style:{width:"206px",hight:"243px",padding:"12px"}},v={class:"cardSiteImgBox"},I=["src"],P={class:"ellipsis"},D={class:"text-start ellipsis"},x={class:"modal fade",id:"cardModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",role:"dialog",ref:"displayModal"},M={class:"modal-dialog",style:{position:"relative"}},w=Object(i["f"])("button",{type:"button",class:"ms-auto btn btn-pink py-0 px-2 dialogBtnPosition","data-bs-dismiss":"modal","aria-label":"Close"}," X ",-1),C={class:"modal-content text-black",style:{padding:"16px"}},k={style:{overflow:"hidden",height:"459px"}},T=["src","alt"],U={key:0,class:"d-flex justify-content-end mt-1"},S={class:"btn-group me-2",role:"group","aria-label":"First group"},z=["onClick"],E={style:{"font-size":"18px","font-weight":"400","margin-top":"22px"},class:"text-start"},F={style:{"font-size":"14px","font-weight":"400"},class:"text-start"},L={class:"row text-start",style:{width:"100%","font-size":"14px"}},N={class:"col-md-6"},B=Object(i["f"])("img",{src:l.a},null,-1),Q={class:"ms-1"},R={class:"col-md-6"},H=Object(i["f"])("img",{src:r.a},null,-1),X={class:"ms-1"},W={class:"col-md-6"},K={class:"ms-1"},V={class:"col-md-6"},Z=Object(i["f"])("img",{src:p.a},null,-1),q={class:"ms-1"};function Y(t,e,a,s,c,n){var l=Object(i["x"])("font-awesome-icon"),o=Object(i["x"])("Pagation");return Object(i["s"])(),Object(i["e"])("div",null,[Object(i["f"])("div",u,[Object(i["f"])("div",f,[Object(i["f"])("p",g,[b,Object(i["f"])("span",h,Object(i["z"])(c.cityName),1)])]),Object(i["f"])("div",m,[Object(i["f"])("div",O,[Object(i["f"])("div",j,[(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(c.showCardInfo,(function(t,e){return Object(i["s"])(),Object(i["e"])("div",{onClick:function(e){return n.displayModalFn(t,"ScenicSpot")},"data-bs-toggle":"modal","data-bs-target":"#cardModal",style:{width:"206px",margin:"0 5px 0 5px"},class:"page-item",key:e},[Object(i["f"])("div",A,[Object(i["f"])("div",v,[Object(i["f"])("img",{src:t.Picture.PictureUrl1,class:"cardSiteImg"},null,8,I)]),Object(i["f"])("p",P,Object(i["z"])(t.Name),1),Object(i["f"])("span",D,[Object(i["h"])(l,{class:"pink",icon:["fas","map-marker-alt"]}),Object(i["g"])(Object(i["z"])(t.Address),1)])])],8,y)})),128)),Object(i["f"])("div",x,[Object(i["f"])("div",M,[w,Object(i["f"])("div",C,[Object(i["f"])("div",k,[Object(i["f"])("img",{style:{width:"100%",height:"100%","object-fit":"cover","object-position":"center center"},src:c.displayModalData.Picture.PictureUrl1,alt:c.displayModalData.Name},null,8,T)]),c.modalImgLenIf?(Object(i["s"])(),Object(i["e"])("div",U,[Object(i["f"])("div",S,[(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(c.modalImgLen,(function(t,e){return Object(i["s"])(),Object(i["e"])("button",{key:e,type:"button",class:Object(i["n"])(["btn btn-outline-pink",{active:t===c.modalImgCurrent}]),onClick:function(e){return n.selectModalImgNumFn(t)}},Object(i["z"])(t),11,z)})),128))])])):Object(i["d"])("",!0),Object(i["f"])("p",E,Object(i["z"])(c.displayModalData.Name),1),Object(i["f"])("p",F,Object(i["z"])(c.displayModalData.DescriptionDetail),1),Object(i["f"])("div",L,[Object(i["f"])("p",N,[B,Object(i["f"])("span",Q,Object(i["z"])(c.displayModalData.OpenTime),1)]),Object(i["f"])("p",R,[H,Object(i["f"])("span",X,Object(i["z"])(c.displayModalData.WebsiteUrl),1)]),Object(i["f"])("p",W,[Object(i["h"])(l,{class:"pink",icon:["fas","map-marker-alt"],style:{"font-size":"19px"}}),Object(i["f"])("span",K,Object(i["z"])(c.displayModalData.Address),1)]),Object(i["f"])("p",V,[Z,Object(i["f"])("span",q,Object(i["z"])(c.displayModalData.Phone),1)])])])])],512),Object(i["h"])(o,{pages:c.pages,class:"mt-2",onEmitPage:n.getPageInfoFn},null,8,["pages","onEmitPage"])])])])])])}var J=a("ade3"),_=(a("99af"),a("6c2d")),G=a("1799"),$=a("01d7"),tt={name:"TouristCity",components:{Pagation:G["a"]},data:function(){var t;return t={selectCity:[],cityInfo:"請選擇",typeInfo:"類別",cityName:"",defaultImg:a("1fd2"),displayModal:"",displayModalData:{Picture:{PictureUrl:[],PictureUrl1:""},DescriptionDetail:"",Name:"",OpenTime:"",Address:"",Phone:"",WebsiteUrl:""},pages:{total_page:"",page:"0",pageArr:[]},selectType:[{type:"景點",value:"ScenicSpot"},{type:"活動",value:"Activity"}],selectTypeCardInfo:[],showCardInfo:[]},Object(J["a"])(t,"displayModal",""),Object(J["a"])(t,"teansformCity",!0),Object(J["a"])(t,"modalImgLen",""),Object(J["a"])(t,"modalImgCurrent",""),Object(J["a"])(t,"modalImgLenIf",!1),t},methods:{getAuthorizationHeader:function(){var t="".concat("71661ab7d83947fd9e8553690d6cc7bc"),e="".concat("5Wd31rSWRfudLXs4hoL7jdfTs5U"),a=(new Date).toGMTString(),i=new _["a"]("SHA-1","TEXT");i.setHMACKey(e,"TEXT"),i.update("x-date: "+a);var s=i.getHMAC("B64"),c='hmac username="'+t+'", algorithm="hmac-sha1", headers="x-date", signature="'+s+'"';return{Authorization:c,"X-Date":a}},selectModalImgNumFn:function(t){this.modalImgCurrent=t,this.displayModalData.Picture.PictureUrl1=this.displayModalData.Picture.PictureUrl[t-1]},displayModalFn:function(t,e){console.log(e),this.displayModalData.DescriptionDetail=t.DescriptionDetail,this.displayModalData.Name=t.Name,this.displayModalData.Phone=t.Phone,this.displayModalData.Picture.PictureUrl=[];for(var a=0;5>a;a++){var i="PictureUrl".concat(a);t.Picture[i]&&this.displayModalData.Picture.PictureUrl.push(t.Picture[i])}0===this.displayModalData.Picture.PictureUrl.length&&this.displayModalData.Picture.PictureUrl.push(this.defaultImg),this.displayModalData.Picture.PictureUrl1=this.displayModalData.Picture.PictureUrl[0],this.modalImgLen=this.displayModalData.Picture.PictureUrl.length,this.modalImgLen>1?this.modalImgLenIf=!0:this.modalImgLenIf=!1,this.modalImgCurrent=1,"ScenicSpot"===e&&(this.displayModalData.DescriptionDetail=t.DescriptionDetail,this.displayModalData.OpenTime=t.OpenTime,this.displayModalData.Address=t.Address)},touristDataFn:function(t,e){var a,i,s=this;"類別"===this.typeInfo&&"請選擇"===this.cityInfo?(a=e,i=t):(a=this.typeInfo,i=this.cityInfo),this.selectTypeCardInfo=[],this.showCardInfo=[],this.axios({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Tourism/".concat(a,"/").concat(i),headers:this.getAuthorizationHeader()}).then((function(t){for(var e=t.data,a=0;e.length>a;a++)s.cityName=e[0].City,s.selectTypeCardInfo.push(e[a]),s.selectTypeCardInfo[a].Picture.PictureUrl1||(s.selectTypeCardInfo[a].Picture.PictureUrl1=s.defaultImg);s.pages.total_page=Math.ceil(s.selectTypeCardInfo.length/20),s.pages.page="1",s.getPageInfoFn()}))},pageDisplay:function(){var t=parseInt(this.pages.page)+2;t>=this.pages.total_page&&(t=this.pages.total_page);var e=parseInt(this.pages.page)-2;e<1&&(e=1);for(var a=e;t>=a;a++)a<=this.pages.total_page&&this.pages.pageArr.push(a)},getPageInfoFn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(!(t<1)){this.pages.pageArr=[],this.pages.page=t,this.showCardInfo=[];var e=parseInt(20*t),a=20*parseInt(t-1);e>this.selectTypeCardInfo.length&&(e=this.selectTypeCardInfo.length);for(var i=a;e>i;i++)this.showCardInfo.push(this.selectTypeCardInfo[i]);this.pageDisplay()}}},watch:{"$route.params.city":{handler:function(t){this.touristDataFn(t,"ScenicSpot")}}},mounted:function(){var t=this.$route.params.city;this.touristDataFn(t,"ScenicSpot"),this.displayModal=new $["a"](this.$refs.displayModal)}},et=a("6b0d"),at=a.n(et);const it=at()(tt,[["render",Y]]);e["default"]=it},8418:function(t,e,a){"use strict";var i=a("a04b"),s=a("9bf2"),c=a("5c6c");t.exports=function(t,e,a){var n=i(e);n in t?s.f(t,n,c(0,a)):t[n]=a}},"99af":function(t,e,a){"use strict";var i=a("23e7"),s=a("da84"),c=a("d039"),n=a("e8b5"),l=a("861d"),o=a("7b0b"),r=a("07fa"),d=a("8418"),p=a("65f0"),u=a("1dde"),f=a("b622"),g=a("2d00"),b=f("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",O=s.TypeError,j=g>=51||!c((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),y=u("concat"),A=function(t){if(!l(t))return!1;var e=t[b];return void 0!==e?!!e:n(t)},v=!j||!y;i({target:"Array",proto:!0,forced:v},{concat:function(t){var e,a,i,s,c,n=o(this),l=p(n,0),u=0;for(e=-1,i=arguments.length;e<i;e++)if(c=-1===e?n:arguments[e],A(c)){if(s=r(c),u+s>h)throw O(m);for(a=0;a<s;a++,u++)a in c&&d(l,u,c[a])}else{if(u>=h)throw O(m);d(l,u++,c)}return l.length=u,l}})},ade3:function(t,e,a){"use strict";function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return i}))},f5db:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEDSURBVHgBrZSxDcIwEEW/A+kZAJAZgQ3CBoxAiSAS2QA2gALRMgpsABuQAnp64hy+BEUKcRwr8KvIunv5p3824CAaLGbUDwOXWtEIk1EPSl2AFOj4YxHvnrZ6rwmIJFkxVv9bavC6qVzY3c01pHsrHabpWDwOV7RyqPxTtcPb2lpqgRxEPmpFAQ2XUV2fceR8VHZnBLKe6HRHpoDMDpW/tsBYOvnX1skhSb1vCie4iDAR9/0ZVodKHOEqQZXaElDfhqZRv4mShuGmdFLATDvnJg6Ib1BcdpgF0Uo6oKQYPQN+dm6G9gpoEE75QzjsnKMo5sfDQ+qvfodl3rLHQzuMJP6oN12MXDlTO+oqAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=chunk-a671a8ce.dbdc260c.js.map