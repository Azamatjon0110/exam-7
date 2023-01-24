import { GET_THEME, REMOVE_THEME } from './themeTypes';

export const getTheme = (theme) => {
	return {
		type: GET_THEME,
		payload: theme,
	};
};

export const removeTheme = () => {
	return {
		type: REMOVE_THEME,
		payload: '',
	};
};
