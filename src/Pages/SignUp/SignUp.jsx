import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://bistro-boss-server-pi-ten.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire(
                                        'Great!',
                                        'User created successfully!',
                                        'success'
                                    )
                                    navigate("/");
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet>
                <title>Sign Up - Bistro Boss</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    {...register("name", {
                                        required: true,
                                        maxLength: 20
                                    })}
                                    className="input input-bordered" />
                                {errors.name && <small className="text-red-500">Name is required</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input
                                    type="text"
                                    name="photoURL"
                                    placeholder="photo url"
                                    {...register("photoURL", {
                                        required: true
                                    })}
                                    className="input input-bordered" />
                                {errors.photoURL && <small className="text-red-500">Photo URL is required</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    {...register("email", {
                                        required: true
                                    })}
                                    className="input input-bordered" />
                                {errors.email && <small className="text-red-500">Email is required</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                    className="input input-bordered" />
                                {errors.password?.type === "required" && <small className="text-red-500">Password is required</small>}
                                {errors.password?.type === "minLength" && <small className="text-red-500">Password must be 6 character</small>}
                                {errors.password?.type === "maxLength" && <small className="text-red-500">Password can not exceed 20 characters</small>}
                                {errors.password?.type === "pattern" && <small className="text-red-500">Password must have 1 uppercase, 1 lowercase, 1 number and a special character</small>}
                            </div>
                            <div className="form-control mt-6">
                                <input
                                    type="submit"
                                    className="btn bg-[#D1A054B2] hover:bg-[#d69a40b2] text-white"
                                    value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-center"><small>Already have an account?
                            <Link to="/login" className="text-[#D1A054] hover:underline">Login</Link>
                        </small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;