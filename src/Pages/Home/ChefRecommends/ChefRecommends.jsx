import BtnAddToCart from '../../../Components/SectionTitle/BtnAddToCart';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import salad from '../../../assets/home/slide1.jpg';
import pizza from '../../../assets/home/slide2.jpg';
import soup from '../../../assets/home/slide3.jpg';

const ChefRecommends = () => {
    return (
        <div className="my-12">
            <SectionTitle
                subHeading="You Should Try"
                heading="Chef Recommends"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={salad} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caesar Salad</h2>
                        <p>Caesar salad is a classic salad made with crisp romaine lettuce, tangy Caesar dressing, Parmesan cheese, croutons, and anchovies.</p>
                        <div className="card-actions">
                            <BtnAddToCart></BtnAddToCart>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={pizza} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Vegetarian Pizza</h2>
                        <p>A vegetarian pizza is topped with a variety of vegetables instead of meat, offering a delicious and meat-free option for pizza lovers.</p>
                        <div className="card-actions">
                            <BtnAddToCart></BtnAddToCart>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={soup} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mushroom Soup</h2>
                        <p>Mushroom soup is a creamy and flavorful soup made primarily with mushrooms, creating a rich and satisfying dish for mushroom enthusiasts.</p>
                        <div className="card-actions">
                            <BtnAddToCart></BtnAddToCart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;