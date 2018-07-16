import React, { Component } from 'react';

export default class IntroComponent extends Component {
    render() {
        return (
            <div >
            <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">This is Song Saver.</h1>
          <p>A simple note taking app aimed at people who sing songs and want to manage their repertoire.</p>
          <p>The idea is you can group songs together in various ways to create setlists, or use the app to help you 
            practise before any of your songs get rusty.</p>
          <p><a class="btn btn-dark btn-lg" href="/create" role="button">Add your first song</a></p>
        </div>
      </div>
            </div>
        )
    }
}