import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.main``

export const DescriptionContainer = styled.div`
	background-color: #f2f2f2;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	margin-bottom: 20px;
`
export const DescriptionTitle = styled.h3``

export const UploadInput = styled.input`
	display: none;
`

export const ButtonFileCancel = styled.button`
	background-color: ${(props) => props.theme.colors.warning};
	color: ${(props) => props.theme.colors.secondary};
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
`

export const ContentButton = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`

export const SizeButton = styled.div`
	border: 1px solid #0000ff;
	width: 200px;
	margin: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`
