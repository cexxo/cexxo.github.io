const about = document.getElementById("about");
const home = document.getElementById("home");
const skill = document.getElementById("skill");
const proj = document.getElementById("projects");
const contact = document.getElementById("contact");
const proj1 = document.getElementById("proj1");
const info1 = document.getElementById("slide1");
const info2 = document.getElementById("slide2");
const info3 = document.getElementById("slide3");
function showAbout(){
    about.style.display="flex";
    home.style.display="none";
    skill.style.display="none";
    proj.style.display="none";
    contact.style.display="none";
}
function showMain(){
    about.style.display="none";
    home.style.display="flex";
    skill.style.display="none";
    proj.style.display="none";
    contact.style.display="none";
}
function showSkill(){
    about.style.display="none";
    skill.style.display="flex";
    home.style.display="none";
    proj.style.display="none";
    contact.style.display="none";
}
function showProjects(){
    about.style.display="none";
    skill.style.display="none";
    home.style.display="none";
    proj.style.display="flex";
    contact.style.display="none";
}
function showContacts(){
    about.style.display="none";
    skill.style.display="none";
    home.style.display="none";
    proj.style.display="none";
    contact.style.display="flex";
}
function hideInfo(){
    if(info1.style.height == 80+"%"){
    info1.style.display="none";
    info1.style.height=0+"%";
    info1.style.marginTop=100+"%";
    }
}
function hideInfo2(){
    if(info2.style.height == 80+"%"){
    info2.style.display="none";
    info2.style.height=0+"%";
    info2.style.marginTop=100+"%";
    }
}
function hideInfo3(){
    if(info3.style.height == 80+"%"){
    info3.style.display="none";
    info3.style.height=0+"%";
    info3.style.marginTop=100+"%";
    }
}

function swapCards(from,to){
    let id = null;
    clearInterval(id);
    id = setInterval(frame,5);
    let card1 = document.getElementById(String(from));
    let card2 = document.getElementById(String(to));
    let down=4;
    let up = -50;
    card2.style.marginTop = up+"%";
    card2.style.zIndex=-5;
    card2.style.display="flex";
    card2.style.position="fixed";
    card1.style.position="fixed";
    card1.style.zIndex=5;
    function frame(){
        if(down == -50 && up == 4){
            clearInterval(id);
            card1.style.display="none";
            card1.style.marginTop=4+"%";
        }else{
            down-=1;
            up+=1;
            card1.style.marginTop = down+"%";
            card2.style.marginTop = up+"%";
        }
    }
}

function moveAway(){
    let id = null;
    clearInterval(id);
    id = setInterval(frame,5);
    let down=4;
    let up = -50;
    about.style.marginTop = up+"%";
    about.style.zIndex=-5;
    home.style.zIndex=5;
    about.style.display="flex";
    about.style.position="fixed";
    home.style.position="fixed";
    function frame(){
        if(down == -50 && up == 4){
            clearInterval(id);
            home.style.display="none";
            home.style.marginTop=4+"%";
        }else{
            down-=1;
            up+=1;
            home.style.marginTop = down+"%";
            about.style.marginTop = up+"%";
        }
    }
}
function myMove() {
    info1.style.display="flex";
    let id = null;
    let pos = info1.style.height;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 80) {
        clearInterval(id);
        } else {
        pos++;
        info1.style.height = pos + '%';
        info1.style.marginTop = 100 - pos + '%';
        }
    }
}
function myMove2() {
    info2.style.display="flex";
    let id = null;
    let pos = info2.style.height;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 80) {
        clearInterval(id);
        } else {
        pos++;
        info2.style.height = pos + '%';
        info2.style.marginTop = 100 - pos + '%';
        }
    }
}
function myMove3() {
    info3.style.display="flex";
    let id = null;
    let pos = info3.style.height;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 80) {
        clearInterval(id);
        } else {
        pos++;
        info3.style.height = pos + '%';
        info3.style.marginTop = 100 - pos + '%';
        }
    }
}
function tracker(){
    window.open('https://github.com/cexxo/Tracker');
}
function gen(){
    window.open('https://github.com/cexxo/GenerativeArt');
}
function food(){
    window.open('https://github.com/eliferin14/Food-leftovers-recognition');
}
function expandToggle(){
    const toggle=document.getElementById("toggle");
    const menu=document.getElementById("menu");
    menu.style.display="flex";
    toggle.style.height="100%";
    toggle.style.width="100%";
    toggle.style.borderRadius=0;
    toggle.style.opacity=0.7;
}

function goTo(from,to){
    const elem = document.getElementById(String(to));
    from.style.display="none";
    elem.style.display="flex";
}