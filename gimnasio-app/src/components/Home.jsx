import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <h1 className="text-center mt-5 animate__animated animate__bounce">Bienvenido al Gimnasio</h1>
      <h2 className="text-center mb-4">Mejora tu salud y bienestar</h2>

      <p>
        El gimnasio es el lugar ideal para mantenerte en forma y mejorar tu salud. Aquí encontrarás un ambiente motivador y profesionales capacitados que te guiarán en tu entrenamiento.
      </p>
      <p>
        La gimnasia regular tiene numerosos beneficios para tu cuerpo y mente. Ayuda a fortalecer los músculos, mejorar la flexibilidad, aumentar la resistencia y reducir el estrés. Además, te brinda la oportunidad de socializar y conocer nuevas personas con intereses similares.
      </p>
      <p>
        No importa cuál sea tu nivel de condición física, en el gimnasio encontrarás opciones de entrenamiento adaptadas a tus necesidades. Desde clases de cardio y musculación hasta actividades como yoga y pilates, hay algo para todos.
      </p>

      <h3 className="mt-5">Explora nuestras instalaciones</h3>
      <Row className="card-container">
        <Col>
          <Card>
            <Card.Img variant="top" src="../assets/1.jpg" />
            <Card.Body>
              <Card.Title>Área de musculación</Card.Title>
              <Card.Text>
                Descubre nuestra completa área de musculación equipada con máquinas de última generación.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="../assets/2.jpg" />
            <Card.Body>
              <Card.Title>Clases grupales</Card.Title>
              <Card.Text>
                Participa en nuestras clases grupales, desde spinning y zumba hasta entrenamiento funcional.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="../assets/3.jpg" />
            <Card.Body>
              <Card.Title>Piscina y spa</Card.Title>
              <Card.Text>
                Relájate y disfruta de nuestras instalaciones acuáticas, que incluyen piscina y zona de spa.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 className="mt-5">Descubre nuestro carrusel de imágenes</h3>
      <Carousel className="mt-4">
        <Carousel.Item>
          <img className="d-block w-100" src="../assets/1.jpg" alt="Imagen 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="../assets/2.jpg" alt="Imagen 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="../assets/3.jpg" alt="Imagen 3" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Home;
