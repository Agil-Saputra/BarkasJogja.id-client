'use client'
// External Libaries
import React, {FC} from 'react'
// Components
// Utils
import useAxios from '@/app/hooks/useAxios'
// Types
// Icons
type CategoryPageProps = {
	params : {
		categoryID : number
	}
}

const CategoryPage: FC<CategoryPageProps> = ({params}) => {
	const {response}  = useAxios(`categories/${params.categoryID}`)
	console.log(response)
  return (
	<div>
	{/* {response.attributes?.judul} */}

	</div>
  )
}
export default CategoryPage
