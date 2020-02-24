import React, { useState, useContext } from 'react';
import camelToTitleCase from '../helpers/camelToTitleCase';
import { Context as BudgetContext } from '../context/BudgetContext';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import intToDollar from '../helpers/intToDollar';


export default function ChecklistGroup({ items, title }) {
  const [selected, setSelected] = useState(null);
  const { chooseOneItem } = useContext(BudgetContext);

  const handleChange = (item) => {
    if (item.id !== selected) {
      setSelected(item.id);
      chooseOneItem(title, item);
    } else {
      setSelected(null);
      chooseOneItem(title, null);
    }
  };

  return (
    <Card bg="light" className="Card my-2">
      <Card.Header className="my-2">{camelToTitleCase(title)}</Card.Header>
      <Card.Body>
        <Form.Group>
          {items.map(item => {
            return <Form.Check
              type="checkbox"
              label={`${item.name}: $${intToDollar(item.lowPrice)} - $${intToDollar(item.highPrice)}`}
              key={item.id}
              checked={item.id === selected}
              onChange={() => handleChange(item)}
            />
          })}
        </Form.Group>
      </Card.Body>
    </Card>
  );
};
