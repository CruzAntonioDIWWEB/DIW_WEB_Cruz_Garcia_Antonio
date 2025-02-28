//Script para controlar la cantidad de productos que se añaden en la seccion de compra
document.addEventListener('DOMContentLoaded', function() {
    //Al seleccionar todos los productos, puedo controlar la cantidad de productos que se añaden al carrito
    const btnMenos = document.querySelectorAll('.btn-menos');
    const btnMas = document.querySelectorAll('.btn-mas');
    const inputCantidad = document.querySelectorAll('.input-cantidad');
     
    const valorMinimo = 1;
    
    //Event listeners a cada botón de aumentar
    btnMas.forEach(function(btn, index) {
        btn.addEventListener('click', function() {
            let valorActual = parseInt(inputCantidad[index].value);
            //Si no es un número válido se establece 1 como valor predeterminado
            if (isNaN(valorActual)) {
                valorActual = 1;
            }
            inputCantidad[index].value = valorActual + 1;
            actualizarTotal();
        });
    });
    
    //Event listeners a cada botón de disminuir
    btnMenos.forEach(function(btn, index) {
        btn.addEventListener('click', function() {
            let valorActual = parseInt(inputCantidad[index].value);
            if (isNaN(valorActual)) {
                valorActual = 1;
            }
            if (valorActual > valorMinimo) {
                inputCantidad[index].value = valorActual - 1;
                actualizarTotal();
            }
        });
    });
    
    //El input solo acepta números para todos los inputs
    inputCantidad.forEach(function(input) {
        input.addEventListener('input', function() {
            let valor = this.value.replace(/[^0-9]/g, '');
            if (valor === '' || parseInt(valor) < valorMinimo) {
                valor = valorMinimo.toString();
            }
            this.value = valor;
            actualizarTotal();
        });
    });
    
    //Función para actualizar el total (seccion carrito)
    function actualizarTotal() {
        let total = 0;
        
        const items = document.querySelectorAll('.cesta-item');
        
        items.forEach(item => {
            //Por cada elemento se obtiene la cantidad
            const cantidad = parseInt(item.querySelector('.input-cantidad').value);
            
            //Y el precio
            const precioTexto = item.querySelector('.cesta-precio').textContent;
            const precio = parseFloat(precioTexto.replace('€', '').trim()); //Elimino el símbolo € y se convierte a número para evitar errores
            
            //Precio total
            total += cantidad * precio;
        });
        
        //Se actualiza el elemento que muestra el total
        const totalElement = document.querySelector('.cesta-precio-total');
        if (totalElement) {
            totalElement.textContent = total.toFixed(2) + ' €';
        }
    }
    
    actualizarTotal();
});