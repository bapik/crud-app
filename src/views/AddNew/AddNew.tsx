import { useState, useEffect } from 'react'
import Input from '../../components/Input'
import SelectInput from '../../components/SelectInput'
import Label from '../../components/Label'
import Button from '../../components/Button'
import AlertContainer from '../../components/AlertContainer'
import { handleForm } from '../../utils/helpers'
import useFetch from '../../utils/useFetch'

export const AddNew = () => {
  const categoryList = useFetch('product_categories/search_select')
  const [product, setProduct] = useState({ type: 'BASIC', measure_type: 'KILOGRAM', tax_id: 1 })
  const [errors, setErrors] = useState([])
  const [category, setCategory] = useState({})

  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredErrors = errors.filter(error => Date.now() <= error.timeStamp)
      setErrors(filteredErrors)
    }, 2000)
    
    return () => clearTimeout(timer)
  })

  const handleProductInputChange = (event) => setProduct({ ...product, [event.target.name]: event.target.value })

  const handleCategoryInputChange = (event) => setCategory({ ...category, [event.target.name]: event.target.value })

  const handleCategorySelectChange = id => setProduct({ ...product, category_id: id })

  const onFormSubmit = async (data, method, url) => {
    event.preventDefault()

    const res = await handleForm(data, method, url)

    setErrors([...errors, ...res])
  }

  if (!categoryList.data) return 'Loading'

  return (
    <>
      <div className='row mb-4'>
        <h3 className='mb-4'>Add new product</h3>
        <form onSubmit={() => onFormSubmit(product, 'POST', 'products')}>
          <div className='mb-3'>
            <Label label='Produt name' />
            <Input name='name' value={product.name} onChange={handleProductInputChange} />
          </div>
          <div className='mb-3'>
            <Label label='Product category' />
            <SelectInput categoryName={product.category} onSelect={handleCategorySelectChange} />
          </div>
          <Button label='Add product' />
        </form>
      </div>
      
      <div className='row'>
        <h3 className='mb-4'>Add new category</h3>
        <form onSubmit={() => onFormSubmit(category, 'POST', 'product_categories')}>
          <div className='mb-3'>
            <Label label='Category name' />
            <Input name='name' value={category.name} onChange={handleCategoryInputChange} />
          </div>
          <Button label='Add category' />
        </form>
      </div>

      <AlertContainer errors={errors} />
    </>
  )
}