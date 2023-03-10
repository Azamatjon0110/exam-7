import styled from 'styled-components';
import SearchIcon from '../../assets/images/searchIcon.svg';
import Arr from '../../assets/images/Vector.svg';

export const Label = styled.label`
	display: inline-block;
	width: 315px;
	height: 428px;
	background-color: ${(color) => (color.variant ? ' #4D4D4D' : '#F8F8F8')};
	border: ${(color) =>
		color.variant
			? '1px dashed rgba(255, 255, 255, 0.3)'
			: '1px dashed rgba(0, 0, 0, 0.3);'};

	border-radius: 17px;
`;
export const Wrap = styled.div`
	position: absolute;
	bottom: -25%;
	left: 135px;
	width: 100%;
	max-width: 1080px;
	padding: 29px 73px;
	background-color: #fff;
	box-shadow: 0px 4px 77px rgba(0, 0, 0, 0.25);
	border-radius: 15px;
`;

export const Select = styled.select`
	width: 100%;
	margin-bottom: 16px;
	padding: 17px 22px;
	font-size: 14px;
	line-height: 21px;
	border: 1px solid #b4b4bb;
	border-radius: 10px;
	appearance: none;
	background-image: url(${Arr});
	background-position: center right 26px;
	background-size: 15px 8px;
	background-repeat: no-repeat;
`;

export const GenreOptionTmD = styled.option`
	/* padding: 5px; */
`;

export const AddBookGenre = styled.select`
	width: 100%;
	padding: 20px 24px;
	margin-bottom: 20px;
	border: 1px solid #b4b4bb;
	background-color: transparent;
	cursor: pointer;
	color: ${(color) => (color.variant ? '#fff' : '#000')};
	appearance: none;
	border-radius: 10px;
	background-image: url(${Arr});
	background-position: center right 26px;
	background-size: 15px 8px;
	background-repeat: no-repeat;
	option {
		padding: 20px 24px;
		margin-bottom: 20px;
		border: 1px solid #b4b4bb;
		/* background-color: #191919; */
		cursor: pointer;
		color: #000;
		border-radius: 10px;
	}
`;

export const AddBookGenreOptionTmD = styled.option``;

export const InputBase = styled.input`
	width: 100%;
	margin-bottom: 16px;
	padding: 13px 22px;
	font-size: 14px;
	line-height: 21px;
	border: 1px solid #b4b4bb;
	border-radius: 10px;
	background-color: ${(color) => (color.variant ? '#191919' : '#fff')};
	&::placeholder {
		font-size: 14px;
		line-height: 21px;
	}
`;

export const BtnBase = styled.button`
	display: inline-block;
	display: flex;
	align-items: center;
	padding: 13px 37px;
	font-size: 16px;
	line-height: 24px;
	color: #efdac3;
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

export const TextArea = styled.textarea`
	width: 100%;
	margin-bottom: 44px;
	height: 82px;
	padding: 13px 22px;
	border: 1px solid #b4b4bb;
	border-radius: 10px;
	resize: none;
	background-color: ${(color) => (color.variant ? '#191919' : '#fff')};
	&::placeholder {
		font-size: 14px;
		line-height: 21px;
		color: ${(color) => (color.variant ? '#fff' : '#000')};
	}
`;
