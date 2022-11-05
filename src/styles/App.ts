import { styled } from '@stitches/react';

const Header = styled('header', {
  backgroundColor: 'gainsboro',
  fontFamily: 'Source Code Pro',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

export default Header;