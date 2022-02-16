import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Button from '../../components/Button'
import SelectInput from '../../components/SelectInput'
import AlertContainer from '../../components/AlertContainer'
import { getData, handleForm, getCategoryName } from '../../utils/helpers'
import useFetch from '../../utils/useFetch'

export const Product = () => {
  const [product, setProduct] = useState()
  const [errors, setErrors] = useState([])
  const params = useParams()
  const categoryList = useFetch('product_categories/search_select')

  useEffect(async () => {
    const json = await getData(`products/${params.productId}`)

    setProduct({
      name: json.data.name,
      category_id: json.data.category_id,
      type: json.data.type,
      measure_type: json.data.measure_type,
      tax_id: json.data.tax_id
    })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredErrors = errors.filter(error => Date.now() <= error.timeStamp)
      setErrors(filteredErrors)
    }, 2000)
    
    return () => clearTimeout(timer)
  })

  const handleInputChange = (event) => setProduct({ ...product, [event.target.name]: event.target.value })

  const handleCategorySelect = id => setProduct({ ...product, category_id: id })

  const onFormSubmit = async () => {
    event.preventDefault()

    const res = await handleForm(product, 'PUT', `products/${params.productId}`)

    setErrors([...errors, ...res])
  }

  if (!product || !categoryList.data) return 'loading'

  return (
    <>
      <h3 className='mb-4'>Update product</h3>
      <form onSubmit={onFormSubmit}>
        <div className='mb-3'>
          <Label label='Produt name' />
          <Input name='name' value={product.name} onChange={handleInputChange} />
        </div>
        <div className='mb-3'>
          <Label label='Product category' />
          <SelectInput categoryName={getCategoryName(product.category_id, categoryList.data)} onSelect={handleCategorySelect} />
        </div>
        <Button label='Save changes' />
      </form>
      <AlertContainer errors={errors} />
    </>
  )
}