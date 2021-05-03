

let textarea = document.querySelector('.text-box__area');
let total = document.querySelector('.chars-counters__value--total');
let noSpaces = document.querySelector('.chars-counters__value--nospaces');
let words = document.querySelector('.chars-counters__value--words');

textarea.addEventListener('input', charsCounter);

function charsCounter() {
    total.textContent = textarea.value.length;
    spacesConter();
    wordsCounter();
}

function wordsCounter() {
    let chars = [...textarea.value];
    let wordsCount = 1;

    if (chars.length) {
        chars.forEach((char, index) => {
            if ((chars[index - 1] === ' ' || chars[index - 1] === '\n') && char !== ' ' && char !== '\n') wordsCount++;
        });
    } else wordsCount = 0;

    words.textContent = wordsCount;
}

function spacesConter() {
    let chars = [...textarea.value];
    let nospacesCount = total.textContent;

    chars.forEach(char => {
        if (char === ' ' || char === '\n') nospacesCount--;
    });

    noSpaces.textContent = nospacesCount;
}




