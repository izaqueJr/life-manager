import * as Dialog from '@radix-ui/react-dialog';
import React, { useReducer, useEffect, useState } from 'react';
import { useTask } from '../../Providers/Task';


const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.name]: event.value
  }
}

export default function AddTask() {

  const { tasks, setTasks }: any = useTask();
  const [data, setData] = useReducer(formReducer, { id: 123 });


  const handleChange = (event: any) => {
    const saveData = {
      name: event.target.name,
      value: event.target.value
    }
    setData(saveData);
  }

  const registerTask = (event: any) => {

    event.preventDefault();


    setTasks([...tasks, data]);

    console.log(tasks)
  }

  return (
    <Dialog.Root>

      <Dialog.Trigger>
        Add tasks
      </Dialog.Trigger>

      <Dialog.Portal>

        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>
            Configure a task
          </Dialog.Title>
          <Dialog.Close >
            Close
          </Dialog.Close>
          <Dialog.Description>
            <form onSubmit={registerTask} >
              <div>
                <label>Task Name</label>
                <input type="text" onChange={handleChange} name='task' />
              </div>
              <div>
                <label>Descrição</label>
                <input type="text" onChange={handleChange} name='description' />
              </div>
              <div>
                <label>Tempo Previsto</label>
                <input type="text" onChange={handleChange} name='estimatedTime' />
              </div>

              <button type='submit'>
                confirmar
              </button>
            </form>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}