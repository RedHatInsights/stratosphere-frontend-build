"use strict";(self.webpackChunkconnect=self.webpackChunkconnect||[]).push([[271],{5339:function(e,t,r){r.d(t,{f:function(){return F}});var n=r(2950),o=r.n(n),a=r(6530),s=r(899),i=r(5697),c=r.n(i),l=r(8335);function u(e,t){return{getRows(){return[{label:t("review-order.customer_info.customer_number"),value:e?.customerAccountId??"-"}]}}}u.propTypes={orderDetails:c().object.isRequired,local:c().func.isRequired};var d=u;function p(e,t){return{getRows(){return[{label:t("review-order.customer_info.customer_number"),value:e?.azureCustomerId??"-"}]}}}p.propTypes={orderDetails:c().object.isRequired,local:c().func.isRequired};var m=p;function h(e,t,r){switch(e){case"aws":return new d(t,r);case"azure":return new m(t,r);default:throw new Error(`Unknown partner: ${e}`)}}h.propTypes={partnerId:c().string.isRequired,orderDetails:c().object,local:c().func.isRequired};var f=h;function g(e){return{error:()=>`/${e}/error`,orderError:()=>`/${e}/order-error`,exportError:()=>`/${e}/export-error`,systemError:()=>`/${e}/system-error`,alreadyLinked:()=>`/${e}/already-linked`,tokenError:()=>`/${e}/token-error`,unauthorized:()=>"/unauthorized",needAssistance:()=>`/${e}/need-assistance`}}var y=r(5265),k=JSON.parse('[{"code":"de_DE","name":"German","nativeName":"Deutsch"},{"code":"en_US","name":"United States (English)","nativeName":"United States (English)"},{"code":"es_ES","name":"Spanish; Castilian","nativeName":"Español, Castellano"},{"code":"fr_FR","name":"French","nativeName":"Français, Langue Française"},{"code":"it_IT","name":"Italian","nativeName":"Italiano"},{"code":"ja_JP","name":"Japanese","nativeName":"日本語 (にほんご／にっぽんご)"},{"code":"ko_KR","name":"Korean","nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"},{"code":"pt_BR","name":"Portuguese","nativeName":"Português"},{"code":"ru_RU","name":"Russian","nativeName":"русский язык"},{"code":"zh_CN","name":"Chinese","nativeName":"中文 (Zhōngwén), 汉语, 漢語"}]');function b(e){const{local:t,onAgreeToTerms:r,onSelectTermsId:a,terms:s}=e,i=s[0]?.translations,[c,u]=(0,n.useState)(E()),[d,p]=(0,n.useState)(w(s)),[m,h]=(0,n.useState)(!1);return o().createElement(o().Fragment,null,o().createElement(l.FormGroup,{label:"Terms and conditions *"},o().createElement(l.FormSelect,{value:c.code,onChange:e=>{let t=k.find((t=>t.code===e));u(t);let r=(e=>i.find((t=>t.localeCode===e)))(e);p(r),a(r.id)},"aria-label":"FormSelect Input",className:"pf-c-form-select-control"},k.map(((e,t)=>o().createElement(l.FormSelectOption,{key:t,value:e.code,label:e.nativeName})))),o().createElement(l.Checkbox,{id:"agree-check",isChecked:m,className:"pf-u-mt-md",label:o().createElement(o().Fragment,null,t("link-account.terms"),o().createElement(l.Button,{variant:"link",isInline:!0,onClick:()=>{window.open(d.downloadUrl,"_blank")}},t("link-account.conditions")," ",o().createElement(y.LA,null))),onChange:e=>{h(e),r(e)},"aria-label":"terms checkbox"})))}function E(){return k.find((e=>"en_US"===e.code))||k?.[0]||null}function w(e){let t=E(),r=e?.[0]?.translations;return r?.find((e=>e.localeCode===t.code))}b.propTypes={local:c().func.isRequired,onAgreeToTerms:c().func.isRequired,onSelectTermsId:c().func.isRequired,terms:c().array.isRequired};var R=r(2524),v=r.n(R);const A=()=>{const{apiUrl:e}=window.runConfig||{apiUrl:"https://access.stage.redhat.com/subscriptions/link/api/"};return e};class S extends o().Component{constructor(e){super(e),this.state={mergedResponse:null,redirect:null,isAgree:!1,termsPdfId:null,submitting:!1,fetchingResponse:!1},this.abortController=new AbortController}render(){const{redirect:e,mergedResponse:t}=this.state;if(e)return o().createElement(a.Redirect,{to:e});if(!t)return o().createElement(l.Spinner,{size:"xl","aria-label":"Waiting on order content to load"});const{redHatAccountDetails:r,marketplaceDetails:n,vendorOfferings:s,terms:i}=t,{partnerId:c,local:u}=this.props,{isAgree:d,submitting:p}=this.state;return o().createElement(o().Fragment,null,o().createElement(l.PageSection,{isFilled:!0,variant:"light",className:"pf-u-p-2xl"},o().createElement(l.Title,{headingLevel:"h1",className:"pf-u-pb-xl"},"Complete your account connection"),o().createElement(l.DescriptionList,{isHorizontal:!0,horizontalTermWidthModifier:{default:"12ch",sm:"17ch",md:"17ch",lg:"17ch",xl:"17ch","2xl":"17ch"},className:"pf-u-pb-2xl"},o().createElement(l.DescriptionListGroup,null,o().createElement(l.DescriptionListTerm,null,this.props.local("review-link-account.accountNumberLabel")),o().createElement(l.DescriptionListDescription,null,r.accountNumber?r.accountNumber:this.props.local("review-link-account.defaultRedHatAccountNumber"))),new f(c,n,u).getRows().map(((e,t)=>o().createElement(l.DescriptionListGroup,{key:t},o().createElement(l.DescriptionListTerm,null,e.label),o().createElement(l.DescriptionListDescription,null,e.value)))),o().createElement(l.DescriptionListGroup,null,o().createElement(l.DescriptionListTerm,null,this.props.local("review-link-account.subscriptionLabel")),o().createElement(l.DescriptionListDescription,null,s?.[0]?.description))),o().createElement(l.Form,null,o().createElement(b,{local:u,terms:i,onAgreeToTerms:e=>this.setIsAgree(e),onSelectTermsId:e=>this.setTermsPdfId(e)}),o().createElement(l.ActionGroup,null,o().createElement(l.Button,{variant:"primary",type:"button",isDisabled:!d||p,onClick:()=>this.linkAccounts()},this.props.local("review-link-account.connectAccountButtonLabel")),o().createElement(l.Button,{variant:"link",href:"/",component:"a",style:{paddingTop:"6px"}},this.props.local("review-link-account.cancelButtonLabel"))))))}setMergedResponse(e){this.setState({mergedResponse:e})}setRedirect(e){this.setState({redirect:e})}setIsAgree(e){this.setState({isAgree:e})}setTermsPdfId(e){this.setState({termsPdfId:e})}setSubmitting(e){this.setState({submitting:e})}setFetchingResponse(e){this.setState({fetchingResponse:e})}fetchMergedResponse(){null!==this.state.mergedResponse||this.state.fetchingResponse||(this.setFetchingResponse(!0),(async(e,t)=>insights.chrome.auth.getToken().then((r=>v().get(A()+`${e}/details`,{headers:{Authorization:`Bearer ${r}`},withCredentials:!0,signal:t}))))(this.props.partnerId,this.abortController.signal).then((e=>{"boolean"!=typeof e?.data?.successful||e.data.successful?this.initializeMergedResponse(e.data):this.errorCallback({response:e})})).catch((e=>{this.errorCallback(e)})).finally((()=>this.setFetchingResponse(!1))))}initializeMergedResponse(e){e.linkedRedHatAccountId&&insights.chrome.auth.getUser().then((t=>{t.identity.org_id===e.linkedRedHatAccountId?this.sendToLandingPage(e):this.setRedirect(this.errorPaths().alreadyLinked())})),this.setMergedResponse(e),this.setTermsPdfId(w(e.terms).id)}componentDidMount(){console.debug("Starting to fetch order details"),this.fetchMergedResponse()}componentWillUnmount(){console.debug("Cancelling ongoing requests..."),this.abortController.abort()}linkAccounts(){if(!this.state.submitting){const{partnerId:e}=this.props,{termsPdfId:t}=this.state;this.setSubmitting(!0),(async(e,t)=>(console.debug(`Linking partner=${e}, terms=${t}`),insights.chrome.auth.getToken().then((r=>v().post(A()+`${e}/link`,{},{headers:{Authorization:`Bearer ${r}`},params:{termsPdfId:t,linkAllOrders:!0},withCredentials:!0}).then((e=>e?.data?.linkSuccessful))))))(e,t).then((e=>this.onLinkSuccess(e))).catch((e=>this.errorCallback(e))).finally((()=>this.setSubmitting(!1)))}}onLinkSuccess(e){e?(this.props.useToast({key:"confirm-link",message:this.props.local(`${this.props.partnerId}:toast-notification.confirm-link.success`),type:"success"}),this.sendToLandingPage(this.state?.mergedResponse)):this.setRedirect(this.errorPaths().error())}sendToLandingPage(e){let t=e?.vendorOfferings,r=t?.[0]?.landingPage||window.runConfig.hrefConfig;console.debug("Sending to "+r),window.location.assign(r)}errorPaths(){return g(this.props.partnerId)}errorCallback(e){const t=this.errorPaths();if(console.debug("Encountered error on call: ",JSON.stringify(e)),"AbortError"!==e.reason&&"canceled"!==e.message)switch(401===e?.response?.status&&this.setRedirect(t.unauthorized()),e?.response?.data?.reason){case"terms_error":this.setRedirect(t.error());break;case"export_compliance_failure":this.setRedirect(t.exportError());break;case"linked_different_account":case"linked_same_account":this.setRedirect(t.orderError());break;case"missing_seller":case"missing_token":case"invalid_token":case"expired_token":this.setRedirect(t.tokenError());break;default:this.setRedirect(t.systemError())}}}S.propTypes={partnerId:c().string.isRequired,local:c().func.isRequired,useToast:c().func.isRequired};var C=S;r(8119);var _=function(e){const{local:t}=e;return o().createElement(o().Fragment,null,o().createElement(l.Card,{id:"notification-card"},e.headerKey&&o().createElement(l.CardTitle,null,t(e.headerKey)),e.bodyKey&&o().createElement(l.CardBody,null,t(e.bodyKey)),e.footerKey&&o().createElement(l.CardFooter,null,o().createElement(s.cC,{t:t,i18nKey:e.footerKey},"Please return to your ",o().createElement("a",{target:"blank"},"marketplace console")))))};function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},T.apply(this,arguments)}var I=function(e){return o().createElement(_,T({headerKey:`${e.type}.header`,bodyKey:`${e.type}.body`,footerKey:`${e.type}.footer`,local:e.local},e))};class N extends o().Component{static propTypes={match:c().object.isRequired,useToast:c().func.isRequired,local:c().func.isRequired};constructor(e){super(e)}getPartnerId(){return this.props.match.params.partnerId}render(){const e=this.getPartnerId(),{local:t,useToast:r}=this.props,n=(r,n)=>t(r,{...n,ns:e}),s=g(e);return o().createElement(a.Switch,null,o().createElement(a.Route,{index:!0},o().createElement(C,{partnerId:e,local:n,useToast:r}),";"),o().createElement(a.Route,{path:s.alreadyLinked()},o().createElement(I,{local:n,type:"already-linked"})),o().createElement(a.Route,{path:s.tokenError()},o().createElement(I,{local:n,type:"token-error"})),o().createElement(a.Route,{path:s.exportError()},o().createElement(I,{local:n,type:"export-error"})),o().createElement(a.Route,{path:[s.error(),s.orderError(),s.systemError()]},o().createElement(I,{local:n,type:"general-error"})),o().createElement(a.Route,{path:s.needAssistance()},o().createElement(I,{local:n,type:"need-assistance"})))}}var P=N;class L extends o().Component{constructor(e){super(),this.state={notifObject:[]}}setNotification(e){var t=this.state.notifObject.concat({key:e.key,message:e.message,type:e.type});this.setState({notifObject:t}),setTimeout((()=>{if(this.state.notifObject){let t=this.state.notifObject.filter((t=>t.key!==e.key));this.setState({notifObject:t})}}),5e3)}componentDidUpdate(e){let t=this.props.toastData,r=e.toastData;t.key&&t.key!=r.key&&this.setNotification(t)}render(){return o().createElement(o().Fragment,null,this.state.notifObject.length>0&&o().createElement("ul",{className:"pf-c-alert-group pf-m-toast"},this.state.notifObject.map((e=>o().createElement("li",{className:"pf-c-alert-group__item",key:"toast-"+e.key},o().createElement("div",{className:"pf-c-alert pf-m-"+e.type},o().createElement("div",{className:"pf-c-alert__icon"},"success"===e.type&&o().createElement("i",{className:"fas fa-check-circle","aria-hidden":"true"}),"danger"===e.type&&o().createElement("i",{className:"fas fa-info-circle","aria-hidden":"true"}),"info"===e.type&&o().createElement("i",{className:"fas fa-info-circle","aria-hidden":"true"})),o().createElement("h4",{className:"pf-c-alert__title"},o().createElement("div",{className:"pf-c-alert__description"},o().createElement("p",null,e.message)))))))))}}var D=L,x=r.p+"fonts/red_hat_logo.svg";class H extends o().Component{render(){const{local:e}=this.props;return o().createElement(l.PageSection,{className:"footer-container pf-m-limit-width"},o().createElement(l.Split,{className:"footer-body"},o().createElement(l.SplitItem,{className:"footer-content"},o().createElement(l.Brand,{src:x,className:"footer-logo",alt:"Patternfly Logo"})),o().createElement(l.SplitItem,{isFilled:!0,className:"footer-content"},"Copyright © 2022 Red Hat, Inc."),o().createElement(l.SplitItem,{className:"footer-content policy-content"},o().createElement("span",{className:"custom-links",dangerouslySetInnerHTML:{__html:e("app-layout.privacy")}}),"| ",o().createElement("span",{className:"custom-links",dangerouslySetInnerHTML:{__html:e("app-layout.terms")}}),"| ",o().createElement("span",{className:"custom-links",dangerouslySetInnerHTML:{__html:e("app-layout.policy")}}))))}}var z=H;function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},M.apply(this,arguments)}class O extends o().Component{constructor(e){super(e),this.state={newToast:{},userDetails:{}},this.toast=e=>{this.setState({newToast:e})},this.setUserDetails=e=>{this.setState({userDetails:e})}}componentDidMount(){insights.chrome.init(),insights.chrome.identifyApp("connect"),window.history.pushState(null,null,window.location.href),window.onpopstate=function(){window.history.go(1)}}componentWillUnmount(){const e=insights.chrome.on("APP_NAVIGATION",(e=>history.push(`/${e.navId}`)));return()=>{e()}}render(){return o().createElement(o().Fragment,null,o().createElement(D,{toastData:this.state.newToast}),o().createElement(a.Switch,null,o().createElement(a.Route,{exact:!0,path:"/"},o().createElement(I,{local:this.props.t,type:"default-error"})),o().createElement(a.Route,{path:"/:partnerId",render:e=>o().createElement(P,M({local:this.props.t,i18n:this.props.i18n,useToast:this.toast,setUserDetails:this.setUserDetails,getErrorPaths:g},e))})),o().createElement(z,{local:this.props.t}))}static get propTypes(){return{i18n:c().any,t:c().func}}}const F=(0,s.Zh)()(O)},5555:function(e,t,r){var n=r(4872);const{hrefConfig:o,hrefEnv:a}=window.runConfig||{hrefConfig:"https://access.redhat.com/",hrefEnv:""},{hrefConfig:s,hrefEnv:i}=window.runConfig||{hrefConfig:"https://access.redhat.com/",hrefEnv:""};var c=r(5059),l=r(899);const{hrefConfig:u,hrefEnv:d}=window.runConfig||{hrefConfig:"https://access.redhat.com/",hrefEnv:""},p={en:{aws:{_comment:"English",locale:"en_us","general-error":{body:"An unexpected issue has occurred with your AWS Marketplace order. Please go back to AWS Marketplace and restart the configuration process for your product."},"already-linked":{body:"Your AWS order has already been linked.",footer:'Please return to the <1 href="https://console.aws.amazon.com">AWS console</1> to get started!'},"token-error":{body:"The onboarding process for your AWS Marketplace product has timed out. Please go back to AWS Marketplace and restart the configuration process for your product."},unauthorized:{body:"Please return to AWS Marketplace and restart the linking process."},"review-order":{headline:"Link your AWS and Red Hat Accounts",customer_info:{title:"AWS Customer information",customer_number:"AWS account ID",customer_identifier:"Customer Identifier"}},"toast-notification":{"confirm-link":{success:"Success! Your Red Hat account is now linked with your AWS Order."}}},azure:{_comment:"English",locale:"en_us","general-error":{body:"An unexpected issue has occurred with your Azure Marketplace order. Please go back to Azure Marketplace and restart the configuration process for your product."},"already-linked":{body:"Your Azure order has already been linked.",footer:'Please return to the <1 href="https://portal.azure.com">Azure console</1> to get started!'},"token-error":{body:"The onboarding process for your Azure Marketplace product has timed out. Please go back to Azure Marketplace and restart the configuration process for your product."},unauthorized:{body:"Please return to the Azure Marketplace and restart the linking process."},"review-order":{headline:"Link your Azure and Red Hat Accounts",customer_info:{title:"Azure Customer information",customer_number:"Account Id",customer_identifier:"Customer Identifier"}},"toast-notification":{"confirm-link":{success:"Success! Your Red Hat account is now linked with your Azure Order."}}},common:{_comment:"English",locale:"en_us","general-error":{header:"An issue has occurred",body:"An unexpected issue has occurred with your Marketplace order. Please go back to the Marketplace and restart the configuration process for your product.",footer:'If the issue persists, please contact <1 href="https://access.redhat.com/">Red Hat customer support</1>.'},"export-error":{header:"Request cannot be processed at this time",body:"Your account is on hold for further review by our Export Compliance Team. Once the hold is resolved, we’ll be in touch. We make every effort to resolve export holds as quickly as possible. Export holds are reviewed and resolved Monday through Friday from 08:00 – 17:00 Eastern Time.",footer:'<1 href="https://access.redhat.com/articles/1340183">Why is my account on Export Hold?</1>'},"default-error":{header:"An issue has occurred.",body:"Please go back and try again.",footer:"Please restart the linking process."},"already-linked":{header:"Already linked",body:"Your order has already been linked.",footer:"Go Back"},"token-error":{header:"An issue has occurred",body:"The onboarding process for your Marketplace product has timed out. Please go back to Marketplace and restart the configuration process for your product.",footer:'If the issue persists, please contact <1 href="https://access.redhat.com/">Red Hat customer support</1>.'},unauthorized:{header:"Your Red Hat session has expired",body:"Please return to Marketplace and restart the linking process."},"app-layout":{review:"Review order summary",link:"Link your Red Hat Account",learn:"Learn More",privacy:"<a href='https://www.redhat.com/en/about/privacy-policy' target='blank'>Privacy statement </a>",terms:"<a href='https://www.redhat.com/en/about/terms-use' target='blank'>Terms of use </a>",policy:"<a href='https://www.redhat.com/en/about/all-policies-guidelines' target='blank'>All policies and guidelines </a>",landing:"Welcome to Red Hat Partner Link Portal"},"need-assistance":{header:"Need assistance?","a-body":"For inquiries related to your account linking, contact RedHat Customer Support.","b-body":`Check out this <a href='${u}articles/5024951' target='blank'>FAQ</a> article in the Red Hat Customer Portal for more information about how Red Hat supports Cloud Account Linking`,footer:"Contact RedHat Support"},"review-link-account":{defaultRedHatAccountNumber:"Creation of new account number pending",accountNumberLabel:"Red Hat account number",subscriptionLabel:"Subscription(s)",connectAccountButtonLabel:"Connect accounts",cancelButtonLabel:"Cancel"},"link-account":{header:"Link your Red Hat account",description:"Review your Red Hat account details below. If the information is not correct and you need help, contact Red Hat Customer Support.",link_accounts:{title:"Auto-link opt-in",required_fields:"*Required fields",checkbox_label:"Automatically link your future purchases of Red Hat products from the Marketplace to your Red Hat Account."},enterprise_agreement:{title:"Enterprise agreement",description:"To read the Red Hat Enterprise Agreement document (PDF), select your preferred language and location from the dropdown menu.",download:"Download",helper_text:"Change agreement's location and language"},enterprise_agreement_default_lang:{name:"United States (English)"},terms:"I have read and agreed to the ",conditions:"terms and conditions.",button:{confirm:"Confirm",back:"Back",cancel:"Cancel"}}}}};n.ZP.use(c.Z).use(c.Z).use(l.Db).init({fallbackLng:"en",order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag","path","subdomain"],resources:p,debug:!1,languages:["en"],react:{useSuspense:!1},interpolation:{escapeValue:!1},ns:["aws","ibm-dsw","common","azure"],fallbackNS:"common"})},7311:function(e,t,r){function n(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))}r.d(t,{E:function(){return n}}),r(4155),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))}}]);
//# sourceMappingURL=../sourcemaps/271.823bf3308f581e2142d4e9fab3c5b0d5.js.map