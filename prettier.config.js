module.exports = {
  singleQuote: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: ["^components/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
