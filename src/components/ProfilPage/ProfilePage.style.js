import styled from 'styled-components';
import LabelBg from '../../assets/images/label.svg';
import Camera from '../../assets/images/bi_camera.svg';

export const Img = styled.img`
	width: 175px;
	height: 175px;
	border-radius: 50%;
`;

export const ImgHeader = styled.img`
	width: 49px;
	height: 49px;
	margin-right: 12px;
	border-radius: 50%;
`;

export const Label = styled.label`
	position: absolute;
	right: 5px;
	top: 130px;
	display: block;
	width: 50px;
	padding: 8px;
	height: 50px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	background-color: ${(color) => (color.variant ? '#161616' : '#fff')};
	border-radius: 8px;
	background-image: url(${Camera});
	background-repeat: no-repeat;
	background-position: center;
	cursor: pointer;
`;

export const InputLabel = styled.label`
	display: block;
	margin-bottom: 7px;
	font-size: 13px;
	line-height: 20px;
	color: #464e5f;
`;

export const Input = styled.input`
	width: 100%;
	margin-bottom: 3px;
	padding: 12px 20px;
	background-color: #f3f6f9;
	font-size: 14px;
	line-height: 21px;
	color: #464e5f;
	border-radius: 4px;
	border: 1px solid transparent;
`;

export const InputText = styled.p`
	margin: 0;
	margin-bottom: 22px;
	font-size: 12px;
	line-height: 18px;
	color: #b5b5c3;
	opacity: 0.8;
`;
