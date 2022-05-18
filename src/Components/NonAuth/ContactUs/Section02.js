import React from 'react'
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'

const Section02 = () => {
  return (
    <>
      <div className="section04">
        <Container>
          <Col lg={8} className='m-auto'>
            <h2 className='text-primary headingText text-center mt-5' data-aos="zoom-in">Schedule a Free Strategy Call</h2>
            <div className="headingText02 text-center mb-4" data-aos="zoom-in">
              <h4>Try the best way to grow your app’s downloads and revenue</h4>
            </div>
            <div className="paragraphText text-center text-muted" data-aos="zoom-in">
              <p>
                Schedule a demo and learn how you can get unlimited app store optimization and app marketing support to increase your keyword rankings, conversions, and downloads. One flat monthly rate. Cancel anytime.
              </p>
            </div>
            <Card className='my-5 shadow border-0 p-4'>
              <Card.Body>
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="name">
                      <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="AppLink">
                    <Form.Control placeholder="App Link" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Control placeholder="Apartment, studio, or floor" />
                  </Form.Group>

                  <Form.Group className="mb-3" as={Col} controlId="formGridState">
                    <Form.Select defaultValue="Choose...">
                      <option>0 - 100</option>
                      <option>101 - 500</option>
                      <option>501 - 1000</option>
                      <option>1000+</option>
                    </Form.Select>
                  </Form.Group>

                  <FloatingLabel controlId="floatingTextarea" label="Messages" className="mb-3">
                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                  </FloatingLabel>

                  <Button className='inputBtn' variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </div>
    </>
  )
}

export default Section02