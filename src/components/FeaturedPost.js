import React from "react";
import { Jumbotron } from "reactstrap";
export function FeaturedPost({ id, title, description }) {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{title}</h1>
        <p className="lead">{description}</p>
      </Jumbotron>
    </div>
  );
}
