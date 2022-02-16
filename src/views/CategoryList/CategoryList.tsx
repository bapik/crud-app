import Column from '../../components/Column'
import ListItem from '../../components/ListItem'
import useFetch from '../../utils/useFetch'

export const CategoryList = () => {
  const categories = useFetch('product_categories')

  if (categories.length === 0) return 'Loading'

  return (
    <>
      <h3 className='mb-3'>Category list</h3>
      <div className='row p-2 fw-bolder'>
        <Column>Name</Column>
      </div>
      <ul className='list-unstyled'>
        {categories.data.map((category, index) => (
          <ListItem id={category.id} index={index} key={category.id}>
            <Column>{category.name}</Column>
          </ListItem>
        ))}
      </ul>
    </>
  )
}