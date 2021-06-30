function calculoArea(){     
    var resp = confirm("Vamos calcular?");

    if(resp==true){
        var lado01 = prompt("Digite, em metros, um dos lados do terreno");
        var lado02 = prompt("Digite, em metros, o outro lado do terreno");

        var total = lado01*lado02;
        window.document.getElementById("resultado").innerText = (`Você tem um terreno de ${total}m².`)

    }
    else{
        var mensagem = "Tranquilo...";
        window.document.getElementById(`resultado`).innerText = mensagem;
    }
}