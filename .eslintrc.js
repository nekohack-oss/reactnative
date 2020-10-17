module.exports = {
    extends: ['@nekohack/eslint-config-react'],
    root: true,
    env: { node: true, es6: true },
    parser: 'babel-eslint',
    rules: {
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: false,
                tabWidth: 4,
            },
        ],
    },
}
