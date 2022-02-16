import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Button from '../../components/Button'
import AlertContainer from '../../components/AlertContainer'
import { getData, handleForm } from '../../utils/helpers'

export const Category = () => {
  const [category, setCategory] = useState()
  const [errors, setErrors] = useState([])
  const params = useParams()

  useEffect(async () => {
    const json = await getData(`product_categories/${params.categoryId}`)

    setCategory({ name: json.data.name })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredErrors = errors.filter(error => Date.now() <= error.timeStamp)
      setErrors(filteredErrors)
    }, 2000)
    
    return () => clearTimeout(timer)
  })

  const handleInputChange = (event) => setCategory({ [event.target.name]: event.target.value })

  const onFormSubmit = async () => {
    event.preventDefault()

    const res = await handleForm(category, 'PUT', `product_categories/${params.categoryId}`)

    setErrors([...errors, ...res])
  }

  if (!category) return 'Loading'

  return (
    <>
      <h3 className='mb-3'>Update category</h3>
      <form onSubmit={onFormSubmit}>
        <div className='mb-3'>
          <Label label='Category name' />
          <Input name='name' value={category.name} onChange={handleInputChange} />
        </div>
        <Button label='Save changes' />
      </form>
      <AlertContainer errors={errors} />
    </>
  )
}