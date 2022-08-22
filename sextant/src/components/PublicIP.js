import { useEffect, useState } from "react"


const PublicIP = (props) => {
  const { url } = props;
  const [ipAddress, setIpAdress] = useState('')
  
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