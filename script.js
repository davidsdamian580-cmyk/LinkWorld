const offers=[
{title:"Laptop & Tech Picks",cat:"technology",country:"all",icon:"💻",place:"Worldwide",desc:"Useful technology products for study, work and everyday life.",url:"https://example.com/approved-affiliate-link"},
{title:"Gaming Accessories",cat:"gaming",country:"all",icon:"🎮",place:"Worldwide",desc:"Discover gaming accessories from approved partner stores.",url:"https://example.com/approved-affiliate-link"},
{title:"Fashion Finds",cat:"fashion",country:"us",icon:"👕",place:"USA",desc:"Explore clothing and lifestyle products.",url:"https://example.com/approved-affiliate-link"},
{title:"Smart Home",cat:"home",country:"uk",icon:"🏠",place:"UK",desc:"Home and smart-device recommendations.",url:"https://example.com/approved-affiliate-link"},
{title:"Travel Essentials",cat:"travel",country:"eu",icon:"✈️",place:"Europe",desc:"Travel services and useful travel products.",url:"https://example.com/approved-affiliate-link"},
{title:"Study Tools",cat:"education",country:"za",icon:"📚",place:"South Africa",desc:"Learning resources and study tools.",url:"https://example.com/approved-affiliate-link"},
{title:"Online Services",cat:"services",country:"asia",icon:"📱",place:"Asia",desc:"Useful digital services and subscriptions.",url:"https://example.com/approved-affiliate-link"},
{title:"South African Tech",cat:"technology",country:"za",icon:"🇿🇦",place:"South Africa",desc:"Technology offers for South African visitors.",url:"https://example.com/approved-affiliate-link"},
{title:"European Style",cat:"fashion",country:"eu",icon:"👟",place:"Europe",desc:"Fashion and lifestyle discoveries.",url:"https://example.com/approved-affiliate-link"},
{title:"Home Office",cat:"home",country:"us",icon:"🪑",place:"USA",desc:"Products for building a productive workspace.",url:"https://example.com/approved-affiliate-link"},
{title:"Language Learning",cat:"education",country:"all",icon:"🌐",place:"Worldwide",desc:"Explore language-learning resources.",url:"https://example.com/approved-affiliate-link"},
{title:"Travel Gear",cat:"travel",country:"za",icon:"🎒",place:"South Africa",desc:"Useful travel gear and services.",url:"https://example.com/approved-affiliate-link"}
];
let cat="all";
const grid=document.querySelector("#grid"),search=document.querySelector("#search"),country=document.querySelector("#country");
function render(){
 const q=search.value.toLowerCase().trim(), c=country.value;
 const rows=offers.filter(x=>(cat==="all"||x.cat===cat)&&(c==="all"||x.country===c||x.country==="all")&&(!q||`${x.title} ${x.cat} ${x.place} ${x.desc}`.toLowerCase().includes(q)));
 grid.innerHTML=rows.map(x=>`<article class="card"><div class="image">${x.icon}</div><div class="info"><span class="tag">${x.cat}</span><h3>${x.title}</h3><p>${x.desc}</p><div class="meta"><span>📍 ${x.place}</span><span>Affiliate</span></div><a class="deal" href="${x.url}" target="_blank" rel="sponsored nofollow noopener">View offer →</a></div></article>`).join("");
 document.querySelector("#count").textContent=`${rows.length} offers`;
 document.querySelector("#offerStat").textContent=offers.length;
 document.querySelector("#empty").hidden=rows.length>0;
}
document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>{document.querySelector(".tabs .active").classList.remove("active");b.classList.add("active");cat=b.dataset.cat;render()});
search.oninput=render;country.onchange=render;render();
const eftForm=document.querySelector("#eftForm");
if(eftForm){
  eftForm.addEventListener("submit",e=>{
    e.preventDefault();
    const bank=document.querySelector("#bank").value;
    if(!bank){document.querySelector("#eftStatus").textContent="Please select a bank.";return;}
    document.querySelector("#eftStatus").textContent="EFT preference selected. For real payouts, enter/confirm your banking details only in the affiliate network's secure payout portal.";
  });
}
