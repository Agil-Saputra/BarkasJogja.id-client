'use client'
import React from 'react'
// Hooks
import useAxios from '@/app/hooks/useAxios'
import { ProductsDatasProps } from '@/app/page'
import ProductCard from '@/components/cards/productCard'
import CardSkeleton from '@/components/skeleton/cardSkeleton'

type Props = {
	params : {
		searchQuery : string
	}
}

const page = ({params}: Props) => {
	const {response : searchedProducts} = useAxios(`products?populate=*&filters[title][$contains]=${params.searchQuery.replaceAll('%20', ' ').toLowerCase()}`)
  return (
	<div>
		<div className="grid grid-cols-2 gap-2">
        {searchedProducts ? (
        searchedProducts.map(({ attributes }: ProductsDatasProps) => (
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
	  {!searchedProducts[0] && <p className='text-center'>Maaf barang yang kamu cari sedang tidak ada, kamu bisa cari kata kunci lain atau pilih menu permintaan dan masukkan barang apa yang ingin kamu cari nanti akan ada penjual yang mungkin menghubungi kamu </p>}
	</div>
  )
}

export default page