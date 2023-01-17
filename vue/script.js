 const nav = document.querySelector ('.abonnement_theme')
fetch("abonnement_edit.html")
.then (res=>res.text ())
.innerHTMLthen (data=>{
nav.innerHTML=data })