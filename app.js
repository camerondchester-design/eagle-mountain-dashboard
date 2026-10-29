(function(){
"use strict";
var START=2018,END=2029,STAGES=["Proposed","Approved","Under construction","Complete"];
var COL={"Proposed":"var(--p)","Approved":"var(--a)","Under construction":"var(--u)","Complete":"var(--c)"};
var LANES=["Data centers","Transportation","Utilities","Budget & taxes","Development","Amenities"];
var st={mBody:"All",mYear:"2026",mWhen:"All",topic:"All",status:"All",zoom:1,open:"qts1",aCat:"All",aStat:"All"};
function $(id){return document.getElementById(id);}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
function toX(d){var p=d.split("-").map(Number);return((p[0]+((p[1]||1)-1)/12+((p[2]||1)-1)/365-START)/(END-START))*100;}
function tone(s){return /^(Complete|Adopted|Open)/.test(s)?"ok":/^(Under|In progress|Approved)/.test(s)?"go":/^(Unknown|Unconfirmed)/.test(s)?"warn":"";}
function pill(s){return '<span class="pill '+tone(s)+'">'+esc(s)+'</span>';}
function fill(sel,opts,cb){sel.innerHTML=opts.map(function(o){return"<option>"+esc(o)+"</option>";}).join("");sel.onchange=function(){cb(sel.value);};}
function host(u){try{return new URL(u).hostname;}catch(e){return u;}}
function byId(id){for(var i=0;i<projects.length;i++)if(projects[i].id===id)return projects[i];return null;}

function gantt(){
  var shown=projects.filter(function(p){return(st.topic==="All"||p.topic===st.topic)&&(st.status==="All"||p.status===st.status);});
  var g=$("gantt");g.style.minWidth=(st.zoom*100)+"%";
  var yrs=[];for(var y=START;y<=END;y++)yrs.push(y);
  var grid=yrs.map(function(y){return'<div class="yr" style="left:'+toX(y+"-01")+'%"></div>';}).join("");
  var h='<div class="grow" style="cursor:default;border-bottom:1px solid var(--border)"><div class="gname"></div><div class="gtrack">'+yrs.map(function(y){return'<span class="ylab" style="left:'+toX(y+"-01")+'%">'+y+'</span>';}).join("")+'</div></div>';
  LANES.forEach(function(l){
    var ps=shown.filter(function(p){return p.topic===l;});if(!ps.length)return;
    h+='<div class="lane">'+esc(l)+'</div>';
    ps.forEach(function(p){
      var xs=p.ms.map(function(m){return toX(m.date);}),a=Math.min.apply(null,xs),b=Math.max.apply(null,xs);
      h+='<div class="grow'+(st.open===p.id?" sel":"")+'" data-id="'+p.id+'" tabindex="0" role="button" aria-label="'+esc(p.name)+'"><div class="gname">'+esc(p.name)+'</div><div class="gtrack">'+grid+
        '<div class="bar" style="left:'+a+'%;width:'+Math.max(b-a,0.3)+'%;background:'+COL[p.status]+'"></div>'+
        p.ms.map(function(m){return'<div class="ms'+(m.expected?" exp":"")+'" title="'+esc(m.date+": "+m.label)+'" style="left:'+toX(m.date)+'%;background:'+COL[m.stage]+';border-color:'+COL[m.stage]+'"></div>';}).join("")+'</div></div>';
    });
  });
  if(!shown.length)h+='<p style="padding:10px">No projects match these filters.</p>';
  h+='<div class="today" id="todayLine"><span>Today</span></div>';
  g.innerHTML=h;
  var nm=g.querySelector(".gname"),w=nm?nm.offsetWidth:200;
  $("todayLine").style.left="calc("+w+"px + (100% - "+w+"px) * "+(toX(TODAY)/100)+")";
  Array.prototype.forEach.call(g.querySelectorAll(".grow[data-id]"),function(r){
    function go(){st.open=r.getAttribute("data-id");gantt();detail();}
    r.onclick=go;r.onkeydown=function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();go();}};
  });
}
function detail(){
  var p=byId(st.open);if(!p){$("detail").style.display="none";return;}
  $("detail").style.display="";
  $("detail").innerHTML='<h3 style="margin:0 0 6px">'+esc(p.name)+'</h3><p>'+pill(p.status)+' '+esc(p.progress)+'</p><ul>'+
    p.ms.map(function(m){return"<li>"+esc(m.date)+" — "+esc(m.label)+(m.expected?" <em>(expected)</em>":"")+"</li>";}).join("")+"</ul>"+
    (p.note?"<p>"+esc(p.note)+"</p>":"")+"<p>Sources: "+p.src.map(function(s){return'<a href="'+esc(s)+'" target="_blank" rel="noopener">'+esc(host(s))+"</a>";}).join(" · ")+"</p>";
}
function milestones(){
  var rows=[];projects.forEach(function(p){if(st.topic!=="All"&&p.topic!==st.topic)return;p.ms.forEach(function(m){rows.push([m.date,p.name+": "+m.label,m.expected?"Expected":m.stage]);});});
  rows.sort(function(a,b){return a[0].localeCompare(b[0]);});
  $("msT").tBodies[0].innerHTML=rows.map(function(r){return"<tr><td>"+esc(r[0])+"</td><td>"+esc(r[1])+"</td><td>"+pill(r[2])+"</td></tr>";}).join("");
}
function goalsT(){
  $("goalT").tBodies[0].innerHTML=goals.map(function(g){
    var rel=g.related.length?g.related.map(function(r){var p=byId(r);return'<a href="#timeline" data-open="'+r+'">'+esc(p?p.name:r)+"</a>";}).join(", "):"None tracked yet";
    return"<tr><td>"+esc(g.goal)+'</td><td><a href="'+esc(g.href)+'" target="_blank" rel="noopener">'+esc(g.source)+"</a></td><td>"+rel+"</td><td>"+pill(g.status)+"</td></tr>";
  }).join("");
  Array.prototype.forEach.call(document.querySelectorAll("[data-open]"),function(a){a.onclick=function(){st.topic="All";st.status="All";$("fTopic").value="All";$("fStatus").value="All";st.open=a.getAttribute("data-open");gantt();detail();milestones();};});
}
function amenT(){
  var rows=amenities.filter(function(a){return(st.aCat==="All"||a.cat===st.aCat)&&(st.aStat==="All"||a.status.indexOf(st.aStat)===0);});
  $("amenT").tBodies[0].innerHTML=rows.length?rows.map(function(a){return"<tr><td>"+esc(a.name)+"</td><td>"+esc(a.cat)+"</td><td>"+pill(a.status)+"</td><td>"+esc(a.when)+"</td><td>"+esc(a.where)+'</td><td><a href="'+esc(a.src)+'" target="_blank" rel="noopener">'+esc(host(a.src))+"</a></td></tr>";}).join(""):'<tr><td colspan="6">No amenities match these filters.</td></tr>';
}
function map(){
  if(typeof L==="undefined"){$("map").innerHTML='<p style="padding:12px">Map library failed to load. See the location table below.</p>';return;}
  var m=L.map("map",{scrollWheelZoom:false}).setView([40.33,-111.99],12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(m);
  var b=[];pins.forEach(function(p){
    var mk=L.circleMarker([p.lat,p.lng],{radius:9,color:"#2563eb",weight:2,fillOpacity:p.approx?0.15:0.7,dashArray:p.approx?"4 3":null}).addTo(m);
    mk.bindPopup("<strong>"+esc(p.name)+"</strong><br>"+(p.approx?"<em>Approximate location</em><br>":"")+esc(p.note)+'<br><a href="'+esc(p.src)+'" target="_blank" rel="noopener">Source</a>');b.push([p.lat,p.lng]);
  });
  if(b.length)m.fitBounds(b,{padding:[30,30]});
}
function meetingsL(){
  var rows=meetings.filter(function(m){return(st.mBody==="All"||m.body===st.mBody)&&(st.mYear==="All"||m.date.slice(0,4)===st.mYear)&&(st.mWhen==="All"||(st.mWhen==="Upcoming")===m.upcoming);});
  function lk(u,t){return u?'<a href="'+esc(u)+'" target="_blank" rel="noopener">'+t+"</a>":'<span class="cap">'+t+" not posted</span>";}
  $("mList").innerHTML=rows.length?rows.map(function(m){
    var d=new Date(m.date+"T12:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"});
    return'<div class="card" style="margin-bottom:10px"><div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center"><strong>'+esc(d)+"</strong><span>"+esc(m.name)+"</span>"+pill(m.minutesStatus==="Upcoming"?"Upcoming":"Minutes: "+m.minutesStatus)+"</div>"+
      (function(){
        if(m.upcoming)return"";
        var recent=m.date>="2026-07-31";
        var sum=m.summary.length?"<ul>"+m.summary.map(function(b){return"<li>"+esc(b)+"</li>";}).join("")+"</ul>":"";
        var src='<p class="cap">From the '+esc(m.textSource||"documents")+'.</p>';
        var dec=(m.decisions&&m.decisions.length)?'<details><summary>Decisions ('+m.decisions.length+')</summary><div class="tw"><table><thead><tr><th>Item</th><th>Outcome</th><th>Vote</th></tr></thead><tbody>'+m.decisions.map(function(d){return"<tr><td>"+esc(d.item)+"</td><td>"+pill(d.outcome)+"</td><td>"+esc(d.vote)+"</td></tr>";}).join("")+"</tbody></table></div></details>":"";
        return recent?sum+src+dec:'<details><summary>Summary</summary>'+sum+src+'</details>'+dec;
      })()+
      '<p style="margin:6px 0 0;font-size:14px">'+[lk(m.agenda,"Agenda"),lk(m.packet,"Packet"),lk(m.minutes,"Minutes"),'<a href="'+esc(m.portal)+'" target="_blank" rel="noopener">Portal page</a>'].join(" · ")+"</p></div>";
  }).join(""):"<p>No meetings match these filters.</p>";
}
function init(){
  fill($("fTopic"),["All"].concat(LANES),function(v){st.topic=v;gantt();milestones();});
  fill($("fStatus"),["All"].concat(STAGES),function(v){st.status=v;gantt();});
  fill($("aCat"),["All","Grocery & retail","Restaurants","Commercial centers","Parks & rec","Schools","Healthcare","Library & civic","Public safety"],function(v){st.aCat=v;amenT();});
  fill($("aStat"),["All","Open","Approved","Proposed","Unconfirmed"],function(v){st.aStat=v;amenT();});
  fill($("mBody"),["All","City Council","Planning Commission","Redevelopment Agency"],function(v){st.mBody=v;meetingsL();});
  fill($("mYear"),["2026","All"],function(v){st.mYear=v;meetingsL();});
  fill($("mWhen"),["All","Past","Upcoming"],function(v){st.mWhen=v;meetingsL();});
  Array.prototype.forEach.call(document.querySelectorAll("#zoom button"),function(btn){btn.onclick=function(){st.zoom=Number(btn.getAttribute("data-z"));Array.prototype.forEach.call(document.querySelectorAll("#zoom button"),function(x){x.classList.toggle("on",x===btn);});gantt();};});
  $("legend").innerHTML=STAGES.map(function(s){return'<span><span class="dot" style="background:'+COL[s]+'"></span>'+s+"</span>";}).join("")+'<span><span class="dot" style="border:2px solid var(--muted)"></span>Expected</span>';
  gantt();detail();goalsT();amenT();milestones();meetingsL();map();
  window.addEventListener("resize",gantt);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
