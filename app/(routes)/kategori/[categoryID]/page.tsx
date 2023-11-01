'use client'
// External Libaries
import React, { FC } from 'react'
// Components
import Breadcrumbs from '@/components/general/breadcrumbs'
// Utils
import useAxios from '@/app/hooks/useAxios'
import { ProductType } from '@/type/productType'
import ProductCard from '@/components/cards/productCard'
// Types
// Icons
type CategoryPageProps = {
  params: {
    categoryID: number
  }
}

type CategoryProps = {
  attributes: ProductType
  id: number
}

const CategoryPage: FC<CategoryPageProps> = ({ params }) => {
  const { response } = useAxios(
    `categories/${params.categoryID}?populate[products][populate][0]=product_images`
  )
  const category = response.attributes

  return (
    <div>
      <Breadcrumbs />
      <h1 className="font-semibold text-2xl">{category?.judul}</h1>
      <div className="grid grid-cols-2">
        {category?.products.data.map(({ attributes, id }: CategoryProps) => (
          <ProductCard
            key={id}
            slug={attributes.slug}
            ambilDitempat={attributes.ambilDitempat}
            jarakMaksimal={attributes.jarakMaksimal}
            nego={attributes.nego}
            judul={attributes.title}
            harga={attributes.harga}
            kecamatan={attributes.kecamatan}
            images={attributes.product_images}
            kabupaten={attributes.kabupaten.data.attributes.kabupaten}
            productImageURl={attributes.product_images.data[0].attributes.url}
            postDate={attributes.createdAt}
          />
        ))}
      </div>
    </div>
  )
}
export default CategoryPage
