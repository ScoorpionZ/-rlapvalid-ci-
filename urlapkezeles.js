window.addEventListener("load",init);

function ID(nev) {
    return document.getElementById(nev);
}

function $(nev) {
    return document.querySelectorAll(nev);
}

function init(){
    $("article>form>fieldset>div")[0].style.margin="0 0 5px 0";
    $("article>form>fieldset>div")[2].style.margin="0 0 5px 0";
    $("article>form>fieldset>div")[4].style.margin="0 0 5px 0";
    $("article>form>fieldset>div")[5].style.margin="0 0 5px 0";
    $("aside>section>p")[1].style.opacity="0.3";
    ID("kuld").addEventListener("click",valialas);
}

function valialas(){
    //console.log("Hello");
    var uzenet = "";
    var magadottAdatok="";
    if(ID("nev").value.length<3){
        uzenet = "A név legalább 3 karakter hosszú legyen! <br>";
        ID("nev").style.border="2px solid red";
    }
    else{
        ID("nev").style.border="none";
    }

    var reg = /[A-Z]+[a-z]{2,}/;
    if (!reg.test(ID("nev").value)) {
        uzenet += "A név legalább 3 karakter hosszú legyen! A név nagybetűvel kell kezdődjön! <br>";
        ID("nev").style.border="2px solid red";
    }
    else{
        ID("nev").style.border="none";
        magadottAdatok += "Név: "+ ID("nev").value+"<br>";
    }
   // console.log(uzenet);

   var emailreg = /[a-z]+\@[a-z]+\.hu$/;
    if (!emailreg.test(ID("email1").value)) {
        uzenet += "Az emeil taralmazzon @ jelet és .hu-ra végződjön <br>";
        ID("email1").style.border="2px solid red";
    }
    else{
        ID("email1").style.border="none";
        magadottAdatok += "E-mail: "+ ID("email1").value+"<br>";
    }
    
    if ( !emailreg.test(ID("email2").value) ) {
        uzenet += "Az emeil taralmazzon @ jelet és .hu-ra végződjön <br>";
        ID("email2").style.border="2px solid red";
    }
    else{
        if(ID("email1").value!==ID("email2").value){
            uzenet +="Nem egyezik meg a két email cím<br>";
            ID("email2").style.border="2px solid red";
        }
        else{
            ID("email2").style.border="none";
            magadottAdatok += "E-mail: "+ ID("email2").value+"<br>";
        }
    }

    

    var telreg = /^\+[0-9]{11}$/;
    if ( !telreg.test(ID("phone").value) ) {
        uzenet += "Az telefonszám csak számokat tartalmazhat és + jellel kell kezdődnie <br>";
        ID("phone").style.border="2px solid red";
    }
    else{
        ID("phone").style.border="none";
        magadottAdatok += "Telefonszám: "+ ID("phone").value+"<br>";
    }

    var vebol = /^(http:).+\.hu$/;
    if ( !vebol.test(ID("weboldal").value) ) {
        uzenet += "A weboldal http:-al kell kezdődnie és .hu-val végződnie <br>";
        ID("weboldal").style.border="2px solid red";
    }
    else{
        ID("weboldal").style.border="none";
        magadottAdatok += "Weboldal: "+ ID("weboldal").value+"<br>";
    }
   
   
    $("aside>section>p")[1].style.opacity="1";
   $("aside>section:nth-child(1)>p")[0].innerHTML=uzenet;
   $("aside>section:nth-child(2)>p")[0].innerHTML = magadottAdatok;
}