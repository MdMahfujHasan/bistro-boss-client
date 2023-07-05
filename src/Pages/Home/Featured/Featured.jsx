import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured text-white bg-fixed">
            <SectionTitle
                subHeading="Check It Out"
                heading="Featured Items"
            ></SectionTitle>
            <div className="md:flex justify-center items-center px-36 pb-20 bg-opacity-60 bg-slate-800">
                <div>
                    <img src={featured} alt="Featured image" />
                </div>
                <div className="md:ml-10">
                    <p>Sep 11, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, iusto! Quis nulla, perferendis cupiditate sequi similique eius vel porro debitis quo tenetur ex exercitationem nihil? Qui est aliquam nemo minima perferendis doloremque rerum. Consequatur voluptas ducimus at, officiis quidem eveniet recusandae tempora optio tempore sint ut ab pariatur, culpa odio!</p>
                    <button className="btn btn-outline border-0 border-b-2 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;