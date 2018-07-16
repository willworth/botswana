import React, { Component } from 'react';

export default class CreateComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeSongName = this.onChangeSongName.bind(this);
        this.onChangeArtist = this.onChangeArtist.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            song: '',
            artist: ''
        }
    }
    onChangeSongName(e) {
        this.setState({
            song: e.target.value
        });
    }
    onChangeArtist(e) {
        this.setState({
            artist: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(`Song is ${this.state.song} and artist is ${this.state.artist}`);
        this.setState({
            song: '',
            artist: ''
        })
    }

 
    render() {
        return (
             <div style={{marginTop: 50}}>
                <h3>Add New Song</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Song Name:  </label>
                        <input type="text" value={this.state.song} className="form-control" onChange={this.onChangeSongName}/>
                    </div>
                    <div className="form-group">
                        <label>Artist: </label>
                        <input type="text" value={this.state.artist} className="form-control" onChange={this.onChangeArtist}/>
                    </div>
                   
                    <div className="form-group">
                        <input type="submit" value="Add Song" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}






/////////////////unmoded  will version

// import React, { Component } from 'react';

// export default class CreateComponent extends Component {
    
//     render() {
//         return (
//              <div style={{marginTop: 50}}>
//                 <h3>Add New Song</h3>
//                 <form>
//                     <div className="form-group">
//                         <label>Song Name:  </label>
//                         <input type="text" className="form-control"/>
//                     </div>
//                     <div className="form-group">
//                         <label>Artist: </label>
//                         <input type="text" className="form-control"/>
//                     </div>
//                     <div className="form-group">
//                         <label>Lyrics/Chords: </label>
//                         <input type="text" className="form-control"/>
//                     </div>
//                     <div className="form-group">
//                         <input type="submit" value="Add Song" className="btn btn-primary"/>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }

