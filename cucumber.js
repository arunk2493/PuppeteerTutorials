let common = [
    './src/features/**/*.feature',
    '--require-module ts-node/register',
    '--require ./src/steps/**/*.ts',
    '--tags @SmokeTest'
].join(' ');

module.exports = {
    default: common
    // More profiles can be added if desired
};
