import { useState } from "react";
import "./styles.css";

export default function App() {
  const [tarefas, setTarefas] = useState([
    "Estudar Python",
    "Estudar Java",
    "Estudar PHP"
  ]);

  const [input, setInput] = useState("");

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
