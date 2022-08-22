import './Exibit.css'

function Exibit(props) {
  const { title, Component } = props;
  return (
    <div className="exibit-card">
      <h2 className='exibit-title'>{title}</h2>
      {Component}
    </div>
  )
}
export default Exibit;
