const body=document.body, themeBtn=document.getElementById("themeBtn"), menuBtn=document.getElementById("menuBtn"), nav=document.querySelector(".nav");
themeBtn.addEventListener("click",()=>{body.classList.toggle("light");themeBtn.textContent=body.classList.contains("light")?"☾":"☼";localStorage.setItem("theme",body.classList.contains("light")?"light":"dark")});
if(localStorage.getItem("theme")==="light"){body.classList.add("light");themeBtn.textContent="☾"}
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.addEventListener("mousemove",e=>{document.querySelector(".cursor-glow").style.cssText=`position:fixed;pointer-events:none;z-index:0;width:240px;height:240px;border-radius:50%;left:${e.clientX-120}px;top:${e.clientY-120}px;background:radial-gradient(circle,rgba(255,255,255,.045),transparent 65%)`});

function bindStoryCards(selector, outputId){const cards=document.querySelectorAll(selector),output=document.getElementById(outputId);cards.forEach(card=>card.addEventListener("click",()=>{const story=selector.includes("fun-card")?card.dataset.fun:card.dataset.story;const same=output.classList.contains("show")&&output.dataset.source===story;if(same){output.classList.remove("show");return}output.textContent=story;output.dataset.source=story;output.classList.add("show");output.scrollIntoView({behavior:"smooth",block:"nearest"})}))}
bindStoryCards(".fun-card","#funStory");
bindStoryCards(".life-card","#lifeStory");
