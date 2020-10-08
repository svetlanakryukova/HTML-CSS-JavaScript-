// ===========================================================================function for check password and login
var ps, log 
    
function checkPass() {
    
log = document.getElementById("login").value , ps=document.getElementById("passw").value;

if ((ps=="12345")&&(log=="admin")) 
{
    
    window.alert("Welcome to my site....");
    window.location = "./welcome.html";
}
else 
{   
    
    window.alert("Please enter valid login and password....");
    window.location = "./login.html";
}

}

