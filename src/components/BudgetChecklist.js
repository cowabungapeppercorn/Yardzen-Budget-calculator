import React, { useContext } from 'react';
import ChecklistGroup from './ChecklistGroup';
import useGetDbItems from '../hooks/useGetDbItems';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Context as BudgetContext } from '../context/BudgetContext';

export default function BudgetChecklist() {
  const [items, loading] = useGetDbItems();
  const { submitBudget } = useContext(BudgetContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submitBudget();
  };
  
  if (loading) {
    return <h1>LOADING...</h1>
  };

  return (
    <div>
      <h3>Budget Checklist Component</h3>
      <Form onSubmit={handleSubmit}>
        {Object.keys(items).map((type, i) => {
          return <ChecklistGroup key={i} items={items[type]} title={type} />
        })}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
