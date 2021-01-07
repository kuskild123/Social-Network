import React from 'react';
class Clock extends React.Component{
    state = {
        date:new Date()
    }
    componentDidMount(){
        this.timerId = setInterval( () => {
            return this.tick()
        },1000 )
    }
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    tick(){
        this.setState( {
            date:new Date()
        } )
    }
    render(){
        return <div>
            <h3>Сейчас {this.state.date.toLocaleTimeString()}</h3>
        </div>
    }
}

export default Clock