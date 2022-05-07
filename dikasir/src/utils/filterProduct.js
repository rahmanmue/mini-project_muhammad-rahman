export const filterProduct = ({ dataProduct, searchInput = "" }) => {
  const filterAllProduct = dataProduct.filter((product) => {
    if (product.nama.toLowerCase().includes(searchInput.toLowerCase())) {
      return true;
    } else if (searchInput === "" || searchInput === null) {
      return true;
    }

    return false;
  });

  return filterAllProduct;
};
