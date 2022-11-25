var Analito = document.querySelector("#analito");
var Titulante = document.querySelector("#titulante");
var Substancia = document.querySelector("#substancia");
var Titulante2 = document.querySelector("#titulante2");
var GridTitulate = document.querySelector("#grid-titulante");
var divSubstancia = document.querySelector("#div-substancia");
var Equacao = document.querySelector("#equacao");
var Mol = document.querySelector("#mol");
var Dados = document.querySelector("#dados");
var Resultado = document.querySelector("#resultado");

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

window.onload = function () {

    let path = window.location.href.split('=');

    Mol.innerHTML += "Concentração molar do titulante = " + path[2] + " mol/L"
    Dados.innerHTML += "M = " + path[2] + " ÷ " + "0.25"

    if (path[1].split("&")[0] == "NaOH") {
        Analito.innerHTML += "NaOH"
        Titulante.innerHTML += "HNO₃"
        Equacao.innerHTML += "NaNO₃ + H₂O"
        Substancia.innerHTML += "Hidróxido de Sódio + Ácido Nítrico"
    }

    else if (path[1].split("&")[0] == "KOH") {
        Analito.innerHTML += "KOH"
        Titulante.innerHTML += "HNO₃"
        Equacao.innerHTML += "KNO₃ + H₂O"
        Substancia.innerHTML += "Hidróxido de Potássio + Ácido Nítrico"
    }

    else if (path[1].split("&")[0] == "NH%E2%82%84OH") {
        Analito.innerHTML += "NH₄OH"
        Titulante.innerHTML += "HNO₃"
        Titulante2.style.paddingLeft = "55px"
        Equacao.innerHTML += "NH₄NO₃ + H₂O"
        Substancia.innerHTML += "Hidróxido de Amônio + Ácido Nítrico"
    }
    
    else if (path[1].split("&")[0] == "AgOH") {
        Analito.innerHTML += "AgOH"
        Titulante.innerHTML += "HNO₃"
        Equacao.innerHTML += "AgNO₃ + H₂O"
        Substancia.innerHTML += "Hidróxido de Prata + Ácido Nítrico"
    }

    else if (path[1].split("&")[0] == "Mg(OH)%E2%82%82") {
        Analito.innerHTML += "Mg(OH)₂"
        Titulante.innerHTML += "HNO₃"
        GridTitulate.style.paddingLeft = "180px"
        Titulante2.style.paddingLeft = "50px"
        Equacao.innerHTML += "MgNO₃ + H₂O"
        Substancia.innerHTML += "Hidróxido de Magnésio + Ácido Nítrico"
    }
    
    else if (path[1].split("&")[0] == "Ca(OH)%E2%82%82") {
        Analito.innerHTML += "Ca(OH)₂"
        Titulante.innerHTML += "HNO₃"
        Titulante2.style.paddingLeft = "60px"
        Equacao.innerHTML += "CaNO₃ + H₂O"
        Substancia.innerHTML += "Hidróxido de Cálcio + Ácido Nítrico"
    }

    else if (path[1].split("&")[0] == "HCl") {
        Analito.innerHTML = "HCl"
        Titulante.innerHTML = "KOH"
        Titulante2.style.paddingLeft = "20px"
        Equacao.innerHTML += "KCl + H₂O"
        Substancia.innerHTML += "Ácido Clorídrico + Hidróxido de Potássio"
    }

    else if (path[1].split("&")[0] == "H%E2%82%82SO%E2%82%84") {
        Analito.innerHTML += "H₂SO₄"
        Titulante.innerHTML += "KOH"
        Equacao.innerHTML += "K₂SO₄ + H₂O"
        Substancia.innerHTML += "Ácido Sulfúrico + Hidróxido de Potássio"
    }

    else if (path[1].split("&")[0] == "HNO%E2%82%83") {
        Analito.innerHTML += "HNO₃"
        Titulante.innerHTML += "KOH"
        Equacao.innerHTML += "KNO₃ + H₂O"
        Substancia.innerHTML += "Ácido Nítrico + Hidróxido de Potássio"
    }

    else if (path[1].split("&")[0] == "H%E2%82%83PO%E2%82%84") {
        Analito.innerHTML += "H₃PO₄"
        Titulante.innerHTML += "KOH"
        Equacao.innerHTML += "K₃PO₄ + H₂O"
        Substancia.innerHTML += "Ácido Fosfórico + Hidróxido de Potássio"
    }

    else if (path[1].split("&")[0] == "CH%E2%82%83COOH") {
        Analito.innerHTML += "CH₃COOH"
        Titulante.innerHTML += "KOH"
        Titulante2.style.paddingLeft = "55px"
        GridTitulate.style.paddingLeft = "180px"
        Equacao.innerHTML += "CH₃COOK + H₂O"
        Substancia.innerHTML += "Ácido Acético + Hidróxido de Potássio"
    }
    
    else if (path[1].split("&")[0] == "H%E2%82%82CO%E2%82%83") {
        Analito.innerHTML += "H₂CO₃"
        Titulante.innerHTML += "KOH"
        Equacao.innerHTML += "K₂CO₃ + H₂O"
        Substancia.innerHTML += "Ácido Carbônico + Hidróxido de Potássio"
    }
}
