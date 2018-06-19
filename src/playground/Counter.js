class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = { count: 0 }
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount(){
        const count = parseInt(localStorage.getItem('count'));
        this.setState(() => ({ count: count }))
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    }

    handleReset(){
        this.setState({ count: 0 })
    }
    handleMinus(){
        this.setState((prevState) => ({ count: prevState.count - 1 }))
    }
    handlePlus(){
        let plus = this.state.count + 1;
        this.setState({ count: plus })
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handlePlus}>+1</button>
                <button onClick={this.handleMinus}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Counter/>,
    document.getElementById("app")
)