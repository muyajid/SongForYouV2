function Songs() {
    const lyrics = [
        "Moved out to a new city",
        "June is dawning down on me",
        "And all that I can find's",
        "A sickly romance in the air",
        "Lovers stroll without a care in sight",
        "Oh, this can't be right...",
        "Cause the sun's engaged to the sky",
        "And my best friends found a new guy",
        "I'm only getting older",
        "I've never had a shoulder to cry on",
        "Someone to call mine",
        "Everybody's falling in love",
        "And I'm falling behind",
        "Touched the ocean fell right in",
        "Stepped outside and burned my skin",
        "My life won't go my way",
        "Bossa Nova in my room",
        "Hope that I'll find someone too",
        "To love, because",
        "The sun's engaged to the sky",
        "And my best friends found a new guy",
        "I'm only getting older",
        "I've never had a shoulder to cry on",
        "Someone to call mine",
        "Everybody's falling in love",
        "And I'm falling behind",
        "Everybody's falling in love",
        "Everybody's falling in love",
        "Everybody's falling in love but me"
    ];
    const output = document.getElementById('output')
    for (let i = 0; i < lyrics.length; i++) {
        let waktu = i * 5000;
        setTimeout(() => {
            output.innerHTML += `${lyrics[i]} <br>`
        }, waktu);
    }
}

const myButton = document.getElementById('tombol')
myButton.addEventListener("click", function () {
    Songs();
    const sourceAudio = document.getElementById('audio')
    sourceAudio.play()
    myButton.disabled = true;
})