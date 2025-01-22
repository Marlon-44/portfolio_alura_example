import { useContext } from 'react';
import Title from '../Title';
import styles from './CardSection.module.css';
import { SkillsContext } from '../../context/SkillsContext';
import Card from '../Card';

const CardSection = ({text, topicArray})=>{
    console.log('topic Array: ', topicArray)
    return(
        <section className={styles.card__section}>
            <Title text={text} />
            <section className={styles.card__gallery}>
                {
                    topicArray.map(card => (
                        <Card key={card.id} className={styles.card__skill} info={card}/>
                    ))
                }
            </section>
            

        </section>
    )
}

export default CardSection;