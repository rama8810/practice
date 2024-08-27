
let textEntrada = textArea.value;


function encriptar() {
    let textoEntrada = document.getElementById('textoEntrada').value;
    if(textoEntrada=='' && screen.width < 800){
        document.getElementById('copiar').style.display='none';
        document.getElementById('textoSalida').style.display='none';        
        document.getElementById('parrafoSalida').style.display='block';
    } else if(textoEntrada=='') {
        document.getElementById('copiar').style.display='none';
        document.getElementById('textoSalida').style.display='none';
        document.getElementById('imagen').style.display='block';
        document.getElementById('parrafoSalida').style.display='block';        
    } else {
        document.getElementById('copiar').style.display='block';
        document.getElementById('textoSalida').style.display='block';
        document.getElementById('imagen').style.display='none';
        document.getElementById('parrafoSalida').style.display='none';

        textoEntrada = textoEntrada.toLowerCase();
        textoEntrada = textoEntrada.replaceAll('é', 'e').replaceAll('í', 'i').replaceAll('á', 'a').replaceAll('ó', 'o').replaceAll('ú', 'u');
        textoEntrada = textoEntrada.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');   
        document.getElementById('textoSalida').value = textoEntrada;
        document.getElementById('textoEntrada').value = '';
    }
}

function desencriptar() {
    let textoEntrada = document.getElementById('textoEntrada').value;
    if(textoEntrada=='' && screen.width < 800){
        document.getElementById('copiar').style.display='none';
        document.getElementById('textoSalida').style.display='none';
        document.getElementById('parrafoSalida').style.display='block';
    } else if(textoEntrada=='') {
        document.getElementById('copiar').style.display='none';
        document.getElementById('textoSalida').style.display='none';
        document.getElementById('imagen').style.display='block';
        document.getElementById('parrafoSalida').style.display='block';        
    } else {
        document.getElementById('copiar').style.display='block';
        document.getElementById('textoSalida').style.display='block';
        document.getElementById('imagen').style.display='none';
        document.getElementById('parrafoSalida').style.display='none';
        
        textoEntrada = textoEntrada.toLowerCase();    
        textoEntrada = textoEntrada.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
        document.getElementById('textoSalida').value = textoEntrada;
        document.getElementById('textoEntrada').value = '';
    }
}

function copiar() {
    let textoSalida = document.getElementById('textoSalida').value;
    textoSalida = textoSalida.toLowerCase();
    navigator.clipboard.writeText(textoSalida);
}
