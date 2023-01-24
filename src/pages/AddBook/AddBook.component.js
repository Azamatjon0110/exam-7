import { Box, ButtonBase, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import './AddBook.style';
import AddIcon from '@mui/icons-material/Add';
import { Language } from '../../Language/Language';
import {
	AddBookGenre,
	AddBookGenreOptionTmD,
	InputBase,
	Label,
	TextArea,
} from './AddBook.style';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

export const AddBook = () => {
	const state = useSelector((state) => state);
	const theme = JSON.parse(localStorage.getItem('theme'));
	const lang = state.lang.lang;
	const Token = state.token.token;
	const [genre, setGenre] = useState([]);
	const [genreAuth, setGenreAuth] = useState([]);

	const { reset, handleSubmit, success, register } = useForm({
		defaultValues: {
			image: '',
			title: '',
			page: '',
			year: '',
			price: '',
			genre_id: '',
			author_id: '',
			description: '',
		},
	});

	const submit = (data) => {
		console.log(data);
		const formData = new FormData();
		formData.append('image', data.image[0]);
		formData.append('title', data.title);
		formData.append('page', data.page);
		formData.append('year', data.year);
		formData.append('price', data.price);
		formData.append('genre_id', data.genre);
		formData.append('author_id', data.author);
		formData.append('description', data.description);
		axios
			.post(`http://localhost:5000/book`, formData, {
				headers: {
					Authorization: Token,
				},
			})
			.then((res) => {
				reset();
			})
			.catch((err) => console.log(err));
	};

	const getGenre = () => {
		axios
			.get('http://localhost:5000/genre')
			.then((res) => setGenre(res.data))
			.catch((err) => console.log(err));
	};

	const authGet = (id) => {
		axios
			.get(`http://localhost:5000/author/genreId/${id.target.value}`)
			.then((res) => {
				setGenreAuth(res.data);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getGenre();
	}, []);
	return (
		<form onSubmit={handleSubmit(submit)}>
			<Box sx={{ display: 'flex' }}>
				<Box
					sx={{
						width: '50vw',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						bgcolor: theme ? '#1B1B1B' : '#F4F4F4',
						height: '109vh',
					}}
				>
					<Label variant={theme}>
						<TextField
							className='visually-hidden'
							type='file'
							{...register('image', { required: 'true' })}
						/>
						<Box
							sx={{
								width: '159px',
								marginX: 'auto',
								marginTop: '161px',
								textAlign: 'center',
							}}
						>
							<AddIcon
								sx={{
									width: '62px',
									height: '62px',
									color: '#000000',
									opacity: 0.3,
								}}
							/>
							<Typography
								sx={{
									fontSize: '12px',
									lineHeight: '18px',
									color: '#000000',
									opacity: 0.3,
								}}
								component='p'
							>
								{Language[lang].book.file}
							</Typography>
						</Box>
					</Label>
				</Box>
				<Box
					sx={{
						width: '50vw',
						height: '100%',
						padding: '48px 123px',
						bgcolor: theme ? '#1B1B1B' : '#fff',
					}}
				>
					<Box sx={{ width: '100%', maxWidth: '430px', marginX: 'auto' }}>
						<Typography
							sx={{
								marginBottom: '12px',
								fontWeight: 600,
								fontSize: '32px',
								lineHeight: '48px',
								color: theme ? '#fff' : '#000000',
							}}
						>
							{Language[lang].book.title}
						</Typography>
						<InputBase
							variant={theme}
							placeholder={Language[lang].book.name}
							{...register('title', { required: 'true' })}
						/>
						<InputBase
							variant={theme}
							placeholder={Language[lang].book.pages}
							type='number'
							{...register('page', { required: 'true' })}
						/>
						<InputBase
							variant={theme}
							placeholder={Language[lang].book.Year}
							type='number'
							{...register('year', { required: 'true' })}
						/>
						<InputBase
							variant={theme}
							placeholder={Language[lang].book.Price}
							type='number'
							{...register('price', { required: 'true' })}
						/>
						<AddBookGenre
							{...register('genre', { required: true })}
							onChange={authGet}
						>
							<option hidden selected>
								Genre
							</option>
							{genre.map((item) => (
								<AddBookGenreOptionTmD value={item.id} key={item.id}>
									{item.name}
								</AddBookGenreOptionTmD>
							))}
						</AddBookGenre>

						<AddBookGenre {...register('author', { required: true })}>
							<option hidden selected>
								Author
							</option>
							{genreAuth.map((item) => (
								<AddBookGenreOptionTmD value={item.id} key={item.id}>
									{item.first_name + ' ' + item.last_name}
								</AddBookGenreOptionTmD>
							))}
						</AddBookGenre>

						<TextArea
							variant={theme}
							sx={{
								width: '100%',
								marginBottom: '44px',
								padding: '13px 22px',
								border: ' 1px solid #B4B4BB',
								borderRadius: ' 10px',
							}}
							placeholder={Language[lang].book.bio}
							{...register('description', { required: 'true' })}
						/>
						<ButtonBase
							variant={theme}
							sx={{
								width: '100%',
								padding: '5px 20px',
								fontWeight: 500,
								fontSize: '18px',
								lineHeight: '36px',
								color: theme ? '#152540' : '#fff',
								bgcolor: theme ? '#fff' : '#152540',
								borderRadius: '99px',
							}}
							type='submit'
						>
							{Language[lang].book.btn}
						</ButtonBase>
					</Box>
				</Box>
			</Box>
		</form>
	);
};
