import styled from 'styled-components'
import styles from './Header.module.css'

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;`

const NavigationList = styled.ul`
    display: none;
    @media screen and (min-width: 1025px){
        display: flex;
        gap: 30px;
        list-style: none;
        align-items: center;
        margin-right: 20px;
        font-size: 1.4rem;
    }
`


const Header = () =>{
    return(
        <header>
            <Logo>
                <img src='assets/stars.svg'></img>
                <h4>Marlon Almanza</h4>
            </Logo>
            <nav>
                <NavigationList>
                    <li>
                        <a className={styles.item} href="">Sobre mi</a>
                    </li>
                    <li>
                        <a className={styles.item} href="">Skills</a>
                    </li>
                    <li>
                        <a className={styles.item} href="">Hobbies</a>
                    </li>
                    <li>
                        <a className={styles.item} href="">Formacion</a>
                    </li>
                    <li>
                        <a className={styles.item} href="">Proyectos</a>
                    </li>
                </NavigationList>

                <h4>
                    <a href="">marlondavidag44@outlook.com</a>
                </h4>
            </nav>
            
        </header>
    )
}

export default Header;
