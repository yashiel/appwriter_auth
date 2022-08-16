import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/common/Layout';
import ForgetPassword from './components/ForgetPassword';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import ResetPassword from './components/ResetPassword';
import Signup from './components/Signup';
import Todo from './components/Todo';
import { withAuthentication } from './services/session';

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/signup" element={<Signup />} />
					<Route index path="/" element={<Home />} />
					<Route path="/todo" element={<Todo />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/forget-password" element={<ForgetPassword />} />
					<Route path="/reset-password" element={<ResetPassword />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default withAuthentication(App);
