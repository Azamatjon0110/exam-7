import styled from 'styled-components';

import SearchIcon from '../../assets/images/searchIcon.svg';

export const Wrap = styled.div`
	position: absolute;
	bottom: -25%;
	left: 135px;
	width: 100%;
	max-width: 1080px;
	padding: 29px 73px;
	background-color: ${(color) => (color.variant ? '#000' : '#fff')};
	box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
	border-radius: 15px;
`;
export const Input = styled.input`
	padding: 12px 27px;
	font-size: 16px;
	line-height: 24px;
	color: rgba(13, 13, 13, 0.3);
	background-color: #f5f5f5;
	border: 1px solid transparent;
	border-radius: 15px;
`;

export const BtnBase = styled.button`
	display: inline-block;
	display: flex;
	align-items: center;
	padding: 13px 37px;
	font-size: 16px;
	line-height: 24px;
	color: ${(color) => (color.variant ? '#3C2710' : '#efdac3')};
	background-color: #c9ac8c;
	border: 1px solid transparent;
	border-radius: 15px;
	&::before {
		content: '';
		width: 24px;
		height: 24px;
		background-image: url(${SearchIcon});
		background-position: center;
	}
`;
