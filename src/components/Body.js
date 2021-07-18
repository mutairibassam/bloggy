import React from 'react'

class Body extends React.Component {

    state = {
        text: ""
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.text === "") { 
            alert("Please type something")
            return
        }
        
        // send the from Body (child) to App (parent) using `addBlogsHandler` function
        this.props.addBlogsHandler(this.state)
        this.setState({text: ""})
    }

    render() {
    return (
        <div>
            <textarea 
            value={this.state.text} 
            onChange={ (e) => this.setState( { text: e.target.value } ) }/>
            <button onClick={this.add}>Add</button>
        </div>
    )

    }
}

export default Body
