import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import { postUrl } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  fetchUrls = () => {
    getUrls()
    .then(data => this.setState({urls: data.urls}))
  }

  componentDidMount = () => this.fetchUrls()
  
  addUrl = (newUrl) => {
    postUrl(newUrl)
    .then((data) => this.setState({urls: [data, ...this.state.urls]}))
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
