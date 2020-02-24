import { useState, useEffect } from 'react';
import { getAllItems } from '../api';

export default () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function _getAllItems() {
      const response = await getAllItems();
      setItems(response);
      setLoading(false);
    };
    _getAllItems();
  }, []);

  return [items, loading];
}
