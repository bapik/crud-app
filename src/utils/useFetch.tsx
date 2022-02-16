import { useState, useEffect } from 'react'

type Props = {
  url: string
}

const useFetch = (url: string) => {
  const [data, setData] = useState([])

  useEffect(async () => {
    const res = await fetch(`https://newdemostock.gopos.pl/ajax/219/${url}`, {
      headers: {
        'Authorization': 'fd9ba9e1-0788-4e8f-ac46-a43df43e205e'
      }
    })

    const json = await res.json()
    setData({ data: json.data, errors: json.errors })
  }, [])

  return data
}

export default useFetch