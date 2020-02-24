import React from 'react';
import Alert from 'react-bootstrap/Alert';

export default function BudgetAlert({ text, variant }) {
  return (
    <Alert variant={variant} >
      {text}
    </Alert>
  );
};
