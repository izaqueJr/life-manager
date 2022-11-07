
import React, { useState } from 'react';
import { useTask } from '../../Providers/Task';
import { EndTaskButton, TaskContainer, Time } from './styles'

export default function Task() {
  const { tasks, setTasks }: any = useTask();
  const [finishedTask, setFinishedTask] = useState(false)
  
  const onChangeStatusTask = (id:string, isActive: boolean) => {   
    let actualTask = tasks.find((item:any) => item.id === id)

    let index = tasks.map((item:any) => item.id !== id).indexOf(false)
   


    function disabledTask(){
      actualTask.taskActive = false
      let a = tasks.splice(index, 1)


      setTasks([actualTask, ...tasks])

      console.log(a, "aaa")
      // setTasks
    }

    function enabledTask(){
      actualTask.taskActive = true
      let a = tasks.splice(index, 1)


      setTasks([ ...tasks, actualTask])
    }

    isActive 
    ? 
      disabledTask()
      
    :
      enabledTask()

    finishedTask ? setFinishedTask(false) : setFinishedTask(true)
  }

  return (
    <>
      {
        tasks?.map((task: any) => {
          return (
            <TaskContainer key={task.id} decoration={task.taskActive ? 'activeTask' : 'inactiveTask' }>
              <div>

                <h3>{task.task}</h3>

                <p>
                  {task.description}
                </p>

                <Time>{task.estimatedTime} </Time>

              </div>

              <EndTaskButton bg={task.taskActive ? 'active' : 'inactive' } onClick={() => {onChangeStatusTask(task.id, task.taskActive )}} />

            </TaskContainer>
          )
        })
      }
    </>
  )
}