import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../../redux/features/categories";
import { editFood } from "../../../../../redux/features/food";
import styles from "./ModalAddCard.module.css";

const ModalChangeCard = ({ active, setActive, thisFood }) => {
    const [food, setFoodName] = useState("");
    const [composition, setComposition] = useState("");
    const [price, setPrice] = useState("");
    const [categoryId, setCategory] = useState("");
    const [image, setImage] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        if (thisFood?.name) {setFoodName(thisFood?.name)};
        if (thisFood?.info) {setComposition(thisFood?.info)};
        if (thisFood?.categoryId) {setCategory(thisFood?.categoryId)};
        if (thisFood?.price) {setPrice(thisFood?.price)};
    }, [thisFood]);
    console.log(thisFood)
    
    const categories = useSelector((state) => state.categories.categories);

    const handleChangeName = (e) => {
        setFoodName(e.target.value);
    };

    const handleChangeComposition = (e) => {
        setComposition(e.target.value);
    };

    const handleChangePrice = (e) => {
        setPrice(e.target.value);
    };

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    };

    const handleChangeImage = (e) => {
        setImage(e.target.files[0]);
    };

    const handleChangeFood = (thisFoodId, food, composition, categoryId, price, image) => {
        dispatch(editFood(thisFoodId, food, composition, categoryId, price, image));
        console.log(thisFoodId, food, composition, categoryId, price, image);
    };

    return (
        <div
            className={
                active ? `${styles.modal} ${styles.modalActive}` : styles.modal
            }
            onClick={() => setActive(false)}
        >
            <div
                className={
                    active
                        ? `${styles.modalContent} ${styles.modalContentActive}`
                        : styles.modalContent
                }
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.addFood}>
                    <div className={styles.title}>
                        <h3>Редактирование карточки блюда</h3>
                        <span onClick={() => setActive(false)}>×</span>
                    </div>
                    <hr />
                    <div className={styles.addFoodContainer}>
                        <div className={styles.fieldContainer}>
                            <div className={styles.label}>
                                <label>Выберите новое изображение блюда</label>
                            </div>
                            <div className={styles.inputFile}>
                                <input
                                    type="file"
                                    onChange={(e) => handleChangeImage(e)}
                                />
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.label}>
                                <label>Название</label>
                            </div>
                            <div className={styles.inputFile}>
                                <input
                                    value={food}
                                    onChange={(e) => handleChangeName(e)}
                                />
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.label}>
                                <label>Состав</label>
                            </div>
                            <div className={styles.inputFile}>
                                <textarea
                                    value={composition}
                                    onChange={(e) => handleChangeComposition(e)}
                                />
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.label}>
                                <label>Цена</label>
                            </div>
                            <div className={styles.inputFile}>
                                <input
                                    type="number"
                                    value={price}
                                    onChange={(e) => handleChangePrice(e)}
                                />
                            </div>
                        </div>
                        <div className={styles.fieldContainer}>
                            <div className={styles.label}>
                                <label>Категория</label>
                            </div>
                            <div className={styles.inputFile}>
                                <select
                                    onChange={(e) => handleChangeCategory(e)}
                                    value={categoryId}
                                >
                                    {categories.map((category) => {
                                        return (
                                            <option
                                                key={category._id}
                                                value={category._id}
                                            >
                                                {category.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div
                        className={styles.btnAddNew}
                        onClick={() =>
                            handleChangeFood(
                                thisFood._id,
                                food,
                                composition,
                                categoryId,
                                price,
                                image
                            )
                        }
                    >
                        <button>Сохранить изменения</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalChangeCard;
