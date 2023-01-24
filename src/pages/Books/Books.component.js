import {
	Avatar,
	Box,
	ButtonBase,
	IconButton,
	InputBase,
	Link,
	Menu,
	MenuItem,
	Tooltip,
	Typography,
} from '@mui/material';
import axios from 'axios';
import Arr from '../../assets/images/arr.svg';
import React, { useEffect, useState } from 'react';
import { NavLink, Link as RouterLink, useNavigate } from 'react-router-dom';
import SimpleSlider from '../../components/Carusel/Carusel';
import { Language } from '../../Language/Language';
import { BtnBase, Wrap } from './Books.style';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { removeUser } from '../../redux/user/userAction';
import { removeToken } from '../../redux/token/tokenAction';
import { ImgHeader } from '../../components/ProfilPage/ProfilePage.style';
import { SingleCard } from '../../components/SingleCard/SingleCard.component';

export const Books = () => {
	const state = useSelector((state) => state);

	const [genre, setGenre] = useState([]);
	const [book, setBook] = useState([]);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { register, handleSubmit } = useForm();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const lang = state.lang.lang;
	const user = state.user.user;
	const theme = JSON.parse(localStorage.getItem('theme'));
	const getGenre = () => {
		axios
			.get('http://localhost:5000/genre')
			.then((res) => setGenre(res.data))
			.catch((err) => console.log(err));
	};

	const search = (data) => {
		const formData = new FormData();
		formData.append('book', data.book);
		axios
			.get(`http://localhost:5000/book/search?book=${data.book}`, formData)
			.then((res) => setBook(res.data))
			.then((err) => console.log(err));
	};

	const getBook = (id = 1) => {
		axios
			.get(`http://localhost:5000/book/genreId/${id}`)
			.then((res) => setBook(res.data))
			.then((err) => console.log(err));
	};

	useEffect(() => {
		getGenre();
		getBook();
	}, []);

	return (
		<Box
			sx={{
				paddingX: '100px',
				paddingBottom: '138px',
				bgcolor: theme ? '#191919' : '#fff',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					paddingY: '27px',
				}}
			>
				<Link
					sx={{
						fontSize: '25px',
						lineHeight: '38px',
						color: '#D1B89D',
						cursor: 'pointer',
						textDecoration: 'none',
					}}
					component={RouterLink}
					to='/'
				>
					Badiiyat
				</Link>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<NavLink
						style={() => ({
							marginRight: '42px',
							fontSize: '16px',
							lineHeight: '144.4%',
							color: theme ? '#fff' : '#0D0D0D',
							opacity: 0.6,
							textDecoration: 'none',
						})}
						to='/'
					>
						{Language[lang].header.HeaderHome}
					</NavLink>
					<NavLink
						style={() => ({
							marginRight: '33px',
							opacity: 1,
							color: theme ? '#fff' : '#0D0D0D',
							textDecoration: 'none',
						})}
						to='/books'
					>
						{Language[lang].header.HeaderBook}
					</NavLink>
					<Box
						sx={{
							backgroundImage: `url(${Arr})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: '11px 7px',
							backgroundPosition: 'center right ',
						}}
					>
						<Tooltip title={Language[lang].header.HeaderMenuSettings}>
							<IconButton
								onClick={handleClick}
								size='small'
								sx={{ ml: 2 }}
								aria-controls={open ? 'account-menu' : undefined}
								aria-haspopup='true'
								aria-expanded={open ? 'true' : undefined}
							>
								{user.image ? (
									<ImgHeader src={`http://localhost:5000/${user.image}`} />
								) : (
									<Avatar sx={{ width: 49, height: 49, marginRight: '12px' }}>
										{user.first_name.charAt(0) + user.last_name.charAt(0)}
									</Avatar>
								)}
							</IconButton>
						</Tooltip>
						<Menu
							anchorEl={anchorEl}
							id='account-menu'
							open={open}
							onClose={handleClose}
							onClick={handleClose}
							PaperProps={{
								elevation: 0,
								sx: {
									paddingX: '24px',
									overflow: 'visible',
									marginTop: '8px',
									bgcolor: theme ? '#000' : '#f5f5f5',
									borderRadius: '10px',
								},
							}}
							transformOrigin={{ horizontal: 'right', vertical: 'top' }}
							anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
						>
							<MenuItem
								sx={{
									padding: '8px 0',
								}}
							>
								<Link
									sx={{
										fontWeight: 500,
										fontSize: '16px',
										lineHeight: '24px',
										color: theme ? '#fff' : '#0D0D0D',
										textDecoration: 'none',
									}}
									component={RouterLink}
									to='/profil'
								>
									{Language[lang].header.HeaderMenuProfil}
								</Link>
							</MenuItem>
							<MenuItem
								sx={{
									padding: '8px 0',
								}}
							>
								<Link
									sx={{
										fontWeight: 500,
										fontSize: '16px',
										lineHeight: '24px',
										color: theme ? '#fff' : '#0D0D0D',
										textDecoration: 'none',
									}}
									component={RouterLink}
									to='/addauthor'
								>
									{Language[lang].header.HeaderMenuAuthor}
								</Link>
							</MenuItem>

							<MenuItem
								sx={{
									padding: '8px 0',
								}}
							>
								<Link
									sx={{
										fontWeight: 500,
										fontSize: '16px',
										lineHeight: '24px',
										color: theme ? '#fff' : '#0D0D0D',
										textDecoration: 'none',
									}}
									component={RouterLink}
									to='/addbook'
								>
									{Language[lang].header.HeaderMenuBook}
								</Link>
							</MenuItem>

							<MenuItem
								sx={{
									padding: '8px 0',
									fontWeight: 500,
									fontSize: '16px',
									lineHeight: '24px',
									color: theme ? '#fff' : '#0D0D0D',
								}}
							>
								<ButtonBase
									onClick={() => {
										dispatch(removeUser('user'));
										dispatch(removeToken('token'));
										localStorage.removeItem('user');
										localStorage.removeItem('token');
										navigate('/login');
									}}
									sx={{
										fontWeight: 500,
										fontSize: '16px',
										lineHeight: '24px',
										color: theme ? '#fff' : '#0D0D0D',
										border: '1px solid transparent',
										bgcolor: 'transparent',
									}}
								>
									{Language[lang].header.HeaderMenuLogout}
								</ButtonBase>
							</MenuItem>
						</Menu>
					</Box>
				</Box>
			</Box>
			<Box sx={{ position: 'relative', marginBottom: '185px' }}>
				<SimpleSlider />
				<Wrap variant={theme}>
					<Typography
						sx={{
							marginBottom: '9px',
							fontSize: '32px',
							lineHeight: '48px',
							color: theme ? '#C9AC8C' : '#D1B89',
							textAlign: 'center',
						}}
						component='h3'
					>
						{Language[lang].heroForm.formTitle}
					</Typography>
					<form onSubmit={handleSubmit(search)}>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<InputBase
								sx={{
									width: '100%',
									marginRight: '14px',
									fontSize: '16px',
									lineHeight: '24px',
									paddingTop: '0',
									paddingBottom: '0',
									padding: '12px 27px',
									backgroundColor: theme === true ? '#404040' : '#F5F5F5',
									color: theme ? '#fff' : '#000',
									borderRadius: '15px',
								}}
								{...register('book')}
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
							onClick={() => {
								getBook(item.id);
							}}
							style={{
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
				{book.map((item) => (
					<SingleCard key={item.id} item={item} />
				))}
			</Box>
		</Box>
	);
};
