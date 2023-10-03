import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.main``

export const ButtonInit = styled.button`
	background-color: ${(props) => props.theme.colors.gray};
	color: ${(props) => props.theme.colors.secondary};
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	margin-bottom: 20px;
`
