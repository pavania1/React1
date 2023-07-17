import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {
    // ifelse 1st approach
    // if (this.state.isLoggedIn) {
    //     return <div>Welcome Pavaniiii</div>
    // }else {
    //     return <div>Welocme Guest</div>
    // }

    // element variables 2nd approach
    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Pavaniiii</div>
    // }else {
    //     message = <div> Welcome Guest</div>
    // }
    // return <div> {message}</div>
    // Ternary operator 3rd approach
    // return(
    //     this.state.isLoggedIn ? (
    //         <div>Welcome Pavaniiii</div>
    //     ) : (
    //         <div>Welocme Guest</div>
    //     )
         
    // )

    // Short circuit operator 4th approach

    return this.state.isLoggedIn && <div>Welcome Pavaniiii</div>




    // return (
    //     <div>
    //   <div>Welcome Pavaniiii</div>
    //   <div>Welcome Guest</div>
    //   </div> 
    // )
  }
}

export default UserGreeting