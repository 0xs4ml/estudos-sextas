const express = require('express');
const app = express()
const port = 3000;

app.use(express.json());

app.get('/api/soma', (req, res) => {
    const numero1 = parseFloat(req.query.numero1);
    const numero2 = parseFloat(req.query.numero2);

    const resultadoSoma = numero1 + numero2;

    res.send(`O resultado da soma é: ${resultadoSoma}`);
});

app.get('/api/subtracao', (req, res) => {
    const numero1 = parseFloat(req.query.numero1);
    const numero2 = parseFloat(req.query.numero2);

    const resultadoSubtracao = numero1 - numero2;

    res.send(`O resultado da subtração é: ${resultadoSubtracao}`);
})

app.get('/api/divisao', (req, res) => {
    const numero1 = parseFloat(req.query.numero1);
    const numero2 = parseFloat(req.query.numero2);

    const resultadoDivisao = numero1/numero2;

    res.send(`O resultado da divisão é: ${resultadoDivisao}`);
})

app.get('/api/multiplicacao', (req, res) => {
    const numero1 = parseFloat(req.query.numero1);
    const numero2 = parseFloat(req.query.numero2);

    const resultadoMultiplicacao = numero1 * numero2;

    res.send(`O resultado da multiplicacao é: ${resultadoMultiplicacao}`);
})

app.listen(port, () => {
    console.log(`Express rodando localmente na porta ${port}`)
});
