
const MenuItem = ({item}) => {
    const{price,image,recipe,name}=item;
    return (
        <div className="flex space-x-4">
        <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[120px]" src={image} alt=""/>
        <div>
            <h3 className="uppercase">{name}----------</h3>
            <p>{recipe}</p>
        </div>
        <p className="text-[#BB8506]">${price}</p>
        
    </div>
    );
};

export default MenuItem;