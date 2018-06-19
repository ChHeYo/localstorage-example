import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life at the hands of a computer.</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    removeAll(){
        console.log(this.props.options);
    }
    render(){
        return (
            <div>
                <ol>
                    {this.props.options.map((item, index) => {
                        return (
                            <Option 
                            key={index} 
                            text={item} 
                            handleDeleteOption={this.props.handleDeleteOptions}>
                            </Option>)
                    })}
                </ol>
                <button onClick={this.removeAll.bind(this)}>Remove All</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                <ul>{this.props.text}</ul>
                <button 
                    onClick={(e) => { this.props.handleDeleteOption(this.props.text) }}>
                    Remove
                </button>
            </div>
        )
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        let value = e.target.elements.option.value;
        if (value){
            this.props.addOption(value);
        } else {
            alert("Null Value");
        }
        e.target.elements.option.value = '';
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="option" placeholder="Add Option"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { options: [] }
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.addOption = this.addOption.bind(this);
    }

    componentDidMount(){
        try {
            const options = localStorage.getItem('list');
            const list = JSON.parse(options);

            if (list) {
                this.setState(() => ({ options: list }))
            }
        } catch(e){
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('list', json);
        }
    }

    componentWillUnmount(){
        // just before
    }

    handleDeleteOption(option){
        this.setState((prevState) => ({ options: prevState.options.filter((toDelete) => toDelete !== option) }))
    }

    addOption(option){
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    render() {
        return (
            <div>
                <Header/>
                <Action/>
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOption}/>
                <AddOption addOption={this.addOption}/>
            </div>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById("app")
)