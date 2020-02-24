import React, { useContext } from 'react';
import { Context as BudgetContext } from '../context/BudgetContext';
import BudgetAlert from './BudgetAlert';
import intToDollar from '../helpers/intToDollar';
import camelToTitleCase from '../helpers/camelToTitleCase';
import calculateBudget from '../helpers/calculateBudget';
import returnBudgetMessage from '../helpers/returnBudgetMessage';
import ListGroup from 'react-bootstrap/ListGroup';

export default function BudgetAnalysis() {
  const { state: { name, amount, selectedItems } } = useContext(BudgetContext);
  const [totalLow, totalHigh] = calculateBudget(selectedItems);
  const [text, variant] = returnBudgetMessage(amount, totalLow, totalHigh);

  return (
    <div>
      <h6>Project Name: {name}</h6>
      <h6>Budget Amount: ${intToDollar(amount)}</h6>
      <BudgetAlert text={text} variant={variant} />
      <p>For a price range of ${intToDollar(totalLow)}-${intToDollar(totalHigh)}, you selected:</p>
      <ListGroup>
        {Object.keys(selectedItems).map(type => {
          if (selectedItems[type]){
            return <ListGroup.Item key={selectedItems[type].id}>
                {camelToTitleCase(type)} = {selectedItems[type].name}: 
                ${intToDollar(selectedItems[type].lowPrice)}-${intToDollar(selectedItems[type].highPrice)}
              </ListGroup.Item>
          }
        })}
      </ListGroup>
    </div>
  );
};
