export const handleForm = async (data: object, method: string, url: string) => {
  event.preventDefault()

  const res = await fetch(`https://newdemostock.gopos.pl/ajax/219/${url}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': 'true',
      'Authorization': 'fd9ba9e1-0788-4e8f-ac46-a43df43e205e'
    },
    body: JSON.stringify(data)
  })

  const json = await res.json()
  let errorArray = []

  if (json.errors.length > 0) {
    json.errors.forEach(error => {
      errorArray.push({ 
        field: error.field, 
        message: error.message, 
        type: 'error', 
        timeStamp: Date.now() + 8000
      })
    })
  } else {
    errorArray.push({
      field: 'Success',
      message: 'All, OK',
      type: 'success',
      timestamp: Date.now() + 8000
    })
  }

  return errorArray
}

export const getData = async (url: string) => {
  const res = await fetch(`https://newdemostock.gopos.pl/ajax/219/${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': 'true',
      'Authorization': 'fd9ba9e1-0788-4e8f-ac46-a43df43e205e'
    }
  })

  const json = await res.json()
  return json
}

interface ICategoryList {
  label: string,
  id: number
}

export const getCategoryName = (id: number, list: Array<ICategoryList>) => {
  const category = list.filter(category => category.id === id)

  return category[0]?.label
}