'use client'
// External Libaries
import {FC} from 'react'
// Components
// Utils
import useAxios from '@/app/hooks/useAxios'
import { useScrollTop } from '@/app/utils/scrollTop'
// Types
type LocationPageProps = {
	params : {
		locationID : number
	}
}

const LocationPage: FC<LocationPageProps> = ({params}) => {
	const {response} = useAxios(`locations/${params.locationID}`)
	useScrollTop()
  return (
	<div>
	{/* {response.attributes?.kabupaten} */}
	</div>
  )
}
export default LocationPage
