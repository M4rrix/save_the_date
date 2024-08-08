document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Define el correo del cliente (a quien se envía el mensaje)
    var clientEmail = 'mariacamana998@gmail.com'; // Reemplaza con el correo del cliente

    // Envía el correo usando EmailJS
    emailjs.send('service_sd1bqnh', 'template_jukbfwq', {
        from_name: name,
        reply_to: email,
        to_email: clientEmail // Añade este campo para especificar el destinatario
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('El mensaje ha sido enviado con éxito!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('El mensaje no pudo ser enviado.');
    });
});