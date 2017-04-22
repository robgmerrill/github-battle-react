var React = require('react');

class Popular extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLangauge.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLanguage = lang
      }
    });
  }
  render() {
    // show languages to the view
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className='languages'>
        {languages.map(function(lang) {
          return (
            console.log(this)
            <li
            key={lang}>
              {lang}
            </li>
          )
        })}
      </ul>

    )
  }
}

module.exports = Popular;
