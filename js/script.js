'use strict'


var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    divide: function () {
        this.setState({
            counter: this.state.counter / 2
        });
    },

    multiply: function() {
        this.setState({
            counter: this.state.counter * 2
        });
    },

    render: function () {
        return React.createElement('div', { className: "theDiv" },
            React.createElement('button', { className: "clickDiv", onClick: this.increment },
                React.createElement('span', {},' +1')
            ),
            React.createElement('button', { className: "clickDiv2", onClick: this.decrement},
                React.createElement('span', {},' -1')
            ),
            React.createElement('button', { className: "clickDiv3", onClick: this.divide},
                React.createElement('span', {},' /2')
            ),
            React.createElement('button', { className: "clickDiv4", onClick: this.multiply},
                React.createElement('span', {},' *2')
            ),
            React.createElement('span', {className: 'display'}, this.state.counter)
        )
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));

