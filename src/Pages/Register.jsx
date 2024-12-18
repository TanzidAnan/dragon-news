import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const { createNewUser, setUser,updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const naveget =useNavigate()

    const hendleRegister = (e) => {
        e.preventDefault()
        // const name =e.target.name.value;
        // const email =e.target.email.value;
        // const photoURL =e.target.photoURL.value;
        // const password =e.target.password.value;
        // console.log(name,email,photoURL,password)

        const form = new FormData(e.target);
        const name = form.get('name');
        if (name.length < 5) {
            setError({ ...error, name: 'most be 5 carecter' });
            return;
        }
        const email = form.get('email')
        const photoURL = form.get('photoURL')
        const password = form.get('password');
        console.log({ name, email, photoURL, password });

        createNewUser(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                updateUserProfile({displayName:name,photoURL:photoURL})
                .then(() =>{
                    naveget('/')
                })
                .catch(err =>{
                    console.log(err.message)
                })
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className="min-h-[80vh] flex justify-center items-center ">
            <div className="card bg-base-100 w-full max-w-2xl shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center pt-4">Register your account</h2>
                <form onSubmit={hendleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter Name" className="input input-bordered" required />
                    </div>
                    {
                        error.name && (
                            <label className="label text-red-600">
                                {error.name}
                            </label>
                        )
                    }
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photoURL" type="text" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold"> Allrady have and Account ? <Link to='/auth/login' className="text-red-700" >Register</Link></p>
            </div>
        </div>
    );
};

export default Register;