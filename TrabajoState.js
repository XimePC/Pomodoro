// TrabajoState.js
import PomodoroState from './PomodoroState';

class TrabajoState extends PomodoroState {
    iniciarTiempo(tiempo, isWorkTime) {
        const message = "¡Concéntrate, es tiempo de trabajar!";
        this.context.actualizarMensaje(message);
        super.iniciarTiempo(tiempo, isWorkTime);
    }

    cuenta() {
        const tiempo = this.context.tiempoTrabajo;
        const isWorkTime = true;
        super.cuenta(tiempo, isWorkTime);
    }
}

export default TrabajoState;
