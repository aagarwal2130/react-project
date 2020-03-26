import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import logo from "../../logo.svg";
import Error from "../Error/Error";
import { getArticles } from "../../global/Services";
import "./Headlines.scss";

class Headlines extends React.Component {
  componentDidMount() {
    this.props.getArticles({ country: this.props.country });
  }

  render() {
    const { isLoading, isSuccess, headlines, searchTerm } = this.props;

    return (
      <div className="headlines-container">
        {isLoading ? (
          <img src={logo} alt="logo" className="loader" />
        ) : !isSuccess ? (
          <Error message="Error in retrieving results at this moment."></Error>
        ) : headlines.length === 0 ? (
          <Error
            message={`No results found for search term "${searchTerm}"`}
          ></Error>
        ) : (
          headlines.map((headline, index) => {
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
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  country: state.location.country,
  isLoading: state.headlines.isLoading,
  isSuccess: state.headlines.isSuccess,
  headlines: state.headlines.articles,
  searchTerm: state.headlines.searchTerm
});

const mapDispatchToProps = {
  getArticles
};

export default connect(mapStateToProps, mapDispatchToProps)(Headlines);
