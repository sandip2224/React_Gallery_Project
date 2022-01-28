import React from 'react';
import unsplash from './api/unsplash'

// Components
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList';

class App extends React.Component {
	state = { images: [] }

	onFormSubmit = async (val) => {
		const res = await unsplash.get('/search/photos', {
			params: { query: val }
		})
		this.setState({ images: res.data.results })
	}

	render() {
		return (
			<div className="App ui container" style={{ marginTop: '10px' }}>
				<SearchBar onFormSubmit={this.onFormSubmit} />
				<ImageList images={this.state.images} />
			</div >
		);
	}
}

export default App;
