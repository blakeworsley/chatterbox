import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { connect } from "../../api";
import "./styles.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    connect(message => { console.log(message) });
  }

  render() {
    return (
      <section className="fullpage--padded-top">
        <h1 className="title">Chatterbox</h1>
        <form className="form--with-space">
          <Link to="/register" className="button" disabled>
            REGISTER
          </Link>
          <Link to="/login" className="button">
            LOGIN
          </Link>
        </form>
      </section>
    );
  }
}

export default inject("userStore")(observer(Home));

// import React, { Component } from "react";
// import "./styles.scss";
// import { testGet, testPost } from "../../api.js";
//
// class Home extends Component {
//   state = {
//     response: "",
//     post: "",
//     responseToPost: ""
//   };
//   componentDidMount() {
//     testGet()
//       .then(res => this.setState({ response: res.test }))
//       .catch(err => console.log(err));
//   }
//
//   handleSubmit = async e => {
//     e.preventDefault();
//     const body = await testPost(this.state.post);
//     this.setState({ responseToPost: body });
//   };
//
//   render() {
//     return (
//       <div className="container">
//         <p>{this.state.response}</p>
//         <form onSubmit={this.handleSubmit}>
//           <h3>Post to Server:</h3>
//           <input
//             type="text"
//             value={this.state.post}
//             onChange={e => this.setState({ post: e.target.value })}
//           />
//           <button type="submit">Submit</button>
//         </form>
//         <p>{this.state.responseToPost}</p>
//       </div>
//     );
//   }
// }
//
// export default Home;
