import createDataContext from './createDataContext';

const budgetReducer = (state, action) => {
  switch (action.type) {
    case 'set_name':
      return { ...state, name: action.payload };
    case 'set_amount':
      return { ...state, amount: action.payload * 100 };
    case 'set_types':
      const typesObj = {};
      for (let type of action.payload) {
        typesObj[type] = null;
      };
      return { ...state, selectedItems: typesObj };
    case 'choose_one_item':
      const newSelection = action.payload.item;
      const newSelectedItems = { ...state.selectedItems };
      newSelectedItems[action.payload.type] = newSelection;
      return { ...state, selectedItems: newSelectedItems };
    case 'submit_budget':
      return { ...state, submitted: true };
    default:
      return state;
  }
};

const setName = dispatch => name => {
  dispatch({ type: 'set_name', payload: name });
};

const setAmount = dispatch => amount => {
  dispatch({ type: 'set_amount', payload: amount })
};

const setTypes = dispatch => typesArr => {
  dispatch({ type: 'set_types', payload: typesArr });
};

const chooseOneItem = dispatch => (type, item) => {
  dispatch({ type: 'choose_one_item', payload: { type, item }});
};

const submitBudget = dispatch => () => {
  dispatch({ type: 'submit_budget' });
}

export const { Context, Provider } = createDataContext(
  budgetReducer,
  { setName, setAmount, setTypes, chooseOneItem, submitBudget },
  { name: '', amount: 0, selectedItems: {}, submitted: false }
);