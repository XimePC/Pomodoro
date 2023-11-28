// PomodoroContext.js
import TrabajoState from './TrabajoState';
import DescansoState from './DescansoState';

class PomodoroContext {
    constructor() {
        this.state = null;
        this.tiempoID = null;
        this.totalPomodoros = 0;
        this.pausa = false;
        this.tiempoTrabajo = 2 * 60;
        this.tiempoDescanso = 0.5 * 60;
        this.temporizador = document.querySelector('.Temporizador');
    }

    setState(state) {
        this.state = state;
    }

    iniciarTiempo(tiempo, isWorkTime) {
        if (this.tiempoID !== null) {
            this.pararTiempo();
        }
        this.tiempoID = setInterval(this.state.cuenta.bind(this.state), 1000);
        this.state.iniciarTiempo(tiempo, isWorkTime);
    }

    pararTiempo() {
        clearInterval(this.tiempoID);
        this.tiempoID = null;
    }

    actualizarMensaje(msg) {
        document.querySelector('.title').textContent = msg;
    }

    guardarCuentaPomodoros() {
        let counts = JSON.parse(localStorage.getItem("CuentaPomos"));
        counts !== null ? counts++ : counts = 1;
        localStorage.setItem("CuentaPomos", JSON.stringify(counts));
    }

    mostrarCuentaPomos() {
        const counts = JSON.parse(localStorage.getItem("CuentaPomos"));
        if (counts > 0) {
            document.querySelector('.VerCuentaPomos').style.display = "flex";
        }
        document.querySelector('.VerCuentaPomos').firstElementChild.textContent = counts;
    }
}

export default PomodoroContext;
