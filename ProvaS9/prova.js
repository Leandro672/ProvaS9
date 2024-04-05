
class Fila {
    constructor() {
      this.items = [];
    }
  
    enfileirar(item) {
      this.items.push(item);
    }
  
    desenfileirar() {
      if (this.vazia()) return "Fila vazia";
      return this.items.shift();
    }
  
    vazia() {
      return this.items.length === 0;
    }
  }

  class RoboDeLimpeza {
    constructor() {
      this.filaDeTarefas = new Fila();
      this.tarefasPadrao = ["molhar", "secar", "Limpar"];
      this.adicionaTarefasPadrao();
    }
  
    adicionaTarefasPadrao() {
      this.tarefasPadrao.forEach(tarefa => {
        this.filaDeTarefas.enfileirar(tarefa);
      });
    }
  
    adicionarTarefa(tarefa) {
      this.filaDeTarefas.enfileirar(tarefa);
    }
  
    executarProximaTarefa()  {
      if (this.filaDeTarefas.vazia()) {
        throw new Error("Fila de tarefas está vazia");
      }
      const proximaTarefa = this.filaDeTarefas.desenfileirar();
      console.log("Executando tarefa:");
      return proximaTarefa;
    }
  
    executarTodasTarefas() {
      const tarefasExecutadas = [];
      while (!this.filaDeTarefas.vazia()) {
        const tarefa = this.executarProximaTarefa();
        tarefasExecutadas.push(tarefa);
      }
      return tarefasExecutadas;
    }
  }
  
  module.exports = { Fila, RoboDeLimpeza };
