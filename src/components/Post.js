import React from "react";
import { Jumbotron } from "reactstrap";
import { useParams } from "react-router-dom";
export function Post() {
  const { id } = useParams();
  console.log("Post -> id", id);

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">My Post title</h1>
      </Jumbotron>
      <p>My content</p>
    </div>
  );
}
