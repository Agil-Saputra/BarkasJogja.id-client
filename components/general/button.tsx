// External Libaries
import { ButtonHTMLAttributes, FC } from 'react';
// Utils
import {VariantProps, cva} from 'class-variance-authority'
import { cn } from '@/app/utils/utilities';


const ButtonVariants = cva(
	'p-2 text-center font-semibold rounded-md shadow-md',
	{
		variants : {
			variant :{
				default : 'bg-secondary text-white',
				outline :'bg-white border-primary border-2'
			},
			size : {
				default : 'w-full',
				fit : 'w-fit'
			}
		},
		defaultVariants: {
			variant : 'default',
			size : 'default',
		}
	}
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {}

const Button: FC<ButtonProps> = ({className, size, variant, ...props}) => {
  return (
    <button className={cn(ButtonVariants({ variant, size, className }))} {...props} type="submit"/>
  );
};

export {Button, ButtonVariants};
