import { Box, Link, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Img } from './SingleCard.style';

export const SingleCard = ({ item }) => {
	const state = useSelector((state) => state);
	const authorId = item.author_id;
	const [auth, setAuth] = useState({});
	const token = state.token.token;

	const theme = JSON.parse(localStorage.getItem('theme'));

	useEffect(() => {
		axios
			.get(`http://localhost:5000/author/authorId/${authorId}`, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				console.log(res);
				setAuth(res.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<Link
			sx={{ textDecoration: 'none', color: '#000' }}
			component={RouterLink}
			to={`/singlebook/${item.id}`}
		>
			<Box sx={{ width: '190px', marginRight: '20px' }}>
				<Img src={`http://localhost:5000/${item.image}`} />
				<Typography
					sx={{ marginBottom: '6px', color: theme ? ' #C9AC8C' : '#000' }}
				>
					{item.title}
				</Typography>
				<Typography
					sx={{
						mb: 1,
						color: theme ? 'rgba(255, 255, 255, 0.6)' : 'rgba(13, 13, 13, 0.6)',
					}}
				>
					{auth.first_name + ' ' + auth.last_name}
				</Typography>
			</Box>
		</Link>
	);
};
