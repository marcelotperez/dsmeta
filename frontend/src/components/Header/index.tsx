import logo from '../../assets/img/dsmeta.svg';
import './styles.css';
function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>Desenvolvido por
                        <a href="http://www.google.com.br">@marcelo.t.perez</a>
                    </p>
                </div>
            </header>
        </>
    )
}

export default Header
