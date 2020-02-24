import React, { useState, useEffect } from 'react';
import { getAllItems } from '../api';
import ChecklistGroup from './ChecklistGroup';

export default function BudgetChecklist({ setSelectedItems }) {
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function _getAllItems() {
      const response = await getAllItems();
      setItems(response);
      setLoading(false);
    };
    _getAllItems();
  }, []);

  if (loading) {
    return <h1>LOADING...</h1>
  }

  return (
    <div style={{ border: '5px solid black' }}>
      <h3>Budget Checklist Component</h3>
      <div>
        {Object.keys(items).map((type, i) => (
          <ChecklistGroup key={i} items={items[type]} title={type} setSelectedItems={setSelectedItems} />
        ))}
      </div>
    </div>
  )
}