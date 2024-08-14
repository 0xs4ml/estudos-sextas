const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());
app.disable('etag');

const users = [
    { id: 1, name: "xupinha", role: "manager" },
    { id: 2, name: "gabe", role: "user" },
    { id: 3, name: "maguinho", role: "admin" }
];

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/user/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find(userbyid => userbyid.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(400).json({ error: 'Usuário não encontrado ou inexistente' });
    }
});

app.patch('/api/user/:id', (req, res) => {
    if (req.headers['content-type'] !== 'application/json') {
        return res.status(400).json({ error: 'Content-Type deve ser application/json' });
    }

    const { name, role } = req.body;
    if (!name || !role) {
        return res.status(400).json({ error: 'Parâmetros faltantes' });
    }

    const userId = parseInt(req.params.id, 10);
    const userIndex = users.find(userbyid => userbyid.id === userId);

    if (userIndex) {
        Object.assign(userIndex, { name, role });
        res.json({
            message: 'Usuário atualizado!',
            user: userIndex
        })

    } else {
        res.status(404).json({ error: 'Usuário não encontrado ou inexistente' });
    }
});

app.delete('/api/user/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex(userbyid => userbyid.id === userId);

  //essa parte eu precisei colar do gpt pq eu não tava entendendo como fazer
    if (userIndex !== -1) {
        const deleteUser = users.splice(userIndex, 1); 
        res.json({
            message: 'Usuário deletado!',
            user: deleteUser[0]
  // até aqui
        });
    } else {
        res.status(404).json({ error: 'Usuário não encontrado ou inexistente' });
    }

});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
