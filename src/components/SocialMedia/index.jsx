import styles from './SocialMedia.module.css'

const SocialMedia = ({text})=>{
    return (
        <div className='social__media'>
            <a className={styles.social__media__name}>{text}</a>
            <img className={styles.social__media__img} src="assets/arrow.svg" alt="" />
        </div>
    )
}

export default SocialMedia;