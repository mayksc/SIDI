document.getElementById('agregarBtn').addEventListener('click', function() {
    const solicitudInput = document.getElementById('solicitudInput');
    const solicitudText = solicitudInput.value;

    if (solicitudText) {
        const li = document.createElement('li');
        li.textContent = solicitudText;
        document.getElementById('solicitudesList').appendChild(li);
        solicitudInput.value = ''; // Limpiar el input
    } else {
        alert('Por favor, ingresa una solicitud.');
    }
});
