import { Link } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Img, Text, TextBox, Title, Wrapper } from './CardBook.style';

export const CardBook = ({ item }) => {
	const state = useSelector((state) => state);
	const authorId = item.author_id;
	const [auth, setAuth] = useState({});
	const token = state.token.token;
	const theme = state.theme.theme;

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
	});

	return (
		<Link
			sx={{ textDecoration: 'none', color: '#000' }}
			component={RouterLink}
			to={`/singlebook/${item.id}`}
		>
			<Wrapper>
				<Img src={`http://localhost:5000/${item.image}`} />
				<TextBox variant={theme}>
					<Title variant={theme}>{item.title}</Title>
					<Text variant={theme}>{auth.first_name + ' ' + auth.last_name}</Text>
				</TextBox>
			</Wrapper>
		</Link>
	);
};
