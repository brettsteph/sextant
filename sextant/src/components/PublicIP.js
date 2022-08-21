import { useEffect, useState } from "react"


const PublicIP = (props) => {
  const { ipVersion } = props;
  const [ipAddress, setIpAdress] = useState('')
  let url = '';
  if (ipVersion === 'ipv4') {
    url = 'https://api.ipify.org?format=json';
  } else if (ipVersion === 'ipv6') {
    url = 'https://api64.ipify.org?format=json';
  }

  useEffect(() => {

    const fetchData = async () => {
      // get the data from the api
      const data = await fetch(url);
      // convert the data to json
      const json = await data.json();

      console.log(json.ip)
      // set state with the result
      setIpAdress(json.ip);
    }

    fetchData().catch(console.error)

  }, [url])

  return (
    <div className="id-address">
      {ipAddress}
    </div>
  )
}

export default PublicIP