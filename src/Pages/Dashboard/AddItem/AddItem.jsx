import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Required from "../../../Components/Required/Required";
import './AddItem.css';
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../hooks/useAxioSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL };
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire(
                                    'Good job!',
                                    'Item added successfully!',
                                    'success'
                                )
                            }
                        })
                }
            })
    }
    return (
        <div className="mx-3">
            <Helmet>
                <title>Add Item - Bistro Boss</title>
            </Helmet>
            <SectionTitle heading="Add an Item" subHeading="What's new?"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 bg-base-200 rounded-lg">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name<Required /></span>
                    </label>
                    <input
                        type="text"
                        placeholder="Recipe"
                        className="input input-bordered w-full focus:outline-0"
                        {...register("name", { required: true, maxLength: 120 })}
                    />
                </div>
                <div className="flex gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Category<Required /></span>
                        </label>
                        <select
                            className="select select-bordered focus:outline-0"
                            {...register("category", { required: true })}
                        >
                            <option>pizza</option>
                            <option>dessert</option>
                            <option>soup</option>
                            <option>salad</option>
                            <option>drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price<Required /></span>
                        </label>
                        <input
                            type="number"
                            placeholder="$ Price"
                            className="input input-bordered w-full hide-number-arrows focus:outline-0"
                            {...register("price", { required: true })}
                        />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details<Required /></span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered h-24 w-full focus:outline-0"
                        placeholder="Details"
                        {...register("recipe", { required: true })}
                    ></textarea>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Item Image<Required /></span>
                    </label>
                    <input
                        type="file"
                        className="file-input file-input-bordered file-input-xs focus:outline-0 w-60"
                        {...register("image", { required: true })}
                    />
                </div>
                <input
                    type="submit"
                    value="Add Item"
                    className="btn btn-sm btn-success text-white mt-4"
                />
            </form>
        </div>
    );
};

export default AddItem;