// External Libaries
import {FC} from 'react'
// Next
import Image, { StaticImageData } from 'next/image'
// Type
type AdsBannerProps = {
	AdsImageUrl : StaticImageData
}

const AdsBanner: FC<AdsBannerProps> = ({AdsImageUrl}) => {
  return (
	<Image src={AdsImageUrl} width={320} height={50} alt="BarkasJogja Banner Iklan" className="mt-4 bg-slate-300 w-full" />
  )
}
export default AdsBanner
