import React from 'react'

class SearchBar extends React.Component {

    state = { term: '' };

    handleChange = (e) => {
        this.setState({ term: e.target.value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={this.handleChange} />
                        <p>{this.state.term}</p>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar