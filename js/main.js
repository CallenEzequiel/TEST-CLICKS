let contadorClics = 0;
        let tiempoCorriendo = false;
        let inicioTiempo;
        let interval;

        document.getElementById('boton').addEventListener('click', function() {
            if (!tiempoCorriendo) {
                tiempoCorriendo = true;
                inicioTiempo = Date.now();
                
                // Mostrar tiempo transcurrido cada 100 milisegundos
                interval = setInterval(() => {
                    const tiempoTranscurrido = Date.now() - inicioTiempo;
                    const segundos = Math.floor(tiempoTranscurrido / 1000);
                    const milisegundos = Math.floor((tiempoTranscurrido % 1000) / 100);
                    document.getElementById('tiempo').innerText = `Tiempo: ${segundos}.${milisegundos}s`;
                }, 100); // Actualiza cada 100 milisegundos

                // Esperar 10 segundos
                setTimeout(() => {
                    clearInterval(interval); // Detener el intervalo después de 10 segundos
                    const tiempoTranscurrido = (Date.now() - inicioTiempo) / 1000;
                    const promedio = contadorClics / tiempoTranscurrido;
                    
                    // Mostrar el promedio en la pantalla
                    document.getElementById('resultado').innerText = `Promedio: ${promedio.toFixed(2)} clicks por segundo`;

                    // Reiniciar el contador y el tiempo
                    contadorClics = 0;
                    tiempoCorriendo = false;
                    document.getElementById('contador').innerText = `Clics: ${contadorClics}`;
                    document.getElementById('tiempo').innerText = `Tiempo: 0.0s`; // Reiniciar tiempo mostrado
                }, 10000); // 10 segundos = 10000 milisegundos
            }

            // Incrementar el contador de clics
            contadorClics++;
            document.getElementById('contador').innerText = `Clics: ${contadorClics}`; // Actualizar contador en tiempo real
        });