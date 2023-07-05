import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signIn } = useAuth();
    const [btnDisabled, setBtnDisabled] = useState(true);

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire(
                    'Good job!',
                    'User Login Successful!',
                    'success'
                )
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    const handleValidateCaptcha = event => {
        const user_captcha_value = event.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setBtnDisabled(false);
        }
        else {
            setBtnDisabled(true);
        }
    }

    return (
        <>
            <Helmet>
                <title>Login - Bistro Boss</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                                <button className="btn btn-outline btn-xs mt-2">Validate</button>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={btnDisabled} className="btn bg-[#D1A054B2] hover:bg-[#d69a40b2] text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center"><small>New user? <Link to="/signup" className="text-[#D1A054] hover:underline">Create an account</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;