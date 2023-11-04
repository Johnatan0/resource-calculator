import './style.css'

const QuantidadeTaurinaInput = document.querySelector('#taurina');
const QuantidadeCafeinaInput = document.querySelector("#cafeina");
const QuantidadeAluminioInput = document.querySelector("#aluminio");
const QuantidadePanoInput = document.querySelector("#pano");
const QuantidadeLinhaInput = document.querySelector("#linha");

const Recursos = {
    taurina: 0,
    cafeina: 0, 
    aluminio: 0,
    pano: 0,
    linha: 0
}

QuantidadeTaurinaInput.addEventListener("change", function(){
    Recursos.taurina = this.value;
    craftItens(Recursos, Crafts);
})

QuantidadeCafeinaInput.addEventListener("change", function(){
    Recursos.cafeina = this.value;
    craftItens(Recursos, Crafts);
})

QuantidadeAluminioInput.addEventListener("change", function(){
    Recursos.aluminio = this.value;
    craftItens(Recursos, Crafts);
})

QuantidadePanoInput.addEventListener("change", function(){
    Recursos.pano = this.value;
    craftItens(Recursos, Crafts);
})

QuantidadeLinhaInput.addEventListener("change", function(){
    Recursos.linha = this.value;
    craftItens(Recursos, Crafts);
})

const Crafts = {
    energetico: {
      taurina: 2,
      cafeina: 2,
    },
  
    algema: {
      aluminio: 110,
    },
  
    lockpick: {
      aluminio: 110,
    },
  
    colete: {
      aluminio: 100,
      pano: 100,
    },
  
    capuz: {
      linha: 90,
      pano: 90,
    },
  };
  
function craftItens(materialDisponivel, receitas) {
    const itensCraftaveis = {};
  
    for (const item in receitas) {
      let quantidadeCraftavelAtual = Infinity;
  
      for (const material in receitas[item]) {
        const quantidadeNecessaria = receitas[item][material];
        if (materialDisponivel[material] < quantidadeNecessaria) {
          quantidadeCraftavelAtual = 0;
          break;
        } else {
          const quantidadePossivel = Math.floor(materialDisponivel[material] / quantidadeNecessaria);
          quantidadeCraftavelAtual = Math.min(quantidadeCraftavelAtual, quantidadePossivel);
        }
      }
  
      if (quantidadeCraftavelAtual > 0) {
        itensCraftaveis[item] = quantidadeCraftavelAtual;
      }
    }

    if(itensCraftaveis.energetico){document.querySelector("#energetico").textContent = itensCraftaveis.energetico}

    if(itensCraftaveis.algema){document.querySelector("#algema").textContent = itensCraftaveis.algema}

    if(itensCraftaveis.lockpick){document.querySelector("#lockpick").textContent = itensCraftaveis.lockpick}

    if(itensCraftaveis.lockpick){document.querySelector("#colete").textContent = itensCraftaveis.colete}

    if(itensCraftaveis.capuz){document.querySelector("#capuz").textContent = itensCraftaveis.capuz}
}

function fazerCrafting(recursos, crafts, nomeCrafting, quantidadeCrafting = 0) {

    const craftingRequerimentos = crafts[nomeCrafting];
    const recursosRestantes = { ...recursos };
  
    for (const recurso in craftingRequerimentos) {
      const quantidadeNecessaria = craftingRequerimentos[recurso] * quantidadeCrafting;
  
      if (recursosRestantes[recurso] >= quantidadeNecessaria) {
        recursosRestantes[recurso] -= quantidadeNecessaria;
      } else {
        console.log(`Recursos insuficientes para fazer ${quantidadeCrafting} crafting(s) de "${nomeCrafting}".`);
        recursosRestantes[recurso] -= quantidadeNecessaria;
      }
    }

    document.querySelector("#taurinarestante").textContent = recursosRestantes.taurina;
    document.querySelector("#cafeinarestante").textContent = recursosRestantes.cafeina;
    document.querySelector("#aluminiorestante").textContent = recursosRestantes.aluminio;
    document.querySelector("#panorestante").textContent = recursosRestantes.pano
    document.querySelector("#linharestante").textContent = recursosRestantes.linha
  }

  document.querySelector("#energeticoInput").addEventListener('change', ()=> {
    fazerCrafting(Recursos, Crafts, "energetico", document.querySelector("#energeticoInput").value)
  })

  document.querySelector("#algemainput").addEventListener('change', ()=> {
    fazerCrafting(Recursos, Crafts, "algema", document.querySelector("#algemainput").value)
  })

  document.querySelector("#lockpickinput").addEventListener('change', ()=> {
    fazerCrafting(Recursos, Crafts, "lockpick", document.querySelector("#lockpickinput").value)
  })

  document.querySelector("#coleteinput").addEventListener('change', ()=> {
    fazerCrafting(Recursos, Crafts, "colete", document.querySelector("#coleteinput").value)
  })

  document.querySelector("#capuzinput").addEventListener('change', ()=> {
    fazerCrafting(Recursos, Crafts, "capuz", document.querySelector("#capuzinput").value)
  })
  





