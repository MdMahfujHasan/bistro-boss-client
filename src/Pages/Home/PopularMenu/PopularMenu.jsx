import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");
    return (
        <section className="mb-20">
            <SectionTitle
                subHeading="From Our Menu"
                heading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mt-8">
                <Link to="/menu">
                    <button className="btn btn-outline border-0 border-b-2">View Full Menu</button>
                </Link>
            </div>
        </section>
    );
};

export default PopularMenu;