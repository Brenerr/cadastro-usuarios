/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        base: {
          card: '#F3F2F2',
          hover: '#D7D5D5',
          label: '#8D8686',
          text: '#574F4D',
          subtitle: '#403937',
          title: '#272221',
        },
        input: {
          DEFAULT: '#efeeed',
          focus: '#333333',
          border: '#efeeed',
          invalid: '#eb4a46',
        },
        disabled: {
          text: '#dddcdc',
          background: '#f6f6f6',
        },
        primary: {
          light: '#c6fff4',
          DEFAULT: '#00c8b3',
          dark: '#00a497',
        },
      },
    },
  },
  plugins: [],
}
