import Card from 'react-bootstrap/Card';
import './Exibit.css'

function Exibit(props) {
  const { title } = props;
  return (
    <Card className="exibit-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>        
        <Card.Text>
        A pretty container to logically separate different data points
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  )
}
export default Exibit;
