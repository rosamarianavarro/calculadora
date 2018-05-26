let text = "";

function muestraText(){
    document.getElementById('display').innerHTML = text;
}

function fctTecla1(){
    text = text + "1";
    muestraText();
}

function fctTecla2(){
    text = text + "2";
    muestraText();
}

function fctTecla3(){
    text = text + "3";
    muestraText();
}

function fctTecla4(){
    text = text + "4";
    muestraText();
}

function fctTecla5(){
    text = text + "5";
    muestraText();
}

function fctTecla6(){
    text = text + "6";
    muestraText();
}

function fctTecla7(){
    text = text + "7";
    muestraText();
}

function fctTecla8(){
    text = text + "8";
    muestraText();
}


function fctTecla9(){
    text = text + "9";
    muestraText();
}


function fctTecla0(){
    text = text + "0";
    muestraText();
}

function fctTeclaMas(){
    text = text + "+";
    muestraText();
}

function fctTeclaMenos(){
    text = text + "-";
    muestraText();
}

function fctTeclaMult(){
    text = text + "*";
    muestraText();
}

function fctTeclaDivision(){
    text = text + "/";
    muestraText();
}


function fctTeclaBorrar(){
    text = "";
    muestraText();
}

function frequencia(letra, cadena) {
   
    let freq = 0;
    
    for(let i = 0; i < cadena.length; i++) {
        if( cadena[i] === letra){
            freq ++;
        }//if
    }//for
    
    return freq;
}




function fctTeclaIgual(){
    
    if( frequencia("+",text) === 1 
       || frequencia("*",text) === 1
       || frequencia("/",text) === 1
       || frequencia("-",text) === 1){
       
    let operadores = new Array();
    let resultado;
    

    if( text.indexOf("+") != -1){
        operadores = text.split("+");
        resultado = parseInt(operadores[0]) + parseInt(operadores[1]);
    }
    
    if ( text.indexOf("-") != -1){
        operadores = text.split("-");
        resultado = parseInt(operadores[0]) - parseInt(operadores[1]);
    }
    
    
    if ( text.indexOf("*") != -1){
        operadores = text.split("*");
        resultado = parseInt(operadores[0]) * parseInt(operadores[1]);
    }
    
    if ( text.indexOf("/") != -1){
        operadores = text.split("/");
        resultado = parseInt(operadores[0]) / parseInt(operadores[1]);
    }
    text = resultado;        
        
        
    } else {
        text = "Solo 2 op!";
    }
    
    muestraText();
}

