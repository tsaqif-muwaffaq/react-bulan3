import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function ProductDetail() {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Product not found')
        }
        return res.json()
      })
      .then((data) => {
        setProduct(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className='container'><p>Loading product details...</p></div>
  if (error) return <div className='container'><p>Error: {error}</p></div>
  if (!product) return <div className='container'><p>Product not found.</p></div>

  return (
    <div className='container'>
      <Link to='/products' className='back-link'>&larr; Back to Products</Link>
      <div className='product-detail'>
        <img src={product.images[0]} alt={product.title} />
        <div className='product-detail-info'>
          <h2>{product.title}</h2>
          <p className='product-price'>${product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail