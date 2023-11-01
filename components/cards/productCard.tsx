// Next
import Image from 'next/image';
// External Libaries
import { FC } from 'react';
// Components
import CardBadge from './cardBadge';
// Icons
import { MdLocationPin, MdAccessTime } from 'react-icons/md';
// Hooks
import { useCalculatePostDate } from '@/app/utils/calculatePostDate';
import Link from 'next/link';

type ProductCardProps = {
  postDate: string;
  harga: string;
  kecamatan: string;
  kabupaten: string;
  judul: string;
  images: FileList;
  jarakMaksimal: number;
  productImageURl : string;
  nego : boolean;
  ambilDitempat : boolean
  slug : string
};

const ProductCard: FC<ProductCardProps> = ({
  harga,
  judul,
  kecamatan,
  kabupaten,
  postDate,
  jarakMaksimal,
  productImageURl,
  slug,
  nego,
  ambilDitempat
}) => {
  return (
    <Link href={`/produk/${slug}`} className="shadow-lg bg-white max-w-[11.5rem] rounded-md h-fit ">
      <Image src={productImageURl} alt={judul} width={400} height={400} className='rounded-t-md h-[10rem] object-cover bg-slate-200'/>
      <div className="p-2">
        <h2 className="max-w-[12ch] font-semibold text-xl text-ellipsis whitespace-pre-wrap overflow-hidden line-clamp-1">
          {judul}
        </h2>
        <h1 className="text-primary text-md font-bold">Rp{harga}</h1>
        <div className="flex items-start gap-1 mt-1">
        <MdLocationPin />
        <p className="text-[12px]">
          {kecamatan}, {kabupaten}
        </p>
		</div>
        <div className="flex items-center gap-1 ">
          <MdAccessTime />
          <p className="text-[12px]">
            {useCalculatePostDate(postDate)}
          </p>
        </div>
      </div>
      <div className="flex gap-1 pb-2 flex-wrap -translate-x-1">
        <div className="text-[12px] px-2 py-1 bg-primary w-fit font-bold text-white rounded-sm">COD</div>
        {nego && (
			<CardBadge text='Bisa Nego'/>
		)}
        {jarakMaksimal && (
			<CardBadge text='Antar Ke Tempat'/>
        )}
        {ambilDitempat && (
			<CardBadge text='Ambil Di Tempat'/>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
