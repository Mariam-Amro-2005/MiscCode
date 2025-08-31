import React from 'react'


class Child extends React.Component{
    render(){
        return (
            <>
            <div>
                Username: {this.props.username}. Age: {this.props.age}.
            </div>
            </>
        )
    }
}

export default Child;