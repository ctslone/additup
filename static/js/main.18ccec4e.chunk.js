(this["webpackJsonpaddition-spa"]=this["webpackJsonpaddition-spa"]||[]).push([[0],{18:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),o=a.n(s),c=(a(23),a(12)),l=a(13),i=a(14),u=a(17),m=a(16);a(24),a(25);var h=function(e){return r.a.createElement("div",null,e.children)};a(26);var d=function(e){return r.a.createElement("div",{className:"container"},e.children)};var v=function(e){return r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{id:"mainTitle"},r.a.createElement("img",{id:"app-logo",alt:"owl-logo",src:"owl.png"}),"Additup!")))};var w=function(e){return r.a.createElement("h3",{id:"answer-status"},e.children)},p=a(15),f=a.n(p),b=function(e,t){return f.a.get("https://api.mathjs.org/v4/?expr="+e+"%2B"+t)},E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numbers:Array,status:Number,answer:Number,userAnswer:"",correct:Boolean,show:!1},e.handleInputChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(c.a)({},a,n))},e.doMath=function(t,a){b(t,a).then((function(t){return e.setState({status:t.status,answer:t.data})}))},e.checkAnswer=function(t){200!==e.state.status&&alert("There has been an error. Please try again later."),e.setState({show:!0}),t===e.state.answer?(e.setState({correct:!0}),e.generateNumbers()):e.setState({correct:!1}),e.setState({userAnswer:""})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.generateNumbers()}},{key:"generateNumbers",value:function(){for(var e=[],t=0;t<2;t++)e.push(Math.floor(10*Math.random())+1);this.setState({numbers:e}),this.doMath(e[0],e[1])}},{key:"render",value:function(){var e=this;return r.a.createElement(h,null,r.a.createElement(d,null,r.a.createElement(v,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"text-center"},r.a.createElement("label",{id:"equation",htmlFor:"exampleInputEmail1"},"What is ",this.state.numbers[0]," + ",this.state.numbers[1]," = ?"),r.a.createElement("h5",null,"Enter your answer below"),r.a.createElement("input",{value:this.state.userAnswer,onChange:this.handleInputChange,name:"userAnswer",type:"number",className:"form-control text-center",id:"answerInput",autoFocus:!0}),r.a.createElement("div",null,this.state.show&&r.a.createElement(w,null,this.state.correct?"You got it right! Great Work!":"Oops! Try Again!"))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 text-center"},r.a.createElement("button",{onClick:function(){return e.checkAnswer(parseInt(e.state.userAnswer))},id:"submit-ans-btn",className:"btn btn-lg"},"Submit")))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.18ccec4e.chunk.js.map