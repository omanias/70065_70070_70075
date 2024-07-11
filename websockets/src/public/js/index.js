const socket = io()
socket.emit('message', "Soy el mensaje enviado")

//logica para traer el contenido del input en el formulario