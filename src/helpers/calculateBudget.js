export default (selectedItems) => {
  let totalLow = 0;
  let totalHigh = 0;
  for (let key in selectedItems) {
    if (selectedItems[key]) {
      totalLow += selectedItems[key].lowPrice;
      totalHigh += selectedItems[key].highPrice;
    }
  }
  return [totalLow, totalHigh];
};