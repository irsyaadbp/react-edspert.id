import { useState } from "react";
import "./App.css";
import CardItemTask from "./components/CardItemTask";

function App() {
  const [theme, setTheme] = useState("light");
  const [temporaryTask, setTemporaryTask] = useState("");
  const [todoTask, setTodoTask] = useState(["Bangun tidur", "Gosok gigi"]);

  const handleChangeTemporaryTask = (e) => {
    const value = e.target.value;
    setTemporaryTask(value);
  };

  const onAddNewTask = () => {
    if (!temporaryTask) {
      return alert("Please input task first");
    }
    setTodoTask((old) => {
      return [...old, temporaryTask];
    });
    setTemporaryTask("");
  };

  const onDoneTask = (indexDelete) => {
    setTodoTask((old) =>
      old.filter((_item, indexTodo) => indexTodo !== indexDelete)
    );
  };

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>TODO</h1>
          <button
            onClick={() =>
              setTheme((old) => (old === "light" ? "dark" : "light"))
            }
          >
            {theme === "light" ? "Light" : "Dark"}
          </button>
        </div>

        <div style={{ display: "flex", gap: 4 }}>
          <input
            value={temporaryTask}
            onChange={handleChangeTemporaryTask}
            className="input"
            type="text"
          />

          <button onClick={onAddNewTask}>Add New Task</button>
        </div>
        <div className="card-status">
          {todoTask.length ? (
            todoTask.map((titleTask, index) => {
              return (
                <CardItemTask
                  key={`${titleTask}-${index}`}
                  title={titleTask}
                  onDone={() => onDoneTask(index)}
                />
              );
            })
          ) : (
            <h4>No Task to do</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
