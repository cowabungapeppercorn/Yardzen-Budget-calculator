import capsSnakeToCamel from '../helpers/capsSnakeToCamel';

const sortItemsByType = (itemsArr) => {
  const returnObj = {};
  for (let item of itemsArr) {
    let formattedType = capsSnakeToCamel(item.type)
    
    if (returnObj[formattedType]) {
      returnObj[formattedType].push(item);
    } else {
      returnObj[formattedType] = [{ ...item }];
    }
  }
  
  return returnObj;
};

export default sortItemsByType;
