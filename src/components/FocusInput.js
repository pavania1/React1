import React, { Component } from 'react'

export class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }
    
    clickHandler = () => {
        this.componentRef.current.focus()
    }
    
    
  render() {
    return (
      <div>
        <input ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>

      </div>
    )
  }
}

export default FocusInput