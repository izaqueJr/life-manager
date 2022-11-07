import { styled } from '@stitches/react';

export const TaskContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  background: '#252534',
  
  margin: '10px auto',
  maxWidth: 600,
  padding: 10,

  borderRadius: 8,

  '& h3, p':{
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#FFFFFF'
  },

  
  '& p':{
    fontWeight: '400',
    fontSize: '13px',
  },

  '& h3':{
    fontWeight: '700',
    fontSize: '15px',
    lineHeight: '20px',
  },

  
  variants: {
    decoration: {
      inactiveTask: {
        opacity: '0.5',
        '& p': {
          textDecoration: 'line-through',
        }
      },
      activeTask: {
        opacity: '1',
        '& p': {
          textDecoration: 'none',
        }
      },
    },
  },

})


export const Time = styled('time', {
  color: '#FFFFFF',
  fontFamily:'Inter',
  fontWeight: '600',
  fontSize: 16
})

export const EndTaskButton = styled('button', {
  background: '#FFFFFF',
  height: '20px',
  width: '20px',
  border: 'none',
  borderRadius: '100%',
  cursor : 'pointer',
  variants: {
    bg: {
      active: {
        backgroundColor: '#4CC38A',
      },
      inactive: {
        backgroundColor: '#FFF',
      },
    },
  },
});
