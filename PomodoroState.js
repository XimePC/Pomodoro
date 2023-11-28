// PomodoroState.js
class PomodoroState {
    constructor(context) {
        this.context = context;
    }

    iniciarTiempo(tiempo, isWorkTime) {
        throw new Error("Debes implementar este método en las clases derivadas.");
    }

    pararTiempo() {
        clearInterval(this.context.tiempoID);
        this.context.tiempoID = null;
    }

    cuenta(tiempo, isWorkTime) {
        const mins = Math.floor(tiempo / 60);
        const secs = Math.floor(tiempo % 60);
        const formattedMins = mins.toString().padStart(2, '0');
        const formattedSecs = secs.toString().padStart(2, '0');

        this.context.temporizador.textContent = `${formattedMins}:${formattedSecs}`;
        tiempo--;

        if (tiempo < 0) {
            this.pararTiempo();

            if (isWorkTime) {
                this.context.tiempoID = this.context.iniciarTiempo(this.context.tiempoDescanso, false);
                this.context.actualizarMensaje("¡Es hora de un pequeño descanso!");
            } else {
                this.context.actualizarMensaje("¡Excelente, acabas de completar un Pomodoro!");
                setTimeout(() => {
                    this.context.actualizarMensaje("Inicia el temporizador, ¡Vamos a continuar!");
                }, 2000);

                this.context.totalPomodoros++;
                this.context.guardarCuentaPomodoros();
                this.context.mostrarCuentaPomos();
            }
        }
    }
}

export default PomodoroState;
