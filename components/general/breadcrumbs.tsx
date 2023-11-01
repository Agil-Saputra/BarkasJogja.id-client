// External Libaries
import {FC} from 'react'
// Icons
import { MdArrowBack } from 'react-icons/md'
import {usePathname} from 'next/navigation'

const Breadcrumbs: FC = () => {
	const paths = usePathname()
	const pathNames = paths.split('/').filter(path => path)
	
  return (
	<div className='flex gap-2 items-center mb-4'>
		<a href="/">
			<MdArrowBack size={25}/>
		</a>
		<div className='flex flex-wrap'>
				<a href={`/${pathNames[0]}`} className='text-[15px] text-primary'>
				{ pathNames.join(' / ').replaceAll('-', ' ').replaceAll('%20', ' ').toLowerCase()}
			</a>
		</div>
	</div>
  )
}
export default Breadcrumbs