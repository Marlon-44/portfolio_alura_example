import Title from '../Title';
import styles from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <div className={styles.about__me}>
            <Title text='About Me'></Title>
            <p className={styles.about__me__description}>Tecnólogo en desarrollo de Sistemas de Información y Software y estudiante de Ingeniería de Sistemas. 

            Busco oportunidad para adquirir experiencia en el área de desarrollo de software donde pueda desarrollar mis conocimientos técnicos y crecer junto a al empresa y a mis compañeros de trabajo.
            <br /><br />
            Busco siempre trabajar en equipo cooperando con todos y apoyando de la mejor manera posible, con grande satisfacción en enseñar y aprender</p>
            <p className={styles.dalmata__icon}>彡</p>
        </div>
    )
}

export default AboutMe;