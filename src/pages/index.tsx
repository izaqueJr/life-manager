
import React, { useEffect, useState } from 'react';
import Task from '../components/Task';
import { TaskProvider, useTask } from '../Providers/Task';
import AddTask from './../components/AddTask/index';

export default function Home() {

  return (
    <TaskProvider  >
      <section>
        <AddTask />
      </section>
      <Task />

    </TaskProvider>

  )
}
