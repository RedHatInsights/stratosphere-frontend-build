"use strict";(self.webpackChunkconnect=self.webpackChunkconnect||[]).push([[543],{8316:function(e,t,r){r.d(t,{Z:function(){return $}});var o=r(2950),n=r.n(o),a=r(6530),s=r(899),c=r(5697),i=r.n(c),l=r(8335),u=r(5140);function d(e,t){return{getRows(){return[{label:t("review-order.customer_info.customer_number"),value:e?.customerAccountId??"-"}]}}}d.propTypes={orderDetails:i().object.isRequired,local:i().func.isRequired};var h=d;function p(e,t){return{getRows(){return[{label:t("review-order.customer_info.customer_number"),value:e?.azureCustomerId??"-"}]}}}p.propTypes={orderDetails:i().object.isRequired,local:i().func.isRequired};var m=p;function g(e,t){return{getRows(){return[{label:t("review-order.customer_info.customer_number"),value:e?.gcpAccountId??"-"}]}}}g.propTypes={orderDetails:i().object.isRequired,local:i().func.isRequired};var f=g;function y(e,t,r){switch(e){case"aws":return new h(t,r);case"azure":return new m(t,r);case"gcp":return new f(t,r);default:throw new Error(`Unknown partner: ${e}`)}}y.propTypes={partnerId:i().string.isRequired,orderDetails:i().object,local:i().func.isRequired};var k=y;function b(e){return{error:()=>`/${e}/error`,orderError:()=>`/${e}/order-error`,exportError:()=>`/${e}/export-error`,systemError:()=>`/${e}/system-error`,alreadyLinked:()=>`/${e}/already-linked`,tokenError:()=>`/${e}/token-error`,unauthorized:()=>"/unauthorized",needAssistance:()=>`/${e}/need-assistance`}}var E=r(5265),w=JSON.parse('[{"code":"de_DE","name":"German","nativeName":"Deutsch"},{"code":"en_US","name":"United States (English)","nativeName":"United States (English)"},{"code":"es_ES","name":"Spanish; Castilian","nativeName":"Español, Castellano"},{"code":"fr_FR","name":"French","nativeName":"Français, Langue Française"},{"code":"it_IT","name":"Italian","nativeName":"Italiano"},{"code":"ja_JP","name":"Japanese","nativeName":"日本語 (にほんご／にっぽんご)"},{"code":"ko_KR","name":"Korean","nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"},{"code":"pt_BR","name":"Portuguese","nativeName":"Português"},{"code":"ru_RU","name":"Russian","nativeName":"русский язык"},{"code":"zh_CN","name":"Chinese","nativeName":"中文 (Zhōngwén), 汉语, 漢語"}]');function R(e){const{local:t,onAgreeToTerms:r,onSelectTermsId:a,terms:s}=e,c=s[0]?.translations,[i,u]=(0,o.useState)(A()),[d,h]=(0,o.useState)(v(s)),[p,m]=(0,o.useState)(!1);return n().createElement(n().Fragment,null,n().createElement(l.FormGroup,{label:"Terms and conditions *"},n().createElement(l.FormSelect,{value:i.code,onChange:e=>{let t=w.find((t=>t.code===e));u(t);let r=(e=>c.find((t=>t.localeCode===e)))(e);h(r),a(r.id)},"aria-label":"FormSelect Input",className:"pf-c-form-select-control"},w.map(((e,t)=>n().createElement(l.FormSelectOption,{key:t,value:e.code,label:e.nativeName})))),n().createElement(l.Checkbox,{id:"agree-check",isChecked:p,className:"pf-u-mt-md",label:n().createElement(n().Fragment,null,t("link-account.terms"),n().createElement(l.Button,{variant:"link",isInline:!0,onClick:()=>{window.open(d.downloadUrl,"_blank")}},t("link-account.conditions")," ",n().createElement(E.LA,null))),onChange:e=>{m(e),r(e)},"aria-label":"terms checkbox"})))}function A(){return w.find((e=>"en_US"===e.code))||w?.[0]||null}function v(e){let t=A(),r=e?.[0]?.translations;return r?.find((e=>e.localeCode===t.code))}R.propTypes={local:i().func.isRequired,onAgreeToTerms:i().func.isRequired,onSelectTermsId:i().func.isRequired,terms:i().array.isRequired};var C=r(2524),S=r.n(C);const I=()=>{const{apiUrl:e}=window.runConfig||{apiUrl:"https://access.stage.redhat.com/subscriptions/link/api/"};return e};class _ extends n().Component{constructor(e){super(e),this.state={mergedResponse:null,redirect:null,hideTerms:!1,isAgree:!1,termsPdfId:null,submitting:!1,fetchingResponse:!1},this.abortController=new AbortController}render(){const{redirect:e,mergedResponse:t}=this.state,{partnerId:r,local:o,analytics:s}=this.props;console.log("Merged response: ",t);let c={};if(t&&("aws"===r?c.awsAccountId=t.marketplaceDetails.customerAccountId:"azure"===r?c.azureAccountId=t.marketplaceDetails.azureCustomerId:"gcp"===r&&(c.gcpAccountId=t.marketplaceDetails.gcpAccountId),t.redHatAccountDetails.accountNumber?c.rhAccountNumber=t.redHatAccountDetails.accountNumber:c.rhAccountNumber=t.redHatAccountDetails.company,console.debug("* accountDetails : ",c)),e){const r={outcome:"error",partner:this.props.partnerId,errorType:e};c.redHatAccountDetails&&(r.outcome="already-linked",r.rhAccountNumber=t.accountDetails.rhAccountNumber,r.rhProductList=t.vendorOfferings),s.track("MarketplaceConnectEvent",r);const o=e+`?data=${encodeURIComponent(JSON.stringify(c))}`;return n().createElement(a.Redirect,{to:o})}if(!t)return n().createElement(l.Spinner,{size:"xl","aria-label":"Waiting on order content to load"});const{redHatAccountDetails:i,marketplaceDetails:u,vendorOfferings:d,terms:h}=t,{isAgree:p,submitting:m}=this.state;return n().createElement(n().Fragment,null,n().createElement(l.PageSection,{isFilled:!0,variant:"light",className:"pf-u-p-2xl"},n().createElement(l.Title,{headingLevel:"h1",className:"pf-u-pb-xl"},"Complete your account connection"),n().createElement(l.DescriptionList,{isHorizontal:!0,horizontalTermWidthModifier:{default:"12ch",sm:"17ch",md:"17ch",lg:"17ch",xl:"17ch","2xl":"17ch"},className:"pf-u-pb-2xl"},n().createElement(l.DescriptionListGroup,null,n().createElement(l.DescriptionListTerm,null,this.props.local("review-link-account.accountNumberLabel")),n().createElement(l.DescriptionListDescription,null,i.accountNumber?i.accountNumber:this.props.local("review-link-account.defaultRedHatAccountNumber"))),new k(r,u,o).getRows().map(((e,t)=>n().createElement(l.DescriptionListGroup,{key:t},n().createElement(l.DescriptionListTerm,null,e.label),n().createElement(l.DescriptionListDescription,null,e.value)))),n().createElement(l.DescriptionListGroup,null,n().createElement(l.DescriptionListTerm,null,this.props.local("review-link-account.subscriptionLabel")),n().createElement(l.DescriptionListDescription,null,d?.[0]?.description))),n().createElement(l.Form,null,this.state.hideTerms||n().createElement(R,{local:o,terms:h,onAgreeToTerms:e=>this.setIsAgree(e),onSelectTermsId:e=>this.setTermsPdfId(e)}),n().createElement(l.ActionGroup,null,n().createElement(l.Button,{variant:"primary",type:"button",isDisabled:!p||m,onClick:()=>this.linkAccounts()},this.props.local("review-link-account.connectAccountButtonLabel")),n().createElement(l.Button,{variant:"link",href:"/",component:"a",style:{paddingTop:"6px"}},this.props.local("review-link-account.cancelButtonLabel"))))))}setMergedResponse(e){this.setState({mergedResponse:e})}setRedirect(e){this.setState({redirect:e})}setIsAgree(e){this.setState({isAgree:e})}setTermsPdfId(e){this.setState({termsPdfId:e})}setSubmitting(e){this.setState({submitting:e})}setFetchingResponse(e){this.setState({fetchingResponse:e})}fetchMergedResponse(){null!==this.state.mergedResponse||this.state.fetchingResponse||(console.debug("Starting to fetch entitlement details."),this.setFetchingResponse(!0),(async(e,t)=>insights.chrome.auth.getToken().then((r=>S().get(I()+`${e}/details`,{headers:{Authorization:`Bearer ${r}`},withCredentials:!0,signal:t}))))(this.props.partnerId,this.abortController.signal).then((e=>{console.debug("Fetched merged response: ",JSON.stringify(e.data)),"boolean"!=typeof e?.data?.successful||e.data.successful?this.initializeMergedResponse(e.data):this.errorCallback({response:e})})).catch((e=>{this.errorCallback(e)})).finally((()=>this.setFetchingResponse(!1))))}initializeMergedResponse(e){e.linkedRedHatAccountId&&insights.chrome.auth.getUser().then((t=>{console.debug(`Comparing ${e.linkedRedHatAccountId} and ${t.identity.org_id}`),t.identity.org_id===e.linkedRedHatAccountId?this.sendToLandingPage(e):this.setRedirect(this.errorPaths().alreadyLinked())})),this.setMergedResponse(e),null===e.terms||void 0===e.terms||e.terms.length<1?this.setState({isAgree:!0,hideTerms:!0}):this.setTermsPdfId(v(e.terms).id)}componentDidMount(){console.debug("Starting to fetch order details"),this.fetchMergedResponse()}componentWillUnmount(){console.debug("Cancelling ongoing requests..."),this.abortController.abort()}linkAccounts(){if(!this.state.submitting){const{partnerId:e}=this.props,{termsPdfId:t}=this.state;this.setSubmitting(!0),(async(e,t)=>(console.debug(`Linking partner=${e}, terms=${t}`),insights.chrome.auth.getToken().then((r=>S().post(I()+`${e}/link`,{},{headers:{Authorization:`Bearer ${r}`},params:{termsPdfId:t,linkAllOrders:!0},withCredentials:!0}).then((e=>e?.data?.linkSuccessful))))))(e,t).then((e=>this.onLinkSuccess(e))).catch((e=>this.errorCallback(e))).finally((()=>this.setSubmitting(!1)))}}onLinkSuccess(e){e?(this.props.useToast({key:"confirm-link",message:this.props.local(`${this.props.partnerId}:toast-notification.confirm-link.success`),type:"success"}),analytics.track("MarketplaceConnectEvent",{outcome:"link-success",partner:this.props.partnerId,locale:this.props.local.ns,rhAccountNumber:this.state.mergedResponse.redHatAccountDetails.accountNumber,rhProductList:this.state.mergedResponse.vendorOfferings}),this.sendToLandingPage(this.state.mergedResponse)):this.setRedirect(this.errorPaths().error())}sendToLandingPage(e){let t=e?.vendorOfferings,r=t?.[0]?.landingPage||window.runConfig.hrefConfig;console.debug("Sending to "+r),this.setRedirect(r)}errorPaths(){return b(this.props.partnerId)}errorCallback(e){const t=this.errorPaths();if(console.debug("Encountered error on call: ",JSON.stringify(e)),"AbortError"!==e.reason&&"canceled"!==e.message)switch(401===e?.response?.status&&this.setRedirect(t.unauthorized()),e?.response?.data?.reason){case"terms_error":this.setRedirect(t.error());break;case"export_compliance_failure":this.setRedirect(t.exportError());break;case"linked_different_account":case"linked_same_account":this.setRedirect(t.orderError());break;case"missing_seller":case"missing_token":case"invalid_token":case"expired_token":this.setRedirect(t.tokenError());break;default:this.setRedirect(t.systemError())}}}_.propTypes={partnerId:i().string.isRequired,local:i().func.isRequired,useToast:i().func.isRequired};var P=e=>{const{analytics:t}=(0,u.Z)();return n().createElement(_,{analytics:t,partnerId:e.partnerId,local:e.local,useToast:e.useToast})};r(8119);var T=function(e){const{local:t,headerKey:r,bodyKey:o,footerKey:a,...c}=e;return n().createElement(n().Fragment,null,n().createElement(l.Card,{id:"notification-card"},r&&n().createElement(l.CardTitle,null,t(r)),o&&n().createElement(l.CardBody,null,t(o,c)),a&&n().createElement(l.CardFooter,null,n().createElement(s.cC,{t:t,i18nKey:a},"Please return to your ",n().createElement("a",{target:"blank"},"marketplace console")))))};function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},N.apply(this,arguments)}var D=function(e){return n().createElement(T,N({headerKey:`${e.type}.header`,bodyKey:`${e.type}.body`,footerKey:`${e.type}.footer`,local:e.local},e))};class H extends n().Component{static propTypes={match:i().object.isRequired,useToast:i().func.isRequired,local:i().func.isRequired};constructor(e){super(e)}getPartnerId(){return this.props.match.params.partnerId}getDecodedData(e){const t=new URLSearchParams(e.location.search).get("data"),r=t?JSON.parse(decodeURIComponent(t)):{};return console.log("getDecodedData : ",r),r}render(){const e=this.getPartnerId(),{local:t,useToast:r}=this.props,o=(r,o)=>t(r,{...o,ns:e}),s=b(e);return n().createElement(a.Switch,null,n().createElement(a.Route,{exact:!0,path:"/"+e},n().createElement(P,{partnerId:e,local:o,useToast:r}),";"),n().createElement(a.Route,{path:s.tokenError()},n().createElement(D,{local:o,type:"token-error"})),n().createElement(a.Route,{path:s.exportError()},n().createElement(D,{local:o,type:"export-error"})),n().createElement(a.Route,{path:[s.error(),s.orderError(),s.systemError()]},n().createElement(D,{local:o,type:"general-error"})),n().createElement(a.Route,{path:s.needAssistance()},n().createElement(D,{local:o,type:"need-assistance"})),n().createElement(a.Route,{path:s.alreadyLinked(),render:e=>n().createElement(D,{accountDetails:this.getDecodedData(e),local:o,type:"already-linked"})}))}}var L=H;class z extends n().Component{constructor(e){super(),this.state={notifObject:[]}}setNotification(e){var t=this.state.notifObject.concat({key:e.key,message:e.message,type:e.type});this.setState({notifObject:t}),setTimeout((()=>{if(this.state.notifObject){let t=this.state.notifObject.filter((t=>t.key!==e.key));this.setState({notifObject:t})}}),5e3)}componentDidUpdate(e){let t=this.props.toastData,r=e.toastData;t.key&&t.key!=r.key&&this.setNotification(t)}render(){return n().createElement(n().Fragment,null,this.state.notifObject.length>0&&n().createElement("ul",{className:"pf-c-alert-group pf-m-toast"},this.state.notifObject.map((e=>n().createElement("li",{className:"pf-c-alert-group__item",key:"toast-"+e.key},n().createElement("div",{className:"pf-c-alert pf-m-"+e.type},n().createElement("div",{className:"pf-c-alert__icon"},"success"===e.type&&n().createElement("i",{className:"fas fa-check-circle","aria-hidden":"true"}),"danger"===e.type&&n().createElement("i",{className:"fas fa-info-circle","aria-hidden":"true"}),"info"===e.type&&n().createElement("i",{className:"fas fa-info-circle","aria-hidden":"true"})),n().createElement("h4",{className:"pf-c-alert__title"},n().createElement("div",{className:"pf-c-alert__description"},n().createElement("p",null,e.message)))))))))}}var M=z,x=r.p+"fonts/red_hat_logo.svg";class O extends n().Component{render(){const{local:e}=this.props;return n().createElement(l.PageSection,{className:"footer-container pf-m-limit-width"},n().createElement(l.Split,{className:"footer-body"},n().createElement(l.SplitItem,{className:"footer-content"},n().createElement(l.Brand,{src:x,className:"footer-logo",alt:"Patternfly Logo"})),n().createElement(l.SplitItem,{isFilled:!0,className:"footer-content"},"Copyright © 2022 Red Hat, Inc."),n().createElement(l.SplitItem,{className:"footer-content policy-content"},n().createElement("span",{className:"custom-links",dangerouslySetInnerHTML:{__html:e("app-layout.privacy")}}),"| ",n().createElement("span",{className:"custom-links",dangerouslySetInnerHTML:{__html:e("app-layout.terms")}}),"| ",n().createElement("span",{className:"custom-links",dangerouslySetInnerHTML:{__html:e("app-layout.policy")}}))))}}var F=O;function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},q.apply(this,arguments)}var $=function(){const[e,t]=(0,o.useState)({}),r=(0,u.Z)(),{t:c,i18n:i}=(0,s.$G)();return(0,o.useEffect)((()=>{r.updateDocumentTitle("connect"),window.history.pushState(null,null,window.location.href),window.onpopstate=function(){window.history.go(1)};const e=r.on("APP_NAVIGATION",(e=>history.push(`/${e.navId}`)));return()=>{e()}}),[]),n().createElement(n().Fragment,null,n().createElement(M,{toastData:e}),n().createElement(a.Switch,null,n().createElement(a.Route,{exact:!0,path:"/"},n().createElement(D,{local:c,type:"default-error"})),n().createElement(a.Route,{path:"/:partnerId",render:e=>n().createElement(L,q({local:c,i18n:i,useToast:t,getErrorPaths:b},e))})),n().createElement(F,{local:c}))}},5362:function(e,t,r){var o=r(4872);const{hrefConfig:n,hrefEnv:a}=window.runConfig||{hrefConfig:"https://access.redhat.com/",hrefEnv:""},{hrefConfig:s,hrefEnv:c}=window.runConfig||{hrefConfig:"https://access.redhat.com/",hrefEnv:""},{hrefConfig:i,hrefEnv:l}=window.runConfig||{hrefConfig:"https://access.redhat.com/",hrefEnv:""};var u=r(5059),d=r(899);const{hrefConfig:h,hrefEnv:p}=window.runConfig||{hrefConfig:"https://access.redhat.com/",hrefEnv:""},m={en:{aws:{_comment:"English",locale:"en_us","general-error":{body:"An unexpected issue has occurred with your AWS Marketplace order. Please go back to AWS Marketplace and restart the configuration process for your product."},"already-linked":{header:"The AWS account is already linked to a different Red Hat account.",body:"According to our records, the product you had purchased with AWS account ID {{accountDetails.awsAccountId}} has already been linked to a different Red Hat account than the one you logged in with. The Red Hat account number you logged in with is {{accountDetails.rhAccountNumber}}. Return back to the AWS marketplace to log into the correct AWS account or try logging into the corresponding Red Hat account with the purchase.",footer:'Please return to the <1 href="https://console.aws.amazon.com">AWS console</1> to get started!'},"token-error":{body:"The onboarding process for your AWS Marketplace product has timed out. Please go back to AWS Marketplace and restart the configuration process for your product."},unauthorized:{body:"Please return to AWS Marketplace and restart the linking process."},"review-order":{headline:"Link your AWS and Red Hat Accounts",customer_info:{title:"AWS Customer information",customer_number:"AWS account ID",customer_identifier:"Customer Identifier"}},"toast-notification":{"confirm-link":{success:"Success! Your Red Hat account is now linked with your AWS Order."}}},azure:{_comment:"English",locale:"en_us","general-error":{body:"An unexpected issue has occurred with your Azure Marketplace order. Please go back to Azure Marketplace and restart the configuration process for your product."},"already-linked":{header:"The Azure account is already linked to a different Red Hat account.",body:"According to our records, the product you had purchased with Azure account ID {{accountDetails.azureAccountId}} has already been linked to a different Red Hat account than the one you logged in with. The Red Hat account number you logged in with is {{accountDetails.rhAccountNumber}}. Return back to the Azure marketplace to log into the correct Azure account or try logging into the corresponding Red Hat account with the purchase.",footer:'Please return to the <1 href="https://portal.azure.com">Azure console</1> to get started!'},"token-error":{body:"The onboarding process for your Azure Marketplace product has timed out. Please go back to Azure Marketplace and restart the configuration process for your product."},unauthorized:{body:"Please return to the Azure Marketplace and restart the linking process."},"review-order":{headline:"Link your Azure and Red Hat Accounts",customer_info:{title:"Azure Customer information",customer_number:"Account Id",customer_identifier:"Customer Identifier"}},"toast-notification":{"confirm-link":{success:"Success! Your Red Hat account is now linked with your Azure Order."}}},gcp:{_comment:"English",locale:"en_us","general-error":{body:"An unexpected issue has occurred with your GCP Marketplace order. Please go back to GCP Marketplace and restart the configuration process for your product."},"already-linked":{header:"The GCP account is already linked to a different Red Hat account.",body:"According to our records, the product you had purchased with GCP account ID {{accountDetails.gcpAccountId}} has already been linked to a different Red Hat account than the one you logged in with. The Red Hat account number you logged in with is {{accountDetails.rhAccountNumber}}. Return back to the GCP marketplace to log into the correct GCP account or try logging into the corresponding Red Hat account with the purchase.",footer:'Please return to the <1 href="https://console.cloud.google.com">GCP console</1> to get started!'},"token-error":{body:"The onboarding process for your GCP Marketplace product has timed out. Please go back to GCP Marketplace and restart the configuration process for your product."},unauthorized:{body:"Please return to the GCP Marketplace and restart the linking process."},"review-order":{headline:"Link your GCP and Red Hat Accounts",customer_info:{title:"GCP Customer information",customer_number:"GCP Account ID",customer_identifier:"Customer Identifier"}},"toast-notification":{"confirm-link":{success:"Success! Your Red Hat account is now linked with your GCP Order."}}},common:{_comment:"English",locale:"en_us","general-error":{header:"An issue has occurred",body:"An unexpected issue has occurred with your Marketplace order. Please go back to the Marketplace and restart the configuration process for your product.",footer:'If the issue persists, please contact <1 href="https://access.redhat.com/">Red Hat customer support</1>.'},"export-error":{header:"Request cannot be processed at this time",body:"Your account is on hold for further review by our Export Compliance Team. Once the hold is resolved, we’ll be in touch. We make every effort to resolve export holds as quickly as possible. Export holds are reviewed and resolved Monday through Friday from 08:00 – 17:00 Eastern Time.",footer:'<1 href="https://access.redhat.com/articles/1340183">Why is my account on Export Hold?</1>'},"default-error":{header:"An issue has occurred.",body:"Please go back and try again.",footer:"Please restart the linking process."},"already-linked":{header:"Already linked",body:"Your order has already been linked.",footer:"Go Back"},"token-error":{header:"An issue has occurred",body:"The onboarding process for your Marketplace product has timed out. Please go back to Marketplace and restart the configuration process for your product.",footer:'If the issue persists, please contact <1 href="https://access.redhat.com/">Red Hat customer support</1>.'},unauthorized:{header:"Your Red Hat session has expired",body:"Please return to Marketplace and restart the linking process."},"app-layout":{review:"Review order summary",link:"Link your Red Hat Account",learn:"Learn More",privacy:"<a href='https://www.redhat.com/en/about/privacy-policy' target='blank'>Privacy statement </a>",terms:"<a href='https://www.redhat.com/en/about/terms-use' target='blank'>Terms of use </a>",policy:"<a href='https://www.redhat.com/en/about/all-policies-guidelines' target='blank'>All policies and guidelines </a>",landing:"Welcome to Red Hat Partner Link Portal"},"need-assistance":{header:"Need assistance?","a-body":"For inquiries related to your account linking, contact RedHat Customer Support.","b-body":`Check out this <a href='${h}articles/5024951' target='blank'>FAQ</a> article in the Red Hat Customer Portal for more information about how Red Hat supports Cloud Account Linking`,footer:"Contact RedHat Support"},"review-link-account":{defaultRedHatAccountNumber:"Creation of new account number pending",accountNumberLabel:"Red Hat account number",subscriptionLabel:"Subscription(s)",connectAccountButtonLabel:"Connect accounts",cancelButtonLabel:"Cancel"},"link-account":{header:"Link your Red Hat account",description:"Review your Red Hat account details below. If the information is not correct and you need help, contact Red Hat Customer Support.",link_accounts:{title:"Auto-link opt-in",required_fields:"*Required fields",checkbox_label:"Automatically link your future purchases of Red Hat products from the Marketplace to your Red Hat Account."},enterprise_agreement:{title:"Enterprise agreement",description:"To read the Red Hat Enterprise Agreement document (PDF), select your preferred language and location from the dropdown menu.",download:"Download",helper_text:"Change agreement's location and language"},enterprise_agreement_default_lang:{name:"United States (English)"},terms:"I have read and agreed to the ",conditions:"terms and conditions.",button:{confirm:"Confirm",back:"Back",cancel:"Cancel"}}}}};o.ZP.use(u.Z).use(u.Z).use(d.Db).init({fallbackLng:"en",order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag","path","subdomain"],resources:m,debug:!1,languages:["en"],react:{useSuspense:!1},interpolation:{escapeValue:!1},ns:["aws","ibm-dsw","common","azure","gcp"],fallbackNS:"common"})},7311:function(e,t,r){function o(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)}))}r.d(t,{E:function(){return o}}),r(4155),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))}}]);
//# sourceMappingURL=../sourcemaps/543.6d30a8302bc0259303263f6328a66a0e.js.map