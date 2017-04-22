var React = require('react');
var Popular = require('./Popular')

class App extends React.Component {
  render() {
    return (
      // wrapper for all the components
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

module.exports = App;
