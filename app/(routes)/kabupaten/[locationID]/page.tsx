'use client'
// External Libaries
import { FC } from 'react'
// Components
// Utils
import useAxios from '@/app/hooks/useAxios'
import { useScrollTop } from '@/app/utils/scrollTop'
import CardSkeleton from '@/components/skeleton/cardSkeleton'
import Breadcrumbs from '@/components/general/breadcrumbs'
import ProductCard from '@/components/cards/productCard'
import { ProductsDatasProps } from '@/app/page'
// Types
type LocationPageProps = {
  params: {
    locationID: number
  }
}

const LocationPage: FC<LocationPageProps> = ({ params }) => {
  const { response } = useAxios(`locations/${params.locationID}`)
  useScrollTop()
  const locations = response.attributes
  console.log(locations)
  return (
    <div>
		<Breadcrumbs/>
      {locations ? (
        <>
		<h1 className='text-2xl font-semibold mb-4'>Barang Bekas di {locations.kabupaten}</h1>
          <div
            className="grid grid-cols-2 gap-3 justify-between"
            id="newest-products"
          >
            {locations.products.data.map(
              ({ attributes, id }: ProductsDatasProps) => (
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
                  productImageURl={
                    attributes.product_images.data[0].attributes.url
                  }
                  postDate={attributes.createdAt}
                />
              )
            )}
          </div>
        </>
      ) : (
        <p>loading..</p>
      )}
    </div>
  )
}
export default LocationPage
