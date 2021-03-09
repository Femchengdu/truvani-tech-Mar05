export const productInList = (listItems, product) => {
  const inList = listItems.find((prod) => prod.id === product.id);
  return inList;
};

export const sortPriceAscCategoriesDesc = (products) => {
  // a - b asc
  // b - a desc
  products.sort(
    (a, b) => a.price - b.price || b.sharedCategories - a.sharedCategories
  );
};

export const sortPriceDescCategoriesDesc = (products) => {
  // a - b asc
  // b - a desc
  products.sort(
    (a, b) => b.price - a.price || b.sharedCategories - a.sharedCategories
  );
};
