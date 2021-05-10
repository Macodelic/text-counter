let textarea = document.querySelector('.textarea');
let counts = document.querySelectorAll('.editor__count');

let countWithSpaces = counts[0];
let countWithoutSpaces = counts[1];
let countWords = counts[2];

textarea.addEventListener('input', charsCounter);

function charsCounter() {
    countWithSpaces.textContent = textarea.value.length;
    spacesConter();
    wordsCounter();
}

function wordsCounter() {
    let chars = [...textarea.value];
    let count = (chars[0] && chars[0] !== ' ' && chars[0] !== '\n') ? 1 : 0;

    if (chars.length) {
        chars.forEach((char, index) => {
            if ((chars[index - 1] === ' ' || chars[index - 1] === '\n') && char !== ' ' && char !== '\n') count++;
        });
    }

    countWords.textContent = count;
}

function spacesConter() {
    let chars = [...textarea.value];
    let count = countWithSpaces.textContent;

    chars.forEach(char => {
        if (char === ' ' || char === '\n') count--;
    });

    countWithoutSpaces.textContent = count;
}




