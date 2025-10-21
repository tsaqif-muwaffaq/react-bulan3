import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function ProductSearch() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const query = useQuery()
  const searchTerm = query.get('search') || ''

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setProducts(filtered)
        setLoading(false)
      })
  }, [searchTerm])

  if (loading) return <div className='container'><p>Loading products...</p></div>

  return (
    <div className='container'>
      <h2>Product Search</h2>
      <p>Search term: {searchTerm || 'All'}</p>
      <div className='product-list'>
        {products.map((p) => (
          <Link to={`/products/${p.id}`} key={p.id} className='product-card'>
            <img src={p.images[0]} alt={p.title} />
            <h3>{p.title}</h3>
            <p className='product-price'>${p.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductSearch
