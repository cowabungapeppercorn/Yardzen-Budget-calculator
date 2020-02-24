import React from 'react';
import ChecklistGroup from './ChecklistGroup';
import useGetDbItems from '../hooks/useGetDbItems';
import sortItemsByType from '../helpers/sortItemsByType';
import Form from 'react-bootstrap/Form';

export default function BudgetChecklist({ setSelectedItems }) {
  const [items, loading] = useGetDbItems();
  
  if (loading) {
    return <h1>LOADING...</h1>
  }
  
  const itemsObj = sortItemsByType(items);

  return (
    <div style={{ border: '5px solid black' }}>
      <h3>Budget Checklist Component</h3>
      <Form>
        {Object.keys(itemsObj).map((type, i) => {
          return <ChecklistGroup key={i} items={itemsObj[type]} title={type} setSelectedItems={setSelectedItems} />
        })}
      </Form>
    </div>
  );
};
