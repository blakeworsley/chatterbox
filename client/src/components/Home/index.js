import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import "./styles.scss";

class Home extends Component {
  render() {
    return (
      <section className="home">
        <Link to="/register" className='home__button'>REGISTER</Link>
        <Link to="/login" className='home__button'>LOGIN</Link>
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
