var Analito = document.querySelector("#analito");
var Titulante = document.querySelector("#titulante");
var Substancia = document.querySelector("#substancia");
var GridTitulante = document.querySelector("#grid-titulante");
var Titulante2 = document.querySelector("#titulante2");

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
    if (path[1] == "NaOH") {
        Analito.innerHTML += "NaOH"
        Analito.style.paddingLeft = "20px"
        Titulante.innerHTML += "HNO₃"
        Substancia.innerHTML += "Hidróxido de Sódio + Ácido Nítrico -> "
    }

    else if (path[1] == "KOH") {
        Analito.innerHTML += "KOH"
        GridTitulante.style.paddingLeft = "288px";
        Analito.style.paddingLeft = "30px"
        Titulante2.style.paddingLeft = "7px"
        Titulante.innerHTML += "HNO₃"
        Substancia.innerHTML += "Hidróxido de Potássio + Ácido Nítrico -> "
    }

    else if (path[1] == "NH%E2%82%84OH") {
        Analito.innerHTML += "NH₄OH"
        GridTitulante.style.paddingLeft = "298px";
        Analito.style.paddingLeft = "30px"
        Titulante2.style.paddingLeft = "0px"
        Titulante.innerHTML += "HNO₃"
        Substancia.innerHTML += "Hidróxido de Amônio + Ácido Nítrico -> "
    }
    
    else if (path[1] == "AgOH") {
        Analito.innerHTML += "AgOH"
        GridTitulante.style.paddingLeft = "298px";
        Analito.style.paddingLeft = "30px"
        Titulante2.style.paddingLeft = "0px"
        Titulante.innerHTML += "HNO₃"
        Substancia.innerHTML += "Hidróxido de Prata + Ácido Nítrico -> "
    }

    else if (path[1] == "Mg(OH)%E2%82%82") {
        Analito.innerHTML += "Mg(OH)₂"
        Analito.style.paddingLeft = "10px"
        Titulante2.style.paddingLeft = "16px"
        Titulante.innerHTML += "HNO₃"
        Substancia.innerHTML += "Hidróxido de Magnésio + Ácido Nítrico -> "
    }
    
    else if (path[1] == "Ca(OH)%E2%82%82") {
        Analito.innerHTML += "Ca(OH)₂"
        Analito.style.paddingLeft = "10px"
        Titulante2.style.paddingLeft = "16px"
        Titulante.innerHTML += "HNO₃"
        Substancia.innerHTML += "Hidróxido de Cálcio + Ácido Nítrico -> "
    }

    else if (path[1] == "HCl") {
        Analito.innerHTML = "HCl"
        GridTitulante.style.paddingLeft = "283px";
        Analito.style.paddingLeft = "30px";
        Titulante.innerHTML = "HNO₃";
        Substancia.innerHTML += "Ácido Clorídrico + Ácido Nítrico -> "
    }

    else if (path[1] == "H%E2%82%82SO%E2%82%84") {
        Analito.innerHTML += "H₂SO₄"
        Analito.style.paddingLeft = "20px"
        Titulante.innerHTML += "KOH"
        Substancia.innerHTML += "Ácido Sulfúrico + Ácido Nítrico -> "
    }

    else if (path[1] == "HNO%E2%82%83") {
        Analito.innerHTML += "HNO₃"
        Analito.style.paddingLeft = "20px"
        Titulante.innerHTML += "KOH"
        Substancia.innerHTML += "Ácido Nítrico + Ácido Nítrico -> "
    }

    else if (path[1] == "H%E2%82%83PO%E2%82%84") {
        Analito.innerHTML += "H₃PO₄"
        Analito.style.paddingLeft = "20px"
        Titulante.innerHTML += "KOH"
        Substancia.innerHTML += "Ácido Fosfórico + Ácido Nítrico -> "
    }

    else if (path[1] == "CH%E2%82%83COOH") {
        Analito.innerHTML += "CH₃COOH"
        Titulante.innerHTML += "KOH"
        Substancia.innerHTML += "Ácido Acético + Ácido Nítrico -> "
    }
    
    else if (path[1] == "H%E2%82%82CO%E2%82%83") {
        Analito.innerHTML += "H₂CO₃"
        Analito.style.paddingLeft = "20px"
        Titulante.innerHTML += "KOH"
        Substancia.innerHTML += "Ácido Carbônico + Ácido Nítrico -> "
    }

    else {
    Analito.innerHTML += path[1]
    }
}
