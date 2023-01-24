import styled from 'styled-components';
import RightBg from '../../assets/images/rightBg.svg';
import LeftBg from '../../assets/images/leftBg.svg';

export const Wrapper = styled.div`
	width: 295px;
	margin-bottom: 24px;
	background-color: #f5f5f5;
	border-radius: 22px;
`;

export const Img = styled.img`
	width: 100%;
	height: 224px;
	border-radius: 22px 22px 0 0;
`;

export const TextBox = styled.div`
	width: 100%;
	padding: 12px 16px 63px 16px;
	background-color: ${(color) => (color.variant ? '#1E1E1E' : '#f5f5f5')};
	background-image: url(${RightBg}), url(${LeftBg});
	background-position: calc(50% + 115px) calc(50% - 40px),
		calc(50% - 110px) calc(50% + 30px);
	background-size: 100px 110px, 75px 142px;
	background-repeat: no-repeat, no-repeat;
`;

export const Title = styled.h4`
	margin-top: 0;
	margin-bottom: 6px;
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	color: ${(color) => (color.variant ? '#C9AC8C' : '#000')};
`;

export const Text = styled.p`
	margin-top: 0;
	margin-bottom: 0;
	color: ${(color) =>
		color.variant ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'};
`;
