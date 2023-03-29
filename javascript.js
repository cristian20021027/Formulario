 //Declaramos la Varibales primero//
 const nombre = document.getElementById("Username")
 const email = document.getElementById("email")
 const pass = document.getElementById("password")
 const form = document.getElementById("form")
 const parrafo = document.getElementById("mensaje")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let mensaje = ""
    let entrar = false
    let regerEmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let noms = /^[a-zA-Z\s]+$/ 
     var Contraseña = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/
     const pattern = /(\.com){2,}/;
     parrafo.innerHTML = ""
    if(!noms.test(nombre.value)||nombre.value.length <6 ){
        mensaje += `El Nombre no es Valido <br>`
      entrar = true    
     }
    if(!regerEmail.test(email.value)||pattern.test(email.value)){
        mensaje += `El Email no es Valido <br>`
        entrar = true
    }  
  if(!Contraseña.test(pass.value)||pass.value.length < 8){
       mensaje += `La Contraseña no es valida <br>`
        entrar = true
     }
    if(entrar){
         parrafo.innerHTML = mensaje 
     }else{
         parrafo.innerHTML = "Registro Exitoso"
        // para colocarle el color //
        parrafo.style.color = "#00DED3"
         form.reset();
   }
    
 })





