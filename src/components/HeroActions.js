import React, { Component } from 'react';
// import styling from symantic or materials UI
// additional styling options

// styled component, if wanted

class HeroActions extends Component {
    state = {
        createHeroName: '',
        createHeroDescription: '',
        createHeroPowers: '',
        deleteHeroName: '' 
    };
};

handleText = e => {
    const newState = { ...this.state }
    newState[e.target.id] = e.target.value
    this.setState(newState)
}

createHero = (e) => {
    e.preventDefault()
    fetch('/api/heros', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            heroName: this.state.createHeroName,
            heroDescription: this.state.createHeroDescription,
            heroPowers: this.state.createHeroPowers,
            deleteHero: this.state.deleteHeroName
        })
    })
    .then(res => res.json())
    .then(result => this.PaymentResponse.createHero(result))
    .then(() => {
        this.setState({
            createHeroName: '',
            createHeroDescription: '',
            createHeroPowers: '',
            deleteHeroName: ''
        })
    })
}

deleteHero = e => {
    e.preventDefault()
    fetch(`/api/heros/${this.state.deleteHeroName}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(result => this.props.deleteHeroName(this.state.deleteHeroName))
    .then(() => {
        this.setState({
            deleteHeroName: ''
        })
    })
}

render() {
    return (
        <div>
            <FlexForm onSubmit={this.createHero}>
            <TextField onChange={this.handleTextChange} id="createHeroName"
            label="Hero Name"
            value={this.state.createHeroName}
            variant="outlined" />
            
            </FlexForm>
        </div>
    )
}

