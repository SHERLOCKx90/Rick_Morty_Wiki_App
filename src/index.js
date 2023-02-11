import React from "react";
import ReactDOM from "react-dom/client";
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
// declaring a function(functional component)
function App() {
    return (
        <div className="container">
            <h1>Rick and Morty</h1>
            <List />
        </div>
    );
};

// creating a root-container and rendering the functional component inside the root-container.
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);