document.addEventListener("DOMContentLoaded", () => {
    const encryptButton = document.getElementById('encrypt_btn');
    const decryptButton = document.getElementById('decrypt_btn');
    const copyButton = document.getElementById('btn_copiar');
    
    encryptButton.addEventListener('click', encrypt);
    decryptButton.addEventListener('click', decrypt);
    copyButton.addEventListener('click', copyToInput);
});

function encrypt() {
    const inputText = document.getElementById('input_Text').value;
    if (inputText.trim() === '') return;

    const outputText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    displayOutput(outputText);
}

function decrypt() {
    const inputText = document.getElementById('input_Text').value;
    if (inputText.trim() === '') return;

    const outputText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    displayOutput(outputText);
}

function displayOutput(text) {
    const outputTextArea = document.getElementById('output_Text');
    const placeholderImage = document.getElementById('man_search');
    const copyButton = document.getElementById('btn_copiar');

    placeholderImage.style.display = 'none';
    outputTextArea.style.display = 'block';
    outputTextArea.value = text;
    copyButton.style.display = 'block';
}

function copyToInput() {
    const outputText = document.getElementById('output_Text').value;
    const inputTextArea = document.getElementById('input_Text');

    inputTextArea.value = outputText;
}