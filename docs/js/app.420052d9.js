(function(e){function t(t){for(var o,s,a=t[0],p=t[1],c=t[2],l=0,d=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(o in p)Object.prototype.hasOwnProperty.call(p,o)&&(e[o]=p[o]);u&&u(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],o=!0,s=1;s<i.length;s++){var a=i[s];0!==r[a]&&(o=!1)}o&&(n.splice(t--,1),e=p(p.s=i[0]))}return e}var o={},s={app:0},r={app:0},n=[];function a(e){return p.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8f7b160a"}[e]+".js"}function p(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,p),i.l=!0,i.exports}p.e=function(e){var t=[],i={about:1};s[e]?t.push(s[e]):0!==s[e]&&i[e]&&t.push(s[e]=new Promise((function(t,i){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"f64a5a45"}[e]+".css",r=p.p+o,n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var c=n[a],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===r))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){c=d[a],l=c.getAttribute("data-href");if(l===o||l===r)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var o=t&&t.target&&t.target.src||r,n=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=o,delete s[e],u.parentNode.removeChild(u),i(n)},u.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(u)})).then((function(){s[e]=0})));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,i){o=r[e]=[t,i]}));t.push(o[2]=n);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,p.nc&&l.setAttribute("nonce",p.nc),l.src=a(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(u);var i=r[e];if(0!==i){if(i){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",d.name="ChunkLoadError",d.type=o,d.request=s,i[1](d)}r[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},p.m=e,p.c=o,p.d=function(e,t,i){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},p.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(e,t){if(1&t&&(e=p(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(p.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)p.d(i,o,function(t){return e[t]}.bind(null,o));return i},p.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/open-source-internships/",p.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},"24a7":function(e,t,i){"use strict";i("591b")},"39f6":function(e,t,i){e.exports=i.p+"img/logo2.c4221fac.gif"},"56d7":function(e,t,i){"use strict";i.r(t);var o=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-main",[i("v-fade-transition",{attrs:{mode:"out-in"}},[i("div",{style:[e.$vuetify.theme.dark?{backgroundColor:"black"}:{backgroundColor:"white"}],attrs:{id:"studentQuiz"}},[i("div",{attrs:{id:"particles-js"}}),i("router-view")],1)])],1),i("app-bar")],1)},r=[],n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-bottom-navigation",{attrs:{color:"indigo",app:"",grow:"",height:"50"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[i("v-btn",{staticClass:"button-size",attrs:{value:"1","x-large":"",text:""},on:{click:function(t){return e.$router.push("/open-source-internships")}}},[e._v(" 🐱‍💻 OSI ")]),i("v-btn",{staticClass:"button-size",attrs:{value:"1","x-large":"",text:""},on:{click:function(t){return e.$router.push("/open-source-internships/about")}}},[e._v(" 😁 About ")]),i("v-btn",{staticClass:"button-size",attrs:{value:"1",href:"https://github.com/rohan220217/open-source-internships","x-large":"",text:""}},[e._v(" ⭐ This project ")])],1)],1)},a=[],p={data:()=>({drawer:null,links:["🐱‍💻 OSI","😁 About","⭐ This project"],value:1})},c=p,l=(i("5ed9"),i("2877")),d=i("6544"),u=i.n(d),h=i("b81c"),m=i("8336"),g=Object(l["a"])(c,n,a,!1,null,"707b3f9e",null),f=g.exports;u()(g,{VBottomNavigation:h["a"],VBtn:m["a"]});i("572f");var w={name:"App",data:()=>({}),components:{AppBar:f},mounted(){this.initParticles()},methods:{initParticles(){window.particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:700}},color:{value:"#4ebeef"},shape:{type:"star",stroke:{width:0,color:"#85e598"},polygon:{nb_sides:5}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#85e598",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},_=w,v=(i("034f"),i("7496")),b=i("0789"),y=i("f6c4"),k=Object(l["a"])(_,s,r,!1,null,null,null),C=k.exports;u()(k,{VApp:v["a"],VFadeTransition:b["b"],VMain:y["a"]});var S=i("8c4f"),F=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-container",[o("v-card",{attrs:{flat:""}},[o("v-card-title",{staticClass:"text-center justify-center py-6"},[o("v-img",{attrs:{height:"80",width:"0",contain:"",src:i("39f6")}})],1),o("v-tabs",{attrs:{"show-arrows":"","background-color":"transparent",color:"orange lighten-1",grow:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(t){return o("v-tab",{key:t},[e._v(" "+e._s(t)+" ")])})),1)],1),o("div",{staticClass:"mt-3"},[o("v-tabs-items",{staticClass:"py-4",model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[o("v-tab-item",[o("masonry-view",{attrs:{name:"programs",data:e.allPrograms}})],1),o("v-tab-item",[o("masonry-view",{attrs:{name:"competitions",data:e.allCompetitions}})],1),o("v-tab-item",[o("masonry-view",{attrs:{name:"universities",data:e.allUniversity}})],1)],1)],1)],1),o("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[o("v-btn",e._g({staticStyle:{bottom:"55px"},attrs:{absolute:"",dark:"",fixed:"",fab:"",bottom:"",right:"",color:"orange lighten-1"},on:{click:function(t){e.$vuetify.theme.dark=!e.$vuetify.theme.dark}}},Object.assign({},i)),[o("v-icon",[e._v(e._s(e.$vuetify.theme.dark?"mdi-white-balance-sunny":"mdi-weather-night"))])],1)]}}])},[o("span",[e._v("Day/ Night Mode")])])],1)},A=[],j=i("2f62"),O=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-row",{directives:[{name:"masonry",rawName:"v-masonry",value:e.name+"-container-masonry",expression:"`${name}-container-masonry`"}],attrs:{"transition-duration":"0.5s","item-selector":".item"}},e._l(e.data,(function(t){return i("v-col",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:t._id,staticClass:"pa-3 item",attrs:{cols:"12",md:"4",sm:"6"}},[i("single-card",{attrs:{content:t},on:{toggle:e.toggleCard}})],1)})),1)},E=[],T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var o=t.hover;return[i("v-card",{staticClass:"pa-2",attrs:{elevation:o?8:0,color:e.content.color,light:""}},[i("v-img",{staticStyle:{cursor:"pointer"},attrs:{src:e.content.image,"lazy-src":e.content.image,height:"100px",contain:""},on:{click:function(t){return e.openLink(e.content.link)}},scopedSlots:e._u([{key:"placeholder",fn:function(){return[i("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[i("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)}),i("v-card-title",[e._v(" "+e._s(e.content.title)+" ")]),i("v-card-subtitle",{staticClass:"pb-0"},[e._v(" Begins on - "+e._s(e.content.start_date)+" ")]),i("v-card-subtitle",{staticClass:"pt-0"},[e._v(" Ends on - "+e._s(e.content.end_date)+" ")]),i("v-card-subtitle",{staticClass:"py-0 px-2"},[e.content.perks.swags?i("v-chip",{staticClass:"ma-1",attrs:{small:"",color:"deep-purple accent-4",outlined:""}},[e._v(" 🤩 Swags ")]):e._e(),e.content.perks.stipend?i("v-chip",{staticClass:"ma-1",attrs:{small:"",color:"deep-purple accent-4",outlined:""}},[e._v(" 💸 Stipend ")]):e._e(),e.content.perks.cash_price?i("v-chip",{staticClass:"ma-1",attrs:{small:"",color:"deep-purple accent-4",outlined:""}},[e._v(" 💰 Cash Price ")]):e._e(),e.content.perks.internships_opportunity?i("v-chip",{staticClass:"ma-1",attrs:{small:"",color:"deep-purple accent-4",outlined:""}},[e._v(" 😎 Internships ")]):e._e(),e.content.perks.certificates?i("v-chip",{staticClass:"ma-1",attrs:{small:"",color:"deep-purple accent-4",outlined:""}},[e._v(" 📜 Certificate ")]):e._e(),e.content.perks.surprise_gifts?i("v-chip",{staticClass:"ma-1",attrs:{small:"",color:"deep-purple accent-4",outlined:""}},[e._v(" 🎁 Surprise gift ")]):e._e()],1),i("v-card-actions",[i("v-btn",{attrs:{color:"orange",text:""},on:{click:function(t){return e.openLink(e.content.timeline)}}},[e._v(" Timeline ")]),i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:function(t){return e.toggleChevron()}}},[i("v-icon",[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[i("v-divider"),i("v-card-text",{staticClass:"text-justify"},[e._v(" "+e._s(e.content.description)+" ")])],1)],1)]}}])})},x=[],N={props:{content:{type:Object}},data(){return{show:!1}},methods:{openLink(e){window.open(e,"_blank")},toggleChevron(){this.show=!this.show;let e=this;setTimeout((function(){e.$emit("toggle")}),10)}}},D=N,I=i("b0af"),P=i("99d9"),M=i("cc20"),L=i("ce7e"),V=i("ce87"),J=i("132d"),W=i("adda"),G=i("490a"),B=i("0fd9"),H=i("2fa4"),z=Object(l["a"])(D,T,x,!1,null,null,null),R=z.exports;u()(z,{VBtn:m["a"],VCard:I["a"],VCardActions:P["a"],VCardSubtitle:P["b"],VCardText:P["c"],VCardTitle:P["d"],VChip:M["a"],VDivider:L["a"],VHover:V["a"],VIcon:J["a"],VImg:W["a"],VProgressCircular:G["a"],VRow:B["a"],VSpacer:H["a"]});var $={props:{data:Array,name:String},components:{SingleCard:R},methods:{toggleCard(){this.$redrawVueMasonry(this.name+"-container-masonry")}}},K=$,q=i("62ad"),U=Object(l["a"])(K,O,E,!1,null,null,null),X=U.exports;u()(U,{VCol:q["a"],VRow:B["a"]});var Y={name:"Home",components:{MasonryView:X},computed:{...Object(j["b"])(["allPrograms","allCompetitions","allUniversity"])},data(){return{tab:null,show:!1,items:["Programs","Competitions","Universities"]}},methods:{isCurrentTab(e){return this.tab==e}}},Q=Y,Z=(i("24a7"),i("a523")),ee=i("71a3"),te=i("c671"),ie=i("fe57"),oe=i("aac8"),se=i("3a2f"),re=Object(l["a"])(Q,F,A,!1,null,"44517332",null),ne=re.exports;u()(re,{VBtn:m["a"],VCard:I["a"],VCardTitle:P["d"],VContainer:Z["a"],VIcon:J["a"],VImg:W["a"],VTab:ee["a"],VTabItem:te["a"],VTabs:ie["a"],VTabsItems:oe["a"],VTooltip:se["a"]}),o["a"].use(S["a"]);const ae=[{path:"/open-source-internships",name:"Osi",component:ne},{path:"/open-source-internships/about",name:"About",component:function(){return i.e("about").then(i.bind(null,"f820"))}}],pe=new S["a"]({routes:ae,mode:"history"});var ce=pe,le=i("f309");o["a"].use(le["a"]);var de=new le["a"]({theme:{dark:!1}}),ue=i("3f9b");const he={competition:[{_id:0,image:"https://lab.codingblocks.com/assets/img/avatar.png",title:"BOSS",start_date:"May",end_date:"August",perks:{swags:!1,stipend:!1,cash_price:!0,internships_opportunity:!1,certificates:!0,surprise_gifts:!1},description:"At Coding Blocks, most of us come from a vibrant Open Source Community, and that makes us strongly believe in free and open source software. Each year we teach hundreds of students coding, programming and software development. Over the past five years (we started off in April 2014), we have helped more than 3000 students gain expertise in Android, Web, Data Science and more.",timeline:"https://lab.codingblocks.com/boss",link:"https://lab.codingblocks.com/boss",color:"#CAEFD1"},{_id:1,image:"https://codeheat.org/img/logo-dark.png",title:"FOSSASIA Codeheat",start_date:"October",end_date:"June",perks:{swags:!1,stipend:!1,cash_price:!1,internships_opportunity:!1,certificates:!0,surprise_gifts:!0},description:"FOSSASIA and OpnTec run the Codeheat coding contest from October 1, 2020 to June 1, 2021. Codeheat is separated into two month periods. After each period we announce winners of the period. Participants contributing at least five pull requests can get a digital certificate and with more than ten pull requests developers can win awesome prizes. Eligible issues for the contest have",timeline:"https://codeheat.org/#timeline",link:"https://codeheat.org",color:"#aad0f6"},{_id:2,image:"https://s3.amazonaws.com/heroku-www-files/customers/logos/drivendata.png",title:"DrivenData",start_date:"Whole Year",end_date:"NA",perks:{swags:!0,stipend:!0,cash_price:!0,internships_opportunity:!0,certificates:!0,surprise_gifts:!0},description:"DrivenData works on projects at the intersection of data science and social impact, in areas like international development, health, education, research and conservation, and public services. We want to give more organizations access to the capabilities of data science, and engage more data scientists with social challenges where their skills can make a difference.",timeline:"https://www.drivendata.org/competitions/",link:"https://www.drivendata.org/",color:"#FFF2CC"}]},me={allCompetitions(e){return e.competition}},ge={},fe={};var we={state:he,getters:me,mutations:fe,actions:ge};const _e={programs:[{_id:0,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/1200px-GSoC-icon.svg.png",title:"Google Summer of Code",start_date:"January",end_date:"August",perks:{swags:!0,stipend:!0,cash_price:!1,internships_opportunity:!0,certificates:!0,surprise_gifts:!0},description:"The Google Summer of Code, often abbreviated to GSoC, is an international annual program in which Google awards stipends to students who successfully complete a free and open-source software coding project during the summer. The program is open to university students aged 18 or over.",timeline:"https://summerofcode.withgoogle.com/how-it-works/#timeline",link:"https://developers.google.com/open-source/gsoc/",color:"#CAF4F4"},{_id:1,image:"https://fellowship.mlh.io/_next/image?url=%2Fimg%2Flogo-light.svg&w=256&q=75",title:"MLH Open Source Fellowship",start_date:"June, September",end_date:"August, December",perks:{swags:!0,stipend:!0,cash_price:!1,internships_opportunity:!1,certificates:!0,surprise_gifts:!1},description:"The MLH Fellowship is a 12 week internship alternative for aspiring software engineers. Instead of interning at a single company, on the Open Source Track you'll contribute to the type of Open Source projects that every company depends on.",timeline:"https://fellowship.mlh.io/programs/open-source",link:"https://fellowship.mlh.io/programs/open-source",color:"#f6aad0"},{_id:2,image:"https://developers.google.com/season-of-docs/images/logo/SeasonofDocs_Icon_Grey_300ppi-whitespace-cropped.png",title:"Season of Docs",start_date:"February",end_date:"November",perks:{swags:!0,stipend:!0,cash_price:!1,internships_opportunity:!1,certificates:!0,surprise_gifts:!1},description:"Season of Docs provides support for open source projects to improve their documentation and gives professional technical writers an opportunity to gain experience in open source. Together we raise awareness of open source, of docs, and of technical writing.",timeline:"https://developers.google.com/season-of-docs/docs/timeline",link:"https://developers.google.com/season-of-docs/",color:"#CAEFD1"},{_id:3,image:"https://kde.org/stuff/clipart/logo/kde-logo-bluegradient-w-slug-vectorized.svg",title:"Season of KDE",start_date:"December",end_date:"May",perks:{swags:!0,stipend:!0,cash_price:!1,internships_opportunity:!1,certificates:!0,surprise_gifts:!1},description:"KDE Student Programs has been running Season of KDE as a program similar to, but not quite the same as Google Summer of Code, offering an opportunity to everyone (not just students) to participate in both code and non-code projects that benefits the KDE ecosystem",timeline:"https://season.kde.org/",link:"https://season.kde.org/",color:"#DCE5FD"},{_id:4,image:"https://cdn-media-1.freecodecamp.org/images/b-dH-s55d1HXEBiv3uiVe3RocpZ6LQylbhRV",title:"Outreachy",start_date:'"February,\tSeptember"',end_date:"August, March",perks:{swags:!0,stipend:!0,cash_price:!1,internships_opportunity:!0,certificates:!0,surprise_gifts:!1},description:"Outreachy is a diversity initiative that provides paid, remote internships to people subject to systemic bias and impacted by underrepresentation in the technical industry where they are living.",timeline:"https://www.outreachy.org/",link:"https://www.outreachy.org/",color:"#aad0f6"},{_id:5,image:"https://railsgirlssummerofcode.org/img/sprites/logo_subnavi.png",title:"RGSOC",start_date:"July",end_date:"September",perks:{swags:!0,stipend:!0,cash_price:!1,internships_opportunity:!0,certificates:!0,surprise_gifts:!1},description:"Rails Girls Summer of Code is a global fellowship program for women and non-binary coders. Students receive a three-month scholarship to work on existing Open Source projects and expand their skill set.",timeline:"https://railsgirlssummerofcode.org/",link:"https://railsgirlssummerofcode.org/",color:"#FFA07A"},{_id:6,image:"https://wiki.lfnetworking.org/s/-xuk22b/8401/c06149f9b8308a0beb580e4deed399f7fb2d372d/8.3.5/_/download/resources/com.atlassian.auiplugin:split_aui.splitchunk.vendors--f5244b0828/assets/confluence-white.svg",title:"LFN Mentorship Program",start_date:"January",end_date:"June",perks:{swags:!0,stipend:!0,cash_price:!1,internships_opportunity:!1,certificates:!0,surprise_gifts:!1},description:"The LF Networking (LFN) intern/mentorship program is aimed at creating a structured hands-on learning opportunity for new developers who may otherwise lack the opportunity to gain exposure to open source software development and entry to the LFN projects' technical communities",timeline:"https://wiki.lfnetworking.org/display/LN/LFN+Mentorship+Program#LFNMentorshipProgram-2020ProgramTimeline*",link:"https://wiki.lfnetworking.org/display/LN/LFN+Mentorship+Program",color:"#B3EE3A"},{_id:7,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/X.Org_Logo.svg/250px-X.Org_Logo.svg.png",title:"The X.Org - EVoC",start_date:"January ",end_date:"August",perks:{swags:!0,stipend:!0,cash_price:!1,internships_opportunity:!0,certificates:!0,surprise_gifts:!1},description:"The X.Org project provides an open source implementation of the X Window System. The development work is being done in conjunction with the freedesktop.org community. The X.Org Foundation is the educational non-profit corporation whose Board serves this effort, and whose Members lead this work.",timeline:"https://summerofcode.withgoogle.com/how-it-works/#timeline",link:"https://www.x.org/wiki/",color:"#FFF2CC"},{_id:8,image:"https://julialang.org/assets/infra/logo.svg",title:"Julia Summer of Code",start_date:"NA",end_date:"NA",perks:{swags:!0,stipend:!0,cash_price:!1,internships_opportunity:!0,certificates:!0,surprise_gifts:!1},description:"The Julia Seasons of Contributions (JSoC) are the seasonal programs for funding and/or mentoring students and other developers to contribute to the open source ecosystem. Below are the current programs that the Julia Language is participating in.",timeline:"https://julialang.org/jsoc/",link:"https://julialang.org/jsoc/",color:"#FFFF7E"},{_id:9,image:"http://static.fsf.org/nosvn/stickers/fsf.svg",title:"Free Software Foundation Internship",start_date:"NA",end_date:"NA",perks:{swags:!0,stipend:!1,cash_price:!1,internships_opportunity:!0,certificates:!0,surprise_gifts:!1},description:"This is an educational opportunity to work with the organization that sponsors the GNU Project, publishes the GNU General Public License (GPL), and fights for software freedom.",timeline:"https://www.fsf.org/volunteer/internships",link:"https://www.fsf.org/volunteer/internships",color:"#CAF4F4"},{_id:10,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Radare2.svg/398px-Radare2.svg.png",title:"Radare Summer of Code",start_date:"March",end_date:"September",perks:{swags:!0,stipend:!1,cash_price:!1,internships_opportunity:!0,certificates:!0,surprise_gifts:!1},description:"The radare project started in February 2006 aiming to provide a free and simple command line interface for an hexadecimal editor supporting 64 bit offsets to search within and recover data from hard-disks.",timeline:"https://rada.re/gsoc/2020/",link:"https://rada.re/gsoc/2020/",color:"#aad0f6"},{_id:11,image:"https://summer.haskell.org/images/haskell-logo.png",title:"Summer of Haskell",start_date:"NA",end_date:"NA",perks:{swags:!0,stipend:!0,cash_price:!1,internships_opportunity:!0,certificates:!1,surprise_gifts:!1},description:"The Summer of Haskell is an effort by Haskell.Org to reach out to students and encourage them to contribute to the Haskell community with the aid of experienced mentors. This program is open to college students, 18 or older, in most countries.",timeline:"https://developers.google.com/open-source/gsoc/timeline",link:"https://summer.haskell.org/",color:"#aad0f6"},{_id:12,image:"https://avatars.githubusercontent.com/u/16903873?s=200&v=4",title:"Open Mainframe Project",start_date:"NA",end_date:"NA",perks:{swags:!0,stipend:!0,cash_price:!1,internships_opportunity:!0,certificates:!0,surprise_gifts:!1},description:" The Open Mainframe Project (OMP), an open source initiative that enables collaboration across the mainframe community to develop shared tool sets and resources",timeline:"https://www.openmainframeproject.org/",link:"https://www.openmainframeproject.org/",color:"#DCE5FD"},{_id:13,image:"https://processingfoundation.org/content/1-home/processing-social.jpg",title:"Processing Foundation Fellowship",start_date:"NA",end_date:"NA",perks:{swags:!0,stipend:!0,cash_price:!1,internships_opportunity:!0,certificates:!0,surprise_gifts:!1},description:"The Processing Foundation Fellowship program sponsors artists, designers, activists, educators, engineers, researchers, coders, and collectives—and many combinations of these—in projects that conceive a new direction for what our software and community can do",timeline:"https://processingfoundation.org/fellowships",link:"https://processingfoundation.org/fellowships",color:"#FDE0D9"},{_id:14,image:"https://rare-technologies.com/wp-content/uploads/2016/02/rare_image_only.png",title:"RARE Technologies Student Incubator Programme",start_date:"NA",end_date:"NA",perks:{swags:!0,stipend:!0,cash_price:!1,internships_opportunity:!0,certificates:!0,surprise_gifts:!1},description:"Our student Incubator offers a unique mix of academic mentorship, hand-on project work and technical training. It is a highly selective program where you will be mentored by an industry expert as you develop a pragmatic solution to a real-world problem using machine learning.",timeline:"https://rare-technologies.com/incubator/#details",link:"https://rare-technologies.com/incubator/",color:"#FFFF7E"},{_id:15,image:"https://fossasia.org/img/fossasia-squarewhite-path.png",title:"FOSSASIA Internship Programme",start_date:"Whole Year",end_date:"",perks:{swags:!0,stipend:!0,cash_price:!1,internships_opportunity:!0,certificates:!0,surprise_gifts:!1},description:'We create Open Source software and open hardware from science apps like the Pocket Science Lab (PSLab), event management systems (Eventyay), big "open" data analytics software (loklak), Open Source personal assistants (SUSI.AI), tools for development (Scrum Helper), to Android apps like the imaging app Phimp.me.',timeline:"https://docs.google.com/forms/d/e/1FAIpQLScp8h5SIPVK5G2SAm5vtrv7KLKeOeYTxlZBkDRE6I7Toybt0A/viewform",link:"https://fossasia.org/",color:"#aad0f6"},{_id:16,image:"https://www.hyperledger.org/wp-content/uploads/2021/01/Hyperledger_Logo_NoTag_Color.svg",title:"Hyperledger Mentorship Program",start_date:"Whole Year",end_date:"",perks:{swags:!0,stipend:!1,cash_price:!1,internships_opportunity:!0,certificates:!0,surprise_gifts:!1},description:"Hyperledger is an open source collaborative effort created to advance cross-industry blockchain technologies. It is a global collaboration, hosted by The Linux Foundation, including leaders in finance, banking, IoT, supply chain, manufacturing and technology",timeline:"https://wiki.hyperledger.org/display/INTERN/How+to+Apply",link:"https://www.hyperledger.org/category/hyperledger-summer-mentorship-program",color:"#FFA07A"},{_id:18,image:"https://static1.squarespace.com/static/59a5b8f849fc2bb49c4fa941/t/5d79d9721cb6fa0c9c8e4004/1589582754695/?format=1500w",title:"Millennium Fellowship",start_date:"NA",end_date:"NA",perks:{swags:!0,stipend:!1,cash_price:!0,internships_opportunity:!0,certificates:!0,surprise_gifts:!0},description:"The United Nations Academic Impact and MCN proudly present the Millennium Fellowship. The Fellowship is a semester-long leadership development program on your campus to take your social impact to the next level.  Access to world class training, connections, and recognition is just an application away.",timeline:"https://www.millenniumfellows.org/fellowship",link:"https://www.millenniumfellows.org/",color:"#CAF4F4"},{_id:19,image:"https://cdn.shortpixel.ai/spai/q_lossy+ret_img/https://numfocus.org/wp-content/uploads/2016/07/Matplotlib_Logo_191209.png",title:"John Hunter Matplotlib Summer Fellowship",start_date:"NA",end_date:"NA",perks:{swags:!0,stipend:!0,cash_price:!0,internships_opportunity:!0,certificates:!0,surprise_gifts:!0},description:"The John Hunter Matplotlib Summer Fellowship, named in memory of Matplotlib creator John Hunter, sponsors one to two students to work full-time for 3 months on Matplotlib during the summer (in the northern hemisphere), supervised and mentored by a senior contributor from the project. The fellowship is designed to help prepare recipients to become active contributors and core maintainers of Matplotlib.",timeline:"https://numfocus.org/programs/john-hunter-technology-fellowship",link:"https://numfocus.org/programs/john-hunter-technology-fellowship",color:"#CAEFD1"},{_id:20,image:"https://static.gnome.org/img/gnome-logo.svg",title:"GNOME Internship Program",start_date:"NA",end_date:"NA",perks:{swags:!0,stipend:!0,cash_price:!0,internships_opportunity:!0,certificates:!0,surprise_gifts:!0},description:"GNOME internships provide a three-month internships for any person eligible by the eligibility rules. Interns are paid a stipend of $8000 per internship.Each project defines its timeline in its description, located in its main wiki page",timeline:"https://wiki.gnome.org/Internships#Timeline",link:"https://wiki.gnome.org/Internships",color:"#FDE0D9"},{_id:21,image:"https://omshinde.github.io/assets/images/earthEngine.jpg",title:"Google Summer of Earth Engine",start_date:"March",end_date:"August",perks:{swags:!0,stipend:!0,cash_price:!0,internships_opportunity:!0,certificates:!0,surprise_gifts:!0},description:"Google Summer of Earth Engine is a research program for Indian university students & researchers to get a chance to work with leading research organizations in the country working in environment, conservation, water resources and agricultural domains over 3 months of summer on a project and get paid to do so!",timeline:"https://sites.google.com/view/summerofearthengine/timeline",link:"https://sites.google.com/view/summerofearthengine/home",color:"#B3EE3A"},{_id:22,image:"https://www.programmersought.com/images/526/ed788428d79f3bf09e1c7afa209923ce.png",title:"Alibaba Summer of Code",start_date:"May",end_date:"September",perks:{swags:!0,stipend:!0,cash_price:!0,internships_opportunity:!0,certificates:!0,surprise_gifts:!0},description:"Our goal is to work with open-source communities to create a sincere and fair open-source internship platform. We hope to introduce the world to the Chinese open-source community and its developers through Alibaba prowess in open-source technology.",timeline:"https://developer.aliyun.com/",link:"https://www.alibabacloud.com/blog/alibaba-summer-of-code-2020-leading-the-new-open-source-trend_596241",color:"#FFF2CC"},{_id:23,image:"https://linuxfoundation.org/wp-content/uploads/lf_logo.svg",title:"Linux Kernel Mentorship Program",start_date:"Spring, Summer, Fall",end_date:"",perks:{swags:!0,stipend:!0,cash_price:!0,internships_opportunity:!0,certificates:!0,surprise_gifts:!0},description:"The Linux Foundation Mentorship Program is designed to help developers — many of whom are first-time open source contributors — with necessary skills and resources to learn, experiment, and contribute effectively to open source communities. By participating in a mentorship program, mentees have the opportunity to learn from experienced open source contributors as a segue to get internship and job opportunities upon graduation.",timeline:"https://wiki.linuxfoundation.org/lkmp/lkmp_schedule",link:"",color:"#DCE5FD"},{_id:24,image:"https://linuxfoundation.org/wp-content/uploads/lf_logo.svg",title:"Community Bridge Mentorship (by Linux Foundation)",start_date:"NA",end_date:"NA",perks:{swags:!0,stipend:!0,cash_price:!0,internships_opportunity:!0,certificates:!0,surprise_gifts:!0},description:" A platform created to empower open source developers – and the individuals and organizations who support them – to advance sustainability, security, and diversity in open source technology.",timeline:"NA",link:"https://mentorship.lfx.linuxfoundation.org/#projects",color:"#FFA07A"},{_id:25,image:"http://www.pclubsummerofcode.in/static/mentors/img/pclub-logo.png",title:"PClub Summer Of Code",start_date:"June",end_date:"September",perks:{swags:!1,stipend:!0,cash_price:!0,internships_opportunity:!0,certificates:!0,surprise_gifts:!0},description:"PClub Summer of Code is the 2 month long Open Source program during summers conducted by Programming Club, UIET, with an aim to help beginners get started with Open Source Development while encouraging diversity. Throughout the program, participants contribute to different projects under guidance of experienced mentors. Mentors get to make their ideas alive and Mentees get to learn tech",timeline:"http://www.pclubsummerofcode.in/",link:"http://www.pclubsummerofcode.in/",color:"#FFFF7E"},{_id:26,image:"https://rubyme.org/rubyme.svg",title:"RubyMe Mentorship Program",start_date:"NA",end_date:"NA",perks:{swags:!0,stipend:!0,cash_price:!0,internships_opportunity:!0,certificates:!0,surprise_gifts:!0},description:"Build up professional development experience by contributing to open source projects with the help of a mentor. RubyMe pairs early-career developers from under-represented backgrounds with seasoned Rubyists.",timeline:"NA",link:"https://rubyme.org/",color:"#FDE0D9"}]},ve={allPrograms(e){return e.programs}},be={},ye={};var ke={state:_e,getters:ve,mutations:ye,actions:be};const Ce={university:[{_id:0,image:"https://jwoc2k20.tech/assets/img/team/logo.png",title:"JGEC WINTER OF CODE",start_date:"December",end_date:"February",perks:{swags:!0,stipend:!1,cash_price:!1,internships_opportunity:!1,certificates:!0,surprise_gifts:!0},description:"JWoC ( JGEC Winter of Code) is a coding event organised by Developers JGEC which helps students to plunge into Open Source contribution and get the realm of Software Development.",timeline:"https://jwoc2k20.tech/#timeline",link:"https://jwoc2k20.tech/",color:"#aad0f6"},{_id:1,image:"https://oss2019.github.io/images/oss_logo.png",title:"OSS ",start_date:"May",end_date:"July",perks:{swags:!0,stipend:!1,cash_price:!1,internships_opportunity:!1,certificates:!1,surprise_gifts:!0},description:"OSS is an open Society for students. We encourage equal participation from all branches and years in college to grow together as a community.",timeline:"https://oss2019.github.io/events.html",link:"https://oss2019.github.io",color:"#FDE0D9"},{_id:2,image:"https://njackwinterofcode.github.io/images/nwoc-logo.png",title:"NJACK Winter of Code",start_date:"October",end_date:"January",perks:{swags:!1,stipend:!1,cash_price:!1,internships_opportunity:!1,certificates:!0,surprise_gifts:!0},description:"NWoC (NJACK Winter of Code) is a program by NJACK (The Official Computer Science Club of IIT Patna) that helps students understand the paradigm of Open Source contribution and gives them real world software development experience.",timeline:"https://njackwinterofcode.github.io/timeline.html",link:"https://njackwinterofcode.github.io",color:"#DCE5FD"},{_id:3,image:"https://kwoc.kossiitkgp.org/images/logo-light-gradient.svg",title:"Kharagpur Winter Of Code",start_date:"November ",end_date:"january",perks:{swags:!0,stipend:!1,cash_price:!1,internships_opportunity:!1,certificates:!0,surprise_gifts:!0},description:"",timeline:"",link:"https://kwoc.kossiitkgp.org/",color:"#CAF4F4"},{_id:4,image:"https://opencodeiiita.github.io/dist/images/Logo.png",title:"Opencode IIITA",start_date:"January",end_date:"NA",perks:{swags:!0,stipend:!1,cash_price:!1,internships_opportunity:!1,certificates:!1,surprise_gifts:!0},description:"OpenCode is a month-long open source program organized by GeekHaven IIIT Allahabad. OpenCode attracts talent from all over the world. People contribute to various open-source projects.",timeline:"https://kwoc.kossiitkgp.org/",link:"https://opencodeiiita.github.io/",color:"#CAEFD1"},{_id:5,image:"https://fossee.in/sites/all/themes/software_responsive_theme/img/logo.png",title:"FOSSEE Summer Fellowship ",start_date:"April",end_date:"June",perks:{swags:!1,stipend:!1,cash_price:!1,internships_opportunity:!1,certificates:!1,surprise_gifts:!1},description:"FOSSEE (Free/Libre and Open Source Software for Education) project promotes the use of FLOSS tools in academia and research. The FOSSEE project is part of the National Mission on Education through Information and Communication Technology (ICT), Ministry of Education (MoE), Government of India.",timeline:"https://fossee.in/fellowship/2021",link:"https://fossee.in/",color:"#FFFF7E"},{_id:6,image:"https://winterofcode.com/static/media/org-logo.935d7f48.png",title:"Winter of Code by NSEC",start_date:"November",end_date:"january",perks:{swags:!1,stipend:!1,cash_price:!1,internships_opportunity:!1,certificates:!0,surprise_gifts:!0},description:"Winter of Code is a program aimed to increase participation for the Google Summer of Code program among students in colleges and universities.",timeline:"https://winterofcode.com/#js-organisations",link:"https://winterofcode.com/#js-organisations",color:"#FFA07A"},{_id:7,image:"https://slop.dscdaiict.in/static/media/logo.efdd8a78.png",title:"Semester Long Project (SLoP by DA-IICT)",start_date:"September",end_date:"November",perks:{swags:!0,stipend:!1,cash_price:!1,internships_opportunity:!0,certificates:!0,surprise_gifts:!0},description:"Semester Long Projects or SLoP is an initiative by the Developer Student Club (DA-IICT), exclusively for students who are new to open source software development to get started with open source contributions.",timeline:"https://winterofcode.com/#js-organisations",link:"https://winterofcode.com/#js-organisations",color:"#FFF2CC"},{_id:8,image:"https://dwoc.io/static/media/dwocfull-transparentW.b567c059.b567c059.png",title:"Delta Winner Code(DWoC) ",start_date:"October",end_date:"January",perks:{swags:!0,stipend:!1,cash_price:!1,internships_opportunity:!1,certificates:!0,surprise_gifts:!1},description:"DWoC is a winter-long program organized by Delta Force, the coding club of NIT Trichy.",timeline:"https://dwoc.io/",link:"https://dwoc.io/",color:"#DCE5FD"},{_id:9,image:"https://devscript.tech/woc/img/WOC-logo.png",title:"DevScript Winter of Code (DWoC)",start_date:"November",end_date:"March",perks:{swags:!0,stipend:!1,cash_price:!1,internships_opportunity:!0,certificates:!0,surprise_gifts:!0},description:"Winter of Code is an open-source program envisioned by DevScript that helps understand the paradigm of Open Source contribution. It aims to bring students into the world of open source development and see the power of unified problem-solving in real-time.",timeline:"https://devscript.tech/woc/",link:"https://devscript.tech/woc/",color:"#aad0f6"}]},Se={allUniversity(e){return e.university}},Fe={},Ae={};var je={state:Ce,getters:Se,mutations:Ae,actions:Fe};o["a"].use(j["a"]);var Oe=new j["a"].Store({modules:{competition:we,program:ke,university:je}});o["a"].use(ue["a"]),o["a"].config.productionTip=!1,new o["a"]({router:ce,vuetify:de,store:Oe,render:function(e){return e(C)}}).$mount("#app")},"591b":function(e,t,i){},"5ed9":function(e,t,i){"use strict";i("70bf")},"70bf":function(e,t,i){},"85ec":function(e,t,i){}});
//# sourceMappingURL=app.420052d9.js.map