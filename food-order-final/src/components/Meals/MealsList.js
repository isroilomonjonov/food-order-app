import styles from "./MealsList.module.css";
import meals from "../../data/meals";
import MealItem from "./MealItem";
const MealsList = () => {
  const mealList = meals.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return <ul className={styles.meals}>{mealList}</ul>;
};

export default MealsList;
