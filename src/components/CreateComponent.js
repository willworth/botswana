import React, { Component } from 'react';

export default class CreateComponent extends Component {
    
    render() {
        return (
             <div style={{marginTop: 50}}>
                <h3>Add New Song</h3>
                <form>
                    <div className="form-group">
                        <label>Song Name:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Artist: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Lyrics/Chords: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Song" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}




//////////////old/////////////////

// CreateComponent.js

// import React, { Component } from 'react';

// export default class CreateComponent extends Component {

//     constructor(props) {
//         super(props);
//         this.onChangeHostName = this.onChangeHostName.bind(this);
//         this.onChangePort = this.onChangePort.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             name: '',
//             port: ''
//         }
//     }
//     onChangeHostName(e) {
//         this.setState({
//             name: e.target.value
//         });
//     }
//     onChangePort(e) {
//         this.setState({
//             port: e.target.value
//         });
//     }
//     onSubmit(e) {
//         e.preventDefault();
//         console.log(`name is ${this.state.name} and port is ${this.state.port}`);
//         this.setState({
//             name: '',
//             port: ''
//         })
//     }

//     render() {
//         return (
//             <div style={{marginTop: 50}}>
//                 <h3>Add New Server</h3>
//                 <form onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                         <label>Add Host Name:  </label>
//                         <input type="text" value={this.state.name} className="form-control" onChange={this.onChangeHostName}/>
//                     </div>
//                     <div className="form-group">
//                         <label>Add Server Port: </label>
//                         <input type="text" value={this.state.port} className="form-control" onChange={this.onChangePort}/>
//                     </div>
//                     <div className="form-group">
//                         <input type="submit" value="Add Node server" className="btn btn-primary"/>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }