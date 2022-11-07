
import React from 'react';
import Task from '../components/Task';
import { TaskProvider } from '../Providers/Task';
import HeaderTask from '../components/HeaderTask';

export default function Home() {

  return (
    <TaskProvider  >
      
      <HeaderTask />
      
      <Task />

    </TaskProvider>

  )
}
