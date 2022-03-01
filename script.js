function mobilemenu() {
    if (document.getElementById("navbtn").style.display=="block"){
        document.getElementById("navbtn").style.display="none"  
    }
    else {
        document.getElementById("navbtn").style.display="block"
    }
}
document.getElementById("hum").addEventListener("click", mobilemenu)
