import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppwriteContext } from '../services/context';
import SocialSignin from './SocialSignin';

const Login = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	// Get Appwrite instance
	const appwrite = useContext(AppwriteContext);

	const signInUser = async (e) => {
		e.preventDefault();
		appwrite
			.doLogin(user.email, user.password)
			.then(() => {
				navigate('/todo');
			})
			.catch((error) => {
				console.log('Error', error);
			});
	};

	return (
		<>
			<section className="h-full gradient-form bg-gray-200 md:h-screen">
				<div className="container py-12 px-6 h-full ml-auto mr-auto">
					<div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
						<div className="xl:w-5/12 md:w-10/12">
							<div className="block bg-white shadow-lg rounded-lg">
								<div className="lg:flex lg:flex-wrap g-0">
									<div className="lg:w-full px-4 md:px-0">
										<div className="md:p-12 md:mx-6">
											<div className="text-center">
												<img
													className="mx-auto w-48"
													src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
													alt="logo"
												/>
												<h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
													Todo Login Form
												</h4>
											</div>
											<form onSubmit={signInUser}>
												<p className="mb-4">
													Please Sign up to create your account
												</p>
												<div className="mb-4">
													<input
														type="email"
														className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
														id="email"
														name="email"
														aria-describedby="email"
														placeholder="Email"
														onChange={(e) =>
															setUser({ ...user, email: e.target.value })
														}
													/>
												</div>
												<div className="mb-4">
													<input
														className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
														id="password"
														name="password"
														placeholder="Password"
														type="password"
														onChange={(e) =>
															setUser({ ...user, password: e.target.value })
														}
													/>
												</div>
												<div className="text-center pt-1 mb-12 pb-1">
													<button
														className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-gradient-to-r from-cyan-500 to-blue-500"
														type="submit"
														data-mdb-ripple="true"
														data-mdb-ripple-color="light"
													>
														Sign in
													</button>
													<a className="text-gray-500" href="#!">
														Forgot password?
													</a>
												</div>
												<div className="flex items-center justify-between pb-6">
													<p className="mb-0 mr-2">Don't have an account?</p>

													<Link to="/login">
														<button
															className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
															data-mdb-ripple="true"
															data-mdb-ripple-color="light"
														>
															Login
														</button>
													</Link>
												</div>
												<div className="text-center pt-1 mb-12 pb-1">
													<SocialSignin />
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Login;
