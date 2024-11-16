import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const { singInUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState({})
    const location = useLocation();
    const navigate = useNavigate();


    const hendleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password');
        console.log(email, password)

        singInUser(email, password)
            .then(res => {
                console.log(res.user);
                setUser(res.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                setUser(null);
                setError({ ...error, Login: err.code })
            })
    }



    return (
        <div className="min-h-[80vh] flex justify-center items-center ">
            <div className="card bg-base-100 w-full max-w-2xl shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center pt-4">Login your account</h2>
                <form onSubmit={hendleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        {
                            error.Login && (
                                <label className="label text-sm text-red-600">
                                   {error.Login}
                                </label>
                            )
                        }

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold"> Dont’t Have An Account ? <Link to='/auth/register' className="text-red-700" >Register</Link></p>
            </div>
        </div>
    );
};

export default Login;