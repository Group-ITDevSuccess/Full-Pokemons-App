import React, {FunctionComponent, useState} from 'react';
  
const App: FunctionComponent = () => {
//  const name: String = 'React';
const [name, setName] = useState<string>('KIKO') ;
    
 return (
  <h1>Hello, {name} !</h1>
 )
}
  
export default App;

/*
import React from 'react';

export default class App extends React.Component {
    const name: string = "React";

    render(){
        return <h1>Hello , {name}</h1>
    }
}
*/

