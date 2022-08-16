import { Account, Client } from 'appwrite';

const config = {
	projectId: import.meta.env.VITE_APPWRITE_PROJECTID || '62f766ad87b1331f4de6',
	endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT || 'http://localhost/v1',
	// database: process.env.REACT_APP_APPWRITE_ENDPOINT || "62f9450d54c6eedb86ae",
};

const client = new Client();

class AppwriteService {
	constructor() {
		const account = new Account(client);
		client.setEndpoint(config.endpoint).setProject(config.projectId);
		// this.account = Client.account;
		this.account = account;
	}

	doCreateAccount = (email, password, name) => {
		return this.account.create('unique()', email, password, name);
	};

	doLogin = (email, password) => {
		return this.account.createEmailSession(email, password);
	};

	doLogout = () => {
		return this.account.deleteSession('current');
	};

	doGetCurrentUser = () => {
		return this.account.get();
	};
}

export default AppwriteService;
