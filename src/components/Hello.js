import React from 'react';
const Hello = () => {
    //using JSx
    // return (
    //     <div>
    //        <h1>Hello Vitwit</h1> 
    //     </div>
    // )
    return React.createElement('div',null,
    React.createElement('h1',null,'Hello vitwit'))
}
export default Hello