function validarFormulario() {
    if (validarFormulario2()) {
        alert("Formulario correcto!");
        return true; 
    } else {
        return false;
    }
}

function validarFormulario2() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje');

    
    if (nombre.length < 3) {
        mensaje.textContent = "El nombre debe tener al menos 3 caracteres.";
        return false;
    }

    
    if (!email.includes('@') || !email.includes('.')) {
        mensaje.textContent = "El email debe contener '@' y '.'.";
        return false;
    }

    mensaje.textContent = ""; 
    return true; 
}