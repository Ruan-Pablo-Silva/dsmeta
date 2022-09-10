import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={logo}  alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a className='linkedin' href="https://www.linkedin.com/in/ruan-pablo-felix-da-silva-a80b28217/"> Ruan Pablo. </a>
                    </p>
                </div>
            </header>

        </>
    )

}

export default Header;
