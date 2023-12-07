const dayNight = document.querySelector(".day-night");
var Logo = document.querySelectorAll(".logotoggle");
isdark = false
dayNight.addEventListener("click", () => {
    if(isdark){
        Logo.forEach(element => {
            element.src = "image/Dagi_logo_light.png";
        });
        isdark = false
    }
    else{
        Logo.forEach(element => {
            element.src = "image/Dagi_logo.png";
        });
        isdark = true
    }
    Logo.forEach(element => {
        element.src.toggle = "image/Dagi_logo_light.png";
    });
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
        Logo.forEach(element => {
            element.src = "image/Dagi_logo.png";
        });
        isdark = true
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
        Logo.forEach(element => {
            element.src = "image/Dagi_logo_light.png";
        });
        isdark = false
    }
});


const nav = document.querySelector(".nav"),
sections = document.querySelectorAll(".section"),
navlist = nav.querySelectorAll("li"),
totalnavlist = navlist.length;
totalsections = sections.length;
for(let i=0; i<totalnavlist; i++){
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function()
    {
        sections.forEach(section => {
            section.classList.remove("active");
        });
        for(let j=0; j<totalnavlist; j++){
            navlist[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
    });
}
function showSection(element){
    for(let i=0; i<totalsections; i++){
        sections[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active")
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
asido = document.querySelector(".asido")
navTogglerBtn.addEventListener("click", () => 
{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
    asido.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
}