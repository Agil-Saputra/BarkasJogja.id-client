// External Libaries
import Image from 'next/image'
import {FC} from 'react'
// Components
// Utils
// Types
// Icons
import thumbnails from '@/assets/ads.png'
type OrderComponentProps = {
	antar : number
}

const OrderComponent: FC<OrderComponentProps> = ({antar}) => {
  return (
	<div className='flex items-start gap-2 mt-2 bg-slate-100 p-2 rounded-sm'>
		<Image src={thumbnails} alt='kontol' width={400} height={400} className='w-[5rem] border-2 border-secondary h-[5rem] rounded-sm object-cover'/>
		<div>
			<h2 className='font-semibold text-xl leading-4 text-primary mb-[4px]'>Antar Ketempat</h2>
			<p>Penjual Bisa mengantar Barang Anda, Dalam Radius <span className='font-extrabold text-secondary'>{antar}Km </span>
			dari Alamat penjual.
			</p>
			<a href="/" className='underline text-secondary'> Tanya Penjual lebih lanjut</a>
			
		</div>
	</div>
  )
}
export default OrderComponent
