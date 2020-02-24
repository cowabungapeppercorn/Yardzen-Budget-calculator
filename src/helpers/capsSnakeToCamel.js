export default (str) => {
  const arr = str.toLowerCase().split('_');
  let returnStr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    returnStr = returnStr += capitalize(arr[i]);
  }
  return returnStr;
}

const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};