let visibility = false;

const visibilityToggle = () => {
    visibility = !visibility;
    renderVisibility();
}

const renderVisibility = () => {
    const app = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={visibilityToggle}>
                {visibility === false ? "Show Details": "Hide Details"}
            </button>
            {visibility === true && 
                <p>Hey. These are some details you can now see!</p>}
        </div>
    )
    
    ReactDOM.render(app, appRoot);
}

const appRoot = document.getElementById("app");

renderVisibility();