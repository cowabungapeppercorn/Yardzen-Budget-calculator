import db from './db';

const getAllItems = async () => {
  const itemsArr = [];
  try {
    const response = await db.collection("items").get();
    response.forEach(doc => {
      itemsArr.push(doc.data());
    });
  } catch (err) {
    console.log(err);
  }
  return itemsArr;
};

export default getAllItems;