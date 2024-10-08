import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: '0px',
    padding: '0px',
    boxSizing: 'border-box',
    scrollbarWidth: 'auto',
    scrollbarColor: '#d7d4d8 #ffffff',

    '&::-webkit-scrollbar': {
      width: '14px'
    },

    '&::-webkit-scrollbar-track': {
      background: '#505050'
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#202024',
      borderRadius: '10px',
      border: '2px solid #505050',
    }
  },
  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: '400',
  },
})