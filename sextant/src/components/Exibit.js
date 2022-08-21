import './Exibit.css'

function Exibit(props) {
  const { title, ipComponent } = props;
  return (
    <div className="exibit-card">
      <h2 className='exibit-title'>{title}</h2>
      {ipComponent}
    </div>
  )
}
export default Exibit;
