import React from 'react'
import Child from './Child'


class App extends React.Component{
    render(){
        let users = [{username: "Sarah123", age: 20}, {username: "John345", age: 22}, {username: "June8756", age: 18}];
        return (
            <>
            <div>
                {users.forEach(user => {
                    <Child username={user.username} age={user.age} />
                    })}
            </div>
            </>
        )
    }
}
