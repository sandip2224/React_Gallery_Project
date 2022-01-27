import React from 'react';
import SearchBar from './components/SearchBar'

class App extends React.Component {

	onFormSubmit = (val) => {
		console.log(val)
	}

	render() {
		return (
			<div className="App ui container" style={{ marginTop: '10px' }}>
				<SearchBar onFormSubmit={this.onFormSubmit} />
			</div >
		);
	}
}

export default App;
