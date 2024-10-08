import { styled } from "@stitches/react"

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 570,

  '@container': {
    paddingLeft: '1rem',
  },

  '@notebook': {
    minHeight: 'calc(100vh - 120px)',
    paddingBottom: '1rem'
  },
});

export const Product = styled('div', {
  background: '$offwhite',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  minWidth: 540,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    height: '5.5rem',
    position: 'absolute',
    bottom: '0.5rem',
    left: '0.5rem',
    right: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 8,

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    '>div': {
      display: 'flex',
      flexDirection: 'column',
    
    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$red300',
    },
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2.75rem',
    height: '2.75rem',
    border: 'none',
    background: '$red300',
    borderRadius: '6px',
    cursor: 'pointer',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$red500',
    }
  }
},

'&:hover': {
  footer: {
    transform: 'translateY(0%)',
    opacity: 1,
  },

  '@container': {
    footer: {
      opacity: 0
    }
  }
}
})