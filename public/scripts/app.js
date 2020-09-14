'use strict';

var visibility = false;
var visibilityTog = function visibilityTog() {
    visibility = !visibility;
    render();
};
var render = function render() {

    var visible = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: visibilityTog },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey There are some details that you have to know.'
            )
        )
    );
    ReactDOM.render(visible, document.getElementById('mainDiv'));
};

render();
