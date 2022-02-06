module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary':'#510ACC',
        'grey-text': '#959595',
        'grey-500':'#6B7280',
        'grey-900':'#111827',
        'grey-icon':'#E7E7E7'

      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};