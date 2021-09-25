
module.exports = {
    'presets': ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript'],
    'plugins': [
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-syntax-class-properties',
        '@babel/plugin-proposal-class-properties',
    ],
    'minified': true,
};
