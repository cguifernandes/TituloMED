var Analito = document.querySelector("#analito");
var Titulante = document.querySelector("#titulante");
var Substancia = document.querySelector("#substancia");
var GridTitulante = document.querySelector("#grid-titulante");
var Titulante2 = document.querySelector("#titulante2");
var Equacao = document.querySelector("#equacao");
var Mol = document.querySelector("#mol");
var Dados = document.querySelector("#dados");

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

    Mol.innerHTML += "Concentração molar do titulante = " + path[2] + " mol/L"; 
    Dados.innerHTML += "M = " + path[2] + " ÷ " + "0.25"

    if (path[1].split("&")[0] == "NaOH") {
        Analito.innerHTML += "NaOH"
        Analito.style.paddingLeft = "20px"
        Titulante.innerHTML += "HNO₃"
        Equacao.innerHTML += "NaNO₃ + H₂O"
        Substancia.innerHTML += "Hidróxido de Sódio + Ácido Nítrico"
    }

    else if (path[1].split("&")[0] == "KOH") {
        Analito.innerHTML += "KOH"
        GridTitulante.style.paddingLeft = "288px";
        Analito.style.paddingLeft = "30px"
        Titulante.style.paddingLeft = "20px"
        Titulante2.style.paddingLeft = "35px"
        Titulante.innerHTML += "HNO₃"
        Equacao.innerHTML += "KNO₃ + H₂O"
        Substancia.innerHTML += "Hidróxido de Potássio + Ácido Nítrico"
    }

    else if (path[1].split("&")[0] == "NH%E2%82%84OH") {
        Analito.innerHTML += "NH₄OH"
        GridTitulante.style.paddingLeft = "298px";
        Analito.style.paddingLeft = "30px"
        Titulante.style.paddingLeft = "20px"
        Titulante.innerHTML += "HNO₃"
        Equacao.innerHTML += "NH₄NO₃ + H₂O"
        Substancia.innerHTML += "Hidróxido de Amônio + Ácido Nítrico"
    }
    
    else if (path[1].split("&")[0] == "AgOH") {
        Analito.innerHTML += "AgOH"
        GridTitulante.style.paddingLeft = "298px";
        Analito.style.paddingLeft = "30px"
        Titulante2.style.paddingLeft = "6px"
        Titulante.innerHTML += "HNO₃"
        Equacao.innerHTML += "AgNO₃ + H₂O"
        Substancia.innerHTML += "Hidróxido de Prata + Ácido Nítrico"
    }

    else if (path[1].split("&")[0] == "Mg(OH)%E2%82%82") {
        Analito.innerHTML += "Mg(OH)₂"
        Analito.style.paddingLeft = "10px"
        Titulante2.style.paddingLeft = "46px"
        Titulante.style.paddingLeft = "20px"
        Titulante.innerHTML += "HNO₃"
        Equacao.innerHTML += "MgNO₃ + H₂O"
        Substancia.innerHTML += "Hidróxido de Magnésio + Ácido Nítrico"
    }
    
    else if (path[1].split("&")[0] == "Ca(OH)%E2%82%82") {
        Analito.innerHTML += "Ca(OH)₂"
        Analito.style.paddingLeft = "10px"
        Titulante2.style.paddingLeft = "16px"
        Titulante.innerHTML += "HNO₃"
        Equacao.innerHTML += "CaNO₃ + H₂O"
        Substancia.innerHTML += "Hidróxido de Cálcio + Ácido Nítrico"
    }

    else if (path[1].split("&")[0] == "HCl") {
        Analito.innerHTML = "HCl"
        GridTitulante.style.paddingLeft = "283px";
        Analito.style.paddingLeft = "30px";
        Titulante.innerHTML = "KOH";
        Equacao.innerHTML += "KCl + H₂O"
        Substancia.innerHTML += "Ácido Clorídrico + Hidróxido de Potássio"
    }

    else if (path[1].split("&")[0] == "H%E2%82%82SO%E2%82%84") {
        Analito.innerHTML += "H₂SO₄"
        Analito.style.paddingLeft = "20px"
        Titulante.innerHTML += "KOH"
        Equacao.innerHTML += "K₂SO₄ + H₂O"
        Substancia.innerHTML += "Ácido Sulfúrico + Hidróxido de Potássio"
    }

    else if (path[1].split("&")[0] == "HNO%E2%82%83") {
        Analito.innerHTML += "HNO₃"
        Analito.style.paddingLeft = "20px"
        Titulante.innerHTML += "KOH"
        Equacao.innerHTML += "KNO₃ + H₂O"
        Substancia.innerHTML += "Ácido Nítrico + Hidróxido de Potássio"
    }

    else if (path[1].split("&")[0] == "H%E2%82%83PO%E2%82%84") {
        Analito.innerHTML += "H₃PO₄"
        Analito.style.paddingLeft = "20px"
        Titulante.innerHTML += "KOH"
        Equacao.innerHTML += "K₃PO₄ + H₂O"
        Substancia.innerHTML += "Ácido Fosfórico + Hidróxido de Potássio"
    }

    else if (path[1].split("&")[0] == "CH%E2%82%83COOH") {
        Analito.innerHTML += "CH₃COOH"
        Titulante.innerHTML += "KOH"
        Equacao.innerHTML += "CH₃COOK + H₂O"
        Substancia.innerHTML += "Ácido Acético + Hidróxido de Potássio"
    }
    
    else if (path[1].split("&")[0] == "H%E2%82%82CO%E2%82%83") {
        Analito.innerHTML += "H₂CO₃"
        Analito.style.paddingLeft = "20px"
        Titulante.innerHTML += "KOH"
        Equacao.innerHTML += "K₂CO₃ + H₂O"
        Substancia.innerHTML += "Ácido Carbônico + Hidróxido de Potássio"
    }

    else {
        Analito.innerHTML += path[1].split("&")[0]
    }
}
