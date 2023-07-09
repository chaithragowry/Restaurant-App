import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Headers() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/10/attachment_45092251.png?auto=format&q=60&fit=max&w=930"
              width="90"
              height="70"
              className="d-inline-block align-middle"
            />{' '}
            The Cosmic Clock
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Headers