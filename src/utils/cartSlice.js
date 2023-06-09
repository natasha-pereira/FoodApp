import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			state.items.push(action.payload);
		},
		clearCart: (state) => {
			state.items = [];
		},
		removeItem: (state, action) => {
			state.items = state.items.filter((item) => item !== action.payload);
		},
	},
});

export const { addItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
