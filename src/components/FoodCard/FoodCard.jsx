

const FoodCard = ({item}) => {
    const{price,image,recipe,name}=item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl relative">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className="absolute right-3 top-2 text-white bg-black p-1">$:{price}</p>
            <div className="card-body text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 border-b-4 my-4 text-[#BB8506] bg-slate-100">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;