import React from 'react';
import camelToTitleCase from '../helpers/camelToTitleCase';
import Form from 'react-bootstrap/Form';

export default function ChecklistGroup({ items, title, setSelectedItems }) {
  return (
    <div style={{ marginTop: '20px', border: '5px solid green' }}>
      <h3>{camelToTitleCase(title)}</h3>
      <Form>
        <Form.Group>
          {items.map(item => (
            <Form.Check
              type="checkbox"
              label={`${item.name}: $${item.lowPrice} - $${item.highPrice}`}
              key={item.id}
              checked={true}
            />
          ))}
        </Form.Group>
      </Form>
    </div>
  )
}
