// Types
import { FieldError, UseFormRegister, ValidationRule } from 'react-hook-form';
import { ProductType, Names } from '@/type/productType';

type BasicInputProps = {
  placeholder: string;
  name: Names
  error: FieldError | undefined;
  register: UseFormRegister<ProductType>;
  pattern?: ValidationRule<RegExp>;
  type : 'text' | 'number',
};

const BasicInput = ({
  placeholder,
  name,
  error,
  register,
  pattern,
  type
}: BasicInputProps) => {
  return (
    <>
      <input
        type={type}
        {...register(name, { required: true, pattern: pattern })}
        className={
          (error && 'border border-red-300 placeholder-red-400') +
          ' p-3 outline-none rounded-md shadow-md w-full appearance-none'
        }
        placeholder={`${placeholder}..`}
      />

    </>
  );
};

export default BasicInput;
