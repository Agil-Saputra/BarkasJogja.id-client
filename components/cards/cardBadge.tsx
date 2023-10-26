// External Libaries
import {FC} from 'react'
// Components
// Utils
// Types
// Icons
type CardBadgeProps = {
	text : string
}

const CardBadge: FC<CardBadgeProps> = ({text}) => {
  return (
	<div className="text-[12px] px-2 py-1 bg-primary w-fit font-bold text-white rounded-sm">
	{text}
  </div>
  )
}
export default CardBadge
