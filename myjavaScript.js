var userName = document.querySelector(".title");
var testing = document.querySelector(".alert");
var aboutUs = document.querySelector(".card-header");
var aboutText = document.querySelector(".card-text");
var contactUs = document.querySelector(".btn-primary");
var arabic = document.querySelector(".arabic");
var english = document.querySelector(".english");


function language(setLanguage){
if (setLanguage ===  "arabic" ){
   userName.innerHTML = "مبرمج ياسين"; 
testing.innerHTML = "تجربة موقع متعدد اللغات";
aboutUs.innerHTML = "حولنا";
aboutText.innerHTML = " !مبرمج ياسين ،أفضل مبرمج في العالم في الوقت الحالي";
contactUs.innerHTML = "إتصل بنا";
arabic.innerHTML = "العربية";
english.innerHTML = "الانجليزية"; 
document.body.style.direction= "rtl";
} else if(setLanguage === "english"){
    userName.innerHTML = "Coder Yacine";
    testing.innerHTML = "A Multilangual Website Testing";
aboutUs.innerHTML = "About Us";
aboutText.innerHTML = "Coder Yacine, The Best coder in the world right now !";
contactUs.innerHTML = "Contact Us";
arabic.innerHTML = "Arabic";
english.innerHTML = "English";
document.body.style.direction= "ltr";
}

};

arabic.addEventListener("click", ()=>{
    language("arabic");
localStorage.setItem("lang", "arabic");
});

english.addEventListener("click", ()=>{
    language("english");
    localStorage.setItem("lang", "english");
});
    
onload = ()=>{
   language(localStorage.getItem("lang"));
} ;