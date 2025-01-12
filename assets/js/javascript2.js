function verificarCantidad() {
    const input1 = document.getElementById('sticker1').value;
    const input2 = document.getElementById('sticker2').value;
    const input3 = document.getElementById('sticker3').value;
    const total = parseInt(input1) + parseInt(input2) + parseInt(input3);
    const mensaje = document.getElementById('mensaje');

    if (total <= 10) {
        mensaje.textContent = `Llevas ${total} stickers`;
    } else {
        mensaje.textContent = "Llevas demasiados stickers";
    }
}