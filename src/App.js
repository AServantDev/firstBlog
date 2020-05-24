import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { FeaturedPost } from "./components/FeaturedPost";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Post } from "./components/Post";

const mockPosts = [
  { id: 0, title: "Mon titre 1", content: "My content 1" },
  { id: 1, title: "Mon title 2", content: "My content 2" },
];
function App() {
  function getPosts() {
    return mockPosts;
  }
  const posts = getPosts();

  function renderPosts(posts) {
    return posts.map(({ id, title, description }) => (
      <Col xs="6">
        <Card>
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardText>{description}</CardText>
            <Link to={`/posts/${id}`}>Rides Mort</Link>
          </CardBody>
        </Card>
      </Col>
    ));
  }
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <FeaturedPost
              title="Titre"
              description="description"
            ></FeaturedPost>
            <Container>
              <Row>{renderPosts(posts)}</Row>
            </Container>
          </Route>
          <Route path="/posts/:id">
            <Post />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
