import styled from 'styled-components';
import RegBg from '../../assets/images/reg-bg.svg';
export const RegBgImg = styled.div`
	display: flex;
	width: 45%;
	height: 100vh;
	/* background-color: #cdb294; */
	background-image: url(${RegBg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const RegisterTitle = styled.h2`
	margin-top: 0;
	margin-bottom: 10px;
	font-weight: 900;
	font-size: 36px;
	line-height: 51px;
	color: ${(color) => (color.variant ? '#fff' : '#000')};
`;

export const RegText = styled.p`
	margin-top: 0;
	margin-bottom: 21px;
	font-style: normal;
	font-weight: 400;
	font-size: 13px;
	line-height: 15px;
	color: ${(color) => (color.variant ? '#fff' : '#000')};
`;

export const RegInput = styled.input`
	width: 100%;
	margin-bottom: 16px;
	padding: 16px 29px;
	border: 1px solid #b4b4bb;
	border-radius: 10px;
	background-color: ${(color) => (color.variant ? '#000' : '#fff')};
	color: #aaa;
`;

export const BtnBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 18px;
`;

export const RegBtn = styled.button`
	width: 100%;
	display: block;
	padding: 6px 16px;
	font-style: normal;
	/* font-family: 'Roboto'; */
	font-weight: 500;
	font-size: 18px;
	line-height: 36px;
	color: ${(color) => (color.variant ? '#000' : '#152540')};
	background-color: ${(color) => (color.variant ? '#fff' : '#000')};
	border-radius: 99px;
	cursor: pointer;
`;
