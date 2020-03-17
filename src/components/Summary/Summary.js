import React from "react";
import "./Summary.css";

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", feedback: "", submit: false };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleFeedbackChange = event => {
    this.setState({ feedback: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submit: true });
  };

  render() {
    return (
      <div className="summary-container">
        <h4>Feedback</h4>
        {!this.state.submit && (
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="summary-row">
              <label>Name:</label>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </div>
            <div className="summary-row">
              <label>Comments:</label>
              <textarea onChange={this.handleFeedbackChange}></textarea>
            </div>
            <div className="summary-submit">
              <input type="submit" value="Submit" />
            </div>
          </form>
        )}
        {this.state.submit && (
          <p>Thank you for your feedback {this.state.name}!!.</p>
        )}
      </div>
    );
  }
}

export default Summary;
