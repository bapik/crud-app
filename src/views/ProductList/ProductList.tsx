import Column from '../../components/Column'
import ListItem from '../../components/ListItem'
import useFetch from '../../utils/useFetch'

export const ProductList = () => {
  const products = useFetch('products')

  if (!products.data) return 'loading'

  return (
    <>
      <h3 className='mb-3'>Product list</h3>
      <div className='row p-2 fw-bolder'>
        <Column>Name</Column>
        <Column>Category</Column>
      </div>
      <ul className='list-unstyled'>
        {products.data.map((product, index) => (
          <ListItem id={product.id} index={index} key={product.id}>
            <Column>{product.name}</Column>
            <Column>{product.category || 'none'}</Column>
          </ListItem>
        ))}
      </ul>
    </>
  )
}