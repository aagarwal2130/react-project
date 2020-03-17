import React from "react";
import Moment from "react-moment";
import data from "../../data/headlines.json";
import { getHeadlines } from "../../global/Services";
import "./Headlines.scss";

class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: []
    };
  }

  componentDidMount() {
    getHeadlines({ country: this.props.country })
      .then(headlines => headlines.data)
      .then(headlines => {
        this.setState({
          headlines: headlines.articles
        });
      })
      .catch(error => {
        this.setState({ headlines: data.articles });
      });
  }

  render() {
    return (
      <div className="headlines-container">
        {this.state.headlines.map((headline, index) => {
          const imageSrc = headline.urlToImage
            ? headline.urlToImage
            : require("../../assets/headlines-placeholder.jpg");

          return (
            <div className="headlines-content" key={index}>
              <img src={imageSrc} alt="Headlines"></img>
              <div className="description">
                <a
                  href={headline.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <h4>{headline.title}</h4>
                </a>
                <ul>
                  {headline.author && <li>{headline.author}</li>}
                  <li>
                    <Moment from={new Date()}>{headline.publishedAt}</Moment>
                  </li>
                </ul>
                <p>{headline.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Headlines;
