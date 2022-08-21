import './Banner.css'

function Banner(props) {
  const { siteTitle } = props;
  return (
    <div className='banner'>
      <h1>{siteTitle}</h1>
    </div>
  );
}

export default Banner;