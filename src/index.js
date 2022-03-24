import React from 'react';
import ReactDOM from 'react-dom';
import ParkDetail from './ParkDetail';
import Park from './Park';

class App extends React.Component {
  state = {
    JSONdata: null,
    errorMessage: ''
  };

  componentDidMount() {
    const dataSetUrl = './parks.json',
      proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    fetch(proxyUrl + dataSetUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ JSONdata: data });
      })
      .catch(error => {
        this.setState({ errorMessage: error });
      });
  }

  compenentDidUpdate() {}

  compenentWillUnmount() {
    this.setState({ errorMessage: '' });
  }

  /* This function allows us to get the property of a JSON object as a template literal. */
  sanatizeData(obj, property) {
    return obj[property];
  }
  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.JSONdata) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.JSONdata) {
      return <div>Loading!</div>;
    }

    return (
      <div className="ui container parks">
        {this.state.JSONdata.map((park, index) => (
          <Park key={`id${index}`}>
            <ParkDetail
              image={this.sanatizeData(park, 'Image')}
              thumbnail={this.sanatizeData(park, 'Thumbnail')}
              name={this.sanatizeData(park, 'Name')}
              description={this.sanatizeData(park, 'Description')}
              location={this.sanatizeData(park, 'Location')}
              established={this.sanatizeData(park, 'Established')}
              area={this.sanatizeData(park, 'Area')}
              recreationVisitors={this.sanatizeData(
                park,
                'Recreation visitors'
              )}
            />
          </Park>
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
