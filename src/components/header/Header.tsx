import logo from '../../assets/investment-calculator-logo.png'

type HeaderProps = {
    title: string
}

export const Header = ({ title }: HeaderProps) => {
    return (
        <header id="header">
            <img src={logo} />
            <h1>{title}</h1>
        </header>
    )
}