const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex space-x-2">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-28" src={image} alt="Food" />
            <div>
                <h3 className="uppercase text-slate-700 font-medium font-serif">{name}------------</h3>
                <p className="text-sm text-slate-600">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;