import { combineReducers } from 'redux';
import { TokenReducer } from './token/tokenReducer';
import { UserReducer } from './user/userReducer';
import { LangReducer } from './language/langReducer';
import { themeReducer } from './theme/themeReducer';

export const rootReducer = combineReducers({
	token: TokenReducer,
	user: UserReducer,
	lang: LangReducer,
	theme: themeReducer
});
