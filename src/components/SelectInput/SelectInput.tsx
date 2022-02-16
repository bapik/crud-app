import { useState, useEffect } from 'react'
import { getData } from '../../utils/helpers'

type Props = {
  categoryName: string,
  onSelect: Function
}

export const SelectInput = ({ categoryName, onSelect }: Props) => {
  const [categoryList, setCategoryList] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(async () => {
    const json = await getData(`product_categories?search=${filter}`)

    if (json.data.length === 1) return
    setCategoryList(json.data)
  }, [filter])

  useEffect(() => {
    if (categoryName) setFilter(categoryName)
  }, [categoryName])

  const clearInput = () => {
    setFilter('')
    onSelect('')
  }

  const handleChange = (event) => setFilter(event.target.value)

  const onFocus = () => clearInput()

  const onFocusOut = (event) => {
    const filteredArray = categoryList.filter(category => category.name === event.target.value)

    if (filteredArray.length > 0) {
      onSelect(filteredArray[0].id)
    } else {
      clearInput()
    }
  }

  return (
    <div>
      <input 
        className='form-control' 
        list='selectList' 
        placeholder='Select category'
        name='category'
        value={filter}
        onChange={handleChange}
        onFocus={onFocus} 
        onBlur={onFocusOut}
      />
      <datalist id='selectList'>
        {categoryList.map(category => (
          <option value={category.name} key={category.id}  />
        ))}
      </datalist>
    </div>
  )
}