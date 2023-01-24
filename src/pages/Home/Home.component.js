import { Box, ButtonBase, InputBase, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CardAll } from '../../components/CardAll/CardAll.component';
import SimpleSlider from '../../components/Carusel/Carusel';
import { Header } from '../../components/Header/Header';
import { Language } from '../../Language/Language';
import { BtnBase, Wrap } from './Home.style';

export const Home = () => {
	const state = useSelector((state) => state);
	// const navigate = useNavigate();
	// const Token = state.token.token;
	// if (!Token) {
	// 	navigate('/login');
	// }

	const { register, handleSubmit } = useForm();

	const [genre, setGenre] = useState([]);
	const [auth, setAuth] = useState([]);
	let lang = state.lang.lang;
	let theme = state.theme.theme;

	const search = (data) => {
		const formData = new FormData();
		formData.append('author', data.author);
		axios
			.get(
				`http://localhost:5000/author/search?author=${data.author}`,
				formData
			)
			.then((res) => setAuth(res.data))
			.then((err) => console.log(err));
	};
	const getGenre = () => {
		axios
			.get('http://localhost:5000/genre')
			.then((res) => setGenre(res.data))
			.catch((err) => console.log(err));
	};

	const getAuthor = (id = 1) => {
		axios
			.get(`http://localhost:5000/author/genreId/${id}`)
			.then((res) => setAuth(res.data))
			.then((err) => console.log(err));
	};

	useEffect(() => {
		getGenre();
		getAuthor();
	}, []);

	return (
		<Box
			sx={{
				paddingX: '100px',
				paddingBottom: '138px',
				bgcolor: theme ? '#191919' : '#fff',
			}}
		>
			<Header />
			<Box
				sx={{
					position: 'relative',
					marginBottom: '185px',
				}}
			>
				<SimpleSlider />
				<Wrap variantColor={theme}>
					<Typography
						sx={{
							marginBottom: '9px',
							fontSize: '32px',
							lineHeight: '48px',
							color: '#C9AC8C',
							textAlign: 'center',
						}}
						variant='h3'
					>
						{Language[lang].heroForm.formTitle}
					</Typography>
					<form onSubmit={handleSubmit(search)}>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<InputBase
								{...register('author')}
								sx={{
									width: '100%',
									marginRight: '14px',
									fontSize: '16px',
									lineHeight: '24px',
									paddingTop: '0',
									paddingBottom: '0',
									padding: '12px 27px',
									backgroundColor: theme ? '#404040' : '#F5F5F5',
									color: theme ? '#fff' : '#000',
									borderRadius: '15px',
								}}
								placeholder={Language[lang].heroForm.formPlaceholder}
							/>
							<BtnBase type='submit' variant={theme}>
								{Language[lang].heroForm.formBtn}
							</BtnBase>
						</Box>
					</form>
				</Wrap>
			</Box>
			<Box sx={{ marginBottom: '40px' }}>
				<Typography
					sx={{
						marginBottom: '22px',
						fontSize: '32px',
						lineHeight: '48px',
						color: '#C9AC8C',
						textAlign: 'center',
					}}
					component='h3'
				>
					{Language[lang].genres.title}
				</Typography>
				<Box
					sx={{
						width: '100%',
						maxWidth: '715px',
						marginX: 'auto',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					{genre.map((item) => (
						<ButtonBase
							onClick={() => getAuthor(item.id)}
							sx={{
								fontSize: '18px',
								lineHeight: '27px',
								color: theme
									? 'rgba(255, 255, 255, 0.6)'
									: 'rgba(13, 13, 13, 0.6)',
								textDecoration: 'none',
							}}
							key={item.id}
						>
							{item.name}
						</ButtonBase>
					))}
				</Box>
			</Box>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					flexWrap: 'wrap',
				}}
			>
				{auth.map((item) => (
					<CardAll key={item} item={item} />
				))}
			</Box>
		</Box>
	);
};
