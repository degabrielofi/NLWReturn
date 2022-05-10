module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996DFF',
          500: '#8257e6',
          linkedin: '#0965c2',
          twitter: '#5BAFE8',
          instagram: '#b82ea7',
          github: '#eff5fb',
        },
        texts: {
          100: '#667085',
        }
      },
      borderRadius: {
        md: '4px'
      },
      margin: {
        md: '6px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
