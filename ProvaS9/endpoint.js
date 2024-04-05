const express = require('express');
const { RoboDeLimpeza } = require('./prova');

const app = express();
const robo = new RoboDeLimpeza();


app.get('/executar_todas_tarefas', (req, res) => {
  try {
    const tarefasExecutadas = robo.executarTodasTarefas();
    if (tarefasExecutadas.length > 0) {
      res.status(200).json({
        mensagem: "Todas as tarefas foram executadas com sucesso.",
        tarefasExecutadas: tarefasExecutadas
      });
    } else {
      res.status(204).json({
        mensagem: "Não há tarefas pendentes a serem executadas",
        tarefasExecutadas: []
      });
    }
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao executar as tarefas: " + error.message });
  }
});


const PORT = 7000;


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
