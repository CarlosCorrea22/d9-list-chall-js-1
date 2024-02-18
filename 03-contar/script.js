const $outputCounter = document.querySelector('.output-counter')
const $form = document.querySelector('.form')
const $inputNumber = document.querySelector('.input-number')

$form.addEventListener('submit', function (event) {
    event.preventDefault()
    $outputCounter.textContent = ''
    const number = Number($inputNumber.value)
    for (let initialNumber = 0; initialNumber <= number; initialNumber++) {
        $outputCounter.textContent = $outputCounter.textContent + initialNumber + ' '
    }
})