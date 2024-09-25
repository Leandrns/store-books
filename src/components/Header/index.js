import IconesHeader from '../IconesHeader'
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import styled from 'styled-components'

const AppHeader = styled.header `
    background-color: #FFF;
    display: flex;
    justify-content: space-evenly;
`

function Header() {
    return (
        <AppHeader>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </AppHeader>
    )
}

export default Header