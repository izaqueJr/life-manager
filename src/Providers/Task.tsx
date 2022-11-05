import React, { createContext, useContext, useState } from 'react';

export const TaskContext = createContext({});

export const TaskProvider = ({ children }: any) => {
  const [tasks, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTask = () => useContext(TaskContext)