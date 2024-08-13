const express = require('express');
const app = express()
const port = 3000;

app.use(express.json());

app.get('/api/soma/:n1/:n2' , (req, res) => {
    const n1 = parseInt(req.params.n1)
    const n2 = parseInt(req.params.n2)
    const resultadoSoma = n1 + n2;

    res.send(`O resultado da soma é: ${resultadoSoma}`)
})

app.listen(port, () => {
    console.log(`Express rodando localmente na porta ${port}`)
});

app.get('/api/subtracao/:n1/:n2', (req, res) => {
    const n1 = parseInt(req.params.n1)
    const n2 = parseInt(req.params.n2)
    const resultadoSubtracao = n1 - n2;

    res.send(`O resultado da subtracao é: ${resultadoSubtracao}`)
})

app.get('/api/divisao/:n1/:n2', (req, res) => {
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    const resultadoDivisao = n1/n2;

    res.send(`O resultado da divisão é: ${resultadoDivisao}`)
})

app.get('/api/multiplicacao/:n1/:n2', (req, res) => {
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    const resultadoMultiplicacao = n1 * n2;

    res.send(`O resultado da multiplicacao é: ${resultadoMultiplicacao}`)
})
