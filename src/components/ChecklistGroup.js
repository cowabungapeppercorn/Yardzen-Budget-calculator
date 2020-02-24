import React, { useState } from 'react';
import camelToTitleCase from '../helpers/camelToTitleCase';
import Form from 'react-bootstrap/Form';

export default function ChecklistGroup({ items, title, setSelectedItems }) {
  const [selected, setSelected] = useState('');

  return (
    <div style={{ marginTop: '20px', border: '5px solid green' }}>
      <h3>{camelToTitleCase(title)}</h3>
        <Form.Group>
          {items.map(item => {
            return <Form.Check
              type="checkbox"
              label={`${item.name}: $${item.lowPrice} - $${item.highPrice}`}
              key={item.id}
              checked={item.id === selected}
              onChange={item.id !== selected 
                ? () => setSelected(item.id)
                : () => setSelected('')
              }
            />
          })}
        </Form.Group>
    </div>
  );
};
