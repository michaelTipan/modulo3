obtenerAleatorio=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let PPoT;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*3;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    PPoT=aleatorioEntero+1;
    return PPoT;
}

generarElemento=function(){
    let elemento = obtenerAleatorio();
    switch (elemento) {
        case 1:
            return "piedra";
        case 2:
            return "papel";
        case 3:
            return "tijera";
        default:
            return null;
    }        
}

determinarGanador=function(eleccionMaquina,eleccionUsuario){
    if(eleccionMaquina==eleccionUsuario){
        return 0;
    }else if(eleccionMaquina=="piedra" && eleccionUsuario=="tijera"){
        return 1;
    }else if(eleccionMaquina=="papel" && eleccionUsuario=="piedra"){
        return 1;
    }else if(eleccionMaquina=="tijera" && eleccionUsuario=="papel"){
        return 1;
    }else if(eleccionMaquina=="tijera" && eleccionUsuario=="piedra"){
        return 2;
    }else if(eleccionMaquina=="piedra" && eleccionUsuario=="papel"){
        return 2;
    }else if(eleccionMaquina=="papel" && eleccionUsuario=="tijera"){
        return 2;
    }
}

generarRuta=function(nombre){
    switch (nombre) {
        case "piedra":
            return "./imagenes/piedra.png";
        case "papel":
            return "./imagenes/papel.png";
        case "tijera":
            return "./imagenes/tijera.png";
        default:
            return null;
    }     
}
