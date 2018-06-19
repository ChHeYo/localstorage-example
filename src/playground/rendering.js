// import React from "react";
// import ReactDOM from "react-dom";


const user = {
    title: 'indecision app',
    subtitle: 'put your life in the hands of a computer',
    options: ['one,', 'two']
}

const getFirstName = (fullName) => fullName.split(" ")[0];

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((item, index) => <p key={index}>{item * this.multiplyBy}</p>);
    }
}

let count = 0;

const minusOne = () => {
    console.log('minus one');
    count--;
    renderComponent();
}

const reset = () => {
    console.log('reset');
    count = 0;
    renderComponent();
}

const appRoot = document.getElementById("app");

const renderComponent = () => {
    const App = (
        <div>
            <h1>Jason Yoo</h1>
            <p>Age: 28</p>
            <p>Location: Philly</p>
            {user.subtitle && user.subtitle}
            {(user.options.length) > 0 
            ? <p>"Here are your options"</p> : <p>"No options"</p>}
            {getFirstName("Jose Arimado")}
            {multiplier.multiply()}
            <h1>Count: {count}</h1>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(App, appRoot);
}

renderComponent();