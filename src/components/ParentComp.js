import React, { Component, PureComponent} from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

export class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Pavani"
      }
    }
    componentDidCatch() {
        setInterval(() => {
            this.setState({
                name:"Pavani"
            }
            )
        },2000)
    }
  render() {
    console.log("******Parent Component render ************ ")
    return (
      <div>Parent Component
        <MemoComp name={this.state.name}/>
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp