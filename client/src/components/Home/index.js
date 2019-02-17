import React, { Component } from "react";
import "./styles.scss";
import { testGet, testPost } from "../../api.js";

class Home extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: ""
  };
  componentDidMount() {
    testGet()
      .then(res => this.setState({ response: res.test }))
      .catch(err => console.log(err));
  }

  handleSubmit = async e => {
    e.preventDefault();
    const body = await testPost(this.state.post);
    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="container">
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <h3>Post to Server:</h3>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default Home;