export const initialState = {
	basket: [],
};

//Selector
export const getBasketTotal = (basket) =>
	basket?.reduce(
		(acumPrice, CurrentValue) => CurrentValue.price + acumPrice,
		0
	);

const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case "REMOVE":
			//Returns the firs index that satisfies, or -1 if nothing satisfies
			const index = state.basket.findIndex((item) => item.id === action.id);
			let newBasket = [...state.basket];

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(`Can not remove item: ${action.id}`);
			}
			return {
				...state,
				basket: newBasket,
			};
		default:
			return state;
	}
};

export default reducer;
