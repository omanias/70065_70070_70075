// Función que suma dos números
function sumar(a, b) {
    // Verificar si se requieren dos parámetros
    if (arguments.length < 2) {
        throw new Error('Se requieren dos parámetros');
    }

    // Verificar que ambos parámetros sean números
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Ambos parámetros deben ser números');
    }

    return a + b;
}

// Función para realizar pruebas
function testSumar() {
    try {
        // Prueba 1: Verificar si se agregan dos números
        const resultado1 = sumar(2, 3);
        if (resultado1 !== 5) {
            console.error('Prueba 1 fallida: Se esperaba 5 pero se obtuvo', resultado1);
        } else {
            console.log('Prueba 1 exitosa');
        }

        // Prueba 2: Verificar si lanza un error cuando uno de los parámetros no es número
        let errorLanzado = false;
        try {
            sumar('2', 3);
        } catch (error) {
            errorLanzado = true;
            if (error.message !== 'Ambos parámetros deben ser números') {
                console.error('Prueba 2 fallida: Se esperaba un error con el mensaje "Ambos parámetros deben ser números"');
            }
        }
        if (!errorLanzado) {
            console.error('Prueba 2 fallida: No se lanzó un error cuando se esperaba');
        } else {
            console.log('Prueba 2 exitosa');
        }

        // Prueba 3: Verificar si lanza un error cuando no se proporcionan dos parámetros
        errorLanzado = false;
        try {
            sumar(2); // Este caso debería lanzar un error
        } catch (error) {
            errorLanzado = true;
            if (error.message !== 'Se requieren dos parámetros') {
                console.error('Prueba 3 fallida: Se esperaba un error con el mensaje "Se requieren dos parámetros"');
            }
        }
        if (!errorLanzado) {
            console.error('Prueba 3 fallida: No se lanzó un error cuando se esperaba');
        } else {
            console.log('Prueba 3 exitosa');
        }

        // Adicional: Verificar la suma correcta con números válidos
        const resultado3 = sumar(3, 4);
        if (resultado3 !== 7) {
            console.error('Prueba Adicional fallida: Se esperaba 7 pero se obtuvo', resultado3);
        } else {
            console.log('Prueba Adicional exitosa');
        }
    } catch (error) {
        console.error('Error al ejecutar las pruebas:', error);
    }
}

// Ejecutar las pruebas

console.log(sumar(9, 5))
testSumar();


function login(usuarios, password) {
    const usuarioCorrecto = "coderUser"
    const passwordCorrecto = "123"
}