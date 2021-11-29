import * as React from "react";
import { ipcRenderer } from "electron";

export class Dashboard extends React.Component {
  state = {
    message: ""
  };

  componentDidMount() {
    ipcRenderer.on("greeting", this.onMessage);
  }

  componentWillUnmount() {
    ipcRenderer.removeAllListeners("greeting");
  }

  render() {
    return <div>{this.state.message}</div>;
  }

  onMessage = (event, message) => {
    this.setState({ message: message });
  };
}

export default Dashboard;