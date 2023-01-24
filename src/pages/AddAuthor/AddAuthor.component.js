import { Box, ButtonBase, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AddAuthor.style';
import AddIcon from '@mui/icons-material/Add';
import { Language } from '../../Language/Language';
import { InputBase, Label, Option, Select, TextArea } from './AddAuthor.style';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.min.css';
import { useSelector } from 'react-redux';

export const AddAuthor = () => {
	const state = useSelector((state) => state);
	const { reset, handleSubmit, register } = useForm({
		defaultValues: {
			image: '',
			first_name: '',
			last_name: '',
			date_of_birth: '',
			date_of_death: '',
			country: '',
			bio: '',
			genre_id: '',
			desc: '',
		},
	});
	const lang = state.lang.lang;

	const theme = JSON.parse(localStorage.getItem('theme'));
	const Token = state.token.token;
	const [genre, setGenre] = useState([]);
	const error = () =>
		toast.error('🦄 Error', {
			position: 'bottom-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});

	const submit = (data) => {
		const formData = new FormData();
		formData.append('image', data.image[0]);
		formData.append('first_name', data.first_name);
		formData.append('last_name', data.last_name);
		formData.append('date_of_birth', data.date_of_birth);
		formData.append('date_of_death', data.date_of_death);
		formData.append('country', data.country);
		formData.append('bio', data.bio);
		formData.append('genre_id', data.genre_id);

		axios
			.post('http://localhost:5000/author', formData, {
				headers: {
					Authorization: Token,
				},
			})
			.then((res) => {
				reset();
				console.log(res.data);
			})
			.catch((err) => {
				error();
				console.log(err);
			});
	};
	const getGenre = () => {
		axios
			.get('http://localhost:5000/genre')
			.then((res) => setGenre(res.data))
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
						bgcolor: theme ? '#1b1b1b' : '#F4F4F4',
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
								{Language[lang].author.file}
							</Typography>
						</Box>
					</Label>
				</Box>
				<Box
					sx={{
						width: '50vw',
						height: '100%',
						padding: '48px 123px',
						bgcolor: theme ? '#191919' : '#fff',
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
							{Language[lang].author.title}
						</Typography>
						<InputBase
							variant={theme}
							placeholder={Language[lang].author.authName}
							{...register('first_name', { required: 'true' })}
						/>
						<InputBase
							variant={theme}
							placeholder={Language[lang].author.authSurname}
							{...register('last_name', { required: 'true' })}
						/>
						<InputBase
							variant={theme}
							placeholder={Language[lang].author.birthDate}
							{...register('date_of_birth', { required: 'true' })}
							type='number'
						/>
						<InputBase
							variant={theme}
							placeholder={Language[lang].author.deathDate}
							{...register('date_of_death')}
							type='number'
						/>
						<InputBase
							variant={theme}
							placeholder={Language[lang].author.country}
							{...register('country', { required: 'true' })}
						/>
						<Select
							variant={theme}
							{...register('genre_id', { required: 'true' })}
						>
							{genre.map((item) => (
								<Option variant={theme} value={item.id} key={item.id}>
									{item.name}
								</Option>
							))}
						</Select>
						<TextArea
							{...register('bio', { required: 'true' })}
							sx={{
								width: '100%',
								marginBottom: '44px',
								padding: '13px 22px',
								border: ' 1px solid #B4B4BB',
								borderRadius: ' 10px',
							}}
							variant={theme}
							placeholder={Language[lang].author.bio}
						/>
						<ButtonBase
							variant={theme}
							sx={{
								width: '100%',
								padding: '5px 20px',
								fontWeight: 500,
								fontSize: '18px',
								lineHeight: '36px',
								color: theme ? ' #152540' : '#fff',
								bgcolor: theme ? '#fff' : ' #152540',
								borderRadius: '99px',
							}}
							type='submit'
						>
							{Language[lang].author.btn}
						</ButtonBase>
					</Box>
				</Box>
			</Box>
			<ToastContainer
				position='bottom-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
			/>
		</form>
	);
};
