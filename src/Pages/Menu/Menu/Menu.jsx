import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const offers = menu.filter(item => item.category === "offered");
    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");
    return (
        <div>
            <Helmet>
                <title>Menu - Bistro Boss</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offers} title="offer"></MenuCategory>
            <MenuCategory items={desserts} img={dessertImg} title="dessert"></MenuCategory>
            <MenuCategory items={pizzas} img={pizzaImg} title="pizza"></MenuCategory>
            <MenuCategory items={salads} img={saladImg} title="salad"></MenuCategory>
            <MenuCategory items={soups} img={soupImg} title="soup"></MenuCategory>
        </div>
    );
};

export default Menu;