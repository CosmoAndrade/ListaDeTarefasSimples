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
    return () => {};
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function handleAdd() {
    setTarefas([...tarefas, input]);
    setInput("");
  }
  const clear = (item) => {
    const itemFiltered = tarefas.filter((elemento) => elemento !== item);

    setTarefas(itemFiltered);
  };

  return (
    <div className="App">
      <ul>
        {tarefas.map((item, id) => (
          <div className="caixaItem">
            <li key={id}> {item} </li>
            <button onClick={() => clear(item)}>x</button>
          </div>
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
