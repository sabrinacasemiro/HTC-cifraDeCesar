const $key = document.querySelector('.container--main--input-wrapper--input-key')
const $word = document.querySelector('.container--main--input-wrapper--input-word')
const $result = document.querySelector('.container--main--result')
const $buttonEncrypt = document.querySelector('.container--main--button-wrapper--button-encrypt')
const $buttonReset = document.querySelector('.container--main--button-wrapper--button-reset')
const $warnninKey = document.querySelector('.warning-key')
const $warnninWord = document.querySelector('.warning-word')

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const readArray = () => {
    let letter = $word.value.toLowerCase()
    let rotateArray = ''
    let encrypt = ''
    
    for(let i = 0; i < letter.length; i++){
        let keyEncrypt = alphabet.indexOf(letter[i]) + parseInt($key.value)
        rotateArray = keyEncrypt % alphabet.length
        
        if(letter[i] === ' '){
            encrypt += ' '
        } else{
            encrypt += alphabet[rotateArray] 
        }
    }
    return encrypt
}

const printEncrypt = () => {
    $result.textContent = readArray()
}

const resetResult = () => {
    $result.textContent = ''
}

$buttonEncrypt.addEventListener('click', () => {
    if(!$key.value){
        $key.focus()
        return
    }
    if(!$word.value){
        $word.focus()
        return
    }
    resetResult()
    printEncrypt()
})

$buttonReset.addEventListener('click', () => {
    resetResult()
    $key.value = ''
    $word.value = ''

    $key.focus()
})

$key.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        if($key.value === '') return

        $word.focus()
    }
})