'use client';
// External Libaries
import { FC } from 'react';
// Components
import Breadcrumbs from '@/components/general/breadcrumbs';
import OrderComponent from '@/components/page/product/orderComponent';
import TableRow from '@/components/page/product/tableRow';
import Container from '@/components/page/product/sectionContainer';
import SliderImages from '@/components/page/product/slider/sliderImages';
import ProductPageSkeleton from '@/components/skeleton/productPageSkeleton';
// Utils
import useAxios from '@/app/hooks/useAxios';
import { useScrollTop } from '@/app/utils/scrollTop';
// Icons
import { MdWhatsapp } from 'react-icons/md';

type ProductPageProps = {
  params: {
    productSlug: string;
  };
};

const ProductPage: FC<ProductPageProps> = ({ params }) => {
  const { response } = useAxios(`products/${params.productSlug}?populate=*`);

  useScrollTop();

  const address = `${response.attributes?.kabupaten}, ${response.attributes?.kecamatan}, ${response.attributes?.alamat}`;
  const product = response.attributes;
  const productImages = product?.product_images.data;

  return product ? (
    <>
      <Breadcrumbs />

      <SliderImages imagesArray={productImages} />
      <p className="font-semibold text-2xl my-4 ">
        {product.title}
      </p>

      <div className="bg-white shadow-sm border border-slate-300 rounded-md my-4 text-center p-2 relative">
        <p className="font-semibold text-lg leading-1">Harga</p>
        <p className="text-primary font-semibold text-[2rem] text-center leading-8">
          Rp.{product.harga}
        </p>
        {product.nego && (
          <div className="font-bold py-1 px-2 text-slate-100 rounded-sm absolute -top-[7px] bg-primary -right-1 border border-black">
            Bisa Nego
          </div>
        )}
      </div>

      <Container title="Deskripsi Barang">
        <p className="leading-5">{product.deskripsi}</p>
      </Container>
	  
      <Container title="Detail Barang">
        <TableRow
          title="Kategori"
          text={product.kategori.data.attributes.judul}
        />
        <TableRow title="Jumlah" text={`${product.jumlahBarang} buah`} />
      </Container>

      <Container title="Lokasi Barang">
        <TableRow title="Kabupaten" text={product.kabupaten.data.attributes.kabupaten} />
        <TableRow title="Kecamatan" text={product.kecamatan} />
        <TableRow title="Alamat" text={product.alamat} />
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${address.replace(
            /\s/g,
            '+'
          )}`}
          className="bg-secondary block text-center text-white font-semibold p-2 mt-2 rounded-md "
        >
          Lihat Lokasi
        </a>
      </Container>

      <Container title="Metode Transaksi Yang disediakan Penjual">
          <OrderComponent antar={product.jarakMaksimal} ambilDitempat={product.ambilDitempat} />
      </Container>
      <a
        href={`https://wa.me/62${product.nomorWA}`}
        className="bg-secondary text-white w-full sticky mt-4 bottom-[5rem] shadow-md rounded-sm px-4 py-2 flex gap-4 items-center justify-between border border-black"
      >
        <p className="font-bold text-lg text-center">Hubungi Penjual</p>
        <MdWhatsapp size={25} />
      </a>
    </>
  ) : (
    <ProductPageSkeleton />
  );
};
export default ProductPage;
