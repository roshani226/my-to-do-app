import React from "react";
import { ITask } from "../Interfaces";
import { Button } from "antd";
import { PageHeader } from "antd";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>

        <span>{task.deadline}</span>
      </div>

      <Button
        onClick={() => {
          completeTask(task.taskName);
        }}
        type="primary"
        danger
      >
        {" "}
        Delete{" "}
      </Button>
    </div>
  );
};

export default TodoTask;
