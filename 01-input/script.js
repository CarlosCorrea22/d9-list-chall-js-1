const $outputText = document.querySelector('.output-text')
const $form = document.querySelector('.form')
const $input = document.querySelector('.input')

$form.addEventListener('submit', function (event) {
    event.preventDefault()
    $outputText.textContent = $input.value
})

$input.addEventListener('input', function () {
    $outputText.textContent = $input.value
})