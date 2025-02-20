"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[84730,18755],{431705:(e,t,n)=>{n.d(t,{$N:()=>I,Cu:()=>T,GY:()=>c,MZ:()=>l,NR:()=>_,S9:()=>s,bC:()=>O,fm:()=>i,id:()=>r,kM:()=>o,q6:()=>a,qp:()=>d,uV:()=>E,ug:()=>p,xL:()=>u});let i={DOWNLOAD_TEMPLATE:"DOWNLOAD_TEMPLATE",UPLOAD_TEMPLATE:"UPLOAD_TEMPLATE",HISTORY:"HISTORY",BULK_ID_LIBRARY:"BULK_ID_LIBRARY",RESOURCES:"RESOURCES"},a={GENERAL:"GENERAL",CAMPAIGNS:"CAMPAIGNS",AD_GROUPS:"AD_GROUPS",ADS:"ADS",KEYWORDS:"KEYWORDS",PRODUCT_GROUPS:"PRODUCT_GROUPS",ERROR_CODES:"ERROR_CODES"},r={INTEREST:"INTEREST",DEVICE:"DEVICE",LANGUAGE:"LANGUAGE",LOCATION:"LOCATION",LOCATION_COUNTRY:"LOCATION_COUNTRY",LOCATION_METRO:"LOCATION_METRO",LOCATION_REGION:"LOCATION_REGION",AUDIENCE:"AUDIENCE",TARGETING_TEMPLATE:"TARGETING_TEMPLATE",CONVERSION_TAG:"CONVERSION_TAG"},o={BILLING_HISTORY:"BILLING_HISTORY",BILLING_FORMS:"BILLING_FORMS",ORDER_LINES:"ORDER_LINES",PROMOTIONS:"PROMOTIONS",TAX_DOCUMENTS:"TAX_DOCUMENTS",DOCUMENTS:"DOCUMENTS",PREPAID_CAMPAIGN_SPEND:"PREPAID_CAMPAIGN_SPEND_SUMMARY"},s={CREATE:"CREATE",VIEW_RESULTS:"VIEW_RESULTS",VIEW_REPORT:"VIEW_REPORT"},l={GOOGLE_TAG_MANAGER:"Google Tag Manager",SHOPIFY:"Shopify",WOO_COMMERCE:"WooCommerce",WORDPRESS:"WordPress",SQUARESPACE:"Squarespace",WEEBLY:"Weebly",TEALIUM:"Tealium",MAGENTO:"Magento",ECWID:"Ecwid",BIG_COMMERCE:"BigCommerce",PREMMERCE:"Premmerce",SEGMENT:"Segment",BRANCH:"Branch",HIGHTOUCH:"Hightouch",EULERIAN:"Eulerian",ADOBE_CDP:"Adobe Real-Time CDP",ADOBE_COMMERCE:"Adobe Commerce",SALESFORCE_COMMERCE_CLOUD:"Salesforce Commerce Cloud",PINTEREST_CAPI_CONNECT:"Pinterest CAPI Connect"},u={GTM:"GTM",SHOPIFY:"SHOPIFY",WORDPRESS:"WORDPRESS",WOOCOMMERCE:"WOOCOMMERCE",TEALIUM:"TEALIUM"},d={PINTEREST_TAG:"PINTEREST_TAG",PINTEREST_TAG_MANUAL_SETUP_FLOW:"PINTEREST_TAG_MANUAL_SETUP_FLOW",PINTEREST_TEST_EVENTS:"PINTEREST_TEST_EVENTS",PINTEREST_TAG_HEALTH:"PINTEREST_TAG_HEALTH",CONVERSION_HEALTH:"CONVERSION_HEALTH",CONVERSION_UPLOAD:"CONVERSION_UPLOAD",UPLOAD_HISTORY:"UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD:"PCA_UPLOAD",CONVERSIONS_API:"CONVERSIONS_API",CONVERSIONS_API_ACCESS_TOKEN:"CONVERSIONS_API_ACCESS_TOKEN",CONVERSIONS_API_DEDUPLICATION:"CONVERSIONS_API_DEDUPLICATION",CONVERSIONS_API_PARTNER_SETUP_FLOW:"CONVERSIONS_API_PARTNER_SETUP_FLOW",CONVERSIONS_API_MANUAL_SETUP_FLOW:"CONVERSIONS_API_MANUAL_SETUP_FLOW",PINTEREST_EVENTS_OVERVIEW:"PINTEREST_EVENTS_OVERVIEW",CONVERSIONS:"CONVERSIONS",PINTEREST_EVENTS_OVERVIEW_BEFORE_SETUP:"PINTEREST_EVENTS_OVERVIEW_BEFORE_SETUP",PINTEREST_SETUP_API:"PINTEREST_SETUP_API",NOCODE_CONVERSIONS_API_SETUP_FLOW:"NOCODE_CONVERSIONS_API_SETUP_FLOW",PINTEREST_EVENTS_OVERVIEW_CAPI_TAB:"PINTEREST_EVENTS_OVERVIEW_CAPI_TAB",PINTEREST_EVENT_HISTORY_CAPI_TAB:"PINTEREST_EVENT_HISTORY_CAPI_TAB"},c={PINTEREST_TAG_DASHBOARD:"PINTEREST_TAG_DASHBOARD",PINTEREST_TAG_LANDING:"PINTEREST_TAG_LANDING",PINTEREST_TAG_INSTRUCTIONS:"PINTEREST_TAG_INSTRUCTIONS",CONVERSION_UPLOAD_LANDING:"CONVERSION_UPLOAD_LANDING",CONVERSION_UPLOAD_VALIDATION:"CONVERSION_UPLOAD_VALIDATION",CONVERSION_UPLOAD_HISTORY:"CONVERSION_UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD_LANDING:"PCA_UPLOAD_LANDING",PCA_UPLOAD_VALIDATION:"PCA_UPLOAD_VALIDATION"},_={DESTINATION:"destination",EXPIRY:"expiry",SOURCE:"attributionsrc",SOURCE_EVENT_ID:"source_event_id",SOURCE_EVENT_TYPE:"source_event_type",PRIORITY:"priority",CLICK_PRIORITY:"2",VIEW_PRIORITY:"1",HOSTNAME:"hostname",CAMPAIGN_ID:"campaign_id",ADVERTISER_ID:"advertiser_id"},E="604800",p="86400",I={ATTRIBUTION_SOURCE_ID:"attributionsourceid",ATTRIBUTE_DESTINATION:"attributiondestination",ATTRIBUTE_ON:"attributeon"},O="click",T="view"},829196:(e,t,n)=>{n.d(t,{YS:()=>s,eF:()=>l,m_:()=>o});var i=n(431705),a=n(194093),r=n(415787);function o(e,t,n,a,o){let s=new URLSearchParams,l=t.reduce((e,t)=>{if(null!=t){let n=function(e){let t;try{t=decodeURIComponent(e)}catch(n){t=e}t.startsWith("http")?t.startsWith("http://")&&(t=t.replace("http://","https://")):t="https://"+t;try{return new URL(t).origin}catch(i){let n=t.match(/^(https?:\/\/[^\/]+)(\/|$)/);if(n&&n.length>1)return n[1];return e}}(t);return e.add(n)}return e},new Set);s.append(i.NR.SOURCE_EVENT_ID,e??"0"),s.append(i.NR.DESTINATION,JSON.stringify([...l])),s.append(i.NR.EXPIRY,n?i.uV:i.ug),s.append(i.NR.PRIORITY,n?i.NR.CLICK_PRIORITY:i.NR.VIEW_PRIORITY),o&&s.append(i.NR.ADVERTISER_ID,o),a&&s.append(i.NR.CAMPAIGN_ID,a),s.append(i.NR.SOURCE_EVENT_TYPE,n?i.bC:i.Cu);try{let{hostname:e}=new URL(window.location.href);"www.pinterest.com"!==e&&s.append(i.NR.HOSTNAME,e)}catch(e){(0,r.nP)("webapp.arapi.generateARASourceEventURL",{sampleRate:.1,tags:{status:"failed",href:window&&window.location&&window.location.href}})}return"https://www.pinterest.com/attribution_source/?"+s.toString()}async function s(e,t,n,i,s,l,u,d,c){let _;let{appType:E,osType:p}=l||{},I="",O="";if(["Pin","pinImpressions"].includes(e)&&t&&(i||d||c)){(0,r.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"start",appType:E,osType:p}});try{if(!window.document.featurePolicy?.allowsFeature("attribution-reporting")){(0,r.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"skipped",message:"attribution-reporting is not enabled",appType:E,osType:p}});return}I=o(n,[i,d,c],!1,s,u);try{O=new URL(window.location.href).hostname}catch(e){(0,r.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"hostname_parse_failed",href:window&&window.location&&window.location.href}})}if(O&&"www.pinterest.com"!==O)document.createElement("img").setAttribute("attributionsrc",I),(0,r.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"international",appType:E,osType:p,hostname:O}});else if(!(_=await window.fetch(I,{keepalive:!0,attributionReporting:{eventSourceEligible:!0,triggerEligible:!1}})).ok)throw Error("server request failed.");(0,r.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"success",appType:E,osType:p}})}catch(e){(0,r.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"failed",error:(0,a.Z)(e,"name"),message:(0,a.Z)(e,"message"),appType:E,osType:p,hostname:O,responseStatus:_&&_.status}})}}else(0,r.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"missing_param",appType:E,osType:p}})}function l(e){if(e){let t=e.toLowerCase();if(t.includes("windows"))return"windows xp"===t?1:"windows vista"===t?2:"windows 7"===t?3:"windows 8"===t?4:12;if(t.includes("mac os"))return 5;if(t.includes("android"))return 7;if(t.includes("ios"))return 6;if(t.includes("ubuntu"))return 8;if(t.includes("chromium os"))return 13}return 0}},118755:(e,t,n)=>{n.d(t,{G6:()=>r,i7:()=>o,oi:()=>i,u$:()=>a,un:()=>l,vU:()=>s,w1:()=>u});let i=Object.freeze({OTHER:0,CHROME:1,SAFARI:2,IE:3,FIREFOX:4,OPERA:5,EDGE:6}),a=e=>e?e.includes("Chrome")?i.CHROME:e.includes("Safari")?i.SAFARI:e.includes("Firefox")?i.FIREFOX:e.includes("Opera")?i.OPERA:e.includes("IE")?i.IE:e.includes("Edge")?i.EDGE:i.OTHER:i.OTHER;function r(e){return a(e)===i.SAFARI}function o(e){return a(e)===i.CHROME}function s(e){return a(e)===i.FIREFOX}function l(e){return a(e)===i.EDGE}function u(e){return a(e)===i.IE}},573706:(e,t,n)=>{n.d(t,{B:()=>l,v:()=>s});var i=n(477058),a=n(498490),r=n(785893);let{Provider:o,useHook:s}=(0,a.Z)("ContextLogger");function l({children:e,value:t}){let{setViewContextData:n}=(0,i.sV)();return t.injectSetViewContextDataFromHook=n,(0,r.jsx)(o,{value:t,children:e})}},830997:(e,t,n)=>{n.d(t,{g:()=>o,t:()=>r});var i=n(667294);let a=(0,i.createContext)(null),r=a.Provider,o=()=>(0,i.useContext)(a)},476198:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(667294),a=n(883119),r=n(149118),o=n(410150),s=n(969119),l=n(785893);function u({_dangerouslySetThumbnail:e,_dangerouslySetPrimaryAction:t,text:n,primaryAction:u,dismissButton:d,helperLink:c,thumbnail:_,type:E,dataTestId:p,duration:I=2e3,onHide:O,href:T,onClick:S,openNewPage:R,imageUrl:m}){let A;let N=(0,o.ZP)(),[P,g]=(0,i.useState)(!1),[f,h]=(0,i.useState)(!1),C=(0,i.useRef)(),v=()=>{g(!0),C.current=setTimeout(O,r.Vg)},L=()=>{C.current=setTimeout(v,I)},D=()=>{C.current&&clearTimeout(C.current)};(0,s.Z)(()=>(setTimeout(()=>h(!0),100),L(),D)),m&&(A={image:(0,l.jsx)(a.Ee,{alt:"string"==typeof n?n:`${n[0]} ${n[1]}`,fit:"cover",naturalHeight:1,naturalWidth:1,src:m})});let w=(0,l.jsx)(a.FN,{_dangerouslySetPrimaryAction:t,_dangerouslySetThumbnail:e,dismissButton:d,helperLink:c,primaryAction:u,text:n,thumbnail:A??_,type:E}),{marginTop:U,opacity:b,pointerEvents:y,position:M,transform:V,transition:G,visibility:H}=(0,r.ZP)({deviceType:N,hiding:P,visible:f});return(0,l.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{transform:V,transition:G,visibility:H,pointerEvents:y}},"data-test-id":p??"toast",display:"flex",marginTop:U,onMouseEnter:D,onMouseLeave:L,opacity:b,position:M,children:T?(0,l.jsx)(a.Tg,{href:T,onTap:({event:e,dangerouslyDisableOnNavigation:t})=>{T.startsWith("#")&&(e.preventDefault(),t()),S?.(e)},rounding:"pill",target:R?"blank":null,children:w}):w})}},149118:(e,t,n)=>{n.d(t,{Vg:()=>i,ZP:()=>a});let i=200,a=({deviceType:e,hiding:t,visible:n})=>{let i="desktop"===e,a=0,r=i?"translateY(200px)":"translateY(-200px)",o="opacity 0.1s ease-in-out",s="hidden";return n&&!t&&(a=1,r="translateY(0)",o="all 0.7s cubic-bezier(.19, 1.15, .48, 1)",s="visible"),n&&t&&(r="scale(1.1)",o="opacity transform 0.2s"),{opacity:a,pointerEvents:"auto",position:"relative",marginTop:i?10:0,transform:r,transition:o,visibility:s}}},559028:(e,t,n)=>{n.d(t,{qE:()=>s,u_:()=>l.ZP,FN:()=>u.Z});var i=n(883119),a=n(785893);let r=(e,t)=>!!(e?.includes("images/user/default")&&t);function o({accessibilityLabel:e,color:t,name:n,outline:o,size:s,src:l,verified:u}){return(0,a.jsx)(i.qE,{accessibilityLabel:e,color:t,name:n,outline:o,size:s,src:r(l,n)?void 0:l,verified:u})}o.displayName="Avatar";let s=o;var l=n(758339),u=n(476198)},240760:(e,t,n)=>{function i(e,t,n){return e.split(n).map(e=>{if(e.match(n)){let n=e.replace(/[\{\}]/g,"").trim();if(Object.prototype.hasOwnProperty.call(t,n))return t[n]}return e})}n.d(t,{Wc:()=>s,XB:()=>o,bF:()=>u,nk:()=>r});let a=/(\{\{\s*\w+\s*\}\})/g;function r(e,t){return i(e,t,a)}function o({text:e,markers:t,jsxReplacements:n}){let a=["strong","a","em","span"],r=/(\{\{\s*\w+\s*\}\})/g,o=/<\s*(strong|a|em|span)\b[^>]*>.*?<\s*\/\s*\1\s*>/g,s=/<(strong|a|em|span)\s+[^>]*id\s*=\s*["']([^"']+)["'][^>]*>/,l=/<(strong|a|em|span)\b[^>]*>(.*?)<\/\1>/,u=e.match(o)?.map(e=>{let a=e.match(s),o=(a&&a[2])??0,u=e.match(l),d=(u&&u[2])??"",c=t?i(d,t,r):[d];return o&&n&&n[o]?.({innerHtmlStrings:c})});return e.split(o)?.map(e=>a.some(t=>e===t)?u?.shift():t?i(e,t,r):e)}function s(e,t){return i(e,t,a).join("")}let l=/(\{\s*\w+\s*\})/g;function u(e,t){return i(e,t,l)}},812477:(e,t,n)=>{n.d(t,{Z:()=>r,c:()=>o});var i=n(616550);let a=["/BingSiteAuth.xml","/about","/add-account","/ads","/ads.txt","/age_verification","/all","/app-ads.txt","/apple-app-site-association","/apple-app-site-association.p7m","/attribution_source","/bot.html","/branded-pins","/browserbutton","/buy-it","/careers","/categories","/close-account","/content-claiming","/convert-business","/convert-personal","/create-business","/create-personal","/creation-inspiration","/creator-onboarding-landing","/csrf_error","/ct.html","/deactivate-account","/deed6a3ef3a44d41bb3ae2bad137db84.txt","/developers","/discover","/edit","/email_verification_error","/engagement","/explore","/favicon.ico","/fb.html","/flyup-instant-loading-indicator-app-shell.html","/following","/getWebPushKey","/google_gdn.html","/google_search.html","/googlef5dc42d6e03f6e61.html","/guidedsearch","/help","/holidays-celebrations","/homefeed","/idea-ads-tool","/idea-pin-builder","/ideas","/inbox","/install-shuffles","/invited","/jobs","/lens-search","/login","/logout","/manifest.json","/manifest.webapp","/me","/messages","/mobile","/notifications","/oauth","/app-factory-oauth","/appealed-pin","/oembed.json","/offline.html","/offsite","/opensearch.xml","/parent_contact_info","/parental-passcode","/pin-builder","/pin-creation-tool","/pin-editor","/pin_catalog","/pin_redirect","/pinterest-wellbeing","/pinterest-predicts","/pinterestlens","/pinterestlenstryon","/pinterestwellbeing","/policy","/product-catalogs","/public-beta","/quick-instant-loading-indicator-app-shell.html","/quick-lite-instant-loading-indicator-app-shell.html","/recently-viewed","/refresh_stored_accounts","/refresh_token","/report","/reports-and-violations","/request-data","/robots.txt","/safe-redirect","/search","/settings","/shopping","/signup","/socialmanager","/story-pin-builder","/story_feed","/sw-shell.html","/sw.html","/sw.js","/switch_account","/terms","/today","/topics","/transparent.html","/unauth-profile","/unlink","/upload-image","/upload-image-lens-history","/upload-lens-image","/upload-profile-image","/verified","/verify","/videos","/web-custom-svg","/web-mentorship","/welcome","/windows-app-web-link","/your-shop"];function r(e){return!!(0,i.LX)(e.pathname,{path:"/:username/",exact:!0})&&!a.includes(e.pathname.replace(/\/$/,""))}function o(e){return!!(0,i.LX)(e.pathname,{path:"/:username/_created/",exact:!0})}},529264:(e,t,n)=>{n.d(t,{H5:()=>I,Xn:()=>E,an:()=>p});var i=n(868808);let a="BING",r="GOOGLE",o="YAHOO",s="YANDEX",l="RAKUTEN",u="NAVER",d="AMP_CACHE",c="DUCKDUCKGO",_=[r,a,o,s,l,u,d,c];function E(e){return _.includes(function(e){let{hostname:t}=(0,i.Qc)(e,!0);if(t&&e){if(t.includes("google.")||e.includes("android-app://com.google.android.googlequicksearchbox"))return r;if(t.includes("bing."))return a;if(t.includes("yahoo."))return o;if(t.includes("yandex."))return s;else if(t.includes("rakuten."))return l;else if(t.includes("naver."))return u;else if(t.includes("duckduckgo."))return c;else if(t.includes(".cdn.ampproject.org"))return d}return""}(e))}function p(e){return e||"undefined"!=typeof document&&document.referrer||""}let I=e=>{let t=new URL(e);return t.searchParams.set("nii","t"),t.href}},873095:(e,t,n)=>{n.d(t,{l:()=>r,r:()=>o});var i=n(667294);let a=(0,i.createContext)(null),r=()=>(0,i.useContext)(a),o=a.Provider},415384:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(184309);let a=/\{\{\s*(\w+)\s*\}\}/g,r=(e,t)=>(0,i.Z)(a,e,t)},744823:(e,t,n)=>{n.d(t,{Z:()=>i});let i=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;")},184309:(e,t,n)=>{n.d(t,{Z:()=>i});let i=(e,t,n)=>t?t.replace(e,(e,t)=>n&&Object.prototype.hasOwnProperty.call(n,t)?n[t]:""):""},207630:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(415384),a=n(744823);let r=(e,t)=>{let n={};return Object.keys(t).forEach(e=>{n[e]=t[e]?(0,a.Z)(t[e].toString()):""}),(0,i.Z)(e,n)}},154785:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(667294),a=n(616550),r=n(282999),o=n(812477),s=n(1006);let l=e=>(0,r.L6)(e)?"pin":(0,r.am)(e)?"board":(0,r.Xn)(e)?"login":(0,r.C$)(e)?"home":(0,o.Z)(e)?"profile":(0,r.dr)(e)?"ideas":(0,r.gT)(e)?"ideas-root":(0,r.tZ)(e)?"videos":(0,r.Q0)(e)?"videos-category":(0,r.$Y)(e)?"article":(0,r.E0)(e)?"shopping-spotlight":(0,r.Zz)(e)?"today":(0,r.j8)(e)?"unauth-profile":(0,r.f1)(e)?"shopping-root":(0,r.OX)(e)?"shopping-category":"other";function u(){let e=(0,a.TH)();return(0,i.useCallback)(({action:t,item:n,within:i})=>{let a=l(e);(0,s.My)(`logged_out_product.interaction.${a}.${t}`,{item:n||"none",within:i||"none"})},[e])}},901450:(e,t,n)=>{n.d(t,{F9:()=>a,Zo:()=>i});let{Provider:i,useHook:a}=(0,n(498490).Z)("toastManagerContext")},623722:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(414416),a=n(503237);let r=e=>{let t=/^\/pin\/([a-zA-Z0-9-]+)/,n=(0,a.Z)(e);if(t.test(n.path)){let e=n.path.match(t);if(e)return(0,i.Z)(e[1]).pinId||void 0}}},644797:(e,t,n)=>{n.d(t,{W:()=>d,r:()=>u});var i=n(667294),a=n(573706),r=n(498490),o=n(297728),s=n(785893);let{Provider:l,useHook:u}=(0,r.Z)("VideoPlayer");function d({children:e}){let{logContextEvent:t,logImpression:n}=(0,a.v)(),{checkExperiment:r}=(0,o.F)(),[u,d]=(0,i.useState)(!1),[c,_]=(0,i.useState)([]),[E,p]=(0,i.useState)([]),[I,O]=(0,i.useState)({}),T=r("web_ads_mrc_video_impression").anyEnabled,S=e=>{O(t=>({...t,[e]:!0}))},R=(0,i.useCallback)(e=>{if(18===e.event_type&&e.event_data?.pinImpressions?.length){let{isNativeVideoAndWatchable:t}=e.event_data.pinImpressions[0],n=JSON.stringify(e.aux_data?.commerce_data||"").includes("story_pin_id");T&&(t||n)&&_(t=>[...t,e].slice(-1e3))}},[T]),m=(0,i.useCallback)(e=>{18===e.eventType&&T&&p(t=>[...t,e].slice(-1e3))},[T]),A=e=>{let{time:t}=e.event_data.pinImpressions[0];return{...e,event_data:{...e.event_data,pinImpressions:[{...e.event_data.pinImpressions[0],isMrcBtr:!0,endTime:t,renderDuration:0}]}}},N=e=>{if(e.eventData){let{time:t}=e.eventData;return{...e,eventData:{...e.eventData,isMrcBtr:!0,endTime:t??0}}}return null};(0,i.useEffect)(()=>{let e=c.filter(e=>{let{pinIdStr:n}=e.event_data.pinImpressions[0];return!I[n]||!T||(t(A(e)),!1)});e.length!==c.length&&_(e)},[c,T,t,I]),(0,i.useEffect)(()=>{let e=E.filter(e=>{let t=e.eventData?.pinIdStr;if(!t)return!1;if(I[t]&&T){let t=N(e);return t&&n(t),!1}return!0});e.length!==E.length&&p(e)},[E,T,n,I]);let P=(0,i.useMemo)(()=>({captionsEnabled:u,logMrcVideoAdImpressionOnPlay:m,logMrcVideoAdEventOnPlay:R,setCaptionsEnabled:d,setVideoPlayed:S,videosPlayed:I}),[u,R,m,I]);return(0,s.jsx)(l,{value:P,children:e})}},845873:(e,t,n)=>{n.d(t,{bn:()=>s,fJ:()=>u,gC:()=>l});var i=n(545007),a=n(498490),r=n(785893);let{Provider:o,useHook:s}=(0,a.Z)("Boards");function l(){let e=s();return t=>e[t]}function u({children:e}){let t=(0,i.v9)(({boards:e})=>e,i.wU);return(0,r.jsx)(o,{value:t,children:e})}},424583:(e,t,n)=>{n.d(t,{Tt:()=>c,cm:()=>d,kW:()=>l,kY:()=>_,mN:()=>u});var i=n(545007),a=n(498490),r=n(383399),o=n(785893);let{Provider:s,useHook:l}=(0,a.Z)("Users");function u(){let e=l();return t=>e[t]}function d(){let e=l();return(t,n=!1)=>{let i=Object.keys(e).find(n=>e[n].username===t);if(i||!n)return e[i??""]}}function c(){let{id:e}=(0,r.Z)();return l()[e??""]}function _({children:e}){let t=(0,i.v9)(({users:e})=>e,i.wU);return(0,o.jsx)(s,{value:t,children:e})}},563646:(e,t,n)=>{n.d(t,{w:()=>l,z:()=>s});var i=n(667294),a=n(498490),r=n(785893);let{Provider:o,useMaybeHook:s}=(0,a.Z)("CloseupPreviewContext");function l({children:e}){let[t,n]=(0,i.useState)(Object.freeze({})),a=(0,i.useMemo)(()=>({setData:(e,t)=>n(n=>({...n,[e]:t})),getData:e=>t[e]}),[t]);return(0,r.jsx)(o,{value:a,children:e})}},193836:(e,t,n)=>{n.d(t,{_l:()=>R,cO:()=>S,t2:()=>m,w2:()=>A,xM:()=>T});var i=n(667294),a=n(616550),r=n(252071),o=n(282999),s=n(868808),l=n(410150),u=n(383399),d=n(785893);let c="UnauthDesktopSocialPinLandingPageContext",_="AthDesktopSocialPinLandingPageContext",E="AuthMobileSocialPinLandingPageContext",p=(0,i.createContext)(),I=({children:e})=>{let[t,n]=(0,i.useState)(!1),[a,r]=(0,i.useState)(!1),o=(0,i.useMemo)(()=>({hasSeenAuthMobileLandingToast:t,setHasSeenAuthMobileLandingToast:n,hasSeenAuthDesktopLandingToast:a,setHasSeenAuthDesktopLandingToast:r}),[t,n,a,r]);return(0,d.jsx)(p.Provider,{value:o,children:e})},O=(0,i.createContext)({key:"",data:null}),T=({children:e})=>{let t=(0,a.TH)(),n=(0,u.Z)(),p=n&&n.isAuth,T=(0,l.HG)(),S=(0,i.useRef)((0,o.fY)(t)&&(0,s.mB)(t.search).invite_code||null),R=(0,a.LX)(t.pathname,{path:"/pin/:id"}),m=String(R&&"id"in R.params&&R.params.id)||"",[A,N]=(0,i.useState)({key:"",data:null});return(0,i.useEffect)(()=>{(async function(){let e=S.current;if(e)try{let t=r.Z.create("InviteCodeMetadataResource",{invite_code:e}),i=(await t.callGet()).resource_response.data;if(i){let e=i.sender??null,t=p&&e.id!==n.id&&e?.should_show_messaging&&n.should_show_messaging;!p&&T?N({key:c,data:{inviter:e,popoverData:e&&![5,9,12,16].includes(i.invite_channel)?{inviterAvatarUrl:e.image_medium_url||"",inviterName:e.first_name||e.full_name}:null}}):t&&!T?N({key:E,data:{toastData:{inviter:{inviterAvatarUrl:e.image_medium_url||"",inviterName:e.first_name||e.full_name,inviterId:e.id},viewer:{viewerId:n.id||""},pin:{pinId:m}}}}):t&&T&&N({key:_,data:{toastData:{inviter:{inviterAvatarUrl:e.image_medium_url||"",inviterName:e.first_name||e.full_name,inviterId:e.id},viewer:{viewerId:n.id||""},pin:{pinId:m}}}})}else N({key:"",data:null})}catch{N({key:"",data:null})}})()},[p,T,n,m]),(0,d.jsx)(I,{children:(0,d.jsx)(O.Provider,{value:A,children:e})})},S=()=>{let e=(0,i.useContext)(O);return e.key===c?e:null},R=()=>{let e=(0,i.useContext)(O);return e.key===E?e:null},m=()=>{let e=(0,i.useContext)(O);return e.key===_?e:null},A=()=>(0,i.useContext)(p)},720802:(e,t,n)=>{n.d(t,{M:()=>D,R:()=>v});var i=n(667294),a=n(609326),r=n(817578),o=n(498490),s=n(864723),l=n(969119),u=n(640498),d=n(842909);let c=()=>(0,s.M0)().getItem(a.Vb)||[],_=({pinId:e,link:t,imageSignature:n,domain:i})=>{let r=[...c()],o=r.length,l=o?r[0].pinId:"";if(!o||e!==l){let r=(0,d.Z)({pinId:e,link:t,imageSignature:n,domain:i});(0,s.M0)().prependItem(a.Vb,r,u.LG)}},E=()=>(0,s.M0)().getItem(a.ny)||[],p=({query:e,rs:t,scope:n,rg:i})=>{let r=[...E()],o=r.length,l=o?r[0].query:"";if(!o||e!==l){let r=(0,d.Z)({query:e,rs:t,scope:n,rg:i});(0,s.M0)().prependItem(a.ny,r,u.LG)}},I=({query:e})=>{let t=[...E()].filter(t=>t.query!==e);(0,s.M0)().setItem(a.ny,t)};function O(e,t,n){if(e>=n)return`${n}+`;if(e<=0)return"0";let i=e.toString();if(e>t){let n=Math.floor(e/t);i=`${n*t}+`}return i}var T=n(333289),S=n(445330),R=n(927371),m=n(785893);let A=()=>(0,s.M0)().getItem(a.s1)??[],N=()=>parseInt((0,s.M0)().getItem(a.rN)||0,10),P=e=>O(e,5,20),g=(e,t,n)=>t.reduce((t,n)=>(Array.isArray(e[n])&&(t[n+"Count"]=P(e[n].length)),t),n),f=e=>({...e,_updateUnauthUserAggregateDefinitions:function(){let{completedSearches:t,closeupPins:n,clickthroughPins:i,downloadedPinsCount:a}=e;e.isQUS=Number(t.length>=1||n.length>=3||i.length>=1||a>=1)},_getDaysSinceLastRevisitation:function(){let{revisitationState:t}=e,{ts:n}=t,i=new Date,a=new Date(n||i),r=Math.max(Math.floor(Number(((i.getTime()-a.getTime())/864e5).toFixed(2))),0),o=O(r,7,84);return[r,o]},getStatslogData:function(){return{core:g(e,[],{isQUS:e.isQUS.toString(),isAllowedCountry:e.isAllowedCountry.toString(),daysSinceLastRevisitationBucket:e.daysSinceLastRevisitationBucket}),counts:g(e,["closeupPins","completedSearches","clickthroughPins","savedPins","invitesRedeemed"],{revisitationCount:P(e.revisitationState.count||1),downloadedPinsCount:P(e.downloadedPinsCount)})}}}),h=({isAuthenticated:e,countryFromIp:t,countryFromHostName:n})=>{let i={isAuthenticated:Number(e),countryFromIp:t||"",countryFromHostName:n||"",closeupPins:[],completedSearches:[],clickthroughPins:[],downloadedPinsCount:0,savedPins:[],invitesRedeemed:[],isQUS:0,revisitationState:(0,S.K7)(),daysSinceLastRevisitation:0,daysSinceLastRevisitationBucket:"0",isAllowedCountry:Number((0,r.j)(t||"")&&(0,r.j)(n||""))};if(e||!i.isAllowedCountry)return Object.freeze({...f(i),...i});i.closeupPins=(0,R.Z)(),i.completedSearches=E(),i.clickthroughPins=c(),i.downloadedPinsCount=N(),i.savedPins=A(),i.invitesRedeemed=(0,T.SL)(),i.revisitationState=(0,S.iU)();let a=f(i),[o,s]=a._getDaysSinceLastRevisitation();return i.daysSinceLastRevisitation=o,i.daysSinceLastRevisitationBucket=s,a._updateUnauthUserAggregateDefinitions(),Object.freeze({...a,...i})},{Provider:C,useHook:v}=(0,o.Z)("UnauthUserStateContext");function L(e,t){let{isAuthenticated:n,countryFromIp:i,countryFromHostName:a,isAllowedCountry:r}=e;if(n||!r)return e;switch(t.type){case"UPDATE":break;case"ADD_UNAUTH_COMPLETED_SEARCH":p(t.payload);break;case"REMOVE_UNAUTH_COMPLETED_SEARCH":I(t.payload);break;case"ADD_UNAUTH_CLICKTHROUGH_PIN":_(t.payload);break;default:return e}return h({isAuthenticated:n,countryFromIp:i,countryFromHostName:a})}function D({children:e,initialState:t}){let[n,a]=(0,i.useReducer)(L,t,h);(0,l.Z)(()=>{a({type:"UPDATE"})});let r=(0,i.useMemo)(()=>({unauthUserState:n,unauthUserStateDispatch:a}),[n,a]);return(0,m.jsx)(C,{value:r,children:e})}},842909:(e,t,n)=>{n.d(t,{Z:()=>i});let i=function(e){return{...e,ts:Date.now()}}},333289:(e,t,n)=>{n.d(t,{Lp:()=>u,SL:()=>s,nR:()=>l});var i=n(609326),a=n(640498),r=n(864723),o=n(842909);let s=()=>(0,r.M0)().getItem(i.nF)??[],l=()=>(0,r.M0)().getItem(i.T6)??"",u=e=>{if(!e)return;let t=(0,o.Z)({inviteCode:e}),n=(0,r.M0)();n.setItem(i.T6,t),n.prependItem(i.nF,t,a.LG)}},445330:(e,t,n)=>{n.d(t,{K7:()=>o,Vd:()=>l,iU:()=>s});var i=n(609326),a=n(864723),r=n(842909);let o=()=>({count:1,time:0,ts:Date.now()}),s=()=>{try{let{count:e,time:t,ts:n}=(0,a.M0)().getItem(i.SI)??{};if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return{count:e,time:t,ts:n};throw Error("Invalid revisitation data")}catch(e){return o()}},l=e=>{(0,a.M0)().setItem(i.SI,(0,r.Z)(e))}},814779:(e,t,n)=>{n.d(t,{E:()=>o,S:()=>s});var i=n(667294),a=n(786525);let r="_loggingInNotHome",o=e=>{e?(0,a.Nh)(r,1):(0,a.L_)(r)},s=()=>{let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{t(!0)},[]),e&&(0,a.qn)(r)}},897791:(e,t,n)=>{n.d(t,{$:()=>u,Z:()=>_});var i=n(609326),a=n(192820),r=n(730212),o=n(993754),s=n(864723),l=n(166408);let u=2,d=e=>e?.pins??[],c=e=>e.length?{pins:e}:null,_=()=>{let{isAuthenticated:e,countryFromHostName:t,countryFromIp:n}=(0,r.B)(),_=(0,o.Z)({countryFromHostName:t||"",countryFromIp:n||"",isAuthenticated:e}),E=(0,s.M0)(),p=d(_?E.getItem(i.s1):l.ZP.getItem(a.w3)),I=e=>_?E.setItem(i.s1,c(e)):l.ZP.setItem(a.w3,c(e)),O=()=>p.length<u;return{pins:p,save:e=>{O()&&I(p.filter(({id:t})=>t!==e.id).concat([e]))},unsave:e=>I(p.filter(({id:t})=>t!==e)),isSaved:e=>p.some(({id:t})=>t===e),clear:()=>I([]),canSaveMore:O}}},754143:(e,t,n)=>{n.d(t,{H:()=>a,o:()=>i});let{Provider:i,useHook:a}=(0,n(498490).Z)("LimitedLogin")},578406:(e,t,n)=>{n.d(t,{N4:()=>r,Wh:()=>i,hr:()=>a});let i=e=>e._('Log in to continue', 'limitedLogin.modalHeader.default', 'Default title on mobile web limited login modal'),a=e=>e._('You\'re almost there! Log in to access all of Pinterest', 'loginModal.limitedLogin.subheader', 'Subheader text on personalized login modal/flyout to remind users to log in'),r=({i18n:e,toFollow:t})=>t?e._('Log in to follow', 'limitedLogin.modalHeader.follow', 'Title on mobile web limited login modal to prompt users to login to follow a user or board.'):e._('Log in to unfollow', 'limitedLogin.modalHeader.unfollow', 'Title on mobile web limited login modal to prompt users to login to unfollow a user or board.')},927371:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(640498),a=n(623722),r=n(592305);let o=e=>{let t=new Date,n=new Date(new Date().setDate(t.getDate()-i.ZB));return e.filter(e=>"closeup"===e.pageType&&new Date(e.ts)>=n)},s=()=>o((0,r.ZP)()).map(e=>({...e,id:(0,a.Z)(e.path)||""}))},592305:(e,t,n)=>{n.d(t,{Z4:()=>u,ZP:()=>d,t_:()=>s});var i=n(609326),a=n(640498),r=n(864723),o=n(842909);let s=()=>{let e=(0,r.M0)().getItem(i.pm);return null!==e?JSON.stringify(e):""},l=()=>(0,r.M0)().getItem(i.pm)??[],u=(e,t)=>{let n=[...l()],s=n.length,u=s?n[0].path:"";if(!s||e!==u){let n=(0,o.Z)({path:e,pageType:t});(0,r.M0)().prependItem(i.pm,n,a.LG)}},d=l}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/84730-58908feade217d29.mjs.map