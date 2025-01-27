/** @type {import('tailwindcss').Config} */
//import plugin from "tailwindcss/plugin";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    

    extend: {
      backgroundImage: {
        'plan-img': "url('/src/assets/plan-img.jpg')",
      },
      

      container: {
      padding: {
        DEFAULT: '0.25rem',
        sm: '0.25rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      
    },
      colors: {
         'primary':'#ee0181'
      },
      fontFamily:{
            'display':['Poppins', 'sans-serif'],
            'body':['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}