//IFS DOS BOTOES
var MaisEl = document.getElementById("mais");
var MenosEl = document.getElementById("menos");
var MolEl = document.getElementById("mol");
var IndicadorEl = document.getElementById("indicador");
var ConcentracaoEl = document.getElementById("concentracao");

var acido = true
var base = true 

var btnAcidoEl = document.getElementById("btnAcido");

    function criarVariavelAcidoEl() {
        if (acido) {
            var fase2AcidoEl = document.createElement("img");   
            var divPrincipalEl = document.querySelector("#container");
            var fase1El = divPrincipalEl.querySelector("#mesa");
            divPrincipalEl.replaceChild(fase2AcidoEl, fase1El);
            fase2AcidoEl.id = "mesa";

            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                fase2AcidoEl.src = "./Imagens/mobile/fase2(acido).png";
            }

            else {
                fase2AcidoEl.src = "./Imagens/fase2(acido).png";
            }
        }

    btnAcidoEl.style.display = 'none';
    btnBaseEl.style.display = 'none';
    MaisEl.style.display = 'inline';
    MenosEl.style.display = 'inline';
    MolEl.style.display = 'inline';
    IndicadorEl.style.display = 'inline';
    ConcentracaoEl.style.display = 'inline';

    acido = false
}

var btnBaseEl = document.getElementById("btnBase");

    function criarVariavelBaseEl() {
        if (base) {
            var fase2AcidoEl = document.createElement("img");   
            var divPrincipalEl = document.querySelector("#container");
            var fase1El = divPrincipalEl.querySelector("#mesa");
            divPrincipalEl.replaceChild(fase2AcidoEl, fase1El);
            fase2AcidoEl.id = "mesa";

            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                fase2AcidoEl.src = "./Imagens/mobile/fase2(base).png";
            }

            else {
                fase2AcidoEl.src = "./Imagens/fase2(base).png";
            }
        }
        
    btnAcidoEl.style.display = 'none';
    btnBaseEl.style.display = 'none';
    MaisEl.style.display = 'inline';
    MenosEl.style.display = 'inline';
    MolEl.style.display = 'inline';
    IndicadorEl.style.display = 'inline';
    ConcentracaoEl.style.display = 'inline';

    base = false
}

//BOTAO MAIS E MENOS

var count = 1;
MolEl.innerHTML = "0.1 mol/L"
    function maisEl(aumentar) {
    count = aumentar?count+1:count-1;
    if (count > 30)
    {
        count--;
    }
    else if (count == 0){
        count++;
    } 
    MolEl.innerHTML = count / 10 + " mol/L"
    if (count == 10) {
        MolEl.innerHTML = "1.0 mol/L"
    }

    if (count == 20) {
        MolEl.innerHTML = "2.0 mol/L"
    }

    if (count == 30) {
        MolEl.innerHTML = "3.0 mol/L"
    }
}
//BOTAO VOLTAR
function ReiniciarEl() {
    location.reload();
}


//MENU LATERAL 
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

//DUVIDA
var DivVideoEl = document.querySelector("#video-container");

function DuvidaClickEl() {
DivVideoEl.style.display = 'inline';

swal({
    content: DivVideoEl,
    title: "Suas dúvidas serão resolvidas aqui!",
    className: "duvida-alert",
});
}

//INDICADOR
function ClickIndicadorEl() {
    var cmbAcido = document.getElementById("cmbAcido");
    var cmbBase = document.getElementById("cmbBase");
    var fase2AcidoEl = document.createElement("img");   
    fase2AcidoEl.id = "mesa";

    var divPrincipalEl = document.querySelector("#container");
    var fase1El = divPrincipalEl.querySelector("#mesa");
    divPrincipalEl.replaceChild(fase2AcidoEl, fase1El);

    IndicadorEl.style.display = 'none';

    if (!acido) {
        cmbAcido.style.display = 'inline';
        cmbAcido.disabled = true;
        cmbAcido.style.cursor = 'auto';

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            fase2AcidoEl.src = "./Imagens/mobile/gif/indicador(acido).gif";
            setTimeout(function() {
                cmbAcido.disabled = false;
                cmbAcido.style.cursor = 'pointer';
            }, 3090);
        }

        else {
            fase2AcidoEl.src = "./Imagens/gif/indicador(acido).gif";
            setTimeout(function() {
                cmbAcido.disabled = false;
                cmbAcido.style.cursor = 'pointer';
            }, 2590);
        }
    } 

    else if (!base) {
        cmbBase.style.display = 'inline';
        cmbBase.disabled = true;
        cmbBase.style.cursor = 'auto';

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            fase2AcidoEl.src = "./Imagens/mobile/gif/indicador(base).gif";
            setTimeout(function() {
                cmbBase.disabled = false;
                cmbBase.style.cursor = 'pointer';
            }, 3090);
        }

        else {
            fase2AcidoEl.src = "./Imagens/gif/indicador(base).gif";
            setTimeout(function() {
                cmbBase.disabled = false;
                cmbBase.style.cursor = 'pointer';
            }, 2590);
        }
    }
}

//COMBO BOX
var selectBase = document.getElementById('cmbBase')
var selectAcido = document.getElementById('cmbAcido')
var titulacaoEl = document.querySelector("#titulacao");
var fase5El = document.createElement("img"); 

selectBase.addEventListener('change', function(){
})
selectAcido.addEventListener('change', function(){
})

function valorBase(selectBase) {
    titulacaoEl.style.display = 'inline'

    var mobile = ""
    fase5El.id = "mesa";
    var divPrincipalEl = document.querySelector("#container");
    var fase1El = divPrincipalEl.querySelector("#mesa");
    divPrincipalEl.replaceChild(fase5El, fase1El);

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        mobile = "mobile/"
    }
    
    if (selectBase.value == "NaOH") {
        fase5El.src = "./Imagens/" + mobile + "gif/base/fase5(naoh).gif";
    }

    else if (selectBase.value == "KOH") {
        fase5El.src = "./Imagens/" + mobile + "gif/base/fase5(koh).gif";
    }

    else if (selectBase.value == "NH₄OH") {
        fase5El.src = "./Imagens/" + mobile + "gif/base/fase5(nh4oh).gif";
    }

    else if (selectBase.value == "AgOH") {
        fase5El.src = "./Imagens/" + mobile + "gif/base/fase5(agoh).gif";
    }

    else if (selectBase.value == "Mg(OH)₂") {
        fase5El.src = "./Imagens/" + mobile + "gif/base/fase5(mgoh2).gif";
    }

    else if (selectBase.value == "Ca(OH)₂") {
        fase5El.src = "./Imagens/" + mobile + "gif/base/fase5(caoh).gif";
    }
}

function valorAcido(selectAcido) {
    titulacaoEl.style.display = 'inline'

    var mobile = ""
    fase5El.id = "mesa";
    var divPrincipalEl = document.querySelector("#container");
    var fase1El = divPrincipalEl.querySelector("#mesa");
    divPrincipalEl.replaceChild(fase5El, fase1El);

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        mobile = "mobile/"
    }

    if (selectAcido.value == "HCl") {
        fase5El.src = "./Imagens/" + mobile + "gif/acido/fase5(hcl).gif";
    }

    else if (selectAcido.value == "H₂SO₄") {
        fase5El.src = "./Imagens/" + mobile + "gif/acido/fase5(h2so4).gif";
    }

    else if (selectAcido.value == "HNO₃") {
        fase5El.src = "./Imagens/" + mobile + "gif/acido/fase5(hno3).gif";
    }

    else if (selectAcido.value == "H₃PO₄") {
        fase5El.src = "./Imagens/" + mobile + "gif/acido/fase5(h3po4).gif";
    }

    else if (selectAcido.value == "CH₃COOH") {
        fase5El.src = "./Imagens/" + mobile + "gif/acido/fase5(ch3cooh).gif";
    }

    else if (selectAcido.value == "H₂CO₃") {
        fase5El.src = "./Imagens/" + mobile + "gif/acido/fase5(h2co3).gif";
    }
}

//MOBILE
const image = new Image(150, 150);
var DuvidaBotao = document.querySelector("#duvida-botao");
var VoltarBotao = document.querySelector("#voltar");
var divPrincipal = document.querySelector("#mesa");
image.src = 'https://piskel-imgstore-b.appspot.com/img/0f7c2d94-1117-11ed-9d47-dbfcb947f1e7.gif';
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        swal({
            content: image,
            className: "mobile-alert",
            title: 'Por favor, vire o celular para melhor experência no programa!',
        });
            var fase2AcidoEl = document.createElement("img");   
            var divPrincipalEl = document.querySelector("#container");
            var fase1El = divPrincipalEl.querySelector("#mesa");
            divPrincipalEl.replaceChild(fase2AcidoEl, fase1El);
            fase2AcidoEl.id = "mesa"; 
            fase2AcidoEl.src = "./Imagens/mobile/fase1.png";
}

//exportar variaeval
var btnTitulacao = document.querySelector('#a-titulacao');
btnTitulacao.addEventListener("click", (e) => {
    e.preventDefault();


    var selectBase = document.getElementById('cmbBase')
    var selectAcido = document.getElementById('cmbAcido')   
    selectBase.addEventListener('change', function(){
    })
    selectAcido.addEventListener('change', function(){
    })

    if (!acido) {
        window.location = "./pages/titulacao.html?substancia=" + selectAcido.value + "&mol=" + count / 10;
    }

    else {
        window.location = "./pages/titulacao.html?substancia=" + selectAcido.value + "&mol=" + count / 10;
    }
})


