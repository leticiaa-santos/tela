// <!DOCTYPE html>
/*{ <html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tradutor de Texto</title>
</head>
<body>
    <h1>Tradutor de Texto</h1>
    
    <!-- Texto no site que será traduzido -->
    <p id="texto-original">Olá, como você está? Este é um exemplo de tradução.</p><br>

    <select id="idioma-destino">
        <option value="en">Inglês</option>
        <option value="es">Espanhol</option>
        <option value="fr">Francês</option>
        <!-- Adicione mais idiomas conforme necessário -->
    </select><br><br>

    <button onclick="traduzir()">Traduzir</button>

    <h3>Texto Traduzido:</h3>
    <p id="resultado"></p>

    <script>
        // Função para traduzir o texto
        function traduzir() {
            const textoOriginal = document.getElementById('texto-original').textContent;
            const idiomaDestino = document.getElementById('idioma-destino').value;

            if (textoOriginal.trim() === '') {
                alert('Texto não encontrado!');
                return;
            }

            const url = `https://translation.googleapis.com/language/translate/v2?key=AIzaSyDDIL3heA7M6RVIES3gIEFrxntKAmhh3nM`;
            
            const dados = {
                q: textoOriginal,
                target: idiomaDestino,
                format: 'text'
            };

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            })
            .then(response => response.json())
            .then(data => {
                if (data && data.data && data.data.translations) {
                    const traducao = data.data.translations[0].translatedText;
                    document.getElementById('resultado').textContent = traducao;
                } else {
                    alert('Erro na tradução!');
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao conectar à API.');
            });
        }
    </script>
</body>
</html> }*/
