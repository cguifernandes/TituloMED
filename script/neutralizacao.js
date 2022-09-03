//IFS DOS BOTOES
var MaisEl = document.getElementById("mais");
var MenosEl = document.getElementById("menos");
var MolEl = document.getElementById("mol");
var IndicadorEl = document.getElementById("indicador");

var acido = true
var base = true 

var btnAcidoEl = document.getElementById("btnAcido");

    function criarVariavelAcidoEl() {
        if (acido) {
            var fase2AcidoEl = document.createElement("img");   
            fase2AcidoEl.src = "./Imagens/fase2(acido).png";
            fase2AcidoEl.id = "mesa";

            var divPrincipalEl = document.querySelector("#principal");
            var fase1El = divPrincipalEl.querySelector("#mesa");
            divPrincipalEl.replaceChild(fase2AcidoEl, fase1El);
        }

    btnAcidoEl.style.display = 'none';
    btnBaseEl.style.display = 'none';
    MaisEl.style.display = 'inline';
    MenosEl.style.display = 'inline';
    MolEl.style.display = 'inline';
    IndicadorEl.style.display = 'inline';

    acido = false
}

var btnBaseEl = document.getElementById("btnBase");

    function criarVariavelBaseEl() {
        if (base) {
            var fase2BaseEl = document.createElement("img");   
            fase2BaseEl.src = "./Imagens/fase2(base).png";
            fase2BaseEl.id = "mesa";

            var divPrincipalEl = document.querySelector("#principal");
            var fase1El = divPrincipalEl.querySelector("#mesa");
            divPrincipalEl.replaceChild(fase2BaseEl, fase1El);
        }
        
    btnAcidoEl.style.display = 'none';
    btnBaseEl.style.display = 'none';
    MaisEl.style.display = 'inline';
    MenosEl.style.display = 'inline';
    MolEl.style.display = 'inline';
    IndicadorEl.style.display = 'inline';

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
    return count;
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
var inputAcidoEl = document.getElementById("input-Acido");
var iAcidoEl = document.getElementById("iAcido");
var dropDownAcidoEl = document.getElementById("AcidodropDown");

var inputBaseEl = document.getElementById("input-Base");
var iBaseEl = document.getElementById("iBase");
var dropDownBaseEl = document.getElementById("BasedropDown");

function ClickIndicadorEl() {
    var fase2AcidoEl = document.createElement("img");   
    fase2AcidoEl.id = "mesa";

    var divPrincipalEl = document.querySelector("#principal");
    var fase1El = divPrincipalEl.querySelector("#mesa");
    divPrincipalEl.replaceChild(fase2AcidoEl, fase1El);

    dropDownBaseEl.style.display = 'none';
    IndicadorEl.style.display = 'none';


    if (!acido) {
        fase2AcidoEl.src = "./Imagens/gif/indicador(acido).gif";

        inputAcidoEl.disabled = true;
        iAcidoEl.disabled = true;

        setTimeout(function() {
            inputAcidoEl.disabled = false;
            iAcidoEl.disabled = false;
            }, 2580);

        inputAcidoEl.style.display = 'block';
        iAcidoEl.style.display = 'inline';
    } 

    else if (!base) {
        fase2AcidoEl.src = "./Imagens/gif/indicador(base).gif";

        inputBaseEl.disabled = true;
        iBaseEl.disabled = true;

        setTimeout(function() {
            inputBaseEl.disabled = false;
            iBaseEl.disabled = false;
            }, 2580);

        inputBaseEl.style.display = 'block';
        iBaseEl.style.display = 'inline';
    }
}

//COMBO BOX
var titulacaoEl = document.querySelector("#titulacao");
var fase5El = document.createElement("img"); 

function itemEl(id) {
    if (!acido) {
        var item = document.getElementById('Acidoitem-' + id).innerHTML;
        document.getElementById('input-Acido').value = item;
    }

    else {
        var item = document.getElementById('Baseitem-' + id).innerHTML;
        document.getElementById('input-Base').value = item; 
    }
}

function Basedropdown(p) {
    var e = document.getElementsByClassName('BasedropDown')[0];
    var d = ['block', 'none'];
    e.style.display = d[p];
}

function Basecategory(id) { 

    itemEl(id);

    fase5El.id = "mesa";
    var divPrincipalEl = document.querySelector("#principal");
    var fase1El = divPrincipalEl.querySelector("#mesa");
    divPrincipalEl.replaceChild(fase5El, fase1El);
    titulacaoEl.style.display = 'inline'

    if (id == 1) {
        fase5El.src = "./Imagens/gif/base/fase5(naoh).gif";
    }
    else if (id == 2) { 
        fase5El.src = "./Imagens/gif/base/fase5(koh).gif";
    }
    else if (id == 3) { 
        fase5El.src = "./Imagens/gif/base/fase5(nh4oh).gif";
    }
    else if (id == 4) { 
        fase5El.src = "./Imagens/gif/base/fase5(agoh).gif";
    
    }
    else if (id == 5) { 
        fase5El.src = "./Imagens/gif/base/fase5(mgoh2).gif";
    }
    else if (id == 6) { 
        fase5El.src = "./Imagens/gif/base/fase5(caoh).gif";
    }
}

function Acidodropdown(p) {
    var e = document.getElementsByClassName('AcidodropDown')[0];
    var d = ['block', 'none'];
    e.style.display = d[p];
}

function Acidocategory(id) {

    itemEl(id);

    fase5El.id = "mesa";
    var divPrincipalEl = document.querySelector("#principal");
    var fase1El = divPrincipalEl.querySelector("#mesa");
    divPrincipalEl.replaceChild(fase5El, fase1El);
    titulacaoEl.style.display = 'inline'

    if (id == 1) {
        fase5El.src = "./Imagens/gif/acido/fase5(hcl).gif";
    }
    else if (id == 2) { 
        fase5El.src = "./Imagens/gif/acido/fase5(h2so4).gif";
    }
    else if (id == 3) { 
        fase5El.src = "./Imagens/gif/acido/fase5(hno3).gif";
    }
    else if (id == 4) { 
        fase5El.src = "./Imagens/gif/acido/fase5(h3po4).gif";
    }
    else if (id == 5) { 
        fase5El.src = "./Imagens/gif/acido/fase5(ch3cooh).gif";
    }
    else if (id == 6) { 
        fase5El.src = "./Imagens/gif/acido/fase5(h2co3).gif";
    }
}

//reload do valor do input 

window.onload = function () {
    document.getElementById('input-Acido').value = ""
    document.getElementById('input-Base').value = ""
}
        
//MOBILE
const image = new Image(150, 150);
var DuvidaBotaoEl = document.querySelector("#duvida-botao");
var VoltarBotaoEl = document.querySelector("#voltar");
var divPrincipalEl = document.querySelector("#mesa");
image.src = 'https://piskel-imgstore-b.appspot.com/img/0f7c2d94-1117-11ed-9d47-dbfcb947f1e7.gif';
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        swal({
            content: image,
            className: "mobile-alert",
            title: 'Por favor, vire o celular para melhor experência no programa!',
            });
    }
//exportar variaeval
var btnTitulacaoEl = document.querySelector('#a-titulacao');
btnTitulacaoEl.addEventListener("click", (e) => {
    var itemBase = document.getElementById('input-Base').value.split("- ")[1]; 
    var itemAcido = document.getElementById('input-Acido').value.split("- ")[1]; 
    e.preventDefault();
    if (!acido) {
        window.location = "./titulacao.html?substancia=" + itemAcido;
    }

    else {
        window.location = "./titulacao.html?substancia=" + itemBase;
    }
})


