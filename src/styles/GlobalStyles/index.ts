import { styled } from '@stitches/react';

export const Container = styled('section', {
    maxWidth: '600px',
    display: 'flex',
    margin: '0 auto',
    variants: {
        display: {
          row: {
            flexDirection:'row'
          },
          col: {
            flexDirection:'column'
          },
        },

        justify:{
            center: {
                justifyContent: 'center'
            },

            spaceBetween: {
                justifyContent: 'space-between'
            },
        }
    },
});

export const Title = styled('h2', {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '27px',
    lineHeight: '34px',

    color: '#FFFFFF'
})


