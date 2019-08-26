
var Counters = React.createClass({
    render: function () {
        return React.createElement('div', { className: 'Counters' },
            React.createElement(Counter, {}),
            React.createElement(Counter, {}),
            React.createElement(Counter, {})
        )
    }
});