import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class SubscribeForm extends React.Component {
  state = {
    name: null,
    email: null,
  };

  _handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value,
    });
  };

  _handleSubmit = e => {
    e.preventDefault();

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        if (result !== 'success') {
          throw msg;
        }
        alert(msg);
      })
      .catch(err => {
        console.log('err', err);
        alert(err);
      });
  };
  render() {
    return (
      <>
          <p>(all are welcome &amp; we won't spam you)</p> <br />
          <form onSubmit={this._handleSubmit}>
            <input
              type="text"
              onChange={this._handleChange}
              placeholder="first"
              name="FNAME"
            />
            <input
              type="text"
              onChange={this._handleChange}
              placeholder="last"
              name="LNAME"
            />
            <input
              type="email"
              onChange={this._handleChange}
              placeholder="email"
              name="email"
            />
            <input type="submit" id="subbtn" value="submit" />
          </form>
      </>
    );
  }
}