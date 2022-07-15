import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interfaces";
import { Input } from "antd";
import { Button } from "antd";
import { PageHeader } from "antd";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [deadline, setDealine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDealine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, date: date, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDate("");
    setDealine(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="TODO MYDO"
        subTitle="Arrange your TODO here!!"
      />
      <div></div>
      <div className="header">
        <div className="inputContainer">
          <input
            placeholder="ENTER YOUR TODO"
            type="text"
            //placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />

          <input
            placeholder="Priority"
            type="number"
            name="Priority"
            value={deadline}
            onChange={handleChange}
          />
        </div>

        <Button onClick={addTask} type="primary">
          ADD TODO
        </Button>
      </div>
      <div className="todoList">
        <h1>YOUR TODO LIST</h1>
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
