import styled from 'styled-components';

export const Wrap = styled.div`
	/* width: 1900px; */
	display: flex;
	overflow-x: scroll;
	::-webkit-scrollbar {
		height: 10px;
		width: 10px;
		opacity: 0.2;
		-webkit-appearance: none;
	}
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: #f5f5f5;
	}
	::-webkit-scrollbar-thumb {
		background-color: rgba(0, 0, 0, 0.3);
	}
`;

export const Img = styled.img`
	width: 190px;
	height: 283px;
	margin-right: 20px;
	margin-bottom: 12px;
	border-radius: 15px;
`;
