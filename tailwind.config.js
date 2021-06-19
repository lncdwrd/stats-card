module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      screens: {
         sm: '100%',
         md: '100%',
         lg: '1110px',
         xl: '1110px'
      },
      padding: {
        DEFAULT: '2rem',
        lg: '0'
      }
    },
    spacing: {
      'xsm':  '6px',
      'sm':   '8px',
      'md':   '24px',
      'r':    '32px',
      'lg':   '40px',
      'xl':   '72px',
      'xxl':  '88px',
      'xxxl': '120px',
    },
    minWidth: {
      'photo': '540px',
    },
    minHeight: {
      'photo': '240px',
      'photo-tablet': '400px',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    colors: {
      blue: {
        100: '#090B1A',
        200: '#1B1938'
      },
      violet: '#AA5CDB',
      gray: {
        100: '#CECCE1',
        200: '#FEFEFF'
      },
      white: '#FFF'
    },
    fontFamily: {
      'heading':  ['Lexend Deca', 'sans-serif'],
      'body':     ['Inter', 'sans-serif'],
    },
    fontSize: {
      'h1': ['2.25rem', '2.75rem'],
      'm-h1': ['1.75rem', '2rem'],
      'h2': '1.5rem',
      'sm': '0.813rem',
      'base': '0.938rem'
    },
    lineHeight: {
      'base': '1.563rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
