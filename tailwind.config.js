// /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant"', 'serif'],
        // Add other fonts here if specified in Figma
      },
      colors: {
       
        customPurple: '#6A0DAD',
        customPink: '#FF69B4',
        purpal:'#4C0C5C',
        lightpurpal:' #A259FF',
        deeppurpal:' #9F0D76',
        adbg:'#EE481447'



        
      },
      backgroundImage: {
        'my-image': "url('/image.png')",
        
      },
      
      
    },
  },
  plugins: [],
}