import Card from 'react-bootstrap/Card';
import './Exibit.css'

function Exibit(props) {
  const { title, ipComponent } = props;
  return (
    <div>
      <Card className="exibit-card">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {ipComponent}
        </Card.Body>
      </Card>
    </div>
  )
}
export default Exibit;
