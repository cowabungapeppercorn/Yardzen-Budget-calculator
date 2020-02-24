import React, { useContext } from 'react';
import './App.css';
import BudgetForm from './components/BudgetForm';
import BudgetChecklist from './components/BudgetChecklist';
import { Context as BudgetContext } from './context/BudgetContext';
import BudgetAnalysis from './components/BudgetAnalysis';


function App() {
  const { state: { amount, submitted } } = useContext(BudgetContext);

  return (
    <div className="App container">
      <h1 className="my-5">Yardzen Budget Calculator</h1>

      {!amount && (
        <BudgetForm />
      )}

      {amount && !submitted && (
        <BudgetChecklist  />
      )}

      {submitted && (
        <BudgetAnalysis />
      )}

    </div>
  );
}

export default App;
