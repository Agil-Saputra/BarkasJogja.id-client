// External Libaries
import {FC} from 'react'
// Components
// Utils
// Icons
import { MdArrowBack } from 'react-icons/md'
import {usePathname} from 'next/navigation'
// Types
type BreadcrumbsProps = {}

const Breadcrumbs: FC<BreadcrumbsProps> = () => {
	const paths = usePathname()
	const pathNames = paths.split('/').filter(path => path)

	console.log(pathNames)

  return (
	<div className='flex gap-2 items-center mb-4'>
		<a href="/">
			<MdArrowBack size={25}/>
		</a>
		<div className='flex flex-wrap'>
			{/* {pathNames.map(item => (
			
			))} */}
				<a href={`/${pathNames[0]}`} className='text-sm text-primary'>
				{pathNames.join('/')}
			</a>
		</div>
	</div>
  )
}
export default Breadcrumbs