module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo-bg': "url('../public/assets/logoBg.svg')",
        'logo-bg-mobile': "url('../public/assets/logoBg-mobile.svg')",
        'model': "url('../public/assets/model.png')",
        'model-mobile': "url('../public/assets/model-mobile.png')",
        '16-express': "url('../public/assets/16-express (1).svg')",
        'power': "url('../public/assets/XMLID_1490_ (1).svg')",
        'clipboard': "url('../public/assets/clipboard (1).svg')",
        'red-bg-design': "url('../public/assets/red-bg-design.png')",
        'lady1': "url('../public/assets/lady1.png')",
        'quotes1': "url('../public/assets/quotes1.png')",
        'quotes2': "url('../public/assets/quotes2.png')",
        'back-line': "url('../public/assets/back-line.png')",
        'back-line2': "url('../public/assets/back-line2.png')",
        'gym-lady1': "url('../public/assets/gym-lady1.png')",
        'blackBG': "url('../public/assets/blackBG.png')",
        'mail': "url('../public/assets/mail.png')",
        
      },
      colors: {
        'nav-black': '#111111',
        'border-black': '#2A2A2A',
        'border-white': '#EEEEEE',
        'border-white-2': '#EDEDED',
        'menu-bg': '#E41C26',
        't-grey': '#515151',
        't-grey-2': '#DEDEDE',
        't-grey-3': '#5E5E5E',
        't-grey-4': '#707070',
        't-grey-5': '#D1D1D1',
        't-grey-6': '#7E7E7E',
        't-grey-7': '#AEAEAE',
        't-grey-8': '#ECECEC',
        't-grey-9': '#ACACAC',
        't-black-1': '#202020',
        'border-R': '#F60000',
        'yellow-bg': '#F4C521',
        'light-black': '#222222',
        'trans-a': 'rbga(255, 255, 255, 0.5)',
      },
      margin: {
        '33': '33px',
        '353': '353px',
      },
      fontFamily: {
        'Futura': 'Futura',
        'Futura-Medium': 'Futura-Medium',
        'Futura-Book': 'Futura-Book',
        'SF-Bold': 'SF-Bold',
        'SF-Light': 'SF-Light',
        'SF-Medium': 'SF-Medium',
        'SF-Regular': 'SF-Regular',
        'SF-Semibold': 'SF-Semibold',
      },

      fontSize: {
        'xx': '9px',
        '59': '59px',
        '33': '33px',
        '44': '2.75rem',
        '80': '80px',
        '123': '7.688rem',
      },

      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
      
      spacing: {
        'm120': '-120px',
        'm170': '-170px',
        'm280': '-280px',
        '76': '76px',
        '104': '6.5rem',
        '172': '10.75rem',
        '363': '363px',
        '420': '420px',
        '420': '420px',
        '500': '500px',
        '580': '580px',
        '592': '592px',
        '750': '750px',
      },

      screens: {
        'xs': '375px',
        
      },

      maxWidth: {
        '1/2': '50%',
        '254': '254px',
        '264': '264px',
        '569': '569px',
        '731': '731px',
        '821': '821px',
        '1000': '1000px',
        '1200': '1200px',
        '1300': '81.25rem',
        '1600': '1600px',
        
      },

      maxHeight: {
        '1/2': '50%',
        '254': '254px',
        '264': '264px',
        '569': '569px',
        '731': '731px',
        '1000': '1000px',
        
      },

      backgroundSize: {
        '25%': '25%',
        '40%': '40%',
        '45%': '45%',
        '50%': '50%',
        '75%': '75%',
        '100%': '100%',
      },

      lineHeight: {
        '11': '3rem',
        '12': '3.5rem',
      },

      letterSpacing: {
        's-23': '1.499rem',
        
      },

      rotate: {
        'm90': '-90deg',
      }

    },
  },
  plugins: [],
}
