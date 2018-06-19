const app = {
    title: "indecision app",
    subtitle: "Put your life in the hands of a computer",
    options: [],
    randomChoice: null
}

const formSubmission = (e) => {
    e.preventDefault();
    let value = e.target.elements.option.value;
    app.options.push(value);
    e.target.elements.option.value = '';
    renderComponent();
}

const removeAll = (e) => {
    app.options = [];
    renderComponent();
}

const makeDecision = (e) => {
    let randomIndex = Math.floor(Math.random() * app.options.length);
    let randomChoice = app.options[randomIndex];
    app.randomChoice = randomChoice;
    setTimeout(() => {
        app.randomChoice = null;
        renderComponent();
    }, 1000);
    renderComponent();
}

const appRoot = document.getElementById("app");

const renderComponent = () => {
    const template = (
        <div>
            <h1>Indecision App</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <ol>
                {app.options.map((item,index) => <li key={index}>{item}</li>)}
            </ol>
            {app.randomChoice && <p>Random Choice: {app.randomChoice}</p>}
            <form onSubmit={formSubmission}>
                <input autoComplete="off" type="text" name="option"/>
                <button type="submit">Submit</button>
                <button onClick={removeAll} type="button">Remove All</button>
                <button disabled={app.options.length !== 0 ? false : true} onClick={makeDecision} type="button">Make Decision</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot);
}

renderComponent();