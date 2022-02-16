import { render } from 'react-dom'
import { HashRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap'
import App from './components/App'
import Section from './components/Section'
import CategoryList from './views/CategoryList'
import ProductList from './views/ProductList'
import Product from './views/Product'
import Category from './views/Category'
import AddNew from './views/AddNew'
import './styles.sass'

render((
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='products' element={<Section />}>
          <Route path=':productId' element={<Product />} />
          <Route index element={<ProductList />} />
        </Route>
        <Route path='categories' element={<Section />}>
          <Route path=':categoryId' element={<Category />} />
          <Route index element={<CategoryList />} />
        </Route>
        <Route path='add' element={<Section />}>
          <Route index element={<AddNew />} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>
), document.getElementById('root'))