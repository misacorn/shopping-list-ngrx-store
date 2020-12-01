import { ShoppingActionTypes, ShoppingAction } from '../actions/shopping.actions';
import { ShoppingItem } from '../models/shopping-item.models';

const initialState: Array<ShoppingItem> = [
  {
    id: '1775935f-36fd-467e-a667-09f95b917f6d',
    name: 'Diet Coke',
  },
  {
    id: '1775935f-36fd-467e-a667-0i83275fjhk2',
    name: 'Berry Pepsi',
  }
];

export const ShoppingReducer = (state: Array<ShoppingItem> = initialState, action: ShoppingAction) => {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
};
