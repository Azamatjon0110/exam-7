import { Box, Link } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { GlobalStyled } from '../../App.style';
import { Language } from '../../Language/Language';
import './Register.style';
import {
	BtnBox,
	RegBgImg,
	RegBtn,
	RegInput,
	RegisterTitle,
	RegText,
} from './Register.style';

import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../../redux/token/tokenAction';

export const Register = () => {
	const state = useSelector((state) => state);

	const dispatch = useDispatch();
	const lang = state.lang.lang;
	const theme = state.theme.theme;
	const navigate = useNavigate();
	const { reset, handleSubmit, success, register } = useForm({
		first_name: '',
		last_name: '',
		phone: '',
		email: '',
		password: '',
	});
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
		console.log(data);
		axios
			.post('http://localhost:5000/user/register', {
				first_name: data.first_name,
				last_name: data.last_name,
				phone: data.phone,
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
			<RegBgImg></RegBgImg>
			<Box sx={{ width: '55%', paddingY: '75px' }}>
				<Box sx={{ width: '100%', maxWidth: '330px', marginX: 'auto' }}>
					<RegisterTitle variant={theme}>
						{Language[lang].register.RegisterTiTle}
					</RegisterTitle>
					<RegText variant={theme}>
						{Language[lang].register.RegisterText}{' '}
						<Link
							sx={{ textDecoration: 'none' }}
							component={RouterLink}
							to={'/login'}
						>
							{Language[lang].register.RegisterLink}
						</Link>
					</RegText>
					<form onSubmit={handleSubmit(submit)}>
						<RegInput
							variant={theme}
							placeholder={Language[lang].register.RegInputName}
							type='text'
							{...register('first_name', { required: 'true' })}
						/>
						<RegInput
							variant={theme}
							placeholder={Language[lang].register.RegInputSurname}
							type='text'
							{...register('last_name', { required: 'true' })}
						/>
						<RegInput
							variant={theme}
							placeholder={Language[lang].register.RegInputPhone}
							type='tel'
							{...register('phone', { required: 'true' })}
						/>
						<RegInput
							variant={theme}
							placeholder={Language[lang].register.RegInputEmail}
							type='email'
							{...register('email', { required: 'true' })}
						/>
						<RegInput
							variant={theme}
							placeholder={Language[lang].register.RegInputPassword}
							type='password'
							{...register('password', { required: 'true' })}
						/>
						<BtnBox>
							<RegBtn variant={theme} type='submit'>
								{Language[lang].register.RegInputButton}
							</RegBtn>
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
