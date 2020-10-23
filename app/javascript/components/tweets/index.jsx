import React from "react";
import PropTypes from "prop-types";
import {
  Container
} from "@material-ui/core";
import _ from "lodash";

import Tweet from './tweet';

class TweetsIndex extends React.Component {
  renderTweets() {

    return _.map(this.props.tweets, (tweet) => (
      <Tweet tweet={tweet} user_id={this.props.user_id} key={tweet.id} />
    ));
  }
  render() {
    // console.log(this.props.tweets);
    const containerStyle = {
      padding: 10,
    };
    return (
      <React.Fragment>
        <Container maxWidth="sm" style={containerStyle}>
          {this.renderTweets()}
        </Container>
      </React.Fragment>
    );
  }
}

// TweetsIndex.propTypes = {
//   tweets: PropTypes.array,
// };
export default TweetsIndex;
