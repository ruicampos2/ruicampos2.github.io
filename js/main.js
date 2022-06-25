
const courses=[20];
var n=0;

function logar(){
   
    if(form1.password.value == form1.password2.value)
    {
        window.location.href = "entrar2.html"; 
        return true;
    }else
    {   
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Passwords não são iguais!',});
        return false;
        
    }
}
function myFunction() {
    var x = document.getElementById("myCheck").required;
    document.getElementById("demo").innerHTML = x;
}




function saveDataToLocalStorage() {
     
    localStorage.setItem("arquivo2", form1.password.value);
    localStorage.setItem("arquivo1", form1.email.value);
    localStorage.setItem("arquivo3", form1.email.value);
    
}




function calledfunction(){
    saveDataToLocalStorage();
    return logar();
     
}
/**
 * Função para exibir o dado salvo no localStorage
 */


function save2ndpart(){
    localStorage.setItem("cardnumber",form2.cardnumber.value);
}

function testcardnumber(){
    let cardnumerold=localStorage.getItem("cardnumber");

    if(cardnumerold!=form3.cardnumberold.value){
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Número não é o correto!',});
        return false;

    }else{
        localStorage.setItem("cardnumber",form4.newcardnumber.value);
        return true;
    }
}

function testemail(){
    let oldemail=localStorage.getItem("arquivo1");
    if(oldemail!=form3.oldemail.value){
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Email não é o correto!',});
        return false;

    }else{
        localStorage.setItem("arquivo1",form3.newemail.value);
        return true;
    }
}
function testemailub(){
    let oldemail=localStorage.getItem("emailub");
    if(oldemail!=form8.oldemail.value){
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Email não é o correto!',});
        return false;

    }else{
        localStorage.setItem("emailub",form8.newemail.value);
        return true;
    }
}
function testpass(){
    let oldpass=localStorage.getItem("arquivo2");
    if(oldpass!=form3.oldpass.value){
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Password não é a correta!',});
        return false;

    }else{
        localStorage.setItem("arquivo2",form3.newpass.value);
        return true;
    }
}
function testpassub(){
    let oldpass=localStorage.getItem("passwordub");
    if(oldpass!=form9.oldpass.value){
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Password não é a correta!',});
        return false;

    }else{
        localStorage.setItem("passwordub",form9.newpass.value);
        return true;
    }
}
if(document.getElementById("CardNumber")){
    let nrcartao=localStorage.getItem("cardnumber");
    document.getElementById("CardNumber").innerHTML=nrcartao;
}



function verifyifChecked(){
    if(form5.checkbox.checked==true){
        return true;
    }else{
        Swal.fire({icon: 'error',title: 'Oops...',text: 'Primeiro precisa de se mostrar disponivel! ',});
        return false;
    }
}
function verify(){
    var obje=  localStorage.getItem("arquivo1");
    var passw = localStorage.getItem("arquivo2");
        if(obje != login.email.value){
             Swal.fire({icon: 'error',title: 'Oops...',text: 'Este email nao corresponde a nenhuma conta! Para se registar clique', footer: 'Nao tem conta? Registe-se <a href="entrar.html"> aqui</a>'});
            return false;
        }
        else if(passw != login.password.value)
        {
            Swal.fire({icon: 'error',title: 'Oops...',text: 'Palavra Passe errada!'});
            return false;
        }else
        {
            window.location.href="main.html";
            return true;
        }
    }
    function saveloginub(){
        localStorage.setItem("emailub",loginub.email.value);
        localStorage.setItem("passwordub",loginub.password.value);
        
    }
    function verifypasswordub(){
        if(loginub.password.value==loginub.password2.value){
            let value=100;
            window.location.href = "mainub.html"; 
            localStorage.setItem("nrident",value);
            alert("Foi-lhe atribuido o numero: "+ localStorage.getItem("nrident"));
            return true;
        } else{
            Swal.fire({icon: 'error',title: 'Oops...',text: 'Passwords não são iguais!',});
            return false;
        }
    }

    function calledfunctionub(){
        saveloginub();
        return verifypasswordub();    
        
    }

    function verifyloginub(){
        if(localStorage.getItem("emailub")!= loginuberbags.email.value){
            Swal.fire({icon: 'error',title: 'Oops...',text: 'Este email nao corresponde a nenhuma conta UBERBAGS! Para se registar clique', footer: 'Nao tem conta? Registe-se <a href="entrar.html"> aqui</a>'});
            return false;
        } else if(localStorage.getItem("passwordub")!=loginuberbags.password.value){
            Swal.fire({icon: 'error',title: 'Oops...',text: 'Palavra Passe errada!'});
            return false;
        }else if(localStorage.getItem("nrident")!=loginuberbags.fname.value){
            Swal.fire({icon: 'error',title: 'Oops...',text: 'Número de identificação errada!'});
            return false;
        }else{
            window.location.href="mainub.html";
            return true;
        }
    }

    function calculatePrice(myform){

        //Get selected data  
        var elt = document.getElementById("funcionario");
        var memory = elt.options[elt.selectedIndex].value;
        
        var elt = document.getElementById("malas");
        var malas = elt.options[elt.selectedIndex].value;  
        //convert data to integers

        memory = parseInt(memory);
        malas = parseInt(malas)
          
        //calculate total value  
        var total = memory + malas; 
          
        //print value to  PicExtPrice 
        document.getElementById("PicExtPrice").value= total + " €";
      
      }