import {
	Avatar,
	Box,
	ButtonBase,
	Divider,
	FormLabel,
	InputBase,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Language } from '../../Language/Language';
import { getUser } from '../../redux/user/userAction';
import { Img, Label } from './ProfilePage.style';

export const ProfilPage = () => {
	const state = useSelector((state) => state);

	const user = state.user.user;
	const lang = state.lang.lang;
	const token = state.token.token;
	const theme = JSON.parse(localStorage.getItem('theme'));
	console.log(user);
	const { register, handleSubmit } = useForm({
		defaultValues: {
			image: '',
			first_name: '',
			last_name: '',
			phone: '',
		},
	});

	const submit = (data) => {
		const formData = new FormData();
		formData.append('image', data.image[0]);
		formData.append('first_name', data.first_name);
		formData.append('last_name', data.last_name);
		formData.append('phone', data.phone);

		axios
			.put('http://localhost:5000/user/account', formData, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		getUser();
	}, []);

	return (
		<>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Link
					component={RouterLink}
					to='/profil'
					sx={{
						width: '100%',
						padding: '23px',
						backgroundColor: theme ? '#fff' : '  #DDE6F5',
						borderRadius: '4px 4px 0px 0px',
						textDecoration: 'none',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: '35px',
								height: '35px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								marginRight: '9px',
								backgroundColor: theme ? '#000' : '#152540',
								borderRadius: '4px',
								color: '#fff',
							}}
						>
							1
						</Box>
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: '14px',
								lineHeight: '21px',
								color: '#464E5F',
							}}
						>
							{Language[lang].profil.title}
						</Typography>
					</Box>
				</Link>
				<Link
					component={RouterLink}
					to='/profil/security'
					sx={{
						width: '100%',
						padding: '23px',
						backgroundColor: theme ? ' #202020' : ' #F3F6F9',
						borderRadius: '4px 4px 0px 0px',
						textDecoration: 'none',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: '35px',
								height: '35px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								marginRight: '9px',
								borderRadius: '4px',
								color: theme ? ' #8F9294' : ' #3699FF',
								backgroundColor: theme ? ' #202020' : '#E5EAEE',
								border: theme ? '1px solid #8F9294' : '1px solid transparent',
							}}
						>
							2
						</Box>
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: '14px',
								lineHeight: '21px',
								color: theme ? ' #8F9294' : '#464E5F',
							}}
						>
							{Language[lang].profil.security}
						</Typography>
					</Box>
				</Link>

				<Link
					component={RouterLink}
					to='/profil/settings'
					sx={{
						width: '100%',
						padding: '23px',
						backgroundColor: theme ? ' #202020' : ' #F3F6F9',
						borderRadius: '4px 4px 0px 0px',
						textDecoration: 'none',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								width: '35px',
								height: '35px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								marginRight: '9px',
								backgroundColor: theme ? ' #202020' : '#E5EAEE',
								border: theme ? '1px solid #8F9294' : '1px solid transparent',
								borderRadius: '4px',
								color: theme ? ' #8F9294' : '#464E5F',
							}}
						>
							3
						</Box>
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: '14px',
								lineHeight: '21px',
								color: theme ? ' #8F9294' : '#464E5F',
							}}
						>
							{Language[lang].profil.secTitle}
						</Typography>
					</Box>
				</Link>
			</Box>
			<Box sx={{ width: '100%', bgcolor: theme ? '#191919' : '#fff' }}>
				<form onSubmit={handleSubmit(submit)}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							paddingY: '104px',
							width: '100%',
							maxWidth: '1100px',
							marginX: 'auto',
						}}
					>
						<Box sx={{ position: 'relative' }}>
							{user.image ? (
								<Img src={`http://localhost:5000/${user.image}`} />
							) : (
								<Avatar sx={{ width: '175px', height: '175px' }} />
							)}

							<Label variant={theme}>
								<TextField
									className='visually-hidden'
									type='file'
									{...register('image', { required: true })}
								/>
							</Label>
						</Box>
						<Box
							sx={{
								marginTop: '43px',
								width: '100%',
								maxWidth: '810px',
							}}
						>
							<Box sx={{ marginBottom: '44px' }}>
								<Typography
									sx={{
										marginBottom: '32px',
										fontWeight: 500,
										fontSize: '18px',
										lineHeight: '27px',
										color: theme ? '#fff' : ' #212121',
									}}
									component='h3'
								>
									{Language[lang].profil.pageTitle}
								</Typography>
								<FormLabel
									sx={{
										display: 'block',
										marginBottom: '6px',
										fontSize: '13px',
										lineHeight: '20px',
										color: theme ? '#fff' : '#464E5F',
									}}
								>
									{Language[lang].profil.nameLabel}
								</FormLabel>
								<InputBase
									sx={{
										width: '100%',
										marginBottom: '3px',
										padding: '12px 20px ',
										fontSize: '14px',
										lineHeight: '21px',
										bgcolor: '#f3f6f9',
										border: '1px solid transparent',
										borderRadius: '4px',
									}}
									value={user.first_name}
									{...register('first_name', { required: true })}
									placeholder={Language[lang].profil.nameLabel}
								/>
								<Typography
									sx={{
										mb: 2,
										fontSize: '12px',
										lineHeight: '18px',
										color: ' #B5B5C3',
										opacity: 0.8,
									}}
								>
									{Language[lang].profil.nametext}
								</Typography>
								<FormLabel
									sx={{
										display: 'block',
										marginBottom: '6px',
										fontSize: '13px',
										lineHeight: '20px',
										color: theme ? '#fff' : '#464E5F',
									}}
								>
									{Language[lang].profil.surname}
								</FormLabel>
								<InputBase
									sx={{
										width: '100%',
										marginBottom: '3px',
										padding: '12px 20px ',
										fontSize: '14px',
										lineHeight: '21px',
										bgcolor: '#f3f6f9',
										border: '1px solid transparent',
										borderRadius: '4px',
									}}
									value={user.last_name}
									{...register('last_name', { required: true })}
									placeholder={Language[lang].profil.surname}
								/>
								<Typography
									sx={{
										mb: 2,
										fontSize: '12px',
										lineHeight: '18px',
										color: ' #B5B5C3',
										opacity: 0.8,
									}}
								>
									{Language[lang].profil.surnametext}
								</Typography>
								<FormLabel
									sx={{
										display: 'block',
										marginBottom: '6px',
										fontSize: '13px',
										lineHeight: '20px',
										color: theme ? '#fff' : '#464E5F',
									}}
								>
									{Language[lang].profil.phone}
								</FormLabel>
								<InputBase
									sx={{
										width: '50%',
										marginBottom: '3px',
										padding: '12px 20px ',
										fontSize: '14px',
										lineHeight: '21px',
										bgcolor: '#f3f6f9',
										border: '1px solid transparent',
										borderRadius: '4px',
									}}
									type='tel'
									value={user.phone}
									{...register('phone', { required: true })}
									placeholder={Language[lang].profil.phone}
								/>
								<Typography
									sx={{
										mb: 3,
										fontSize: '12px',
										lineHeight: '18px',
										color: ' #B5B5C3',
										opacity: 0.8,
									}}
								>
									{Language[lang].profil.phonetext}
								</Typography>
								<Divider sx={{ bgcolor: ' #ECF0F3' }} />
							</Box>
							<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
								<ButtonBase
									sx={{
										padding: '12px 20px 11px 26px',
										borderRadius: '4px',
										fontSize: '13px',
										lineHeight: '20px',
										color: theme ? ' #000' : '#fff',
										bgcolor: theme ? '#fff' : '#152540',
										textDecoration: 'none',
									}}
									type='submit'
								>
									{Language[lang].profil.btn}
								</ButtonBase>
							</Box>
						</Box>
					</Box>
				</form>
			</Box>
		</>
	);
};
