import styled from 'styled-components';
import Title from '../Title';
import styles from './Banner.module.css'
import SocialMedia from '../SocialMedia';

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: right;
`
const SocialMediaSection = styled.div`
    
    display: flex;
    gap: 20px;
`

const Banner = () => {
    return (
        <section className={styles.banner}>
            <img className={styles.profile__img} src="assets/profile.png" alt="" />
            <Info>
                <Title text='Hola, mi nombre es Marlon Almanza y construyo paginas web' />
                <p className={styles.banner__description}>Soy formado en analisis y desarrollo de sistemas de Informacion y software,
                    enfocado en el desarrollo front end y manejo de react para el desarrollo web</p>
                <SocialMediaSection>
                    <SocialMedia text='Linkedin' />
                    <SocialMedia text='Github' />
                    <SocialMedia text='Instagram' />
                    <SocialMedia text='Resume' />
                </SocialMediaSection>
            </Info>


        </section>
    )
}

export default Banner;