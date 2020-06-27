try {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var recognition = new SpeechRecognition()
} catch (error) { }

var regex = /^\d{2}$/

if (recognition) {
    recognition.continuous = false
    recognition.lang = 'pt-BR'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onresult = function (event) {
        var result = event.results[0][0].transcript
        if (regex.test(result)) {
            var numB = document.getElementById("numB")
            numB.value = result
            setTimeout(gerarResultado, 400)
        }
    }

    recognition.onspeechend = function () {
        recognition.stop()
    }

    recognition.onnomatch = function () {
        alert("I didn't recognise that color.")
    }

    recognition.onerror = function (event) {
        alert('Erro ao reconhecer a voz: ' + event.error)
    }
}