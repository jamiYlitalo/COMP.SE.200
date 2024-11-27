module.exports = {
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/'], // Ensure node_modules is not transformed
  };
  