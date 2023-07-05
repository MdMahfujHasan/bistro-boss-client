import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-boss-server-pi-ten.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your food has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    return (
        <div>
            <Helmet>
                <title>My Cart - Bistro Boss</title>
            </Helmet>
            <div className="uppercase my-2">
                <div className="flex justify-evenly text-2xl text-slate-700 font-semibold">
                    <h3>Total Items: {cart.length}</h3>
                    <h3>Total Price: ${total}</h3>
                    <Link to="/dashboard/payment">
                        <button className="btn btn-success text-white btn-sm">Pay</button>
                    </Link>
                </div>
            </div>
            <div className="w-1/2 sm:w-full">
                <div className="verflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Food</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr
                                    key={item._id}
                                >
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}</td>
                                    <td className="text-end lg:text-left">${item.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item)}><FaTrashAlt className="bg-rose-500 hover:bg-rose-600 text-white p-1.5 lg:p-2.5 rounded text-2xl lg:text-4xl" /></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;