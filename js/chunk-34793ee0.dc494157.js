(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34793ee0"],{"08c2":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAnSURBVHgB7cxBDQAACAOxgR78I2+Y2IfkKqDlHSuoFUZISEhI+CU8ttkDCZ5/QuIAAAAASUVORK5CYII="},1799:function(t,e,a){"use strict";var i=a("7a23"),n={"aria-label":"Page navigation example"},s={class:"pagination d-flex justify-content-center"},c=Object(i["f"])("span",{"aria-hidden":"true"},"«",-1),l=[c],o=["onClick"],r=Object(i["f"])("span",{"aria-hidden":"true"},"»",-1),d=[r];function p(t,e,a,c,r,p){return Object(i["s"])(),Object(i["e"])("div",null,[Object(i["f"])("nav",n,[Object(i["f"])("ul",s,[Object(i["f"])("li",{class:Object(i["n"])(["page-item",{disabled:1===a.pages.page}])},[Object(i["f"])("a",{class:"page-link",onClick:e[0]||(e[0]=function(t){return p.updatePage(a.pages.page-1)}),"aria-label":"Previous"},l)],2),(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(a.pages.pageArr,(function(t,e){return Object(i["s"])(),Object(i["e"])("li",{class:Object(i["n"])(["page-item",{active:a.pages.page===t}]),key:e},[Object(i["f"])("a",{class:"page-link",onClick:function(e){return p.updatePage(t)}},Object(i["z"])(t),9,o)],2)})),128)),Object(i["f"])("li",{class:Object(i["n"])(["page-item",{disabled:a.pages.page===a.pages.total_page}])},[Object(i["f"])("a",{class:"page-link",onClick:e[1]||(e[1]=function(t){return p.updatePage(a.pages.page+1)}),"aria-label":"Next"},d)],2)])])])}var u={name:"Pagination",props:["pages"],methods:{updatePage:function(t){this.$emit("emit-page",t)}}},f=a("6b0d"),g=a.n(f);const b=g()(u,[["render",p]]);e["a"]=b},"2f0e":function(t,e,a){"use strict";a.r(e);var i=a("7a23"),n=a("08c2"),s=a.n(n),c=a("9a11"),l=a.n(c),o=a("77c4"),r=a.n(o),d=a("d5bf"),p=a.n(d),u={class:"container-xl pxContainer"},f=Object(i["f"])("div",{class:"d-flex"},[Object(i["f"])("p",{style:{"font-size":"20px","font-weight":"600","margin-top":"80px"}},[Object(i["f"])("img",{style:{width:"20px"},src:s.a}),Object(i["f"])("span",{class:"ms-1"},"推薦住宿")])],-1),g={class:"pxContainer"},b={class:"row justify-content-center"},h=["onClick"],m={class:"card mb-2 cardModalShowadow",style:{width:"206px",hight:"243px",padding:"12px"}},j={class:"cardSiteImgBox"},O=["src"],y={class:"ellipsis"},A={class:"text-start ellipsis"},I={class:"modal fade",id:"cardModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",role:"dialog",ref:"displayModal"},v={class:"modal-dialog",style:{position:"relative"}},x=Object(i["f"])("button",{type:"button",class:"ms-auto btn btn-pink py-0 px-2 dialogBtnPosition","data-bs-dismiss":"modal","aria-label":"Close"}," X ",-1),P={class:"modal-content text-black",style:{padding:"16px"}},w={style:{overflow:"hidden",height:"459px"}},D=["src","alt"],M={key:0,class:"d-flex justify-content-end mt-1"},k={class:"btn-group me-2",role:"group","aria-label":"First group"},C=["onClick"],U={style:{"font-size":"18px","font-weight":"400","margin-top":"22px"},class:"text-start"},z={style:{"font-size":"14px","font-weight":"400"},class:"text-start"},H={class:"row text-start",style:{width:"100%","font-size":"14px"}},S={class:"col-md-6"},L=Object(i["f"])("img",{src:l.a},null,-1),N={class:"ms-1"},T={class:"col-md-6"},F=Object(i["f"])("img",{src:r.a},null,-1),R={class:"ms-1"},B={class:"col-md-6"},E={class:"ms-1"},X={class:"col-md-6"},Q=Object(i["f"])("img",{src:p.a},null,-1),_={class:"ms-1"};function W(t,e,a,n,s,c){var l=Object(i["x"])("font-awesome-icon"),o=Object(i["x"])("Pagation");return Object(i["s"])(),Object(i["e"])("div",null,[Object(i["f"])("div",u,[f,Object(i["f"])("div",g,[Object(i["f"])("div",b,[(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(s.showHotelCardInfo,(function(t,e){return Object(i["s"])(),Object(i["e"])("div",{onClick:function(e){return c.displayModalFn(t,"Hotel")},"data-bs-toggle":"modal","data-bs-target":"#cardModal",style:{width:"206px",margin:"0 5px 0 5px"},class:"page-item p-0",key:e},[Object(i["f"])("div",m,[Object(i["f"])("div",j,[Object(i["f"])("img",{src:t.Picture.PictureUrl1,class:"cardSiteImg"},null,8,O)]),Object(i["f"])("p",y,Object(i["z"])(t.Name),1),Object(i["f"])("span",A,[Object(i["h"])(l,{class:"pink",icon:["fas","map-marker-alt"]}),Object(i["g"])(Object(i["z"])(t.Address),1)])])],8,h)})),128))])]),Object(i["f"])("div",I,[Object(i["f"])("div",v,[x,Object(i["f"])("div",P,[Object(i["f"])("div",w,[Object(i["f"])("img",{style:{width:"100%",height:"100%","object-fit":"cover","object-position":"center center"},src:s.displayModalData.Picture.PictureUrl1,alt:s.displayModalData.Name},null,8,D)]),s.modalImgLenIf?(Object(i["s"])(),Object(i["e"])("div",M,[Object(i["f"])("div",k,[(Object(i["s"])(!0),Object(i["e"])(i["a"],null,Object(i["w"])(s.modalImgLen,(function(t,e){return Object(i["s"])(),Object(i["e"])("button",{key:e,type:"button",class:Object(i["n"])(["btn btn-outline-pink",{active:t===s.modalImgCurrent}]),onClick:function(e){return c.selectModalImgNumFn(t)}},Object(i["z"])(t),11,C)})),128))])])):Object(i["d"])("",!0),Object(i["f"])("p",U,Object(i["z"])(s.displayModalData.Name),1),Object(i["f"])("p",z,Object(i["z"])(s.displayModalData.DescriptionDetail),1),Object(i["f"])("div",H,[Object(i["f"])("p",S,[L,Object(i["f"])("span",N,Object(i["z"])(s.displayModalData.OpenTime),1)]),Object(i["f"])("p",T,[F,Object(i["f"])("span",R,Object(i["z"])(s.displayModalData.WebsiteUrl),1)]),Object(i["f"])("p",B,[Object(i["h"])(l,{class:"pink",icon:["fas","map-marker-alt"],style:{"font-size":"19px"}}),Object(i["f"])("span",E,Object(i["z"])(s.displayModalData.Address),1)]),Object(i["f"])("p",X,[Q,Object(i["f"])("span",_,Object(i["z"])(s.displayModalData.Phone),1)])])])])],512),Object(i["h"])(o,{pages:s.pages,class:"mt-2",onEmitPage:c.getPageInfoFn},null,8,["pages","onEmitPage"])])])}var Y=a("1da1"),K=a("ade3"),$=(a("96cf"),a("99af"),a("6c2d")),V=a("1799"),G=a("01d7"),J={name:"Hotel",components:{Pagation:V["a"]},data:function(){var t;return t={selectCity:[],cityInfo:"請選擇",typeInfo:"類別",cityName:"",defaultImg:a("1fd2"),navImage:{height:"536px",margin:"20px",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(".concat(a("c51b"),")")},btnPinkPositionImg:{width:"45px",height:"40px",marginLeft:"6px",backgroundImage:"url(".concat(a("dffa"),")")},btnPinkSearchImg:{width:"45px",height:"40px",marginLeft:"6px",backgroundImage:"url(".concat(a("043a"),")")},displayModal:"",displayModalData:{Picture:{PictureUrl1:""},DescriptionDetail:"",Name:"",OpenTime:"",Address:"",Phone:"",WebsiteUrl:""},pages:{total_page:"",page:"0",pageArr:[]},selectType:[{type:"美食",value:"Restaurant"},{type:"住宿",value:"Hotel"}],hotelInfo:[],showHotelCardInfo:[]},Object(K["a"])(t,"displayModal",""),Object(K["a"])(t,"teansformCity",!0),Object(K["a"])(t,"modalImgLen",""),Object(K["a"])(t,"modalImgCurrent",""),Object(K["a"])(t,"modalImgLenIf",!1),t},methods:{getAuthorizationHeader:function(){var t="".concat("71661ab7d83947fd9e8553690d6cc7bc"),e="".concat("5Wd31rSWRfudLXs4hoL7jdfTs5U"),a=(new Date).toGMTString(),i=new $["a"]("SHA-1","TEXT");i.setHMACKey(e,"TEXT"),i.update("x-date: "+a);var n=i.getHMAC("B64"),s='hmac username="'+t+'", algorithm="hmac-sha1", headers="x-date", signature="'+n+'"';return{Authorization:s,"X-Date":a}},selectModalImgNumFn:function(t){this.modalImgCurrent=t,this.displayModalData.Picture.PictureUrl1=this.displayModalData.Picture.PictureUrl[t-1]},displayModalFn:function(t,e){this.displayModalData.DescriptionDetail=t.DescriptionDetail,this.displayModalData.Name=t.Name,this.displayModalData.Phone=t.Phone,this.displayModalData.Picture.PictureUrl=[];for(var a=0;5>a;a++){var i="PictureUrl".concat(a);t.Picture[i]&&this.displayModalData.Picture.PictureUrl.push(t.Picture[i])}0===this.displayModalData.Picture.PictureUrl.length&&this.displayModalData.Picture.PictureUrl.push(this.defaultImg),this.displayModalData.Picture.PictureUrl1=this.displayModalData.Picture.PictureUrl[0],this.modalImgLen=this.displayModalData.Picture.PictureUrl.length,this.modalImgLen>1?this.modalImgLenIf=!0:this.modalImgLenIf=!1,this.modalImgCurrent=1,this.displayModalData.DescriptionDetail=t.Description,this.displayModalData.OpenTime=t.StartTime,this.displayModalData.Address=t.Location},touristDataFn:function(t,e){var a,i,n=this;"類別"===this.typeInfo&&"請選擇"===this.cityInfo?(a=e,i=t):(a=this.typeInfo,i=this.cityInfo),this.hotelInfo=[],this.axios({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Tourism/".concat(a,"/").concat(i),headers:this.getAuthorizationHeader()}).then((function(t){for(var e=t.data,a=0;e.length>a;a++)n.cityName=e[0].City,n.hotelInfo.push(e[a]),n.hotelInfo[a].Picture.PictureUrl1||(n.hotelInfo[a].Picture.PictureUrl1=n.defaultImg);n.pages.total_page=Math.ceil(n.hotelInfo.length/20),n.pages.page="1",n.getPageInfoFn()}))},pageDisplay:function(){var t=parseInt(this.pages.page)+2;t>=this.pages.total_page&&(t=this.pages.total_page);var e=parseInt(this.pages.page)-2;e<1&&(e=1);for(var a=e;t>=a;a++)a<=this.pages.total_page&&this.pages.pageArr.push(a)},getPageInfoFn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(!(t<1)){this.pages.pageArr=[],this.pages.page=t,this.showHotelCardInfo=[];var e=parseInt(20*t),a=20*parseInt(t-1);e>this.hotelInfo.length&&(e=this.hotelInfo.length);for(var i=a;e>i;i++)this.showHotelCardInfo.push(this.hotelInfo[i]);this.pageDisplay()}}},watch:{"$route.params.city":{handler:function(t){this.touristDataFn(t,"Hotel")}}},mounted:function(){var t=this;return Object(Y["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$route.params.city,e.next=3,t.touristDataFn(a,"Hotel");case 3:t.displayModal=new G["a"](t.$refs.displayModal);case 4:case"end":return e.stop()}}),e)})))()}},Z=a("6b0d"),q=a.n(Z);const tt=q()(J,[["render",W]]);e["default"]=tt},8418:function(t,e,a){"use strict";var i=a("a04b"),n=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var c=i(e);c in t?n.f(t,c,s(0,a)):t[c]=a}},"99af":function(t,e,a){"use strict";var i=a("23e7"),n=a("da84"),s=a("d039"),c=a("e8b5"),l=a("861d"),o=a("7b0b"),r=a("07fa"),d=a("8418"),p=a("65f0"),u=a("1dde"),f=a("b622"),g=a("2d00"),b=f("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",j=n.TypeError,O=g>=51||!s((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),y=u("concat"),A=function(t){if(!l(t))return!1;var e=t[b];return void 0!==e?!!e:c(t)},I=!O||!y;i({target:"Array",proto:!0,forced:I},{concat:function(t){var e,a,i,n,s,c=o(this),l=p(c,0),u=0;for(e=-1,i=arguments.length;e<i;e++)if(s=-1===e?c:arguments[e],A(s)){if(n=r(s),u+n>h)throw j(m);for(a=0;a<n;a++,u++)a in s&&d(l,u,s[a])}else{if(u>=h)throw j(m);d(l,u++,s)}return l.length=u,l}})},ade3:function(t,e,a){"use strict";function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",(function(){return i}))}}]);
//# sourceMappingURL=chunk-34793ee0.dc494157.js.map