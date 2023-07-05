import chefService from '../../../assets/home/chef-service.jpg';

const SubBanner = () => {
    return (
        <div className="relative my-12">
            <img src={chefService} alt="Chef service" />
            <div className="bg-white px-20 py-10 absolute top-24 w-4/5 left-32 text-center invisible lg:visible">
                <h3 className="uppercase text-3xl mb-3">Bistro Boss</h3>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ducimus laborum quia aspernatur reiciendis voluptates mollitia quas repellendus fugit enim! Cupiditate, earum officia. Eligendi reiciendis doloremque voluptatem commodi consequatur vitae saepe inventore quidem odio asperiores veniam ipsum aut, qui ad enim officiis dicta ratione, magni velit cupiditate obcaecati nisi minima.</p>
            </div>
        </div>
    );
};

export default SubBanner;