import styles from './Card.module.css'

const Card = ({info}) => {
    return (
        <div className={styles.card}>
            <img className={styles.card__image} src={info.image} alt="" />
            <p className={styles.card__name}>{info.name}</p>
        </div>
    )
}

export default Card;