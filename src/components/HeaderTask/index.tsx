import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import IconPlus from './../../assets/icon--plus.svg'
import Image from 'next/image'
import TaskForm from '../TaskForm';
import { Container, Title } from '../../styles/GlobalStyles';
import {ModalHeader, Trigger, Content, Overlay} from './sytle'


export default function HeaderTask() {


  return (
    <Container display="row" justify="spaceBetween">
      <div>
        <Title>
          ToDo
        </Title>
      </div>

      <Dialog.Root>
        <Trigger>
          <Image src={IconPlus} width={20} height={20} alt="add task" />
        </Trigger>

        <Dialog.Portal>

          <Overlay />
          <Content>
            <ModalHeader>
              <Dialog.Title>
                Configure a task
              </Dialog.Title>
              <Dialog.Close >
               X
              </Dialog.Close>
            </ModalHeader>


            <Dialog.Description>
                <TaskForm />
            </Dialog.Description>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
      
    </Container>
  )
}