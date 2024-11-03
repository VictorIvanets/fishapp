import{w as k,x as Z,y as S,z as fe,A as me,B as ke,C as he,D as pe,E as R,F as ge,G as b,H as ee,I as be,K as ne,M as te,Q as q,S as re,T as U,V as ye}from"./index-CnefwrEu.js";function L(e){var n=k.useContext(Z()),t=e||n.client;return S(!!t,50),t}var K=!1,Se="useSyncExternalStore",Ce=me[Se],ie=Ce||function(e,n,t){var i=n();globalThis.__DEV__!==!1&&!K&&i!==n()&&(K=!0,globalThis.__DEV__!==!1&&S.error(60));var a=k.useState({inst:{value:i,getSnapshot:n}}),u=a[0].inst,r=a[1];return fe?k.useLayoutEffect(function(){Object.assign(u,{value:i,getSnapshot:n}),$(u)&&r({inst:u})},[e,i,n]):Object.assign(u,{value:i,getSnapshot:n}),k.useEffect(function(){return $(u)&&r({inst:u}),e(function(){$(u)&&r({inst:u})})},[e]),i};function $(e){var n=e.value,t=e.getSnapshot;try{return n!==t()}catch{return!0}}var C;(function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"})(C||(C={}));var D;function H(e){var n;switch(e){case C.Query:n="Query";break;case C.Mutation:n="Mutation";break;case C.Subscription:n="Subscription";break}return n}function ae(e){D||(D=new he(pe.parser||1e3));var n=D.get(e);if(n)return n;var t,i,a;S(!!e&&!!e.kind,62,e);for(var u=[],r=[],c=[],v=[],d=0,s=e.definitions;d<s.length;d++){var o=s[d];if(o.kind==="FragmentDefinition"){u.push(o);continue}if(o.kind==="OperationDefinition")switch(o.operation){case"query":r.push(o);break;case"mutation":c.push(o);break;case"subscription":v.push(o);break}}S(!u.length||r.length||c.length||v.length,63),S(r.length+c.length+v.length<=1,64,e,r.length,v.length,c.length),i=r.length?C.Query:C.Mutation,!r.length&&!c.length&&(i=C.Subscription);var l=r.length?r:c.length?c:v;S(l.length===1,65,e,l.length);var h=l[0];t=h.variableDefinitions||[],h.name&&h.name.kind==="Name"?a=h.name.value:a="data";var f={name:a,type:i,variables:t};return D.set(e,f),f}ae.resetCache=function(){D=void 0};globalThis.__DEV__!==!1&&ke("parser",function(){return D?D.size:0});function z(e,n){var t=ae(e),i=H(n),a=H(t.type);S(t.type===n,66,i,i,a)}function Ne(e,n){var t=k.useRef();return(!t.current||!R(t.current.deps,n))&&(t.current={value:e(),deps:n}),t.current.value}var x=ge?k.useLayoutEffect:k.useEffect,_e=Symbol.for("apollo.hook.wrappers");function Ie(e,n,t){var i=t.queryManager,a=i&&i[_e],u=a&&a[e];return u?u(n):n}var we=Object.prototype.hasOwnProperty;function J(){}var j=Symbol();function Ke(e,n){return n===void 0&&(n=Object.create(null)),Ie("useQuery",Oe,L(n&&n.client))(e,n)}function Oe(e,n){var t=De(e,n),i=t.result,a=t.obsQueryFields;return k.useMemo(function(){return b(b({},i),a)},[i,a])}function Ee(e,n,t,i,a){function u(o){var l;z(n,C.Query);var h={client:e,query:n,observable:i&&i.getSSRObservable(a())||e.watchQuery(ue(void 0,e,t,a())),resultData:{previousData:(l=o==null?void 0:o.resultData.current)===null||l===void 0?void 0:l.data}};return h}var r=k.useState(u),c=r[0],v=r[1];function d(o){var l,h;Object.assign(c.observable,(l={},l[j]=o,l));var f=c.resultData;v(b(b({},c),{query:o.query,resultData:Object.assign(f,{previousData:((h=f.current)===null||h===void 0?void 0:h.data)||f.previousData,current:void 0})}))}if(e!==c.client||n!==c.query){var s=u(c);return v(s),[s,d]}return[c,d]}function De(e,n){var t=L(n.client),i=k.useContext(Z()).renderPromises,a=!!i,u=t.disableNetworkFetches,r=n.ssr!==!1&&!n.skip,c=n.partialRefetch,v=Qe(t,e,n,a),d=Ee(t,e,n,i,v),s=d[0],o=s.observable,l=s.resultData,h=d[1],f=v(o);Pe(l,o,t,n,f);var y=k.useMemo(function(){return Ae(o)},[o]);Fe(o,i,r);var g=Re(l,o,t,n,f,u,c,a,{onCompleted:n.onCompleted||J,onError:n.onError||J});return{result:g,obsQueryFields:y,observable:o,resultData:l,client:t,onQueryExecuted:h}}function Re(e,n,t,i,a,u,r,c,v){var d=k.useRef(v);k.useEffect(function(){d.current=v});var s=(c||u)&&i.ssr===!1&&!i.skip?ce:i.skip||a.fetchPolicy==="standby"?le:void 0,o=e.previousData,l=k.useMemo(function(){return s&&se(s,o,n,t)},[t,n,s,o]);return ie(k.useCallback(function(h){if(c)return function(){};var f=function(){var m=e.current,p=n.getCurrentResult();m&&m.loading===p.loading&&m.networkStatus===p.networkStatus&&R(m.data,p.data)||W(p,e,n,t,r,h,d.current)},y=function(m){if(g.current.unsubscribe(),g.current=n.resubscribeAfterError(f,y),!we.call(m,"graphQLErrors"))throw m;var p=e.current;(!p||p&&p.loading||!R(m,p.error))&&W({data:p&&p.data,error:m,loading:!1,networkStatus:q.error},e,n,t,r,h,d.current)},g={current:n.subscribe(f,y)};return function(){setTimeout(function(){return g.current.unsubscribe()})}},[u,c,n,e,r,t]),function(){return l||X(e,n,d.current,r,t)},function(){return l||X(e,n,d.current,r,t)})}function Fe(e,n,t){n&&t&&(n.registerSSRObservable(e),e.getCurrentResult().loading&&n.addObservableQueryPromise(e))}function Pe(e,n,t,i,a){var u;n[j]&&!R(n[j],a)&&(n.reobserve(ue(n,t,i,a)),e.previousData=((u=e.current)===null||u===void 0?void 0:u.data)||e.previousData,e.current=void 0),n[j]=a}function Qe(e,n,t,i){t===void 0&&(t={});var a=t.skip;t.ssr,t.onCompleted,t.onError;var u=t.defaultOptions,r=ee(t,["skip","ssr","onCompleted","onError","defaultOptions"]);return function(c){var v=Object.assign(r,{query:n});return i&&(v.fetchPolicy==="network-only"||v.fetchPolicy==="cache-and-network")&&(v.fetchPolicy="cache-first"),v.variables||(v.variables={}),a?(v.initialFetchPolicy=v.initialFetchPolicy||v.fetchPolicy||Y(u,e.defaultOptions),v.fetchPolicy="standby"):v.fetchPolicy||(v.fetchPolicy=(c==null?void 0:c.options.initialFetchPolicy)||Y(u,e.defaultOptions)),v}}function ue(e,n,t,i){var a=[],u=n.defaultOptions.watchQuery;return u&&a.push(u),t.defaultOptions&&a.push(t.defaultOptions),a.push(be(e&&e.options,i)),a.reduce(ne)}function W(e,n,t,i,a,u,r){var c=n.current;c&&c.data&&(n.previousData=c.data),!e.error&&re(e.errors)&&(e.error=new U({graphQLErrors:e.errors})),n.current=se(Ve(e,t,a),n.previousData,t,i),u(),Me(e,c==null?void 0:c.networkStatus,r)}function Me(e,n,t){if(!e.loading){var i=oe(e);Promise.resolve().then(function(){i?t.onError(i):e.data&&n!==e.networkStatus&&e.networkStatus===q.ready&&t.onCompleted(e.data)}).catch(function(a){globalThis.__DEV__!==!1&&S.warn(a)})}}function X(e,n,t,i,a){return e.current||W(n.getCurrentResult(),e,n,a,i,function(){},t),e.current}function Y(e,n){var t;return(e==null?void 0:e.fetchPolicy)||((t=n==null?void 0:n.watchQuery)===null||t===void 0?void 0:t.fetchPolicy)||"cache-first"}function oe(e){return re(e.errors)?new U({graphQLErrors:e.errors}):e.error}function se(e,n,t,i){var a=e.data;e.partial;var u=ee(e,["data","partial"]),r=b(b({data:a},u),{client:i,observable:t,variables:t.variables,called:e!==ce&&e!==le,previousData:n});return r}function Ve(e,n,t){return e.partial&&t&&!e.loading&&(!e.data||Object.keys(e.data).length===0)&&n.options.fetchPolicy!=="cache-only"?(n.refetch(),b(b({},e),{loading:!0,networkStatus:q.refetch})):e}var ce=te({loading:!0,data:void 0,error:void 0,networkStatus:q.loading}),le=te({loading:!1,data:void 0,error:void 0,networkStatus:q.ready});function Ae(e){return{refetch:e.refetch.bind(e),reobserve:e.reobserve.bind(e),fetchMore:e.fetchMore.bind(e),updateQuery:e.updateQuery.bind(e),startPolling:e.startPolling.bind(e),stopPolling:e.stopPolling.bind(e),subscribeToMore:e.subscribeToMore.bind(e)}}function de(e,n){var t=L(void 0);z(e,C.Mutation);var i=k.useState({called:!1,loading:!1,client:t}),a=i[0],u=i[1],r=k.useRef({result:a,mutationId:0,isMounted:!0,client:t,mutation:e,options:n});x(function(){Object.assign(r.current,{client:t,options:n,mutation:e})});var c=k.useCallback(function(d){d===void 0&&(d={});var s=r.current,o=s.options,l=s.mutation,h=b(b({},o),{mutation:l}),f=d.client||r.current.client;!r.current.result.loading&&!h.ignoreResults&&r.current.isMounted&&u(r.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:f});var y=++r.current.mutationId,g=ne(h,d);return f.mutate(g).then(function(m){var p,N,I=m.data,Q=m.errors,w=Q&&Q.length>0?new U({graphQLErrors:Q}):void 0,V=d.onError||((p=r.current.options)===null||p===void 0?void 0:p.onError);if(w&&V&&V(w,g),y===r.current.mutationId&&!g.ignoreResults){var O={called:!0,loading:!1,data:I,error:w,client:f};r.current.isMounted&&!R(r.current.result,O)&&u(r.current.result=O)}var M=d.onCompleted||((N=r.current.options)===null||N===void 0?void 0:N.onCompleted);return w||M==null||M(m.data,g),m}).catch(function(m){var p;if(y===r.current.mutationId&&r.current.isMounted){var N={loading:!1,error:m,data:void 0,called:!0,client:f};R(r.current.result,N)||u(r.current.result=N)}var I=d.onError||((p=r.current.options)===null||p===void 0?void 0:p.onError);if(I)return I(m,g),{data:void 0,errors:m};throw m})},[]),v=k.useCallback(function(){if(r.current.isMounted){var d={called:!1,loading:!1,client:r.current.client};Object.assign(r.current,{mutationId:0,result:d}),u(d)}},[]);return k.useEffect(function(){var d=r.current;return d.isMounted=!0,function(){d.isMounted=!1}},[]),[c,b({reset:v},a)]}function Te(e,n){n===void 0&&(n=Object.create(null));var t=k.useRef(!1),i=L(n.client);z(e,C.Subscription),t.current||(t.current=!0,n.onSubscriptionData&&globalThis.__DEV__!==!1&&S.warn(n.onData?53:54),n.onSubscriptionComplete&&globalThis.__DEV__!==!1&&S.warn(n.onComplete?55:56));var a=n.skip,u=n.fetchPolicy,r=n.errorPolicy,c=n.shouldResubscribe,v=n.context,d=n.extensions,s=n.ignoreResults,o=Ne(function(){return n.variables},[n.variables]),l=function(){return Ue(i,e,o,u,r,v,d)},h=k.useState(n.skip?null:l),f=h[0],y=h[1],g=k.useRef(l);x(function(){g.current=l}),a?f&&y(f=null):(!f||(i!==f.__.client||e!==f.__.query||u!==f.__.fetchPolicy||r!==f.__.errorPolicy||!R(o,f.__.variables))&&(typeof c=="function"?!!c(n):c)!==!1)&&y(f=l());var m=k.useRef(n);k.useEffect(function(){m.current=n});var p=!a&&!s,N=k.useMemo(function(){return{loading:p,error:void 0,data:void 0,variables:o}},[p,o]),I=k.useRef(s);x(function(){I.current=s});var Q=ie(k.useCallback(function(V){if(!f)return function(){};var O=!1,M=f.__.variables,G=f.__.client,ve=f.subscribe({next:function(_){var A,E;if(!O){var T={loading:!1,data:_.data,error:oe(_),variables:M};f.__.setResult(T),I.current||V(),T.error?(E=(A=m.current).onError)===null||E===void 0||E.call(A,T.error):m.current.onData?m.current.onData({client:G,data:T}):m.current.onSubscriptionData&&m.current.onSubscriptionData({client:G,subscriptionData:T})}},error:function(_){var A,E;_=_ instanceof U?_:new U({protocolErrors:[_]}),O||(f.__.setResult({loading:!1,data:void 0,error:_,variables:M}),I.current||V(),(E=(A=m.current).onError)===null||E===void 0||E.call(A,_))},complete:function(){O||(m.current.onComplete?m.current.onComplete():m.current.onSubscriptionComplete&&m.current.onSubscriptionComplete())}});return function(){O=!0,setTimeout(function(){ve.unsubscribe()})}},[f]),function(){return f&&!a&&!s?f.__.result:N},function(){return N}),w=k.useCallback(function(){S(!m.current.skip,57),y(g.current())},[m,g]);return k.useMemo(function(){return b(b({},Q),{restart:w})},[Q,w])}function Ue(e,n,t,i,a,u,r){var c={query:n,variables:t,fetchPolicy:i,errorPolicy:a,context:u,extensions:r},v=b(b({},c),{client:e,result:{loading:!0,data:void 0,error:void 0,variables:t},setResult:function(s){v.result=s}}),d=null;return Object.assign(new ye(function(s){d||(d=e.subscribe(c));var o=d.subscribe(s);return function(){return o.unsubscribe()}}),{__:v})}const qe=`mutation CheckIn($newUser: String!, $userId: String!) {

	userIn(newUser: $newUser, userId: $userId) {

		userId

		user

	}

}



mutation CheckOut($userId: String!) {

	userOut(userId: $userId)

}



mutation addComment($newCommentData: NewCommentInput!) {

	addComment(newCommentData: $newCommentData) {

		comId

		title

		comment

		user

		createdAt

	}

}

mutation delComment($comId: String!) {

	deleteComment(comId: $comId)

}



query allComment {

	allComments {

		comId

		comment

		user

		createdAt

	}

}



subscription UserChek {

	userChek {

		userId

		user

	}

}



subscription CommetChek {

	commentAdded {

		comId

		comment

		user

		createdAt

	}

}

`,F={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CheckIn"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"newUser"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userIn"},arguments:[{kind:"Argument",name:{kind:"Name",value:"newUser"},value:{kind:"Variable",name:{kind:"Name",value:"newUser"}}},{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[]}]}}]}},{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CheckOut"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userOut"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}}],directives:[]}]}},{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"addComment"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"newCommentData"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"NewCommentInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addComment"},arguments:[{kind:"Argument",name:{kind:"Name",value:"newCommentData"},value:{kind:"Variable",name:{kind:"Name",value:"newCommentData"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"comId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"comment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]}]}}]}},{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"delComment"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"comId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteComment"},arguments:[{kind:"Argument",name:{kind:"Name",value:"comId"},value:{kind:"Variable",name:{kind:"Name",value:"comId"}}}],directives:[]}]}},{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"allComment"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"allComments"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"comId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"comment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]}]}}]}},{kind:"OperationDefinition",operation:"subscription",name:{kind:"Name",value:"UserChek"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userChek"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[]}]}}]}},{kind:"OperationDefinition",operation:"subscription",name:{kind:"Name",value:"CommetChek"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"commentAdded"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"comId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"comment"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:722,source:{name:"GraphQL request",locationOffset:{line:1,column:1},body:qe}}},P=(e,n)=>{const t=(s,o)=>{if(s.kind==="FragmentSpread")o.add(s.name.value);else if(s.kind==="VariableDefinition"){const l=s.type;l.kind==="NamedType"&&o.add(l.name.value)}return s&&"selectionSet"in s&&s.selectionSet&&s.selectionSet.selections.forEach(l=>{t(l,o)}),s&&"variableDefinitions"in s&&s.variableDefinitions&&s.variableDefinitions.forEach(l=>{t(l,o)}),s&&"definitions"in s&&s.definitions&&s.definitions.forEach(l=>{t(l,o)}),o},i=s=>{const o={};return s.definitions.forEach(function(l){"name"in l&&l.name&&(o[l.name.value]=t(l,new Set))}),o},a=(s,o)=>{for(let l=0;l<s.definitions.length;l++){const h=s.definitions[l];if(h&&"name"in h&&h.name&&h.name.value==o)return h}},u=i(e),r=Object.assign({},e,{definitions:[a(e,n)]}),c=u[n]||new Set,v=new Set;let d=new Set;for(c.forEach(s=>{d.add(s)});d.size>0;){const s=d;d=new Set,s.forEach(o=>{v.has(o)||(v.add(o),(u[o]||new Set).forEach(h=>{d.add(h)}))})}return v.forEach(s=>{const o=a(e,s);o&&r.definitions.push(o)}),r},je=P(F,"CheckIn"),Le=P(F,"CheckOut"),$e=P(F,"addComment"),xe=P(F,"delComment"),We=P(F,"allComment"),ze=P(F,"UserChek"),Be=P(F,"CommetChek"),B={CheckIn:je,CheckOut:Le,addComment:$e,delComment:xe,allComment:We,UserChek:ze,CommetChek:Be},He=()=>{const[e,{data:n,loading:t,error:i}]=de(B.CheckOut);return{userOutByUserId:u=>{e({variables:{userId:u}})},loadingCheckOut:t,errorCheckOut:i,checkOut:n&&n.checkOut}},Je=()=>{const[e,{data:n,loading:t,error:i}]=de(B.CheckIn);return{userInByUserName:(u,r)=>{e({variables:{newUser:u,userId:r}})},loadingChecIn:t,errorCheckIn:i,userIn:n&&n.userIn}},Xe=()=>{const{data:e,loading:n}=Te(B.UserChek);return{loading:n,subdata:e&&e.userChek}};export{B as _,Je as a,de as b,Ke as c,Te as d,Xe as e,He as u};
