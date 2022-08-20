import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Banner.css'

function Banner(props) {
  const { siteTitle } = props;
  return (
    <>
      <Navbar className='banner' variant="dark">
        <Container>
          <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Banner;