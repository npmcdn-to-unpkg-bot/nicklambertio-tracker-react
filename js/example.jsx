var React = require('react'),
    ReactDOM = require('react-dom');

export default class Example extends React.Component {
  render() {

    let title = 'hi';

    return (
      <div className={'example '}>
        {title}
      </div>
    );
  }
}
