function calc(){
    //entrada
    horario = document.form.horario.value;

    //processamento
    if(horario == "manhã"){
        valor = 1500;
    }
    else if (horario == "tarde"){
        valor = 1800;
    }
    else{
        valor = 2300;
    }
    
    //saída
    document.getElementById('total').value = valor;

    document.getElementById('salgados').checked = false;
    document.getElementById('doces').checked = false;
    document.getElementById('brindes').checked = false;
    document.getElementById('torta').checked = false;
 


    
}

function opcionais(valor,marcado){
    //entrada
    total = document.getElementById('total').value;
    
    //processamento
    if (marcado){
      total = Number(total) + Number(valor);
    }
    else{
      total = Number(total) - Number(valor);
      
    }
    
    //saída
    document.getElementById('total').value = total;
}

function trocaTema(){

    //entrada
    tema = document.getElementById('tema').value;
    

    //processamento
    if (tema == "infantil") {
        newFundo = "img/cai.jpg";
        titulo = "Tema Infantil";
        newFoto = ""; 
        cor = "white";

        altura = "80%";
        right = "10%";
        bottom = "5%";
      }
    else if (tema == "jovem"){
        newFundo = "img/capaj.jpg";
        newFoto = "";    
        titulo = "Tema Juvenil";
        cor = "white";

        altura = "90%";
        right = "5%";
        bottom = "-5%";
    }
    else if(tema == "adulto"){
        newFundo = "img/capaa.jpg";
        newFoto = "";    
        titulo = "Tema Adulto";
        cor = "white";

        altura = "85%";
        right = "-2%";
        bottom = "0%";
         }

    else if(tema == "terceira"){
            newFundo = "img/capaat.jpg";
            newFoto = "";    
            titulo = "Tema Terceira Idade";
            cor = "white";
    
            altura = "85%";
            right = "-2%";
            bottom = "0%";
    }
    else{
        newFundo = "";
        newFoto = "";    
        titulo = "Tema da Festa";
        cor = "black";

        altura = "100%";
        right = "0%";
        bottom = "0%";
    }
 

    //saída
    document.body.style.backgroundImage = "url(" + newFundo + ")";
    document.getElementById('foto').src = newFoto;
    document.getElementById('titulo').value = titulo;
    document.getElementById('titulo').style.color = cor;
    document.body.style.color = cor;

    document.getElementById('foto').style.height = altura;
    document.getElementById('foto').style.right = right;
    document.getElementById('foto').style.bottom = bottom;

}

function alerta(){
    //entrada
    total = document.getElementById('total').value;

    //processamento
    if (total < 1500){
        msg = "Selecione o Horário da Festa."
    }
    else{
        msg = "Obrigada pela Preferêcia. ";
    
        if (total >= 2500) {
            total = total * 0.9;
            msg += "Você recebeu um desconto de 10%. ";
        }
  
        msg += "Valor a Pagar R$ " + total;
  
    }
    
   //saída
   //alert(msg);
    
    document.getElementById('mensagem').value = msg;
    $('#alerta').modal('show');
    
}