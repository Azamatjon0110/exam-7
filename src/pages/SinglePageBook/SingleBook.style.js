import styled from 'styled-components';
import Down from '../../assets/images/down.svg';
export const Img = styled.img`
	width: 43%;
	/* max-width: 505px; */
	height: 581px;
	margin-right: 64px;
	border-radius: 20px;
`;

export const Title = styled.h2`
	margin-top: 0;
	font-size: 48px;
	line-height: 72px;
	color: #d1b89d;
`;

export const Text = styled.p`
	margin-top: 0;
	font-size: 16px;
	line-height: 150%;
	color: ${(color) =>
		color.variant ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
`;

export const TextName = styled.p`
	margin-top: 0;
	margin-bottom: 0;
	font-size: 20px;
	line-height: 30px;
	color: ${(color) =>
		color.variant ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'};
`;

export const TextValue = styled.p`
	margin-top: 0;
	margin-bottom: 0;
	font-size: 20px;
	line-height: 30px;
	color: ${(color) => (color.variant ? '#fff' : '#0d0d0d')};
`;

export const Date = styled.p`
	margin-top: 0;
	margin-right: 12px;
	margin-bottom: 0;
	font-size: 39px;
	line-height: 144.4%;
	color: #d1b89d;
`;

export const Info = styled.p`
	display: block;
	margin: 0;
	margin-right: 19px;
	padding-right: 19px;
	color: #d1b89d;
	background-image: url(${Down});
	background-position: center right;
	background-size: 8px 12px;
	background-repeat: no-repeat;
`;

export const Line = styled.div`
	width: 100%;
	height: 1px;
	background-color: rgba(209, 184, 157, 0.6);
`;
