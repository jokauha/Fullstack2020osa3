(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),u=t.n(o),c=(t(20),t(4)),l=t(2),i=t(3),m=t.n(i),d="/api/persons",s=function(){return m.a.get(d).then((function(e){return e.data}))},f=function(e){return m.a.post(d,e).then((function(e){return e.data}))},h=function(e,n){return m.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){return m.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},E=function(e){var n=e.person,t=e.exterminatePerson;return r.a.createElement("li",null,n.name," ",n.number,r.a.createElement("button",{onClick:t},"delete"))},p=function(e){var n=e.persons,t=e.searchName,a=e.Person,o=e.deletePerson;return r.a.createElement("ul",null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement(a,{key:e.name,person:e,exterminatePerson:function(){return o(e.id,e.name)}})})))},v=function(e){var n=e.searchName,t=e.handleNameSearch;return r.a.createElement("form",null,r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t})))},w=function(e){var n=e.addName,t=e.newName,a=e.handleNameChange,o=e.newNumber,u=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:o,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},g=function(e){var n=e.message,t=e.isError,a={color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},o=Object(c.a)({},a,{color:"red"});return null===n?null:t?r.a.createElement("div",{style:o},n):r.a.createElement("div",{style:a},n)},N=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),m=i[0],d=i[1],N=Object(a.useState)(""),j=Object(l.a)(N,2),O=j[0],C=j[1],S=Object(a.useState)(""),k=Object(l.a)(S,2),y=k[0],P=k[1],T=Object(a.useState)(null),L=Object(l.a)(T,2),x=L[0],B=L[1],D=Object(a.useState)(!1),J=Object(l.a)(D,2),z=J[0],A=J[1];Object(a.useEffect)((function(){s().then((function(e){o(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:x,isError:z}),r.a.createElement(v,{searchName:y,handleNameSearch:function(e){P(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(w,{addName:function(e){e.preventDefault();var n=t.find((function(e){return e.name.toLowerCase()===m.toLowerCase()}));if(void 0!==n){if(window.confirm(m+" is already added to phonebook, replace the old number with a new one?")){var a=t.find((function(e){return e.id===n.id})),r=Object(c.a)({},a,{number:O});h(n.id,r).then((function(e){o(t.map((function(t){return t.id!==n.id?t:e})))})).catch((function(e){B("".concat(m," was already deleted from server!")),A(!0),setTimeout((function(){B(null),A(!1)}),5e3)})),B("The number for ".concat(r.name," was updated.")),setTimeout((function(){B(null)}),5e3)}}else{var u={name:m,number:O};f(u).then((function(e){o(t.concat(e)),d(""),C(""),B("".concat(u.name," was added to the phonebook."))})).catch((function(e){("NameError"===e.name||"NameError"===e.name)&&(A(!0),B("No name given!"))})),setTimeout((function(){B(null),A(!1)}),5e3)}},newName:m,handleNameChange:function(e){d(e.target.value)},newNumber:O,handleNumberChange:function(e){C(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(p,{persons:t,searchName:y,Person:E,deletePerson:function(e,n){window.confirm("Delete "+n+"?")&&(b(e).then((function(n){o(t.filter((function(n){return n.id!==e})))})),B("".concat(n," was deleted from the phonebook.")),setTimeout((function(){B(null)}),5e3))}}))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a06b5be5.chunk.js.map