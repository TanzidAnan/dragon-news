
const Login = () => {
    return (
        <div className="min-h-[80vh] flex justify-center items-center ">
                <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
                    <h2 className="text-2xl font-semibold text-center pt-4">Login your account</h2>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default Login;