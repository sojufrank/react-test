var React = require('react');

var CanvasTest = React.createClass({
	render: function(){
		return (
			<div>
				<canvas width="200" height="100"></canvas>
			</div>
		);
	}
});

module.exports = CanvasTest;