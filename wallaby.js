module.exports = function () {

  return {
    files: [
      '__testutils__/*.js',
      {pattern: 'jama/**/**.js'},
      {pattern: 'jama/**/__tests__/*.js', ignore: true}
    ],

    tests: ['jama/**/__tests__/*.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest@0.4.3',

    bootstrap: function (wallaby) {
      wallaby.testFramework.configure({
        "unmockedModulePathPatterns": [
          "moment",
          "<rootDir>/__testutils__"
        ]
      });
    }
  };
};