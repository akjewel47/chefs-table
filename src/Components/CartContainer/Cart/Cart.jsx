import { CiStopwatch } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Cart = ({ item,handleButton }) => {
    const { recipe_name, image, description, ingredients, preparing_time, calories } = item;
    return (
        <div className="">
            <div class="card bg-base-100  shadow-xl ">
                <figure>
                    <img className="p-2 rounded-2xl" src={image} alt="Dish" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title text-black text-lg font-bold">{recipe_name}</h2>
                    <p>{description}</p>
                    <div>
                        <h1>Ingredients: {ingredients.length}</h1>
                        <ol>
                            <li>*{item.ingredients[0]}</li>
                            <li>*{item.ingredients[1]}</li>
                            <li>*{item.ingredients[2]}</li>
                        </ol>
                    </div>
                    <div class="card-actions justify-between items-center">
                        <div className="flex justify-center gap-2 items-center">
                            <h1><CiStopwatch /></h1>
                            <h2><span>{preparing_time}</span></h2>
                        </div>
                        <div className="flex justify-center gap-2 items-center">
                            <h1><FaFire /></h1>
                            <h2><span>{calories}</span></h2>
                        </div>

                    </div>
                    <button onClick={()=>handleButton(item)} class="btn btn-active btn-secondary">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;