
    // Definir as respostas corretas para cada pergunta
    const respostasCorretas = {
        resposta1: 'a',
        resposta2: 'b',
        resposta3: 'd',
        resposta4: 'c',
        resposta5: 'b'
    };

    
    function verificarRespostas() {
        let pontuacao = 0;

        // Verificar a primeira pergunta
        const resposta1 = document.querySelector('input[name="resposta1"]:checked');
        if (resposta1 && resposta1.value === respostasCorretas.resposta1) {
            pontuacao++;
        }

        // Verificar a segunda pergunta
        const resposta2 = document.querySelector('input[name="resposta2"]:checked');
        if (resposta2 && resposta2.value === respostasCorretas.resposta2) {
            pontuacao++;
        }

        // Verificar a terceira pergunta
        const resposta3 = document.querySelector('input[name="resposta3"]:checked');
        if (resposta3 && resposta3.value === respostasCorretas.resposta3) {
            pontuacao++;
        }

        // Verificar a quarta pergunta
        const resposta4 = document.querySelector('input[name="resposta4"]:checked');
        if (resposta4 && resposta4.value === respostasCorretas.resposta4) {
            pontuacao++;
        }

        // Verificar a quinta pergunta
        const resposta5 = document.querySelector('input[name="resposta5"]:checked');
        if (resposta5 && resposta5.value === respostasCorretas.resposta5) {
            pontuacao++;
        }

        // Exibir um pop-up com a pontuação
        if (pontuacao === 5) {
            alert('Parabéns! Você acertou todas as respostas. Sua pontuação é 5/5.');
        } else {
            alert(`Sua pontuação é ${pontuacao}/5. Continue praticando!`);
        }
    }

    
    const buttonsResponder = document.querySelectorAll('input[type="submit"]');
    buttonsResponder.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); 
            verificarRespostas();
        });
    });

