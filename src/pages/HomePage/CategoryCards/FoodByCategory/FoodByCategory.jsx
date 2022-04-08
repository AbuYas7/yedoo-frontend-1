import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../../components/Card/Card';
import { fetchFood } from '../../../../redux/features/food';
import styles from './FoodByCategory.module.css'

const FoodByCategory = ({categoryId}) => {
    const dispatch = useDispatch()
    const food = useSelector(state => state.food.food)
    console.log(food)

    useEffect(() => {
        dispatch(fetchFood())
    }, [dispatch])

    return (
        <div className={`${styles.foodByCategory} ${food ? styles.showFood : styles.hideFood}`}>
            {!food ? '' :
            food.map(item => {
                if(item.categoryId === categoryId) {
                return <div className={styles.CardItem}><Card id={item._id} name={item.name} description={item.info} price={item.price} image={item.image} /></div>
            }
            })
        }
        </div>
    );
};

export default FoodByCategory;