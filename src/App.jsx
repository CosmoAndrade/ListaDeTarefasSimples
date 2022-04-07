import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [tarefas, setTarefas] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    const tarefaLocalStorage = localStorage.getItem("tarefas");

    if (tarefaLocalStorage) {
      setTarefas(JSON.parse(tarefaLocalStorage));
    }
    return () => {}
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleAdd() {
    setTarefas([...tarefas, input]);
    setInput("");
  }

  return (
    <div className="App">
      <ul>
        {tarefas.map((tarefa, id) => (
          <li key={id}> {tarefa} </li>
        ))}
      </ul>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}
