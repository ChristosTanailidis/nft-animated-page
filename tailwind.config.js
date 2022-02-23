module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'background-light-faded': "url('./src/assets/BackgroundDarkLightFade.jpg')",
        'background-dark-faded': "url('./src/assets/BackgroundDarkFade.jpg')",
      }
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '100': '1920px',
    },
    minHeight: {
      '100': '100vh',
    },
    maxWidth: {
      '0': '0',
      '25': '25%',
      '50': '50%',
      '75': '75%',
      'full': '100%',
    },
    scale: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '130': '1.3',
      '150': '1.5',
      '200': '2',
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'sans-serif': [ 'Roboto', 'sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
     },
     boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 0 350px 150px rgba(255, 255, 255, 0.7)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [{
      'dark': {                          /* your theme name */
        'primary' : '#d8bd67',           /* Primary color */
        'primary-focus' : '#e0c304',     /* Primary color - focused */
        'primary-content' : '#292929',   /* Foreground content color to use on primary color */

        'secondary' : '#f000b8',         /* Secondary color */
        'secondary-focus' : '#bd0091',   /* Secondary color - focused */
        'secondary-content' : '#ffffff', /* Foreground content color to use on secondary color */

        'accent' : '#37cdbe',            /* Accent color */
        'accent-focus' : '#2aa79b',      /* Accent color - focused */
        'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

        'neutral' : '#3d4451',           /* Neutral color */
        'neutral-focus' : '#2a2e37',     /* Neutral color - focused */
        'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */

        'base-100' : '#3d4451',          /* Base color of page, used for blank backgrounds */
        'base-200' : '#2a2e37',          /* Base color, a little darker */
        'base-300' : '#16181d',          /* Base color, even more darker */
        'base-content' : '#ebecf0',      /* Foreground content color to use on base color */

        'info' : '#66c7ff',              /* Info */
        'success' : '#87d039',           /* Success */
        'warning' : '#e2d562',           /* Warning */
        'error' : '#ff6f6f',             /* Error */
      },
      'light': {                          /* your theme name */
        'primary' : '#d8bd67',           /* Primary color */
        'primary-focus' : '#e0c304',     /* Primary color - focused */
        'primary-content' : '#454545',   /* Foreground content color to use on primary color */

        'secondary' : '#f000b8',         /* Secondary color */
        'secondary-focus' : '#bd0091',   /* Secondary color - focused */
        'secondary-content' : '#ffffff', /* Foreground content color to use on secondary color */

        'accent' : '#37cdbe',            /* Accent color */
        'accent-focus' : '#2aa79b',      /* Accent color - focused */
        'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

        'neutral' : '#b0b0b0',           /* Neutral color */
        'neutral-focus' : '#d9d9d9',     /* Neutral color - focused */
        'neutral-content' : '#424752',   /* Foreground content color to use on neutral color */

        'base-100' : '#f9fafb',          /* Base color of page, used for blank backgrounds */
        'base-200' : '#d1d5db',          /* Base color, a little darker */
        'base-300' : '#a9acb0',          /* Base color, even more darker */
        'base-content' : '#1f2937',      /* Foreground content color to use on base color */

        'info' : '#2094f3',              /* Info */
        'success' : '#009485',           /* Success */
        'warning' : '#ff9900',           /* Warning */
        'error' : '#ff5724',             /* Error */
      },
    }],
  },
}
