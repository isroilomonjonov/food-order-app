const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const updatedTotalPrice =
        state.totalPrice + action.item.price * action.item.count;
      const existingItemIndex = state.items.findIndex(
        i => i.id === action.item.id
      );

      const existingItem = state.items[existingItemIndex];
      let updatedItems;
      if (existingItem) {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...existingItem,
          count: existingItem.count + action.item.count,
        };
      } else {
        updatedItems = [...state.items, action.item];
      }

      return { items: updatedItems, totalPrice: updatedTotalPrice };
    case "REMOVE":
      const itemIndex = state.items.findIndex(i => action.id === i.id);
      const item = state.items[itemIndex];

      let updatedItemsOnRemove;
      if (item.count === 1) {
        updatedItemsOnRemove = state.items.filter(i => i.id !== action.id);
      } else {
        updatedItemsOnRemove = [...state.items];
        updatedItemsOnRemove[itemIndex] = { ...item, count: item.count - 1 };
      }

      const updatedTotalPriceOnRemove = state.totalPrice - item.price;

      return {
        items: updatedItemsOnRemove,
        totalPrice: updatedTotalPriceOnRemove,
      };
    default:
      return state;
  }
};

export const a = "sfgsdf";
export const b = "sfgsdf";
export const c = "sfgsdf";
export const d = "sfgsdf";


export default cartReducer;
