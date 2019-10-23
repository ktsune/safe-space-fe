import React, { Component } from 'react'

class ExtraItems extends Component {
    constructor() {
        super(); 
        this.state = {
            checked: false 
        }
    }

    toggleChecked = (e) => {
        e.preventDefault(); 
        this.setState({ checked: !this.state.checked })
    }

    render() {
        const allItems = this.props.items.map(item => {
            return <article className="item">
                <button id="checkbox-button" type="checkbox" checked={this.state.checked} onClick={this.toggleChecked}></button>
                <p>{item}</p>
                </article>
        })

        return (
            <section>
                {allItems}
            </section>
        )
    }
}

export default ExtraItems; 