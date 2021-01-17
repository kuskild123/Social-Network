import React from 'react';

class HomeHelloForm extends React.Component{
    constructor(props) {
        super(props);
        this.yourName = props.yourName
        this.state = {
            value:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange (event) {
        this.setState({value:event.target.value})
    }
    handleSubmit(event) {
        this.yourName(this.state.value)
        event.preventDefault()
    }
    render() {
        return <form onSubmit={this.handleSubmit}>

            <h4>Введите ваше имя: </h4>
            <div>
                <textarea value={this.state.value} placeholder={"Ваше имя.."} onChange={this.handleChange} />
            </div>
            <div>
                <input type="submit" value={'Отправить'}/>
            </div>

        </form>
    }
}
export default HomeHelloForm;