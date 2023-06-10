export const updateCartUtil = (pr, data) => {
  const find = pr.find((item) => {
    if (item.name === data.name) {
      item.amount += data.amount;
      return item;
    }
    return false;
  });
  if (!find) {
    pr.push(data);
  }
  return pr;
};
