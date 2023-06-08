"use strict";(self.webpackChunkconnect=self.webpackChunkconnect||[]).push([[728],{3491:function(e,t,r){r.d(t,{f:function(){return q}});var n=r(2950),o=r.n(n),a=r(6530),s=r(899),i=r(5697),c=r.n(i),l=r(8335),u=r(2524),d=r.n(u);class p{constructor(e,t){this.local=e,this.useToast=t}getApiUrl(){const{apiUrl:e}=window.runConfig||{apiUrl:"https://access.stage.redhat.com/subscriptions/link/api/"};return e}async getPartnerOrderDetailsAsync(e,t,r){return insights.chrome.auth.getToken().then((n=>d().get(this.getApiUrl()+`${e}/details`,{headers:{Authorization:`Bearer ${n}`},withCredentials:!0,signal:t}).then((e=>{"boolean"!=typeof e?.data?.successful||e.data.successful?r(null,e.data):r({response:e})})).catch((e=>{r(e)}))))}async linkPartnerOrderToAccountAsync(e,t,r){return console.debug(`Linking partner=${e}, terms=${t}`),insights.chrome.auth.getToken().then((n=>d().post(this.getApiUrl()+`${e}/link`,{},{headers:{Authorization:`Bearer ${n}`},params:{termsPdfId:t,linkAllOrders:!0},withCredentials:!0}).then((e=>r(null,e.data.linkSuccessful))).catch((e=>r(e)))))}}function h(e,t){return{getRows(){return[{label:t("review-order.customer_info.customer_number"),value:e?.customerAccountId??"-"}]}}}p.propTypes={local:i.PropTypes.func.isRequired,useToast:i.PropTypes.func.isRequired},h.propTypes={orderDetails:c().object.isRequired,local:c().func.isRequired};var m=h;function f(e,t){return{getRows(){return[{label:t("review-order.customer_info.customer_number"),value:e?.azureCustomerId??"-"}]}}}f.propTypes={orderDetails:c().object.isRequired,local:c().func.isRequired};var g=f;function y(e,t,r){switch(e){case"aws":return new m(t,r);case"azure":return new g(t,r);default:throw new Error(`Unknown partner: ${e}`)}}y.propTypes={partnerId:c().string.isRequired,orderDetails:c().object,local:c().func.isRequired};var k=y;function b(e){return{error:()=>`/${e}/error`,orderError:()=>`/${e}/order-error`,exportError:()=>`/${e}/export-error`,systemError:()=>`/${e}/system-error`,alreadyLinked:()=>`/${e}/already-linked`,tokenError:()=>`/${e}/token-error`,unauthorized:()=>"/unauthorized",needAssistance:()=>`/${e}/need-assistance`}}var E=r(5265),w=JSON.parse('[{"code":"de_DE","name":"German","nativeName":"Deutsch"},{"code":"en_US","name":"United States (English)","nativeName":"United States (English)"},{"code":"es_ES","name":"Spanish; Castilian","nativeName":"Español, Castellano"},{"code":"fr_FR","name":"French","nativeName":"Français, Langue Française"},{"code":"it_IT","name":"Italian","nativeName":"Italiano"},{"code":"ja_JP","name":"Japanese","nativeName":"日本語 (にほんご／にっぽんご)"},{"code":"ko_KR","name":"Korean","nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"},{"code":"pt_BR","name":"Portuguese","nativeName":"Português"},{"code":"ru_RU","name":"Russian","nativeName":"русский язык"},{"code":"zh_CN","name":"Chinese","nativeName":"中文 (Zhōngwén), 汉语, 漢語"}]');function R(e){const{local:t,onAgreeToTerms:r,onSelectTermsId:a,terms:s}=e,i=s[0]?.translations,[c,u]=(0,n.useState)(A()),[d,p]=(0,n.useState)(v(s)),[h,m]=(0,n.useState)(!1);return o().createElement(o().Fragment,null,o().createElement(l.FormGroup,{label:"Terms and conditions *"},o().createElement(l.FormSelect,{value:c.code,onChange:e=>{let t=w.find((t=>t.code===e));u(t);let r=(e=>i.find((t=>t.localeCode===e)))(e);p(r),a(r.id)},"aria-label":"FormSelect Input",className:"pf-c-form-select-control"},w.map(((e,t)=>o().createElement(l.FormSelectOption,{key:t,value:e.code,label:e.nativeName})))),o().createElement(l.Checkbox,{id:"agree-check",isChecked:h,className:"pf-u-mt-md",label:o().createElement(o().Fragment,null,t("link-account.terms"),o().createElement(l.Button,{variant:"link",isInline:!0,onClick:()=>{window.open(d.downloadUrl,"_blank")}},t("link-account.conditions")," ",o().createElement(E.LA,null))),onChange:e=>{m(e),r(e)},"aria-label":"terms checkbox"})))}function A(){return w.find((e=>"en_US"===e.code))||w?.[0]||null}function v(e){let t=A(),r=e?.[0]?.translations;return r?.find((e=>e.localeCode===t.code))}R.propTypes={local:c().func.isRequired,onAgreeToTerms:c().func.isRequired,onSelectTermsId:c().func.isRequired,terms:c().array.isRequired};class C extends o().Component{constructor(){super(),this.state={mergedResponse:null,redirect:null,isAgree:!1,termsPdfId:null,submitting:!1,fetchingResponse:!1},this.abortController=new AbortController}render(){const{redirect:e,mergedResponse:t}=this.state;if(e)return o().createElement(a.Redirect,{to:e});if(!t)return o().createElement(l.Spinner,{size:"xl","aria-label":"Waiting on order content to load"});const{redHatAccountDetails:r,marketplaceDetails:n,vendorOfferings:s,terms:i}=t,{partnerId:c,local:u}=this.props,{isAgree:d,submitting:p}=this.state;return o().createElement(o().Fragment,null,o().createElement(l.PageSection,{isFilled:!0,variant:"light",className:"pf-u-p-2xl"},o().createElement(l.Title,{headingLevel:"h1",className:"pf-u-pb-xl"},"Complete your account connection"),o().createElement(l.DescriptionList,{isHorizontal:!0,horizontalTermWidthModifier:{default:"12ch",sm:"17ch",md:"17ch",lg:"17ch",xl:"17ch","2xl":"17ch"},className:"pf-u-pb-2xl"},o().createElement(l.DescriptionListGroup,null,o().createElement(l.DescriptionListTerm,null,this.props.local("review-link-account.accountNumberLabel")),o().createElement(l.DescriptionListDescription,null,r.accountNumber?r.accountNumber:this.props.local("review-link-account.defaultRedHatAccountNumber"))),new k(c,n,u).getRows().map(((e,t)=>o().createElement(l.DescriptionListGroup,{key:t},o().createElement(l.DescriptionListTerm,null,e.label),o().createElement(l.DescriptionListDescription,null,e.value)))),o().createElement(l.DescriptionListGroup,null,o().createElement(l.DescriptionListTerm,null,this.props.local("review-link-account.subscriptionLabel")),o().createElement(l.DescriptionListDescription,null,s?.[0]?.description))),o().createElement(l.Form,null,o().createElement(R,{local:u,terms:i,onAgreeToTerms:e=>this.setIsAgree(e),onSelectTermsId:e=>this.setTermsPdfId(e)}),o().createElement(l.ActionGroup,null,o().createElement(l.Button,{variant:"primary",type:"button",isDisabled:!d||p,onClick:()=>this.linkAccounts()},this.props.local("review-link-account.connectAccountButtonLabel")),o().createElement(l.Button,{variant:"link",href:"/",component:"a",style:{paddingTop:"6px"}},this.props.local("review-link-account.cancelButtonLabel"))))))}setMergedResponse(e){this.setState({mergedResponse:e})}setRedirect(e){this.setState({redirect:e})}setIsAgree(e){this.setState({isAgree:e})}setTermsPdfId(e){this.setState({termsPdfId:e})}setSubmitting(e){this.setState({submitting:e})}setFetchingResponse(e){this.setState({fetchingResponse:e})}bffClient(){const{local:e,useToast:t}=this.props;return new p(e,t)}fetchMergedResponse(){null!==this.state.mergedResponse||this.state.fetchingResponse||(this.setFetchingResponse(!0),this.bffClient().getPartnerOrderDetailsAsync(this.props.partnerId,this.abortController.signal,((e,t)=>{this.setFetchingResponse(!1),e?this.errorCallback(e):this.initializeMergedResponse(t)})))}initializeMergedResponse(e){e.linkedRedHatAccountId&&insights.chrome.auth.getUser().then((t=>{t.identity.org_id===e.linkedRedHatAccountId?this.sendToLandingPage(e):this.setRedirect(this.errorPaths().alreadyLinked())})),this.setMergedResponse(e),this.setTermsPdfId(v(e.terms).id)}componentDidMount(){console.debug("Starting to fetch order details"),this.fetchMergedResponse()}componentWillUnmount(){console.debug("Cancelling ongoing requests..."),this.abortController.abort()}linkAccounts(){if(!this.state.submitting){const{partnerId:e}=this.props,{termsPdfId:t}=this.state;this.setSubmitting(!0),this.bffClient().linkPartnerOrderToAccountAsync(e,t,((e,t)=>{this.setSubmitting(!1),e?this.errorCallback(e):this.onLinkSuccess(t)}))}}onLinkSuccess(e){e?(this.props.useToast({key:"confirm-link",message:this.props.local(`${this.props.partnerId}:toast-notification.confirm-link.success`),type:"success"}),this.sendToLandingPage(this.state?.mergedResponse)):this.setRedirect(this.errorPaths().error())}sendToLandingPage(e){let t=e?.vendorOfferings,r=t?.[0]?.landingPage||window.runConfig.hrefConfig;console.debug("Sending to "+r),window.location.assign(r)}errorPaths(){return b(this.props.partnerId)}errorCallback(e){const t=this.errorPaths();if(console.debug("Encountered error on call: "+JSON.stringify(e)),"AbortError"!==e.reason&&"canceled"!==e.message)switch(401===e?.response?.status&&this.setRedirect(t.unauthorized()),e?.response?.data?.reason){case"terms_error":this.setRedirect(t.error());break;case"export_compliance_failure":this.setRedirect(t.exportError());break;case"linked_different_account":case"linked_same_account":this.setRedirect(t.orderError());break;case"missing_seller":case"missing_token":case"invalid_token":case"expired_token":this.setRedirect(t.tokenError());break;default:this.setRedirect(t.systemError())}}}C.propTypes={partnerId:i.PropTypes.string.isRequired,local:i.PropTypes.func.isRequired,useToast:i.PropTypes.func.isRequired};var _=C;class S extends o().Component{static propTypes={match:i.PropTypes.object.isRequired,useToast:i.PropTypes.func.isRequired,local:i.PropTypes.func.isRequired};constructor(e){super(e)}getPartnerId(){return this.props.match.params.partnerId}render(){const e=this.getPartnerId(),{local:t,useToast:r}=this.props;return o().createElement(_,{partnerId:e,local:t,useToast:r})}}var T=S;class P extends o().Component{constructor(e){super(),this.state={notifObject:[]}}setNotification(e){this.state.notifObject.push({key:e.key,message:e.message,type:e.type}),setTimeout((()=>{if(this.state.notifObject){let t=this.state.notifObject.filter((t=>t.key!==e.key));this.setState({notifObject:t})}}),5e3)}componentDidUpdate(e){let t=this.props.toastData,r=e.toastData;t.key&&t.key!=r.key&&this.setNotification(t)}render(){return o().createElement(o().Fragment,null,this.state.notifObject.length>0&&o().createElement("ul",{className:"pf-c-alert-group pf-m-toast"},this.state.notifObject.map((e=>o().createElement("li",{className:"pf-c-alert-group__item",key:"toast-"+e.key},o().createElement("div",{className:"pf-c-alert pf-m-"+e.type},o().createElement("div",{className:"pf-c-alert__icon"},"success"===e.type&&o().createElement("i",{className:"fas fa-check-circle","aria-hidden":"true"}),"danger"===e.type&&o().createElement("i",{className:"fas fa-info-circle","aria-hidden":"true"}),"info"===e.type&&o().createElement("i",{className:"fas fa-info-circle","aria-hidden":"true"})),o().createElement("h4",{className:"pf-c-alert__title"},o().createElement("div",{className:"pf-c-alert__description"},o().createElement("p",null,e.message)))))))))}}var I=P,N=r.p+"fonts/red_hat_logo.svg";class H extends o().Component{render(){const{local:e}=this.props;return o().createElement(l.PageSection,{className:"footer-container pf-m-limit-width"},o().createElement(l.Split,{className:"footer-body"},o().createElement(l.SplitItem,{className:"footer-content"},o().createElement(l.Brand,{src:N,className:"footer-logo",alt:"Patternfly Logo"})),o().createElement(l.SplitItem,{isFilled:!0,className:"footer-content"},"Copyright © 2022 Red Hat, Inc."),o().createElement(l.SplitItem,{className:"footer-content policy-content"},o().createElement("span",{className:"custom-links",dangerouslySetInnerHTML:{__html:e("app-layout.privacy")}}),"| ",o().createElement("span",{className:"custom-links",dangerouslySetInnerHTML:{__html:e("app-layout.terms")}}),"| ",o().createElement("span",{className:"custom-links",dangerouslySetInnerHTML:{__html:e("app-layout.policy")}}))))}}var L=H;r(8119);var D=function(e){const{partnerId:t}=(0,a.useParams)(),{t:r}=(0,s.$G)(t);return o().createElement(o().Fragment,null,o().createElement(l.Card,{id:"notification-card"},e.headerKey&&o().createElement(l.CardTitle,null,r(e.headerKey)),e.bodyKey&&o().createElement(l.CardBody,null,r(e.bodyKey)),e.footerKey&&o().createElement(l.CardFooter,null,o().createElement(s.cC,{t:r,i18nKey:e.footerKey},"Please return to your ",o().createElement("a",{target:"blank"},"marketplace console")))))};function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},x.apply(this,arguments)}var z=function(e){return o().createElement(D,x({headerKey:`${e.type}.header`,bodyKey:`${e.type}.body`,footerKey:`${e.type}.footer`},e))};function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},M.apply(this,arguments)}class O extends o().Component{constructor(e){super(e),this.state={newToast:{},userDetails:{}},this.toast=e=>{this.setState({newToast:e})},this.setUserDetails=e=>{this.setState({userDetails:e})}}componentDidMount(){insights.chrome.init(),insights.chrome.identifyApp("connect"),window.history.pushState(null,null,window.location.href),window.onpopstate=function(){window.history.go(1)}}componentWillUnmount(){const e=insights.chrome.on("APP_NAVIGATION",(e=>history.push(`/${e.navId}`)));return()=>{e()}}render(){let e=b(":partnerId");return o().createElement(o().Fragment,null,o().createElement(I,{toastData:this.state.newToast}),o().createElement(a.Switch,null,o().createElement(a.Route,{exact:!0,path:"/"},o().createElement(z,{local:this.props.t,type:"default-error"})),o().createElement(a.Route,{exact:!0,path:"/:partnerId",render:e=>o().createElement(T,M({local:this.props.t,i18n:this.props.i18n,useToast:this.toast,setUserDetails:this.setUserDetails,getErrorPaths:b},e))}),o().createElement(a.Route,{path:e.alreadyLinked()},o().createElement(z,{local:this.props.t,type:"already-linked"})),o().createElement(a.Route,{path:e.tokenError()},o().createElement(z,{local:this.props.t,type:"token-error"})),o().createElement(a.Route,{path:e.exportError()},o().createElement(z,{local:this.props.t,type:"export-error"})),o().createElement(a.Route,{path:[e.error(),e.orderError(),e.systemError()]},o().createElement(z,{local:this.props.t,type:"general-error"})),o().createElement(a.Route,{path:e.needAssistance()},o().createElement(z,{local:this.props.t,type:"need-assistance"}))),o().createElement(L,{local:this.props.t}))}}const q=(0,s.Zh)(window.location.href.split("/")[window.location.href.split("/").findIndex((e=>"connect"===e))+1])(O)},5555:function(e,t,r){var n=r(4872);const{hrefConfig:o,hrefEnv:a}=window.runConfig||{hrefConfig:"https://access.redhat.com/",hrefEnv:""},{hrefConfig:s,hrefEnv:i}=window.runConfig||{hrefConfig:"https://access.redhat.com/",hrefEnv:""};var c=r(5059),l=r(899);const{hrefConfig:u,hrefEnv:d}=window.runConfig||{hrefConfig:"https://access.redhat.com/",hrefEnv:""},p={en:{aws:{_comment:"English",locale:"en_us","general-error":{header:"An issue has occurred",body:"An unexpected issue has occurred with your AWS Marketplace order. Please go back to AWS Marketplace and restart the configuration process for your product.",footer:'If the issue persists, please contact <1 href="https://access.redhat.com/">Red Hat customer support</1>.'},"already-linked":{header:"Already linked",body:"Your AWS order has already been linked.",footer:'Please return to the <1 href="https://console.aws.amazon.com">AWS console</1> to get started!'},"token-error":{header:"An issue has occurred",body:"The onboarding process for your AWS Marketplace product has timed out. Please go back to AWS Marketplace and restart the configuration process for your product.",footer:'If the issue persists, please contact <1 href="https://access.redhat.com/">Red Hat customer support</1>.'},unauthorized:{header:"Your Red Hat session has expired",body:"Please return to AWS Marketplace and restart the linking process."},"review-order":{headline:"Link your AWS and Red Hat Accounts",customer_info:{title:"AWS Customer information",customer_number:"AWS account ID",customer_identifier:"Customer Identifier"}},"link-account":{header:"Link your Red Hat account",description:"Review your Red Hat account details below. If the information is not correct and you need help, contact Red Hat Customer Support.",link_accounts:{title:"Auto-link opt-in",required_fields:"*Required fields",checkbox_label:"Automatically link your future purchases of Red Hat products from AWS to your Red Hat Account."},enterprise_agreement:{title:"Enterprise agreement",description:"To read the Red Hat Enterprise Agreement document (PDF), select your preferred language and location from the dropdown menu.",download:"Download",helper_text:"Change agreement's location and language"},enterprise_agreement_default_lang:{name:"United States (English)"},terms:"I have read and agreed to the ",conditions:"terms and conditions.",button:{confirm:"Confirm",back:"Back",cancel:"Cancel"}},"toast-notification":{"confirm-link":{success:"Success! Your Red Hat account is now linked with your AWS Order."}}},azure:{_comment:"English",locale:"en_us","general-error":{header:"An issue has occurred",body:"An unexpected issue has occurred with your Azure Marketplace order. Please go back to Azure Marketplace and restart the configuration process for your product.",footer:'If the issue persists, please contact <1 href="https://access.redhat.com/">Red Hat customer support</1>.'},"already-linked":{header:"Already linked",body:"Your Azure order has already been linked.",footer:'Please return to the <1 href="https://console.aws.amazon.com">Azure console</1> to get started!'},"token-error":{header:"An issue has occurred",body:"The onboarding process for your Azure Marketplace product has timed out. Please go back to Azure Marketplace and restart the configuration process for your product.",footer:'If the issue persists, please contact <1 href="https://access.redhat.com/">Red Hat customer support</1>.'},unauthorized:{header:"Your Red Hat session has expired",body:"Please return to the Azure Marketplace and restart the linking process."},"review-order":{headline:"Link your Azure and Red Hat Accounts",customer_info:{title:"Azure Customer information",customer_number:"Account Id",customer_identifier:"Customer Identifier"}},"link-account":{header:"Link your Red Hat account",description:"Review your Red Hat account details below. If the information is not correct and you need help, contact Red Hat Customer Support.",link_accounts:{title:"Auto-link opt-in",required_fields:"*Required fields",checkbox_label:"Automatically link your future purchases of Red Hat products from Azure to your Red Hat Account."},enterprise_agreement:{title:"Enterprise agreement",description:"To read the Red Hat Enterprise Agreement document (PDF), select your preferred language and location from the dropdown menu.",download:"Download",helper_text:"Change agreement's location and language"},enterprise_agreement_default_lang:{name:"United States (English)"},terms:"I have read and agree to the terms. ",button:{confirm:"Confirm",back:"Back",cancel:"Cancel"}},"toast-notification":{"confirm-link":{success:"Success! Your Red Hat account is now linked with your Azure Order."}}},common:{_comment:"English",locale:"en_us","general-error":{header:"An issue has occurred",body:"An unexpected issue has occurred with your Marketplace order. Please go back to the Marketplace and restart the configuration process for your product.",footer:'If the issue persists, please contact <1 href="https://access.redhat.com/">Red Hat customer support</1>.'},"export-error":{header:"Request cannot be processed at this time",body:"Your account is on hold for further review by our Export Compliance Team. Once the hold is resolved, we’ll be in touch. We make every effort to resolve export holds as quickly as possible. Export holds are reviewed and resolved Monday through Friday from 08:00 – 17:00 Eastern Time.",footer:'<1 href="https://access.redhat.com/articles/1340183">Why is my account on Export Hold?</1>'},"default-error":{header:"An issue has occurred.",body:"Please go back and try again.",footer:"Please restart the linking process."},"already-linked":{header:"Already linked",body:"Your order has already been linked.",footer:"Go Back"},"token-error":{header:"An issue has occurred",body:"The onboarding process for your Marketplace product has timed out. Please go back to Marketplace and restart the configuration process for your product.",footer:'If the issue persists, please contact <1 href="https://access.redhat.com/">Red Hat customer support</1>.'},unauthorized:{header:"Your Red Hat session has expired",body:"Please return to Marketplace and restart the linking process."},"app-layout":{review:"Review order summary",link:"Link your Red Hat Account",learn:"Learn More",privacy:"<a href='https://www.redhat.com/en/about/privacy-policy' target='blank'>Privacy statement </a>",terms:"<a href='https://www.redhat.com/en/about/terms-use' target='blank'>Terms of use </a>",policy:"<a href='https://www.redhat.com/en/about/all-policies-guidelines' target='blank'>All policies and guidelines </a>",landing:"Welcome to Red Hat Partner Link Portal"},"need-assistance":{header:"Need assistance?","a-body":"For inquiries related to your account linking, contact RedHat Customer Support.","b-body":`Check out this <a href='${u}articles/5024951' target='blank'>FAQ</a> article in the Red Hat Customer Portal for more information about how Red Hat supports Cloud Account Linking`,footer:"Contact RedHat Support"},"review-link-account":{defaultRedHatAccountNumber:"Creation of new account number pending",accountNumberLabel:"Red Hat account number",subscriptionLabel:"Subscription(s)",connectAccountButtonLabel:"Connect accounts",cancelButtonLabel:"Cancel"}}}};n.ZP.use(c.Z).use(c.Z).use(l.Db).init({fallbackLng:"en",order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag","path","subdomain"],resources:p,debug:!1,languages:["en"],react:{useSuspense:!1},interpolation:{escapeValue:!1},ns:["aws","ibm-dsw","common","azure"],fallbackNS:"common"})},7311:function(e,t,r){function n(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))}r.d(t,{E:function(){return n}}),r(4155),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))}}]);
//# sourceMappingURL=../sourcemaps/728.941b0473751908485210588dbf46b664.js.map