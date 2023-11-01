// Types
import { FC, InputHTMLAttributes } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { cn } from '@/app/utils/twMerge';
import { MdDone } from 'react-icons/md';

const CheckboxVariants = cva(
	'appearance-none w-6 h-6 peer shadow-md border-2 border-gray-500 rounded-md checked:border-2 checked:border-black checked:p-[1px]',
	{
		variants : {
			variant : {
				default : 'bg-white',
			},
		},
		defaultVariants: {
			variant : 'default',
		}
	}
)

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof CheckboxVariants> {
	label : string
	value? : string | number | readonly string[] | any
}

const Checkbox: FC<CheckboxProps> = ({className, label, variant, ...props}) => {
  return (
	<div className="flex items-center gap-2 relative">
	<input {...props} className={cn(CheckboxVariants({className, variant}))} type="checkbox"/>
	<p className='font-semibold'>{label}</p>
	<div className='absolute m-1 text-secondary pointer-events-none top-0 left-0 peer-checked:block hidden z-10'>
		<MdDone />
	</div>
  </div>
  )
}
export {Checkbox, CheckboxVariants}
