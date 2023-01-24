import { GET_THEME, REMOVE_THEME } from './themeTypes';

const initialState = {
	theme: localStorage.getItem('theme') || '',
};
console.log(initialState.theme);
export const themeReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_THEME:
			return {
				...state,
				theme: (state.theme = action.payload),
			};

		case REMOVE_THEME:
			return {
				...state,
				theme: (state.theme = action.payload),
			};

		default:
			return state;
	}
};
