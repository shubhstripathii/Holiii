const sections = {
  home: home,
  celebration: celebration,
  choice: choice,
  shayari: shayari
};

function show(section) {
  for (let key in sections) {
    sections[key].classList.add("hidden");
  }
  sections[section].classList.remove("hidden");
}

// Floating hearts
for (let i = 0; i < 15; i++) {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (20 + Math.random() * 30) + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.body.appendChild(heart);
}

// Moving button
function run(btn) {
  btn.style.position = "fixed";
  btn.style.left = Math.random() * 80 + "vw";
  btn.style.top = Math.random() * 80 + "vh";
}

["noBtn","celebrationNoBtn","choiceNoBtn","shayariNoBtn"].forEach(id=>{
  let btn=document.getElementById(id);
  btn.onmouseover=e=>run(e.target);
  btn.onclick=e=>run(e.target);
});

// Navigation
yesBtn.onclick=()=>{
  show("celebration");
  confettiBlast();
};

holiBtn.onclick=()=>show("choice");

shayariBtn.onclick=()=>{
  show("shayari");
  typeShayari();
  confettiBlast();
};

// Confetti
function confettiBlast(){
  for(let i=0;i<120;i++){
    let conf=document.createElement("div");
    conf.className="confetti";
    conf.style.left=Math.random()*100+"vw";
    conf.style.background=`hsl(${Math.random()*360},100%,50%)`;
    conf.style.animationDuration=(3+Math.random()*3)+"s";
    document.body.appendChild(conf);
  }
}

// Splash click
document.addEventListener("click",function(e){
  let splash=document.createElement("div");
  splash.className="splash";
  splash.style.left=e.clientX+"px";
  splash.style.top=e.clientY+"px";
  splash.style.background=`hsl(${Math.random()*360},100%,50%)`;
  document.body.appendChild(splash);
  setTimeout(()=>splash.remove(),1000);
});

// Typing Shayari
function typeShayari(){
  const text=`Aap sabke jeevan me khile har rang,
   ye Holi laaye sukh aur umang! 🌈`;

  let i=0;
  typedText.innerHTML="";
  let interval=setInterval(()=>{
    typedText.innerHTML+=text[i];
    i++;
    if(i>=text.length) clearInterval(interval);
  },40);
}