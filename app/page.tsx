'use client'
// Components
import CategoryCard from '../components/cards/categoryCard';
import ProductCard from '../components/cards/productCard';
import LocationCard from '../components/cards/locationCard';
import CardSkeleton from '@/components/skeleton/cardSkeleton';
import AdsBanner from '@/components/general/banner/adsBanner';
// Assets
import ads1 from "@/assets/ads.png" 
import ads2 from "@/assets/ads2.png" 
// Hooks
import useAxios from './hooks/useAxios';
import { ProductType } from '@/type/productType';

type CategoryProps = {
	attributes : {
		judul : string
		categoryImage : any
	}
	id : number
}

export type ProductsDatasProps = {
	attributes : ProductType
	id : number
}

type LocationsProps = {
	attributes : {
		kabupaten : string
		locationLogo : any
	}
	id : number
}

export default function Home() {
	const {response : categoriesResponse} = useAxios('categories')
	const {response : newestProducts} = useAxios('products', 'sort=createdAt:desc')
	const {response : locations} = useAxios('locations')

  return (
    <main className="">
      <div className="flex flex-wrap gap-3 justify-between content-center">
		{categoriesResponse[0] ? categoriesResponse.slice(0, 10).map(({attributes, id} : CategoryProps) => (
			 <CategoryCard key={id} categoryID={id} categoryTitle={attributes.judul} categoryImageURL={attributes.categoryImage?.data?.attributes?.url} />
		)) : (
			<CardSkeleton sum={10} cardType='category'/> 
		)}
      </div>
      
	  <AdsBanner AdsImageUrl={ads1}/>

      <div className="flex items-center mt-4 mb-2 justify-between">
        <h1 className="font-semibold text-[1.3rem] mt-2">Produk Terbaru</h1>
        <a href="/products" className="text-primary underline">
          Lihat Semua
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3 justify-between" id='newest-products'>
        {newestProducts[0] ? (newestProducts.slice(0, 10).map(({attributes, id} : ProductsDatasProps) => (
			<ProductCard key={id} slug={attributes.slug} id={id} ambilDitempat={attributes.ambilDitempat} jarakMaksimal={attributes.jarakMaksimal} nego={attributes.nego} judul={attributes.title} harga={attributes.harga} kecamatan={attributes.kecamatan} images={attributes.product_images} kabupaten={attributes.kabupaten} productImageURl={attributes.product_images.data[0].attributes.url} postDate={attributes.createdAt}/>

		))) : (<CardSkeleton sum={8} cardType='product'/>)}
      </div>
      <h1 className="font-semibold text-[1.3rem] mt-4 mb-2">
        Cari Di Lokasi Anda
      </h1>
      <div className="grid max-[380px]:grid-cols-2 grid-cols-3  justify-between gap-4">
        {locations[0] ? (locations.map((location : LocationsProps) => (
			<LocationCard key={location.id} LocationID={location.id} title={location.attributes.kabupaten} logoURL={location.attributes.locationLogo.data.attributes.url}/>
		))) : (	<CardSkeleton sum={5} cardType='location'/>)}
      </div>
	  <AdsBanner AdsImageUrl={ads2}/>
    </main>
  );
}
