import db from './db';

const getAllItems = async () => {
  try {
    const itemsArr = [];
    const response = await db.collection("items").get();
    response.forEach(doc => {
      const item = doc.data();
      item.id = doc.id;
      itemsArr.push(item);
    });

    return itemsArr;
  
  } catch (err) {
    console.log(err);
  }
};

export { getAllItems };