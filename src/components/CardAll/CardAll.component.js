import { Link } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Img, Text, TextBox, Title, Wrapper } from './CardAll.style';

export const CardAll = ({ item }) => {
	const theme = JSON.parse(localStorage.getItem('theme'));
	return (
		<Link
			sx={{ textDecoration: 'none', color: '#000' }}
			component={RouterLink}
			to={`/single/${item.id}`}
		>
			<Wrapper>
				<Img src={`http://localhost:5000/${item.image}`} />
				<TextBox variant={theme}>
					<Title variant={theme}>
						{item.first_name + ' ' + item.last_name}
					</Title>
					<Text variant={theme}>
						{item.date_of_birth + '-' + item.date_of_death}
					</Text>
				</TextBox>
			</Wrapper>
		</Link>
	);
};
