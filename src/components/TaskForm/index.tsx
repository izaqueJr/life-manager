import React, { useReducer } from "react";
import { useTask } from "../../Providers/Task";
import { FormContent } from "./style";

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function TaskForm() {
  const { tasks, setTasks }: any = useTask();
  const [data, setData] = useReducer(formReducer, { id: Math.floor(Date.now() * Math.random()).toString(36), taskActive: true });

  const handleChange = (event: any) => {
    const saveData = {
      name: event.target.name,
      value: event.target.value,
    };
    setData(saveData);
  };

  const registerTask = (event: any) => {
    event.preventDefault();

    setTasks([...tasks, data]);

    console.log(tasks);
  };

  return (
    <form onSubmit={registerTask}>
      <FormContent>
        <label>Task Name</label>
        <input type="text" onChange={handleChange} name="task" />
      </FormContent>
      <FormContent>
        <label>Descrição</label>
        <input type="text" onChange={handleChange} name="description" />
      </FormContent>
      <FormContent>
        <label>Tempo Previsto</label>
        <input type="text" onChange={handleChange} name="estimatedTime" />
      </FormContent>

      <FormContent>
        <button type="submit"> 
          <span>
            confirmar
          </span>
        </button>
      </FormContent>
    </form>
  );
}
