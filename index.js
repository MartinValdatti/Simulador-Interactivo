if(confirm("Página top secret, esta seguro de continuar?") == true){
    let passwordUsuario = prompt( "Ingrese su contraseña: ");
    let passwordCorrecto = 1234;
    
    for(let i = 0; i<2; i++) {
         if(passwordUsuario == passwordCorrecto) {
             alert("Contraseña correcta, Bienvenido Agente");
             break;
        }else {
            passwordUsuario = alert("Contraseña incorrecta, el FBI está en camino")
        }
    } 
}else{
    alert("Retirese de la página de inmediato")
}
