module.exports = {
  tabWidth: 2,
  printWidth: 80,
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  jsxSingleQuote: true,
  endOfLine: 'lf',
  bracketSpacing: true,
  bracketSameLine: false,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true
};
