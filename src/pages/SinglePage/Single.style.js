import styled from 'styled-components';

export const Img = styled.img`
	width: 43%;
	/* max-width: 505px; */
	height: 581px;
	margin-right: 64px;
	border-radius: 20px;
`;

export const Title = styled.h2`
	margin-top: 0;
	margin-bottom: 8px;
	font-size: 48px;
	line-height: 72px;
	color: #d1b89d;
`;

export const Text = styled.p`
	margin-bottom: 44px;
	color: ${(color) =>
		color.variant ? 'rgba(255, 255, 255, 0.8)' : 'rgba(13, 13, 13, 0.6)'};
`;

export const DateText = styled.p`
	margin-top: 0;
	margin-bottom: 0;
	font-size: 12px;
	line-height: 18px;
	color: ${(color) =>
		color.variant ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}; ;
`;

export const Date = styled.p`
	margin-top: 0;
	margin-right: 12px;
	margin-bottom: 0;
	font-size: 39px;
	line-height: 144.4%;
	color: #d1b89d;
`;
