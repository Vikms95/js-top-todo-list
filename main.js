(()=>{"use strict";const t=[],e=()=>{const e=document.createElement("div"),d=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div"),c=document.createElement("div");e.appendChild(d),e.appendChild(n),n.appendChild(a),n.appendChild(c),a.appendChild(o),a.appendChild(i),e.classList.add("todo-container"),d.classList.add("todo"),d.classList.add("checkmark"),n.classList.add("todo"),n.classList.add("body"),a.classList.add("todo"),a.classList.add("header"),o.classList.add("todo"),o.classList.add("title"),i.classList.add("due-date"),c.classList.add("todo"),c.classList.add("description");const l=(()=>{let e=prompt("Enter title");if(null===e)return;let d=prompt("Enter due date");if(null===d)return;let n=prompt("Enter priority (1 = low, 3 = high)");if(null===n)return;let a=prompt("Enter description");if(null===a)return;let o=((t,e,d,n)=>({title:t,dueDate:e,priority:d,description:n,notes:void 0,checkmark:void 0}))(e,d,n,a);return t.push(o),o})();return d.textContent="X",o.textContent=l.title,i.textContent=l.dueDate,c.textContent=l.description,o.style.backgroundColor=function(t){return{1:"blue",2:"yellow",3:"red"}[t.priority]}(l),e};!function(){const t=document.getElementById("content"),d=document.createElement("div"),n=document.createElement("div"),a=document.createElement("button"),o=document.createElement("button"),i=document.createElement("button"),c=document.createElement("button");var l;t.appendChild(d),t.appendChild(n),d.appendChild(a),d.appendChild(o),d.appendChild(i),d.appendChild(c),d.classList.add("nav-bar"),n.classList.add("dynamic-content"),a.classList.add("home"),o.classList.add("home"),i.classList.add("home"),c.classList.add("home"),a.textContent="Home",o.textContent="New TODO",i.textContent="Today",c.textContent="Upcoming",l=e,o.addEventListener("click",(()=>{const t=document.getElementById("content"),e=l();t.appendChild(e)}))}()})();