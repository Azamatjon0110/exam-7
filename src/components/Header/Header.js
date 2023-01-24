import React, { useEffect, useState } from 'react';
import {
	Avatar,
	Box,
	ButtonBase,
	IconButton,
	Link,
	Menu,
	MenuItem,
	Tooltip,
} from '@mui/material';

import { NavLink, Link as RouterLink, useNavigate } from 'react-router-dom';
import Arr from '../../assets/images/arr.svg';
import { Language } from '../../Language/Language';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, removeUser } from '../../redux/user/userAction';
import { ImgHeader } from '../ProfilPage/ProfilePage.style';
import { removeToken } from '../../redux/token/tokenAction';

export const Header = () => {
	const state = useSelector((state) => state);
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

	const Token = state.token.token;
	const lang = state.lang.lang;
	const user = state.user.user;
	const theme = JSON.parse(localStorage.getItem('theme'));

	useEffect(() => {
		axios
			.get('http://localhost:5000/user/me', {
				headers: {
					Authorization: Token,
				},
			})
			.then((res) => {
				dispatch(getUser(res.data));
				localStorage.setItem('user', JSON.stringify(res.data));
			})
			.catch((err) => console.log(err));
	}, []);

	return (
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
						textDecoration: 'none',
					})}
					to='/'
				>
					{Language[lang].header.HeaderHome}
				</NavLink>
				<NavLink
					style={(isActive) => ({
						marginRight: '33px',
						opacity: 0.6,
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
	);
};
