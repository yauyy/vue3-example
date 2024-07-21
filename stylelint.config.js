export default {
  root: true,
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  ignoreFiles: ['**/*', '!src/**/*', 'src/**/*.{js,jsx,ts,tsx}'],
  rules: {
    'custom-property-empty-line-before': null,
  },
  overrides: [
    {
      files: ['src/**/*.vue'],
      extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue'],
      rules: {
        'selector-class-pattern': null,
      },
    },
  ],
};
