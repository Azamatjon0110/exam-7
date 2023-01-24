import styled from 'styled-components';
import Arr from '../../assets/images/Vector.svg';

export const Select = styled.select`
	width: 100%;
	padding: 12px 20px;
	background-color: #f3f6f9;
	border: none;
	border-radius: 4px;
	appearance: none;
	background-image: url(${Arr});
	background-position: center right 26px;
	background-size: 15px 8px;
	background-repeat: no-repeat;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
	font-size: 13px;
	line-height: 20px;
	color: ${(color) => (color.variant ? '#fff' : '#464e5f')};
`;

export const CheckBoxWrapper = styled.div`
	margin-bottom: 40px;
	/* border-bottom: 3px solid #ecf0f3; */
	position: relative;
`;
export const CheckBoxLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 70px;
	height: 26px;
	cursor: pointer;
	background: #f3f6f9;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 34px;
	&::after {
		content: '';
		display: block;
		border-radius: 50%;
		width: 18px;
		height: 18px;
		margin: 3px;
		background: #3699ff;
		box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
		transition: 0.2s;
	}
`;
export const CheckBox = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	width: 70px;
	height: 26px;
	&:checked + ${CheckBoxLabel} {
		background: #f3f6f9;
		&::after {
			content: '';
			display: block;
			border-radius: 50%;
			width: 18px;
			height: 18px;
			margin-left: 48px;
			transition: 0.2s;
		}
	}
`;
