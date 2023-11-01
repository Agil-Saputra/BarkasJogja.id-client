// External Libaries
import { Dispatch, FC, SelectHTMLAttributes, SetStateAction } from 'react'
// Utils
import { cva, VariantProps } from 'class-variance-authority'
// Types
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormClearErrors,
  UseFormRegister,
} from 'react-hook-form'
import { ProductType } from '@/type/productType'
import { Names } from '@/type/productType'

const SelectInputVariants = cva(
  'p-3 outline-none appearance-none rounded-md shadow-md',
  {
    variants: {
      variant: {
        default: '',
        error: '',
        hasValue: '',
      },
    },
	defaultVariants : {
		variant : 'default'
	}
  }
)

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement>, VariantProps<typeof SelectInputVariants> {
	setValue: Dispatch<SetStateAction<string>>
	options: (false | React.JSX.Element[])[] | any
	name: Names
	register: UseFormRegister<ProductType>
	error: Merge<FieldError, FieldErrorsImpl<{ data: { attributes: { kabupaten: string; }; }; }>> | undefined
	clearErrors: UseFormClearErrors<ProductType>
	value: string
	placeholder: string
}

const SelectInput: FC<SelectInputProps> = ({
  register,
  error,
  value,
  options,
  setValue,
  placeholder,
  name,
  clearErrors,
}) => {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const updatedValue = e.target.value
    setValue(updatedValue)
    if (updatedValue) {
      clearErrors(name)
    }
  }

  return (
    <select
      {...register(name, { required: true })}
      defaultValue={''}
      className={
        (!value ? 'text-light_grey ' : 'text-inherit ') +
        (error && ' border border-red-300 text-red-400') +
        ' p-3 outline-none appearance-none rounded-md shadow-md'
      }
      onChange={handleChange}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options}
    </select>
  )
}
export default SelectInput
