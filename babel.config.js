module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {
      runtime: 'automatic',
      development: process.env.NODE_ENV !== 'production'
    }]
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
};
