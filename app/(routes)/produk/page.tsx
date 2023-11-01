'use client'
import React from 'react'
// Hooks
import useAxios from '@/app/hooks/useAxios'
// Components
import ProductCard from '@/components/cards/productCard'
import CardSkeleton from '@/components/skeleton/cardSkeleton'
import { ProductsDatasProps } from '@/app/page'
// Types
type Props = {}

const Products = (props: Props) => {
  const { response: products } = useAxios('products?populate=*')

  return (
    <div className='grid grid-cols-2 gap-2'>
      {products[0] ? (
        products
          .slice(0, 8)
          .map(({ attributes }: ProductsDatasProps) => (
            <ProductCard
              slug={attributes.slug}
              ambilDitempat={attributes.ambilDitempat}
              jarakMaksimal={attributes.jarakMaksimal}
              nego={attributes.nego}
              judul={attributes.title}
              harga={attributes.harga}
              kecamatan={attributes.kecamatan}
              images={attributes.product_images}
              kabupaten={attributes.kabupaten.data?.attributes.kabupaten}
              productImageURl={attributes.product_images.data[0].attributes.url}
              postDate={attributes.createdAt}
            />
          ))
      ) : (
        <CardSkeleton sum={8} cardType="product" />
      )}
    </div>
  )
}

export default Products
