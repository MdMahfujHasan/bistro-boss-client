import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { GrUser } from "react-icons/gr";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxioSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        // const res = await fetch('https://bistro-boss-server-pi-ten.vercel.app/users')
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`https://bistro-boss-server-pi-ten.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Great!',
                        `${user.name} is now an admin`,
                        'success',
                    )
                }
            })
    }

    const handleDeleteUser = () => {

    }
    return (
        <div>
            <Helmet>
                <title>All Users - Bistro Boss</title>
            </Helmet>
            <h3 className="text-3xl font-semibold">Total Users: {users.length}</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === "admin" ? <><span className="badge badge-accent text-white">admin</span></> :
                                        <button onClick={() => handleMakeAdmin(user)}><GrUser className="bg-slate-400 text-white p-1.5 lg:p-2.5 rounded text-2xl lg:text-4xl" /></button>}
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)}><FaTrashAlt className="bg-rose-500 hover:bg-rose-600 text-white p-1.5 lg:p-2.5 rounded text-2xl lg:text-4xl" /></button>
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

export default AllUsers;