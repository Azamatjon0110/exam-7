import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import BgImg from '../../assets/images/carusel-bg.png';
import './Carusel.css';

export default function SimpleSlider() {
	const GenreTitle = [
		{
			title: 'Temuriylar davri adabiyoti',
		},
		{
			title: 'Jadid davri adabiyoti',
		},
		{
			title: 'Sovet davri adabiyoti',
		},
		{
			title: 'Mustaqillik davri adabiyoti',
		},
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div>
			<Slider {...settings}>
				{GenreTitle.map((item) => (
					<Box
						sx={{
							display: 'block',
							width: '100%',
							height: '346px',
							backgroundImage: `url(${BgImg})`,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							borderRadius: '21px',
						}}
					>
						<Box
							sx={{
								width: '100%',
								maxWidth: '337px',
								paddingTop: '45px',
								paddingLeft: '86px',
							}}
						>
							<Typography
								sx={{
									marginBottom: '10px',
									fontSize: '61px',
									lineHeight: '67px',
									color: '#D1B89D',
								}}
								component='h3'
							>
								{item.title}
							</Typography>
						</Box>
					</Box>
				))}
				{/* <Box
					sx={{
						display: 'block',
						width: '100%',
						height: '346px',
						backgroundImage: `url(${BgImg})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						borderRadius: '21px',
					}}
				>
					<Box
						sx={{
							width: '100%',
							maxWidth: '337px',
							paddingTop: '45px',
							paddingLeft: '86px',
						}}
					>
						<Typography
							sx={{
								fontSize: '61px',
								lineHeight: '67px',
								color: '#D1B89D',
							}}
							component='h3'
						>
							Temuriylar davri adabiyoti
						</Typography>
					</Box>
				</Box> */}
			</Slider>
		</div>
	);
}
