import React  from 'react';
class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            music: "D:/music/Digimon World -next Order-/MP3/01. Accentier.mp3",
        };
    }
    render(){
        return(
            <div className="window">
                <header className="toolbar toolbar-header">
                <h1 className="title">Spira Music Player</h1>

                <div className="toolbar-actions ">
                    <div className="btn-group pull-left">
                        <button className="btn btn-default">
                            <span className="icon icon-home"></span>
                        </button>
                        <button className="btn btn-default">
                            <span className="icon icon-folder"></span>
                        </button>
                        <button className="btn btn-default active">
                            <span className="icon icon-cloud"></span>
                        </button>
                        <button className="btn btn-default">
                            <span className="icon icon-popup"></span>
                        </button>
                        <button className="btn btn-default">
                            <span className="icon icon-shuffle"></span>
                        </button>
                        <button className="btn btn-default">
                        <span className="icon icon-home icon-text"></span>
                            Filters
                        </button>
                    </div>

                    
                    
                    <div className="text-center pull-left">
                        <audio controls className="hidden">
                            <source src={this.state.music} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                    
                    <button className="btn btn-default btn-dropdown pull-right">
                    <span className="icon icon-megaphone"></span>
                    </button>
                </div>
                </header>
                <div className="window-content">
                    <div className="pane-group">
                    <div className="pane-sm sidebar">
                        <nav className="nav-group">
                            <div className="form-group">
                                <input type="search" placeholder="Search" />
                            </div>
                        </nav>
                        <nav className="nav-group">
                            <h5 className="nav-group-title">Playlist</h5>
                            <a className="nav-group-item active">
                                <span className="icon icon-music"></span>
                                Albums
                            </a>
                            <span className="nav-group-item">
                                <span className="icon icon-user"></span>
                                Artists
                            </span>
                            <span className="nav-group-item">
                                <span className="icon icon-note"></span>
                                Songs
                            </span>
                            <span className="nav-group-item">
                                <span className="icon icon-video"></span>
                                Now Playing
                            </span>
                        </nav>
                    </div>
                    <div className="pane">
                        
                    </div>
                    </div>
                </div>
                <footer className="toolbar toolbar-footer">
                    <h1 className="title"></h1>
                </footer>
            </div>
        )
    }
}

module.exports = Player;