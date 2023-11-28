// script.js
import PomodoroContext from './PomodoroContext';
import TrabajoState from './TrabajoState';
import DescansoState from './DescansoState';

const Temporizador = document.querySelector('.Temporizador');
const IniciarBoton = document.querySelector('.IniciarBoton');
const PausarBoton = document.querySelector('.PausarBoton');
const ReanudarBoton = document.querySelector('.ReanudarBoton');
const ReiniciarBoton = document.querySelector('.ReiniciarBoton');

const pomodoroContext = new PomodoroContext();
const trabajoState = new TrabajoState(pomodoroContext);
const descansoState = new DescansoState(pomodoroContext);

IniciarBoton.addEventListener('click', () => {
    pomodoroContext.setState(trabajoState);
    pomodoroContext.iniciarTiempo(pomodoroContext.tiempoTrabajo, true);
});

ReiniciarBoton.addEventListener('click', () => {
    pomodoroContext.pararTiempo();
    Temporizador.textContent = '00:00';
});

PausarBoton.addEventListener('click', () => {
    pomodoroContext.pararTiempo();
    pomodoroContext.pausa = true;
});

ReanudarBoton.addEventListener('click', () => {
    if (pomodoroContext.pausa) {
        const currentTime = CapturarTiempo(Temporizador.textContent);
        pomodoroContext.iniciarTiempo(currentTime, true);
        pomodoroContext.pausa = false;
    }
});

// Función CapturarTiempo
const CapturarTiempo = (tiempoString) => {
    const [minutes, seconds] = tiempoString.split(":");
    return parseInt(minutes * 60) + parseInt(seconds);
}

// Mostrar la cuenta de Pomodoros al cargar la página
pomodoroContext.mostrarCuentaPomos();
