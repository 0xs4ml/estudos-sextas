const express = require('express');
const app = express()
const port = 3000;

app.use(express.json());

//Forçar ser JSON e ser POST
app.use((req, res, next) => {
    if (req.method !== 'POST' && req.headers['content-type'] !== 'application/json') {
        return res.status(405).send('Método não permitido. Use POST e content-type application/j.');
    }
    next();
});

app.post('/api/soma', (req, res) => {
    const { n1, n2 } = req.body;
    //parsefloat pra converter n1 e n2 para números.
    const resultadoSoma = parseFloat(n1) + parseFloat(n2);

    res.send(`O resultado da soma é: ${resultadoSoma}`)
})

app.post('/api/subtracao', (req, res) => {
    const { n1, n2 } = req.body;
    const resultadoSubtracao = parseFloat(n1) - (n2);

    res.send(`O resultado da subtracao é: ${resultadoSubtracao}`)
})

app.post('/api/divisao', (req, res) => {
    const { n1, n2 } = req.body;
    const resultadoDivisao = parseFloat(n1) / parseFloat(n2);

    res.send(`O resultado da divisão é ${resultadoDivisao}`)
})

app.post('/api/multiplicacao', (req, res) => {
    const { n1, n2 } = req.body;
    const resultadoMultiplicacao = parseFloat(n1) * parseFloat(n2);

    res.send(`O resultado da multiplicacao é ${resultadoMultiplicacao}`)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
