import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    console.log("child constructor ", this.props.myId);
  }

  componentDidMount() {
    console.log("child component mounted", this.props.myId);
  }

 componentWillUnmount(){
  console.log("child component will unmount");
 }

  render() {
    console.log("child render", this.props.myId);

    return (
      <div className="classComponent">
        <h1>count : {this.state.count}</h1>
        <h1>{this.props.name} </h1>
        <h2>Location Ujjain</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          increase count
        </button>
      </div>
    );
  }
}

export default UserClass;

// class UserClass extends React.Component

// constructor(props){ super(props)
// we can access this prop by using this.props.name
// }
