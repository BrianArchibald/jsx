// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
	const buttonText = 'Click Me!';
	return (
		<div>
			<label className="label" for="name">Enter name:</label>
			<input id="name" type="text" />
			<button style={{backgroundColor: "blue", color: "white"}}>{buttonText}</button>
		</div>

	)
}

// Inline styles are different in JSX

//<div style="border: 1px solid red;"></div>
//<div style="background-color: red;"></div>
//is
//<div style={{border: '1px solid red'}}></div>
//<div style={{backgroundColor: 'red'}}></div>


// Add class in JSX   use className=""

// Values JSX can't show:

// You can't reference an object inside JSX ex. {buttonText},, if buttonText was an object and wanted to display as string.
// you can reference {buttonText.text} and that would work.


// Take the react component and show it on the screen
ReactDOM.render(
	<App />,
	document.querySelector('#root')
);