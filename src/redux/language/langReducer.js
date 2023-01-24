import { GET_LANGUAGE, REMOVE_LANGUAGE } from './langTypes';

const initialState = {
	lang: localStorage.getItem('lang') || '',
};
console.log(initialState.lang);
export const LangReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LANGUAGE:
			return {
				...state,
				lang: (state.lang = action.payload),
			};

		case REMOVE_LANGUAGE:
			return {
				...state,
				lang: (state.lang = action.payload),
			};

		default:
			return state;
	}
};
