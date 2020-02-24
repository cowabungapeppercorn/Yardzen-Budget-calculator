import { useState, useEffect, useContext } from 'react';
import { getAllItems } from '../api/api';
import { Context as BudgetContext } from '../context/BudgetContext';
import sortItemsByType from '../helpers/sortItemsByType';

export default () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setTypes } = useContext(BudgetContext);

  useEffect(() => {
    async function _getAllItems() {
      const itemsArr = await getAllItems();
      const itemsObj = sortItemsByType(itemsArr);
      setItems(itemsObj);
      setLoading(false);
      setTypes(Object.keys(itemsObj));
    };
    _getAllItems();
  }, []);

  return [items, loading];
}
