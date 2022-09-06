var pSubstancia = document.querySelector("#p-substancia");

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
        pSubstancia.innerHTML += "Hidróxido de Sódio - NaOH + Ácido Nítrico - HNO₃"
    }

    else if (path[1] == "KOH") {
        pSubstancia.innerHTML += "Hidróxido de Potássio - KOH + Ácido Nítrico - HNO₃"
    }

    else if (path[1] == "NH%E2%82%84OH") {
        pSubstancia.innerHTML += "Hidróxido de Amônio - NH₄OH + Ácido Nítrico - HNO₃"
    }
    
    else if (path[1] == "AgOH") {
        pSubstancia.innerHTML += "Hidróxido de Prata - AgOH + Ácido Nítrico - HNO₃"
    }

    else if (path[1] == "Mg(OH)%E2%82%82") {
        pSubstancia.innerHTML += "Hidróxido de Magnésio - Mg(OH)₂ + Ácido Nítrico - HNO₃"
    }
    
    else if (path[1] == "Ca(OH)%E2%82%82") {
        pSubstancia.innerHTML += "Hidróxido de Cálcio - Ca(OH)₂ + Ácido Nítrico - HNO₃"
    }

    else if (path[1] == "HCl") {
        pSubstancia.innerHTML += "Ácido Clorídrico - HCl + Hidróxido de Potássio - KOH"
    }

    else if (path[1] == "H%E2%82%82SO%E2%82%84") {
        pSubstancia.innerHTML += "H₂SO₄ + KOH -> "
    }

    else if (path[1] == "HNO%E2%82%83") {
        pSubstancia.innerHTML += "Ácido Nítrico - HNO₃ + Hidróxido de Potássio - KOH"
    }

    else if (path[1] == "H%E2%82%83PO%E2%82%84") {
        pSubstancia.innerHTML += "Ácido Fosfórico - H₃PO₄ + Hidróxido de Potássio - KOH"
    }

    else if (path[1] == "CH%E2%82%83COOH") {
        pSubstancia.innerHTML += "Ácido Acético - CH₃COOH + Hidróxido de Potássio - KOH"
    }
    
    else if (path[1] == "H%E2%82%82CO%E2%82%83") {
        pSubstancia.innerHTML += "Ácido Carbônico - H₂CO₃ + Hidróxido de Potássio - KOH"
    }

    else {
    pSubstancia.innerHTML += path[1]
    }
}
