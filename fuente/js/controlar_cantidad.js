//Script para controlar la cantidad de productos que se añaden en la seccion de compra
document.addEventListener('DOMContentLoaded', function() {
    const btnMenos = document.querySelector('.btn-menos');
    const btnMas = document.querySelector('.btn-mas');
    const inputCantidad = document.querySelector('.input-cantidad');
     
    const valorMinimo = 1;
    
    //Función para aumentar la cantidad
    function aumentarCantidad() {
        let valorActual = parseInt(inputCantidad.value);
        //Si no es un número válido se estblece 1 como valor predeterminado
        if (isNaN(valorActual)) {
            valorActual = 1;
        }
        inputCantidad.value = valorActual + 1;
    }
    
    //Función para disminuir la cantidad
    function disminuirCantidad() {
        let valorActual = parseInt(inputCantidad.value);
        if (isNaN(valorActual)) {
            valorActual = 1;
        }
        if (valorActual > valorMinimo) {
            inputCantidad.value = valorActual - 1;
        }
    }
    
    //Event listeners a los botones
    btnMas.addEventListener('click', aumentarCantidad);
    btnMenos.addEventListener('click', disminuirCantidad);
    
    //El input solo acepte números
    inputCantidad.addEventListener('input', function() {
        let valor = this.value.replace(/[^0-9]/g, '');
        if (valor === '' || parseInt(valor) < valorMinimo) {
            valor = valorMinimo.toString();
        }
        this.value = valor;
    });
});