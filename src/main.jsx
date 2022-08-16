import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from "react";
import ReactDOM from "react-dom/client";
import Appwrite, { AppwriteContext } from "./services/context";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AppwriteContext.Provider value={new Appwrite()}>
			<App />
		</AppwriteContext.Provider>
	</React.StrictMode>
);
