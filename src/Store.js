import { createStore, combineReducers } from "redux"

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};


function customerReducer (state = initialStateCustomer, action) {

  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      }
      case "customer/updateName":
        return { ...state, fullName: action.payload };
      default:
        return state;
  }
}


function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      // LATER
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);


store.dispatch({ type: "account/deposit", payload: 500 });
console.log(store.getState());

store.dispatch({
  type: "customer/createCustomer",
  payload: {
    fullName: "John Doe",
    nationalID: "123456789",
    createdAt: new Date().toISOString(),
  },
});
console.log(store.getState());


export default Store;