module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        c: {
          grayish: '#F6FAFD',
          blue: '#0F3162',
        },
      },
    },
  },
  plugins: [],
};
