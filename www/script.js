
/*Fazer a placa*/

function formatarInput(input) {

    const maxLength = 7;

    input.value = input.value.toUpperCase();

    if (input.value.length > 3 && input.value.charAt(3) !== '-') {

        input.value = input.value.slice(0, 3) + '-' + input.value.slice(3);
    }
}

/*função de só ativar o botão depois de preencher*/

function myFunction() {
    var placa = document.getElementById("placa").value;

    if (placa.length === 7) {
        document.querySelector("#btn").disabled = true;
    }
    else {
        document.querySelector("#btn").disabled = false;
    }

    console.log(placa)
}


/*Função de calcular*/

function calculo() {
    var carro = document.getElementById("carro").value;
    var hora = document.getElementById("hr").value;

    console.log(carro);

    if (carro === "Subcompacto") {
        var conta = 3.50 * hora;
        var resultado = "Total da compra: " + conta;
        document.getElementById("resultado").innerHTML = resultado;

    } else if (carro === "Compacto") {
        var conta = 4 * hora;
        var resultado = "Total da compra: " + conta;
        document.getElementById("resultado").innerHTML = resultado;

    } else if (carro === "Hatch") {
        var conta = 4.50 * hora;
        var resultado = "Total da compra: " + conta;
        document.getElementById("resultado").innerHTML = resultado;

    } else if (carro === "Sedan") {
        var conta = 5 * hora;
        var resultado = "Total da compra: " + conta;
        document.getElementById("resultado").innerHTML = resultado;

    } else if (carro === "SUV") {
        var conta = 6 * hora;
        var resultado = "Total da compra: " + conta;
        document.getElementById("resultado").innerHTML = resultado;

    } else if (carro === "Pick-up") {
        var conta = 7 * hora;
        var resultado = "Total da compra: " + conta;
        document.getElementById("resultado").innerHTML = resultado;
    }
};
