import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AppwriteContext } from './context';
import AuthUserContext from './session';

const withAuthentication = (Component) =>
	function WithAuthentication(props) {
		const [authUser, setAuthUser] = useState(null);
		const appwrite = useContext(AppwriteContext);

		const getCurrentUser = useCallback(() => {
			appwrite
				.doGetCurrentUser()
				.then((user) => {
					setAuthUser(user);
				})
				.catch(() => {
					setAuthUser(null);
				});
		}, [appwrite]);

		useEffect(() => {
			getCurrentUser();
		}, [getCurrentUser]);

		return (
			<AuthUserContext.Provider value={{ authUser, getCurrentUser }}>
				<Component {...props} />
			</AuthUserContext.Provider>
		);
	};

export default withAuthentication;
