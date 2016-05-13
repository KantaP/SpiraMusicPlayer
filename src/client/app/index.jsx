import React  from 'react';
import {render} from 'react-dom';
import Player from './components/player.jsx';

class App extends React.Component{
    render(){
        return(
            <Player />
        )
    }
}

render(<App />,document.getElementById('app')); 