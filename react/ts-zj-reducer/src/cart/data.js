const cartData = Array(5)
  .fill(undefined)
  .map((value, index) => (
    { id: index, name: `商品${index + 1}`, price: Math.floor(Math.random() * 100)}
  ))
// console.log(cartData);
export default cartData;
