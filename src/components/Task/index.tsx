
import React from 'react';
import { useTask } from '../../Providers/Task';

export default function Task() {

  const { tasks }: any = useTask();
  console.log(tasks, "tasks")
  return (
    <div>
      {
        tasks?.map((task: any) => {
          return (
            <div>
              <h2>{task.task}</h2>

              <p>
                {task.description}
              </p>

              <div>{task.estimatedTime} </div>
            </div>
          )
        })
      }
    </div>
  )
}