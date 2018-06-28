document.getElementById("countButton").onclick = function () {
    let letterCounts = {};
    let wordCounts = {};
    var typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase();
    // This changes all the letter to lower case.

    words = typedText.split(/\s/);

    console.log(words);

    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    // This gets rid of all the characters except letters, spaces, and apostrophes.
    // We will learn more about how to use the replace function in an upcoming lesson.

    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        // do something for each letter.
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }

    console.log(letterCounts);

    for (let i = 0; i < words.length; i++) {
        currentWord = words[i];
        // do something for each letter.
        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1;
        } else {
            wordCounts[currentWord]++;
        }
    }

    console.log(wordCounts);

    for (letter in letterCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }

    for (word in wordCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");
        span.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(span);
    }

}