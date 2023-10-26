// External Libaries
import {FC} from 'react'
// Components
type HelpTextProps = {
	text : string
}

const HelpText: FC<HelpTextProps> = ({text}) => {
  return (
	<p className='leading-1 text-[13px] mt-1'><span className='text-secondary font-semibold'>Tips: </span>{text}</p>
  )
}
export default HelpText
