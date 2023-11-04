import './style.css'

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

  function calcularCrafts() {
    const taurina = parseFloat(document.getElementById('taurina').value);
    const cafeina = parseFloat(document.getElementById('cafeina').value);
    const aluminio = parseFloat(document.getElementById('aluminio').value);
    const pano = parseFloat(document.getElementById('pano').value);
    const linha = parseFloat(document.getElementById('linha').value);

    const energético = Math.min(
      Math.floor(taurina / Crafts.energetico.taurina),
      Math.floor(cafeina / Crafts.energetico.cafeina)
    );
    const algema = Math.floor(aluminio / Crafts.algema.aluminio);
    const lockpick = Math.floor(aluminio / Crafts.lockpick.aluminio);
    const colete = Math.min(
      Math.floor(aluminio / Crafts.colete.aluminio),
      Math.floor(pano / Crafts.colete.pano)
    );
    const capuz = Math.min(
      Math.floor(linha / Crafts.capuz.linha),
      Math.floor(pano / Crafts.capuz.pano)
    );

    document.getElementById('energetico').textContent = energético;
    document.getElementById('algema').textContent = algema;
    document.getElementById('lockpick').textContent = lockpick;
    document.getElementById('colete').textContent = colete;
    document.getElementById('capuz').textContent = capuz;
  }

  function calcularRecursosRestantes() {
    const taurinaInput = parseFloat(document.getElementById('taurina').value);
    const cafeinaInput = parseFloat(document.getElementById('cafeina').value);
    const aluminioInput = parseFloat(document.getElementById('aluminio').value);
    const panoInput = parseFloat(document.getElementById('pano').value);
    const linhaInput = parseFloat(document.getElementById('linha').value);

    const energeticoInput = parseFloat(document.getElementById('energeticoInput').value);
    const algemaInput = parseFloat(document.getElementById('algemainput').value);
    const lockpickInput = parseFloat(document.getElementById('lockpickinput').value);
    const coleteInput = parseFloat(document.getElementById('coleteinput').value);
    const capuzInput = parseFloat(document.getElementById('capuzinput').value);

    const taurinaRestante = taurinaInput - (energeticoInput * Crafts.energetico.taurina);
    const cafeinaRestante = cafeinaInput - (energeticoInput * Crafts.energetico.cafeina);
    const aluminioRestante = aluminioInput - (algemaInput * Crafts.algema.aluminio) - (lockpickInput * Crafts.lockpick.aluminio) - (coleteInput * Crafts.colete.aluminio);
    const panoRestante = panoInput - (coleteInput * Crafts.colete.pano) - (capuzInput * Crafts.capuz.pano);
    const linhaRestante = linhaInput - (capuzInput * Crafts.capuz.linha);

    document.getElementById('taurinarestante').textContent = taurinaRestante;
    document.getElementById('cafeinarestante').textContent = cafeinaRestante;
    document.getElementById('aluminiorestante').textContent = aluminioRestante;
    document.getElementById('panorestante').textContent = panoRestante;
    document.getElementById('linharestante').textContent = linhaRestante;
  }

  const resourceInputs = document.querySelectorAll('.resource-input');
  const craftingInputs = document.querySelectorAll('.crafting-input');

  resourceInputs.forEach((input) => {
    input.addEventListener('input', () => {
      calcularCrafts();
      calcularRecursosRestantes();
    });
  });

  craftingInputs.forEach((input) => {
    input.addEventListener('input', () => {
      calcularRecursosRestantes();
    });
  });

  function salvarValoresNoLocalStorage() {
    const resourceInputs = document.querySelectorAll('.resource-input');
    const craftingInputs = document.querySelectorAll('.crafting-input');

    resourceInputs.forEach((input) => {
      localStorage.setItem(input.id, input.value);
    });

    craftingInputs.forEach((input) => {
      localStorage.setItem(input.id, input.value);
    });
  }

  function carregarValoresDoLocalStorage() {
    const resourceInputs = document.querySelectorAll('.resource-input');
    const craftingInputs = document.querySelectorAll('.crafting-input');

    resourceInputs.forEach((input) => {
      const valorSalvo = localStorage.getItem(input.id);
      if (valorSalvo !== null) {
        input.value = valorSalvo;
      }
    });

    craftingInputs.forEach((input) => {
      const valorSalvo = localStorage.getItem(input.id);
      if (valorSalvo !== null) {
        input.value = valorSalvo;
      }
    });
  }

  resourceInputs.forEach((input) => {
    input.addEventListener('input', () => {
      calcularCrafts();
      calcularRecursosRestantes();
      salvarValoresNoLocalStorage();
    });
  });

  craftingInputs.forEach((input) => {
    input.addEventListener('input', () => {
      calcularRecursosRestantes();
      salvarValoresNoLocalStorage();
    });
  });

  carregarValoresDoLocalStorage();