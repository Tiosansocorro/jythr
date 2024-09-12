document.getElementById("estimateButton").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value.trim();

    if (name) {
        fetch(`https://api.agify.io?name=${name}`)
            .then(response => response.json())
            .then(data => {
                if (data.age) {
                    document.getElementById("result").textContent = `A sua idade é ${data.age} anos.`;
                } else {
                    document.getElementById("result").textContent = "esse nem é seu azideia.";
                }
            })
            .catch(error => {
                document.getElementById("result").textContent = "Ocorreu um erro. Tente novamente mais tarde.";
                console.error(error);
            });
    } else {
        document.getElementById("result").textContent = "Por favor, digite um nome.";
    }
});