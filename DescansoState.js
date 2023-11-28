// DescansoState.js
import PomodoroState from './PomodoroState';

class DescansoState extends PomodoroState {
    iniciarTiempo(tiempo, isWorkTime) {
        const message = "¡Es hora de un pequeño descanso!";
        this.context.actualizarMensaje(message);
        super.iniciarTiempo(tiempo, isWorkTime);
    }

    cuenta() {
        const tiempo = this.context.tiempoDescanso;
        const isWorkTime = false;
        super.cuenta(tiempo, isWorkTime);
    }
}

export default DescansoState;
