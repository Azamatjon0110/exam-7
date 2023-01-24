import React from 'react';
import {
	Box,
	InputBase,
	Typography,
	FormLabel,
	ButtonBase,
	Link,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Language } from '../../Language/Language';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export const Security = () => {
	const state = useSelector((state) => state);
	const theme = JSON.parse(localStorage.getItem('theme'));
	const lang = state.lang.lang;
	const token = state.token.token;
	const { register, handleSubmit } = useForm();

	const submit = (data) => {
		const formData = new FormData();
		formData.append('email', data.email);
		formData.append('currentPassword', data.password);
		formData.append('email', data.newPassword);

		axios
			.put('http://localhost:5000/user/security', formData, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<>
			<Box sx={{ display: 'flex', alignItems: 'center' }}>
				<Link
					component={RouterLink}
					to='/profil'
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
							1
						</Box>
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: '14px',
								lineHeight: '21px',
								color: theme ? ' #8F9294' : '#464E5F',
							}}
						>
							{Language[lang].profil.title}
						</Typography>
					</Box>
				</Link>
				<Link
					component={RouterLink}
					to='/profil/settings'
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
							2
						</Box>
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: '14px',
								lineHeight: '21px',
								color: '#464E5F',
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
				<Box
					sx={{
						width: '50%',
						mx: 'auto',
						paddingTop: '70px',
						paddingBottom: '147px',
					}}
				>
					<Box>
						<Typography
							sx={{
								fontStyle: 'normal',
								fontWeight: '500',
								fontSize: '18px',
								lineHeight: '27px',
								color: theme ? '#fff' : '#212121',
								paddingBottom: '32px',
							}}
							component='h2'
						>
							Change Or Recover Your Password:
						</Typography>
					</Box>
					<form onSubmit={handleSubmit(submit)}>
						<Box
							sx={{
								marginBottom: '22px',
							}}
						>
							<FormLabel
								sx={{
									display: 'block',
									marginBottom: '6px',
									fontSize: '13px',
									lineHeight: '20px',
									color: theme ? '#fff' : '#464E5F',
								}}
							>
								{Language[lang].profil.email}
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
									{...register('email')}
									placeholder={Language[lang].profil.email}
								/>
							</FormLabel>

							<Typography
								sx={{
									mb: 2,
									fontSize: '12px',
									lineHeight: '18px',
									color: ' #B5B5C3',
									opacity: 0.8,
								}}
							>
								{Language[lang].profil.emailtext}
							</Typography>
						</Box>

						<FormLabel
							sx={{
								display: 'block',
								marginBottom: '6px',
								fontSize: '13px',
								lineHeight: '20px',
								color: theme ? '#fff' : '#464E5F',
							}}
						>
							{Language[lang].profil.password}
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
							type='password'
							{...register('password')}
							placeholder={Language[lang].profil.password}
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
							{Language[lang].profil.passwordtext}
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
							{Language[lang].profil.newpassword}
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
							type='password'
							{...register('newPassword')}
							placeholder={Language[lang].profil.newpassword}
						/>
						<Typography
							sx={{
								marginBottom: '89px',
								fontSize: '12px',
								lineHeight: '18px',
								color: ' #B5B5C3',
								opacity: 0.8,
							}}
						>
							{Language[lang].profil.newpasswordtext}
						</Typography>
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
					</form>
				</Box>
			</Box>
		</>
	);
};
