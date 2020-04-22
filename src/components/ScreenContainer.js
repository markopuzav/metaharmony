import React from "react";
import Container from "react-bootstrap/Container";

function ScreenContainer({ title, children }) {
  return (
    <Container style={{ minHeight: 720 }} fluid="md">
      {children}
    </Container>
  );
}

export default ScreenContainer;
