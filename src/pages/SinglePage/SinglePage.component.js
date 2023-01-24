import {
	Avatar,
	Box,
	ButtonBase,
	IconButton,
	Link,
	Menu,
	MenuItem,
	Tooltip,
	Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
	useParams,
	Link as RouterLink,
	NavLink,
	useNavigate,
} from 'react-router-dom';
import { Language } from '../../Language/Language';

import Arr from '../../assets/images/arr.svg';
import { Date, DateText, Img, Text, Title } from './Single.style';
import { SingleCard } from '../../components/SingleCard/SingleCard.component';
import { Wrap } from '../../components/SingleCard/SingleCard.style';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../redux/user/userAction';
import { removeToken } from '../../redux/token/tokenAction';
import { ImgHeader } from '../../components/ProfilPage/ProfilePage.style';

export const SinglePage = () => {
	const state = useSelector((state) => state);
	const [books, setBooks] = useState([]);
	const param = useParams();
	const [data, setData] = useState({});
	const lang = state.lang.lang;
	const user = state.user.user;
	const theme = state.theme.theme;
	const Token = state.token.token;

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const getBook = (id) => {
		axios
			.get(`http://localhost:5000/author/books/${id}`, {
				headers: {
					Authorization: Token,
				},
			})
			.then((res) => {
				console.log(res);
				setBooks(res.data);
			})
			.then((err) => console.log(err));
	};

	const getInfo = (id) => {
		axios
			.get(`http://localhost:5000/author/authorId/${id}`, {
				headers: {
					Authorization: Token,
				},
			})
			.then((res) => {
				// console.log(res);
				setData(res.data);
			})
			.then((err) => console.log(err));
	};

	useEffect(() => {
		getBook(param.id);
		getInfo(param.id);
	}, [param.id]);
	return (
		<Box
			sx={{
				paddingX: '100px',
				paddingBottom: '123px',
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
						style={(isActive) => ({
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
							color: theme ? '#fff' : '#0D0D0D',
							opacity: 0.6,
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
										color: theme ? ' #C9AC8C' : '#0D0D0D',
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
										color: theme ? ' #C9AC8C' : '#0D0D0D',
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
										color: theme ? ' #C9AC8C' : '#0D0D0D',
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
									color: theme ? ' #C9AC8C' : '#0D0D0D',
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
										color: theme ? ' #C9AC8C' : '#0D0D0D',
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
			<Box sx={{ display: 'flex', paddingTop: '14px', marginBottom: '100px' }}>
				<Img src={`http://localhost:5000/${data.image}`} />
				<Box sx={{ marginTop: '44px' }}>
					<Title variant={theme}>
						{data.first_name + ' ' + data.last_name}
					</Title>
					<Text variant={theme}>{data.bio}</Text>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Box>
							<DateText variant={theme}>
								{Language[lang].singlePage.birth}
							</DateText>
							<Date variant={theme}>{data.date_of_birth}</Date>
							<DateText variant={theme}>{data.country}</DateText>
						</Box>
						<Date variant={theme}>-</Date>
						<Box>
							<DateText variant={theme}>
								{Language[lang].singlePage.death}
							</DateText>
							<Date variant={theme}>{data.date_of_death}</Date>
							<DateText variant={theme}>{data.country}</DateText>
						</Box>
					</Box>
				</Box>
			</Box>
			<Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<Typography
						sx={{
							margin: 0,
							fontSize: '31px',
							lineHeight: '46px',
							color: '#D1B89D',
						}}
						component='h4'
					>
						{Language[lang].singlePage.title}
					</Typography>
					<Link
						sx={{ color: theme ? '#fff' : '#0D0D0D', textDecoration: 'none' }}
						component={RouterLink}
						to='/books'
					>
						{Language[lang].singlePage.link}
					</Link>
				</Box>
				{books.length !== 0 ? (
					<Wrap>
						{books.map((item) => (
							<SingleCard item={item} />
						))}
					</Wrap>
				) : (
					'No books'
				)}
			</Box>
		</Box>
	);
};
