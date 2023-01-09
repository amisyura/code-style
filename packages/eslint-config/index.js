module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['react-hooks', 'import', 'jest'],
    env: {
        'jest/globals': true,
        browser: true,
        node: true,
    },
    rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            }
        ],
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'import/order': ['error', { groups: [['external', 'internal']], 'newlines-between': 'always-and-inside-groups' }],
        'import/no-default-export': 'error',
        'no-duplicate-imports': 'error',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
