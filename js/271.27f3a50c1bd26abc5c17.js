"use strict";(self.webpackChunkconnect=self.webpackChunkconnect||[]).push([[271],{5339:function(e,t,r){r.d(t,{f:function(){return F}});var n=r(2950),a=r.n(n),o=r(6530),s=r(899),c=r(5697),i=r.n(c),l=r(8335);function u(e,t){return{getRows(){return[{label:t("review-order.customer_info.customer_number"),value:e?.customerAccountId??"-"}]}}}u.propTypes={orderDetails:i().object.isRequired,local:i().func.isRequired};var d=u;function h(e,t){return{getRows(){return[{label:t("review-order.customer_info.customer_number"),value:e?.azureCustomerId??"-"}]}}}h.propTypes={orderDetails:i().object.isRequired,local:i().func.isRequired};var p=h;function m(e,t,r){switch(e){case"aws":return new d(t,r);case"azure":return new p(t,r);default:throw new Error(`Unknown partner: ${e}`)}}m.propTypes={partnerId:i().string.isRequired,orderDetails:i().object,local:i().func.isRequired};var f=m;function g(e){return{error:()=>`/${e}/error`,orderError:()=>`/${e}/order-error`,exportError:()=>`/${e}/export-error`,systemError:()=>`/${e}/system-error`,alreadyLinked:()=>`/${e}/already-linked`,tokenError:()=>`/${e}/token-error`,unauthorized:()=>"/unauthorized",needAssistance:()=>`/${e}/need-assistance`}}var y=r(5265),b=JSON.parse('[{"code":"de_DE","name":"German","nativeName":"Deutsch"},{"code":"en_US","name":"United States (English)","nativeName":"United States (English)"},{"code":"es_ES","name":"Spanish; Castilian","nativeName":"Español, Castellano"},{"code":"fr_FR","name":"French","nativeName":"Français, Langue Française"},{"code":"it_IT","name":"Italian","nativeName":"Italiano"},{"code":"ja_JP","name":"Japanese","nativeName":"日本語 (にほんご／にっぽんご)"},{"code":"ko_KR","name":"Korean","nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"},{"code":"pt_BR","name":"Portuguese","nativeName":"Português"},{"code":"ru_RU","name":"Russian","nativeName":"русский язык"},{"code":"zh_CN","name":"Chinese","nativeName":"中文 (Zhōngwén), 汉语, 漢語"}]');function k(e){const{local:t,onAgreeToTerms:r,onSelectTermsId:o,terms:s}=e,c=s[0]?.translations,[i,u]=(0,n.useState)(E()),[d,h]=(0,n.useState)(w(s)),[p,m]=(0,n.useState)(!1);return a().createElement(a().Fragment,null,a().createElement(l.FormGroup,{label:"Terms and conditions *"},a().createElement(l.FormSelect,{value:i.code,onChange:e=>{let t=b.find((t=>t.code===e));u(t);let r=(e=>c.find((t=>t.localeCode===e)))(e);h(r),o(r.id)},"aria-label":"FormSelect Input",className:"pf-c-form-select-control"},b.map(((e,t)=>a().createElement(l.FormSelectOption,{key:t,value:e.code,label:e.nativeName})))),a().createElement(l.Checkbox,{id:"agree-check",isChecked:p,className:"pf-u-mt-md",label:a().createElement(a().Fragment,null,t("link-account.terms"),a().createElement(l.Button,{variant:"link",isInline:!0,onClick:()=>{window.open(d.downloadUrl,"_blank")}},t("link-account.conditions")," ",a().createElement(y.LA,null))),onChange:e=>{m(e),r(e)},"aria-label":"terms checkbox"})))}function E(){return b.find((e=>"en_US"===e.code))||b?.[0]||null}function w(e){let t=E(),r=e?.[0]?.translations;return r?.find((e=>e.localeCode===t.code))}k.propTypes={local:i().func.isRequired,onAgreeToTerms:i().func.isRequired,onSelectTermsId:i().func.isRequired,terms:i().array.isRequired};var R=r(2524),A=r.n(R);const v=()=>{const{apiUrl:e}=window.runConfig||{apiUrl:"https://access.stage.redhat.com/subscriptions/link/api/"};return e};class S extends a().Component{constructor(e){super(e),this.state={mergedResponse:null,redirect:null,hideTerms:!1,isAgree:!1,termsPdfId:null,submitting:!1,fetchingResponse:!1},this.abortController=new AbortController}render(){const{redirect:e,mergedResponse:t}=this.state,{partnerId:r,local:n}=this.props;let s,c,i={};if(t&&("aws"===r?i.awsAccountId=t.marketplaceDetails.customerAccountId:"azure"===r&&(i.azureAccountId=t.marketplaceDetails.azureCustomerId),t.redHatAccountDetails.accountNumber?i.rhAccountNumber=t.redHatAccountDetails.accountNumber:i.rhAccountNumber=t.redHatAccountDetails.company,console.debug("* accountDetails : ",i)),e)return i?(c=encodeURIComponent(JSON.stringify(i)),s=e+`?data=${c}`,a().createElement(o.Redirect,{to:s})):a().createElement(o.Redirect,{to:e});if(!t)return a().createElement(l.Spinner,{size:"xl","aria-label":"Waiting on order content to load"});const{redHatAccountDetails:u,marketplaceDetails:d,vendorOfferings:h,terms:p}=t,{isAgree:m,submitting:g}=this.state;return a().createElement(a().Fragment,null,a().createElement(l.PageSection,{isFilled:!0,variant:"light",className:"pf-u-p-2xl"},a().createElement(l.Title,{headingLevel:"h1",className:"pf-u-pb-xl"},"Complete your account connection"),a().createElement(l.DescriptionList,{isHorizontal:!0,horizontalTermWidthModifier:{default:"12ch",sm:"17ch",md:"17ch",lg:"17ch",xl:"17ch","2xl":"17ch"},className:"pf-u-pb-2xl"},a().createElement(l.DescriptionListGroup,null,a().createElement(l.DescriptionListTerm,null,this.props.local("review-link-account.accountNumberLabel")),a().createElement(l.DescriptionListDescription,null,u.accountNumber?u.accountNumber:this.props.local("review-link-account.defaultRedHatAccountNumber"))),new f(r,d,n).getRows().map(((e,t)=>a().createElement(l.DescriptionListGroup,{key:t},a().createElement(l.DescriptionListTerm,null,e.label),a().createElement(l.DescriptionListDescription,null,e.value)))),a().createElement(l.DescriptionListGroup,null,a().createElement(l.DescriptionListTerm,null,this.props.local("review-link-account.subscriptionLabel")),a().createElement(l.DescriptionListDescription,null,h?.[0]?.description))),a().createElement(l.Form,null,this.state.hideTerms||a().createElement(k,{local:n,terms:p,onAgreeToTerms:e=>this.setIsAgree(e),onSelectTermsId:e=>this.setTermsPdfId(e)}),a().createElement(l.ActionGroup,null,a().createElement(l.Button,{variant:"primary",type:"button",isDisabled:!m||g,onClick:()=>this.linkAccounts()},this.props.local("review-link-account.connectAccountButtonLabel")),a().createElement(l.Button,{variant:"link",href:"/",component:"a",style:{paddingTop:"6px"}},this.props.local("review-link-account.cancelButtonLabel"))))))}setMergedResponse(e){this.setState({mergedResponse:e})}setRedirect(e){this.setState({redirect:e})}setIsAgree(e){this.setState({isAgree:e})}setTermsPdfId(e){this.setState({termsPdfId:e})}setSubmitting(e){this.setState({submitting:e})}setFetchingResponse(e){this.setState({fetchingResponse:e})}fetchMergedResponse(){null!==this.state.mergedResponse||this.state.fetchingResponse||(console.debug("Starting to fetch entitlement details."),this.setFetchingResponse(!0),(async(e,t)=>insights.chrome.auth.getToken().then((r=>A().get(v()+`${e}/details`,{headers:{Authorization:`Bearer ${r}`},withCredentials:!0,signal:t}))))(this.props.partnerId,this.abortController.signal).then((e=>{console.debug("Fetched merged response: ",JSON.stringify(e.data)),"boolean"!=typeof e?.data?.successful||e.data.successful?this.initializeMergedResponse(e.data):this.errorCallback({response:e})})).catch((e=>{this.errorCallback(e)})).finally((()=>this.setFetchingResponse(!1))))}initializeMergedResponse(e){e.linkedRedHatAccountId&&insights.chrome.auth.getUser().then((t=>{t.identity.org_id===e.linkedRedHatAccountId?this.sendToLandingPage(e):this.setRedirect(this.errorPaths().alreadyLinked())})),this.setMergedResponse(e),null===e.terms||void 0===e.terms||e.terms.length<1?this.setState({isAgree:!0,hideTerms:!0}):this.setTermsPdfId(w(e.terms).id)}componentDidMount(){console.debug("Starting to fetch order details"),this.fetchMergedResponse()}componentWillUnmount(){console.debug("Cancelling ongoing requests..."),this.abortController.abort()}linkAccounts(){if(!this.state.submitting){const{partnerId:e}=this.props,{termsPdfId:t}=this.state;this.setSubmitting(!0),(async(e,t)=>(console.debug(`Linking partner=${e}, terms=${t}`),insights.chrome.auth.getToken().then((r=>A().post(v()+`${e}/link`,{},{headers:{Authorization:`Bearer ${r}`},params:{termsPdfId:t,linkAllOrders:!0},withCredentials:!0}).then((e=>e?.data?.linkSuccessful))))))(e,t).then((e=>this.onLinkSuccess(e))).catch((e=>this.errorCallback(e))).finally((()=>this.setSubmitting(!1)))}}onLinkSuccess(e){e?(this.props.useToast({key:"confirm-link",message:this.props.local(`${this.props.partnerId}:toast-notification.confirm-link.success`),type:"success"}),this.sendToLandingPage(this.state.mergedResponse)):this.setRedirect(this.errorPaths().error())}sendToLandingPage(e){let t=e?.vendorOfferings,r=t?.[0]?.landingPage||window.runConfig.hrefConfig;console.debug("Sending to "+r),window.location.assign(r)}errorPaths(){return g(this.props.partnerId)}errorCallback(e){const t=this.errorPaths();if(console.debug("Encountered error on call: ",JSON.stringify(e)),"AbortError"!==e.reason&&"canceled"!==e.message)switch(401===e?.response?.status&&this.setRedirect(t.unauthorized()),e?.response?.data?.reason){case"terms_error":this.setRedirect(t.error());break;case"export_compliance_failure":this.setRedirect(t.exportError());break;case"linked_different_account":case"linked_same_account":this.setRedirect(t.orderError());break;case"missing_seller":case"missing_token":case"invalid_token":case"expired_token":this.setRedirect(t.tokenError());break;default:this.setRedirect(t.systemError())}}}S.propTypes={partnerId:i().string.isRequired,local:i().func.isRequired,useToast:i().func.isRequired};var C=S;r(8119);var _=function(e){const{local:t,headerKey:r,bodyKey:n,footerKey:o,...c}=e;return a().createElement(a().Fragment,null,a().createElement(l.Card,{id:"notification-card"},r&&a().createElement(l.CardTitle,null,t(r)),n&&a().createElement(l.CardBody,null,t(n,c)),o&&a().createElement(l.CardFooter,null,a().createElement(s.cC,{t:t,i18nKey:o},"Please return to your ",a().createElement("a",{target:"blank"},"marketplace console")))))};function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},T.apply(this,arguments)}var I=function(e){return a().createElement(_,T({headerKey:`${e.type}.header`,bodyKey:`${e.type}.body`,footerKey:`${e.type}.footer`,local:e.local},e))};class N extends a().Component{static propTypes={match:i().object.isRequired,useToast:i().func.isRequired,local:i().func.isRequired};constructor(e){super(e)}getPartnerId(){return this.props.match.params.partnerId}render(){const e=this.getPartnerId(),{local:t,useToast:r}=this.props,n=(r,n)=>t(r,{...n,ns:e}),s=g(e);return a().createElement(o.Switch,null,a().createElement(o.Route,{exact:!0,path:"/"+e},a().createElement(C,{partnerId:e,local:n,useToast:r}),";"),a().createElement(o.Route,{path:s.tokenError()},a().createElement(I,{local:n,type:"token-error"})),a().createElement(o.Route,{path:s.exportError()},a().createElement(I,{local:n,type:"export-error"})),a().createElement(o.Route,{path:[s.error(),s.orderError(),s.systemError()]},a().createElement(I,{local:n,type:"general-error"})),a().createElement(o.Route,{path:s.needAssistance()},a().createElement(I,{local:n,type:"need-assistance"})),a().createElement(o.Route,{path:s.alreadyLinked(),render:e=>{const t=new URLSearchParams(e.location.search).get("data"),r=t?JSON.parse(decodeURIComponent(t)):{};return console.log("decoded data in strap app ",r),a().createElement(I,{accountDetails:r,local:n,type:"already-linked"})}}))}}var D=N;class P extends a().Component{constructor(e){super(),this.state={notifObject:[]}}setNotification(e){var t=this.state.notifObject.concat({key:e.key,message:e.message,type:e.type});this.setState({notifObject:t}),setTimeout((()=>{if(this.state.notifObject){let t=this.state.notifObject.filter((t=>t.key!==e.key));this.setState({notifObject:t})}}),5e3)}componentDidUpdate(e){let t=this.props.toastData,r=e.toastData;t.key&&t.key!=r.key&&this.setNotification(t)}render(){return a().createElement(a().Fragment,null,this.state.notifObject.length>0&&a().createElement("ul",{className:"pf-c-alert-group pf-m-toast"},this.state.notifObject.map((e=>a().createElement("li",{className:"pf-c-alert-group__item",key:"toast-"+e.key},a().createElement("div",{className:"pf-c-alert pf-m-"+e.type},a().createElement("div",{className:"pf-c-alert__icon"},"success"===e.type&&a().createElement("i",{className:"fas fa-check-circle","aria-hidden":"true"}),"danger"===e.type&&a().createElement("i",{className:"fas fa-info-circle","aria-hidden":"true"}),"info"===e.type&&a().createElement("i",{className:"fas fa-info-circle","aria-hidden":"true"})),a().createElement("h4",{className:"pf-c-alert__title"},a().createElement("div",{className:"pf-c-alert__description"},a().createElement("p",null,e.message)))))))))}}var L=P,H=r.p+"fonts/red_hat_logo.svg";class z extends a().Component{render(){const{local:e}=this.props;return a().createElement(l.PageSection,{className:"footer-container pf-m-limit-width"},a().createElement(l.Split,{className:"footer-body"},a().createElement(l.SplitItem,{className:"footer-content"},a().createElement(l.Brand,{src:H,className:"footer-logo",alt:"Patternfly Logo"})),a().createElement(l.SplitItem,{isFilled:!0,className:"footer-content"},"Copyright © 2022 Red Hat, Inc."),a().createElement(l.SplitItem,{className:"footer-content policy-content"},a().createElement("span",{className:"custom-links",dangerouslySetInnerHTML:{__html:e("app-layout.privacy")}}),"| ",a().createElement("span",{className:"custom-links",dangerouslySetInnerHTML:{__html:e("app-layout.terms")}}),"| ",a().createElement("span",{className:"custom-links",dangerouslySetInnerHTML:{__html:e("app-layout.policy")}}))))}}var x=z;function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},M.apply(this,arguments)}class O extends a().Component{constructor(e){super(e),this.state={newToast:{},userDetails:{}},this.toast=e=>{this.setState({newToast:e})},this.setUserDetails=e=>{this.setState({userDetails:e})}}componentDidMount(){insights.chrome.init(),insights.chrome.identifyApp("connect"),window.history.pushState(null,null,window.location.href),window.onpopstate=function(){window.history.go(1)}}componentWillUnmount(){const e=insights.chrome.on("APP_NAVIGATION",(e=>history.push(`/${e.navId}`)));return()=>{e()}}render(){return a().createElement(a().Fragment,null,a().createElement(L,{toastData:this.state.newToast}),a().createElement(o.Switch,null,a().createElement(o.Route,{exact:!0,path:"/"},a().createElement(I,{local:this.props.t,type:"default-error"})),a().createElement(o.Route,{path:"/:partnerId",render:e=>a().createElement(D,M({local:this.props.t,i18n:this.props.i18n,useToast:this.toast,setUserDetails:this.setUserDetails,getErrorPaths:g},e))})),a().createElement(x,{local:this.props.t}))}static get propTypes(){return{i18n:i().any,t:i().func}}}const F=(0,s.Zh)()(O)},5555:function(e,t,r){var n=r(4872);const{hrefConfig:a,hrefEnv:o}=window.runConfig||{hrefConfig:"https://access.redhat.com/",hrefEnv:""},{hrefConfig:s,hrefEnv:c}=window.runConfig||{hrefConfig:"https://access.redhat.com/",hrefEnv:""};var i=r(5059),l=r(899);const{hrefConfig:u,hrefEnv:d}=window.runConfig||{hrefConfig:"https://access.redhat.com/",hrefEnv:""},h={en:{aws:{_comment:"English",locale:"en_us","general-error":{body:"An unexpected issue has occurred with your AWS Marketplace order. Please go back to AWS Marketplace and restart the configuration process for your product."},"already-linked":{header:"The AWS account is already linked to a different Red Hat account.",body:"According to our records, the product you had purchased with AWS account ID {{accountDetails.awsAccountId}} has already been linked to a different Red Hat account than the one you logged in with. The Red Hat account number you logged in with is {{accountDetails.rhAccountNumber}}. Return back to the AWS marketplace to log into the correct AWS account or try logging into the corresponding Red Hat account with the purchase.",footer:'Please return to the <1 href="https://console.aws.amazon.com">AWS console</1> to get started!'},"token-error":{body:"The onboarding process for your AWS Marketplace product has timed out. Please go back to AWS Marketplace and restart the configuration process for your product."},unauthorized:{body:"Please return to AWS Marketplace and restart the linking process."},"review-order":{headline:"Link your AWS and Red Hat Accounts",customer_info:{title:"AWS Customer information",customer_number:"AWS account ID",customer_identifier:"Customer Identifier"}},"toast-notification":{"confirm-link":{success:"Success! Your Red Hat account is now linked with your AWS Order."}}},azure:{_comment:"English",locale:"en_us","general-error":{body:"An unexpected issue has occurred with your Azure Marketplace order. Please go back to Azure Marketplace and restart the configuration process for your product."},"already-linked":{header:"The Azure account is already linked to a different Red Hat account.",body:"According to our records, the product you had purchased with Azure account ID {{accountDetails.azureAccountId}} has already been linked to a different Red Hat account than the one you logged in with. The Red Hat account number you logged in with is {{accountDetails.rhAccountNumber}}. Return back to the Azure marketplace to log into the correct Azure account or try logging into the corresponding Red Hat account with the purchase.",footer:'Please return to the <1 href="https://portal.azure.com">Azure console</1> to get started!'},"token-error":{body:"The onboarding process for your Azure Marketplace product has timed out. Please go back to Azure Marketplace and restart the configuration process for your product."},unauthorized:{body:"Please return to the Azure Marketplace and restart the linking process."},"review-order":{headline:"Link your Azure and Red Hat Accounts",customer_info:{title:"Azure Customer information",customer_number:"Account Id",customer_identifier:"Customer Identifier"}},"toast-notification":{"confirm-link":{success:"Success! Your Red Hat account is now linked with your Azure Order."}}},common:{_comment:"English",locale:"en_us","general-error":{header:"An issue has occurred",body:"An unexpected issue has occurred with your Marketplace order. Please go back to the Marketplace and restart the configuration process for your product.",footer:'If the issue persists, please contact <1 href="https://access.redhat.com/">Red Hat customer support</1>.'},"export-error":{header:"Request cannot be processed at this time",body:"Your account is on hold for further review by our Export Compliance Team. Once the hold is resolved, we’ll be in touch. We make every effort to resolve export holds as quickly as possible. Export holds are reviewed and resolved Monday through Friday from 08:00 – 17:00 Eastern Time.",footer:'<1 href="https://access.redhat.com/articles/1340183">Why is my account on Export Hold?</1>'},"default-error":{header:"An issue has occurred.",body:"Please go back and try again.",footer:"Please restart the linking process."},"already-linked":{header:"Already linked",body:"Your order has already been linked.",footer:"Go Back"},"token-error":{header:"An issue has occurred",body:"The onboarding process for your Marketplace product has timed out. Please go back to Marketplace and restart the configuration process for your product.",footer:'If the issue persists, please contact <1 href="https://access.redhat.com/">Red Hat customer support</1>.'},unauthorized:{header:"Your Red Hat session has expired",body:"Please return to Marketplace and restart the linking process."},"app-layout":{review:"Review order summary",link:"Link your Red Hat Account",learn:"Learn More",privacy:"<a href='https://www.redhat.com/en/about/privacy-policy' target='blank'>Privacy statement </a>",terms:"<a href='https://www.redhat.com/en/about/terms-use' target='blank'>Terms of use </a>",policy:"<a href='https://www.redhat.com/en/about/all-policies-guidelines' target='blank'>All policies and guidelines </a>",landing:"Welcome to Red Hat Partner Link Portal"},"need-assistance":{header:"Need assistance?","a-body":"For inquiries related to your account linking, contact RedHat Customer Support.","b-body":`Check out this <a href='${u}articles/5024951' target='blank'>FAQ</a> article in the Red Hat Customer Portal for more information about how Red Hat supports Cloud Account Linking`,footer:"Contact RedHat Support"},"review-link-account":{defaultRedHatAccountNumber:"Creation of new account number pending",accountNumberLabel:"Red Hat account number",subscriptionLabel:"Subscription(s)",connectAccountButtonLabel:"Connect accounts",cancelButtonLabel:"Cancel"},"link-account":{header:"Link your Red Hat account",description:"Review your Red Hat account details below. If the information is not correct and you need help, contact Red Hat Customer Support.",link_accounts:{title:"Auto-link opt-in",required_fields:"*Required fields",checkbox_label:"Automatically link your future purchases of Red Hat products from the Marketplace to your Red Hat Account."},enterprise_agreement:{title:"Enterprise agreement",description:"To read the Red Hat Enterprise Agreement document (PDF), select your preferred language and location from the dropdown menu.",download:"Download",helper_text:"Change agreement's location and language"},enterprise_agreement_default_lang:{name:"United States (English)"},terms:"I have read and agreed to the ",conditions:"terms and conditions.",button:{confirm:"Confirm",back:"Back",cancel:"Cancel"}}}}};n.ZP.use(i.Z).use(i.Z).use(l.Db).init({fallbackLng:"en",order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag","path","subdomain"],resources:h,debug:!1,languages:["en"],react:{useSuspense:!1},interpolation:{escapeValue:!1},ns:["aws","ibm-dsw","common","azure"],fallbackNS:"common"})},7311:function(e,t,r){function n(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))}r.d(t,{E:function(){return n}}),r(4155),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))}}]);
//# sourceMappingURL=../sourcemaps/271.673f92b8fa518fa13e68e19d7c8e4c46.js.map