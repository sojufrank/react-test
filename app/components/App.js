var React = require('react');
var First = require('./first/ff.js');
var Second = require('./second/ss.js');

var Test = React.createClass({
	getInitialState: function(){
		return {name:'soju'}
	},
	render: function(){
		return (
			<div>
				<h1>HELLO WORLD</h1>
				<p>{this.state.name}</p>
			</div>
		);
	}
});

module.exports = Test;