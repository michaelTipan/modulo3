let puntosUsuario=0;
let puntosComputador=0;
let victoria=false;

jugar=function(selecUsuario){
    if(!victoria){
        let selecMaquina=generarElemento();
        let rutaImgMaquina=generarRuta(selecMaquina);
        mostrarImagen("imgComputador",rutaImgMaquina);
        let rutaImgUsuario=generarRuta(selecUsuario);
        mostrarImagen("imgJugador",rutaImgUsuario);
        let resultado=determinarGanador(selecMaquina,selecUsuario);
        switch (resultado) {
            case 0:
                mostrarTexto("msgResultado","EMPATE");
                break;
            case 1:
                mostrarTexto("msgResultado","PERDISTE!");
                puntosComputador=puntosComputador+1;
                break;
            case 2:
                mostrarTexto("msgResultado","GANASTE!");
                puntosUsuario=puntosUsuario+1;
                break;
            default:
                break;
        }
        mostrarTexto("lblPuntosComputador","COMPUTADOR: "+puntosComputador);
        mostrarTexto("lblPuntosUsuario","USUARIO: "+puntosUsuario);
        if(puntosComputador==5){
            mostrarTexto("msgResultadoFinal","EL COMPUTADOR TE HA VENCIDO");
            mostrarTexto("msgResultado","");
            victoria=true;
        }else if(puntosUsuario==5){
            mostrarTexto("msgResultadoFinal","HAS GANADO EL JUEGO");
            mostrarTexto("msgResultado","");
            victoria=true;
        }
    }
}

limpiar=function(){
    puntosUsuario=0;
    puntosComputador=0;
    mostrarTexto("lblPuntosComputador","COMPUTADOR: "+puntosComputador);
    mostrarTexto("lblPuntosUsuario","USUARIO: "+puntosUsuario);
    mostrarImagen("imgComputador","./imagenes/carga.jpg");
    mostrarImagen("imgJugador","./imagenes/carga.jpg");
    mostrarTexto("msgResultadoFinal","");
    victoria=false;
}