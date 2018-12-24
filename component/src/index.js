import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div style={styles.Container}>
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            name="John"
            timeAgo="Today at 4:20 PM"
            content="Nice blog post"
            avatar={Faker.image.avatar()}
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            name="Doe"
            timeAgo="Today at 2:00 PM"
            content="I like the subject"
            avatar={Faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            name="Jane"
            timeAgo="Yesterday at 2:30 PM"
            content="I like the content"
            avatar={Faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            name="Indriani Setiawan"
            timeAgo="Yesterday at 11:07 PM"
            content="I miss you much"
            avatar={Faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    </div>
  );
};

const styles = {
  Container: {
    paddingTop: 20,
    paddingLeft: 10
  }
};

ReactDOM.render(<App />, document.querySelector("#root"));
