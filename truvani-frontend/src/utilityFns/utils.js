export const productInList = (listItems, product) => {
  const inList = listItems.find((prod) => prod.id === product.id);
  return inList;
};
