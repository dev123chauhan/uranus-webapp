import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function YoutubeSource() {
  return (
    <Container className='mb-5'>
      {/* Embedded YouTube Video */}
      <Row>
        <Col>
          <iframe
           className='w-100'
           height={500}
            src="https://www.youtube.com/embed/gI7qfHuLQ6Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}
