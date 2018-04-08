import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavTemplate from './NavTemplate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render() {
    return (
      <div>
        <NavTemplate />
        <main role="main" className="container">
        <div className="starter-template">
          <h1>Bootstrap starter template</h1>
        </div>
        <div className="my-3 p-3 bg-white rounded box-shadow">
        <h6 className="border-bottom border-gray pb-2 mb-0">Recent Job Postings</h6>
          <div className="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" className="mr-2 rounded"></img>
            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <strong className="d-block text-gray-dark">Jakarta, Indonesia</strong>
              <span>Test Company</span><br />
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
              </div>
          </div>
          <div className="media text-muted pt-3">
            <img data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1" alt="" className="mr-2 rounded"></img>
            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <strong className="d-block text-gray-dark">@username</strong>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
              </div>
          </div>
        </div>

        <div className="App">
          <p className="App-intro starter-template">
            {this.state.fetching
              ? 'Fetching message from API'
              : this.state.message}
          </p>
        </div>
        </main>

      <footer className="footer">
      <div className="container">
        <span className="text-muted">© 2018 TeflWeb.com. All Rights Reserved.</span>
        <span className="text-muted float-right"> Home | About | Contact</span>
      </div>
    </footer>
      </div>

    );
  }
}

export default App;
