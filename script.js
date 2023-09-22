function isPalindrome(palavraFrase) {

    // Remova espaços em branco e converta para letras minúsculas
    const texto = palavraFrase.replace(/\s/g, '').toLowerCase()
    const tamanho = texto.length
  
    for (let i = 0; i < tamanho; i++) {
        if (texto[i] !== texto[tamanho - 1 - i]) {
            return false // Se encontrar um caractere diferente, não é um palíndromo.
        }
    }
  
    // Se o loop terminar sem retornar false, é um palíndromo.
    return true 
}

function arrayMaxMin(arr) {

    // Inicializa min com o primeiro item do array
    let minimo = arr[0] 

    // Inicializa max com o primeiro item do array
    let maximo = arr[0] 

    for (let i = 1; i < arr.length; i++) {
        // Atualiza o valor mínimo se encontrarmos um valor menor
        if (arr[i] < minimo) minimo = arr[i]

        // Atualiza o valor máximo se encontrarmos um valor maior
        if (arr[i] > maximo) maximo = arr[i]
    }

    // Retorna um novo array com os valores mínimo e máximo
    return [minimo, maximo] 
}