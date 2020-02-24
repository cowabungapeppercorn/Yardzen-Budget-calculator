export default (int) => {
  const str = int.toString();
  const cents = str.slice(-2);
  let dollars = str.slice(0, str.length - 2);
  if (dollars.length > 3) {
    let arr = [];
    let remainder = dollars.length % 3;
    if (remainder) arr.push(dollars.slice(0, remainder));

    for (let i = remainder; i < dollars.length; i += 3) {
      arr.push(dollars.slice(i, i + 3));
    }

    dollars = arr.join(',');
  }
  return [dollars, cents].join('.');
}