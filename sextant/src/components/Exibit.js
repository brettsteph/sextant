import Card from 'react-bootstrap/Card';
import './Exibit.css'

function Exibit(props) {
  const { title } = props;
  return (
    <>
      <h2>{title}</h2>
      <Card className="exibit-card">
        <Card.Body>
          <Card.Title>Data Point 1</Card.Title>
          <Card.Text>
            A pretty container to logically separate different data points
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="exibit-card">
        <Card.Body>
          <Card.Title>Data Point 2</Card.Title>
          <Card.Text>
            A pretty container to logically separate different data points
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
export default Exibit;
