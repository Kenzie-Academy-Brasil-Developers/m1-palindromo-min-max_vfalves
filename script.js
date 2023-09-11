function isPalindrome(str){
    /* Seu código aqui */
    let palavra = prompt('Informe a palavra ou frase: ')
    // palavra = 'victor'
    let palavra_invertida = palavra.split("").reverse().join("")
    
    if(palavra.toLowerCase()==palavra_invertida.toLowerCase()){
        alert(true)
    } else{
        alert(false)
    }
}

function arrayMaxMin(arr){
    /* Seu código aqui */
}
