import { styled } from '@stitches/react';

export const FormContent = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 16,
    gap: 8,

    '& label, span': {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '15px',
        lineHeight: '18px'
    },

    '& input, button': { 
        border:  '1px solid #ddd',
        borderRadius: 4,
        height: 30 
    },

    
    '& button': {
        background: '#7AC357',
        maxWidth: '300px',
        width: '100%',
        margin: '0 auto',
        cursor: 'pointer',
        height: 40, 
        '& span':{
            color: '#FFF'
        }
    },

    
});