// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onIncBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="fruits-counter-bg-container">
        <div className="fruits-counter-container">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> mangoes
            <span className="count"> {banana}</span> bananas
          </h1>
          <div className="images-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="image"
            />
            <button type="button" className="button" onClick={this.onIncMango}>
              Eat Mango
            </button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="image"
            />
            <button type="button" className="button" onClick={this.onIncBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
