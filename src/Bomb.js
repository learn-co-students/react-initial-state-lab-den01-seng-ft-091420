import React, { Component } from 'react'

class Bomb extends Component {

    state = {
        secondsLeft: this.props.initialCount
    }

    render(){
        return(
            <div>
                <h2>
                    {(this.state.secondsLeft === 0) ? "Boom!" : this.state.secondsLeft + " seconds left before I go boom!"}
                </h2>
            </div>
        )
    }

}

export default Bomb
