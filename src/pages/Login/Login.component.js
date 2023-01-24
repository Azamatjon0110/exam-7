import { Box, Link } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { GlobalStyled } from '../../App.style';
import { Language } from '../../Language/Language';
import { getToken } from '../../redux/token/tokenAction';
import './Login.style';
import {
	BtnBox,
	LogBgImg,
	LogBtn,
	LogInput,
	LoginTitle,
	LogText,
} from './Login.style';
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.min.css';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
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
	const lang = state.lang.lang;
	const theme = state.theme.theme;
	const { reset, handleSubmit, success, register } = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const navigate = useNavigate();
	const submit = (data) => {
		axios
			.post('http://localhost:5000/user/login', {
				email: data.email,
				password: data.password,
			})
			.then((res) => {
				if (res.status === 201) {
					dispatch(getToken(res.data.token));
					localStorage.setItem('token', res.data.token);
					navigate('/');
					success();
					reset();
				}
			})
			.catch((err) => {
				console.log(err);
				error();
			});
	};
	return (
		<Box
			sx={{
				display: 'flex',
				height: 'auto',
				bgcolor: theme ? '#191919' : '#fff',
			}}
		>
			<GlobalStyled />
			<LogBgImg></LogBgImg>
			<Box sx={{ width: '55%', paddingY: '191px' }}>
				<Box sx={{ width: '100%', maxWidth: '330px', marginX: 'auto' }}>
					<LoginTitle variantColor={theme}>
						{Language[lang].login.LoginTiTle}
					</LoginTitle>
					<LogText variantColor={theme}>
						{Language[lang].login.LoginText}{' '}
						<Link
							sx={{ textDecoration: 'none' }}
							component={RouterLink}
							to={'/register'}
						>
							{Language[lang].login.LoginLink}
						</Link>
					</LogText>
					<form onSubmit={handleSubmit(submit)}>
						<LogInput
							variantColor={theme}
							placeholder={Language[lang].login.LoginEmail}
							type='email'
							{...register('email', { required: 'true' })}
						/>
						<LogInput
							variantColor={theme}
							placeholder={Language[lang].login.LoginPassword}
							type='password'
							{...register('password', { required: 'true' })}
						/>
						<BtnBox>
							<LogBtn variantColor={theme} type='submit'>
								{Language[lang].login.LoginButton}
							</LogBtn>
						</BtnBox>
					</form>
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
		</Box>
	);
};
