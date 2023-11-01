// External Libaries
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'
import Delivery from '@/assets/delivery.png'
import CashOnDelivery from '@/assets/cash-on-delivery.png'
import TakeAtHome from '@/assets/take-at-home.png'
type OrderComponentProps = {
  antar: number
  ambilDitempat: boolean
}

interface OrderMethodProps {
  image: StaticImageData
  title: string
  text: string
}

const OrderMethod: FC<OrderMethodProps> = ({ image, title, text }) => {
  return (
    <div className="flex items-start gap-3 mt-2 bg-slate-100 p-2 rounded-sm">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-[3rem] h-[3rem] object-fill p-1 border-2 rounded-md border-secondary"
      />

      <div>
        <h2 className="font-semibold text-xl leading-4 text-primary mb-[4px]">
          {title}
        </h2>
        <p>{text}</p>
        <a href="/" className="underline text-secondary">
          {' '}
          Tanya Penjual lebih lanjut
        </a>
      </div>
    </div>
  )
}

const OrderComponent: FC<OrderComponentProps> = ({ antar, ambilDitempat }) => {
  return (
    <div>
      <OrderMethod
        image={CashOnDelivery}
        title="Cash On Delivery"
        text="Kamu dan penjual bisa bertemu di alamat yang sudah ada untuk melakukan transaksi"
      />
      {antar && (
        <OrderMethod
          image={Delivery}
          title="Antar Ketempat Pembeli"
          text={`Penjual Bisa mengantar Barang Anda, Dalam Radius ${antar}KM ke alamat Kamu`}
        />
      )}
      {ambilDitempat && (
        <OrderMethod
          image={TakeAtHome}
          title="Ambil Ditempat"
          text="Kamu bisa datang dan mengambil barang di lokasi penjual"
        />
      )}
    </div>
  )
}
export default OrderComponent
