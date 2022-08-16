import React, { useContext, useState } from 'react';
import { FaBootstrap } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AppwriteContext } from '../../services/context';
import AuthUserContext from '../../services/session/';

function Header() {
	const navigate = useNavigate();

	// Get Appwrite instance
	const { authUser, getCurrentUser } = useContext(AuthUserContext);
	const appwrite = useContext(AppwriteContext);

	const deleteSessions = async (e) => {
		e.preventDefault();

		appwrite
			.doLogout()
			.then(() => {
				getCurrentUser();
				history.push('/');
			})
			.catch((error) => {
				console.log('Error', error);
			});
	};

	return (
		<header className="p-3 text-bg-dark">
			<div className="container">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
					<Link
						to="/"
						className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
					>
						<FaBootstrap size="2em" />
					</Link>
					<ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
						<li>
							<Link to="/" className="nav-link px-2 text-secondary">
								Home
							</Link>
						</li>
						<li>
							<Link to="/todo" className="nav-link px-2 text-white">
								Todo
							</Link>
						</li>
						<li>
							<Link to="/profile" className="nav-link px-2 text-white">
								Profile
							</Link>
						</li>
						<li>
							<Link to="#" className="nav-link px-2 text-white">
								FAQs
							</Link>
						</li>
					</ul>

					<div className="text-end">
						{authUser ? (
							<Link
								to="/logout"
								className="btn btn-secondary"
								onClick={(e) => deleteSessions(e)}
							>
								Logout
							</Link>
						) : (
							<>
								<Link to="/login" className="btn btn-primary">
									Login
								</Link>
								<Link to="/signup" className="btn btn-secondary">
									Sign-up
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
