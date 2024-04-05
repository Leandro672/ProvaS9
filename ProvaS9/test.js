const { Fila, RoboDeLimpeza } = require('./prova');

describe("Fila", () => {
    it("deve enfileirar um item", () => {
      const fila = new Fila();
      fila.enfileirar("Item 1");
      expect(fila.items.length).toBe(1);
    });
  
    it("deve desenfileirar um item", () => {
      const fila = new Fila();
      fila.enfileirar("Item 1");
      const item = fila.desenfileirar();
      expect(item).toBe("Item 1");
    });
  
    it("deve verificar se a fila está vazia", () => {
      const fila = new Fila();
      expect(fila.vazia()).toBe(true);
    });
  });

describe("RoboDeLimpeza", () => {
    it("deve adicionar uma tarefa", () => {
        const robo = new RoboDeLimpeza();
        robo.adicionarTarefa("Limpar");
        expect(robo.filaDeTarefas.items).toEqual(["molhar", "secar", "Limpar", "Limpar"]);
    });

    it("deve executar a próxima tarefa", () => {
        const robo = new RoboDeLimpeza();
        const tarefa = robo.executarProximaTarefa();
        expect(tarefa).toBe("molhar");
    });

    it("deve executar todas as tarefas", () => {
        const robo = new RoboDeLimpeza();
        const tarefas = robo.executarTodasTarefas();
        expect(tarefas).toEqual(["molhar", "secar", "Limpar"]);
    });
    });


  