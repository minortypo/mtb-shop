import { styled } from "../../../styles"

export const ProductCartWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    overflowY: 'auto',
    marginTop: '40px'
})

export const ProductCart = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '18px',
})

export const ProductImage = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '102px',
    height: '94px',
    borderRadius: 8,
    background: '$offwhite'
})

export const ProductInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    color: '$gray300',
    fontSize: '1.125rem',

    strong: {
        margin: '12px 0 18px',
        color: '$gray100',
        fontSize: '1.125rem'
    },

    button: {
        textAlign: 'left',
        background: 'transparent',
        border: 'none',
        color: '$red500',
        fontWeight: 'bold',
        fontSize: '1rem',
        cursor: 'pointer',

        '&:hover': {
            color: '$red300',
        }
    }
})

export const ProductsResume = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '2.5rem',

    div: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '$gray100',

        span: {
            fontSize: '1rem'
        },

        strong: {
            fontSize: '1.125rem'
        }
    },

    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '3.75rem',
        padding: '20px 32px',
        marginTop: '2.5rem',
        background: '$red300',
        border: 'none',
        color: '$white',
        fontWeight: 'bold',
        fontSize: '1.125rem',
        borderRadius: 8,
        cursor: 'pointer',

        '@md': {
            height: '3.125rem',
            marginTop: '1.5rem'
        },

        transition: 'background 0.2s ease-in-out',

        '&:not(:disabled):hover': {
            background: '$red500',
        },

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed'
        }
    }
})