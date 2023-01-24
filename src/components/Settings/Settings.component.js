import React from 'react';
import {
	Typography,
	ButtonBase,
	FormLabel,
	Divider,
	Link,
} from '@mui/material';
import { Box } from '@mui/system';
import { Language } from '../../Language/Language';
import {
	CheckBox,
	CheckBoxLabel,
	CheckBoxWrapper,
	Label,
	Select,
} from './Settings.style';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getLang } from '../../redux/language/langAction';
import { getTheme } from '../../redux/theme/themeAction';

export const Settings = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);

	const tema = JSON.parse(localStorage.getItem('theme'));
	const { register, handleSubmit } = useForm();

	const changeLanguage = (data) => {
		console.log(data.theme);
		dispatch(getLang(data.language));
		localStorage.setItem('lang', data.language);
		localStorage.setItem('theme', JSON.stringify(data.theme));
		dispatch(getTheme(tema));
	};

	const lang = state.lang.lang;
	const theme = state.theme.theme;

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
								backgroundColor: theme ? ' #202020' : '#E5EAEE',
								border: theme ? '1px solid #8F9294' : '1px solid transparent',
								borderRadius: '4px',
								color: theme ? ' #8F9294' : '#464E5F',
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
							3
						</Box>
						<Typography
							sx={{
								fontWeight: 600,
								fontSize: '14px',
								lineHeight: '21px',
								color: '#464E5F',
							}}
						>
							{Language[lang].profil.secTitle}
						</Typography>
					</Box>
				</Link>
			</Box>
			<Box sx={{ bgcolor: theme ? '#191919' : '#fff' }}>
				<Box
					sx={{
						width: '50%',
						mx: 'auto',
						paddingTop: '150px',
						paddingBottom: '140px',
						bgcolor: theme ? '#191919' : '#fff',
					}}
				>
					<Box>
						<Typography
							sx={{
								fontStyle: 'normal',
								fontWeight: '500',
								fontSize: '18px',
								lineHeight: '27px',

								color: '#212121',
								marginBottom: '32px',
							}}
						>
							{Language[lang].profil.secTitle}
						</Typography>
					</Box>
					<form onSubmit={handleSubmit(changeLanguage)}>
						<Box sx={{ marginBottom: '44px' }}>
							<FormLabel
								sx={{
									display: 'block',
									marginBottom: '6px',
									fontSize: '13px',
									lineHeight: '20px',
									color: theme ? '#fff' : '#464E5F',
								}}
							>
								{Language[lang].profil.secLabel}
							</FormLabel>
							<Select
								{...register('language')}
								placeholder={Language[lang].profil.secLabel}
							>
								<option value='en'>{Language[lang].profil.eng}</option>
								<option value='uz'>{Language[lang].profil.uzb}</option>
								<option value='ru'>{Language[lang].profil.rus}</option>
							</Select>
							<Typography
								sx={{
									mb: 2,
									fontSize: '12px',
									lineHeight: '18px',
									color: theme ? '#fff' : '#B5B5C3',
									opacity: 0.8,
								}}
							>
								{Language[lang].profil.sectext}
							</Typography>

							<Label variant={theme}>{Language[lang].profil.theme}</Label>
							<CheckBoxWrapper>
								<CheckBox {...register('theme')} type='checkbox' id='theme' />
								<CheckBoxLabel for='theme' />
							</CheckBoxWrapper>
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
					</form>
				</Box>
			</Box>
		</>
	);
};
