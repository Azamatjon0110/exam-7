import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { GlobalStyled } from './App.style';
import { SinglePage } from './pages/SinglePage/SinglePage.component';
import { AddAuthor } from './pages/AddAuthor/AddAuthor.component';
import { AddBook } from './pages/AddBook/AddBook.component';
import { Home } from './pages/Home/Home.component';
import { Login } from './pages/Login/Login.component';
import { Profil } from './pages/Profil/Profil.component';
import { Register } from './pages/Register/Register.component';
import { Books } from './pages/Books/Books.component';
import { SingleBook } from './pages/SinglePageBook/SingleBook.component';
// import { useSelector } from 'react-redux';

function App() {
	// const navigate = useNavigate();
	// const state = useSelector((state) => state);
	// const Token = state.token.token;
	// if (Token) {
	// 	navigate('/');
	// } else {
	// 	navigate('/login');
	// }
	return (
		<>
			<GlobalStyled />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/books' element={<Books />} />
				<Route path='/addbook' element={<AddBook />} />
				<Route path='/profil/*' element={<Profil />} />
				<Route path='/addAuthor' element={<AddAuthor />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/single/:id' element={<SinglePage />} />
				<Route path='/singlebook/:id' element={<SingleBook />} />
			</Routes>
		</>
	);
}

export default App;
