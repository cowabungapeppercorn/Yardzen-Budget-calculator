import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function BudgetForm({ setCurrentBudget }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setCurrentBudget({ name, amount });
  };

  return (
    <div className="BudgetForm">
      <h3>Budget Form</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="budgetName">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            value={name}
            onChange={evt => setName(evt.target.value)}
            type="text"
          />
        </Form.Group>
        <Form.Group controlId="budgetAmount">
          <Form.Label>Budget Amount</Form.Label>
          <Form.Control
            value={amount}
            onChange={evt => setAmount(evt.target.value)}
            type="number"
            step={0.01}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
