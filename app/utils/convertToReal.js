export const convertToReal = (number) =>
  `R$ ${number
    .toFixed(2)
    .toString()
    .replace('.', ',')}`;
