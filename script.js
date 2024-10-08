let horas = 0, minutos = 0, segundos = 0, milissegundos = 0;

let intervalo;
let pausado = false;

const atualizarDisplay = () => {
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
    document.getElementById('milissegundos').textContent = String(Math.floor(milissegundos / 10)).padStart(2, '0');
}

const iniciarCronometro = () => {
    intervalo = setInterval(() => {
        if (!pausado) {
            milissegundos += 10;
            if (milissegundos >= 1000) {
                milissegundos = 0;
                segundos++;
            }
            if (segundos >= 60) {
                segundos = 0;
                minutos++;
            }
            if (minutos >= 60) {
                minutos = 0;
                horas++;
            }

            atualizarDisplay();
        }
    }, 10);

    document.getElementById('iniciar').disabled = true;
    document.getElementById('pausar').disabled = false;
    document.getElementById('continuar').disabled = true;
    document.getElementById('reset').disabled = false;
}

const pausarCronometro = () => {
    pausado = true;
    document.getElementById('pausar').disabled = true;
    document.getElementById('continuar').disabled = false;
}

const continuarCronometro = () => {
    pausado = false;
    document.getElementById('pausar').disabled = false;
    document.getElementById('continuar').disabled = true;
}

const resetCronometro = () => {
    clearInterval(intervalo);
    horas = 0;
    minutos = 0;
    segundos = 0;
    milissegundos = 0;
    pausado = false;

    atualizarDisplay();

    document.getElementById('iniciar').disabled = false;
    document.getElementById('pausar').disabled = true;
    document.getElementById('continuar').disabled = true;
    document.getElementById('reset').disabled = true;
}

document.getElementById('iniciar').addEventListener('click', iniciarCronometro);
document.getElementById('pausar').addEventListener('click', pausarCronometro);
document.getElementById('continuar').addEventListener('click', continuarCronometro);
document.getElementById('reset').addEventListener('click', resetCronometro);

atualizarDisplay();
document.getElementById('pausar').disabled = true;
document.getElementById('continuar').disabled = true;
document.getElementById('reset').disabled = true;
