function showAlert(message) {
    if (parseInt(cantidadInput.value) > 0) {
        alert(message);
    } else{
        alert('Error al añadir el producto');
        cantidadInput.value = cantidadInput.min;
        actualizarPrecioTotal();
    }
}
    