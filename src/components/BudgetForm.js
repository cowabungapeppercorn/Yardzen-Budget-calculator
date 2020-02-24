import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Context as BudgetContext } from '../context/BudgetContext';

export default function BudgetForm() {
  const [formName, setFormName] = useState('');
  const [formAmount, setFormAmount] = useState(0);
  const { setName, setAmount } = useContext(BudgetContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setName(formName);
    setAmount(formAmount);
  };

  return (
    <div className="BudgetForm">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="budgetName">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            value={formName}
            onChange={evt => setFormName(evt.target.value)}
            type="text"
          />
        </Form.Group>
        <Form.Group controlId="budgetAmount">
          <Form.Label>Budget Amount</Form.Label>
          <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            value={formAmount}
            onChange={evt => setFormAmount(evt.target.value)}
            type="number"
            step={.01}
          />
          </InputGroup>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
