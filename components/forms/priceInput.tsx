// External Libaries
import { FC, useState } from 'react';
// Types
import { FieldError, UseFormClearErrors, UseFormRegister} from 'react-hook-form';
import { ProductType } from '@/type/productType';

type PriceInputProps = {
  error: FieldError | undefined;
  register: UseFormRegister<ProductType>;
  clearErrors : UseFormClearErrors<ProductType>
};

const PriceInput: FC<PriceInputProps> = ({ register, error, clearErrors }) => {
  const [numberValue, setNumberValue] = useState('');
  function handleNumberInputChange(e: any) {
    const number = e.target.value;
    const sanitizedNumber = number.replace(/,/g, '');
    const value = sanitizedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    setNumberValue(value);
	if(number > 0 ) {
		clearErrors('harga')
	}
  }

  return (
    <div className='flex items-center gap-1'>
		<p className='font-semibold px-2 border-primary border bg-white h-full grid place-items-center shadow-md rounded-md'>Rp</p>
     <div className='w-full'>
		 <input
		   type="text"
		   {...register('harga', {
			 required: true,
			 pattern: {
			   value: /^[0-9,]+$/,
			   message: 'Tolong Masukkan hanya angka',
			 },
		   })}
		   className={
			 (error && 'border border-red-300 placeholder-red-400') +
			 ' p-3 outline-none relative rounded-md shadow-md appearance-none w-full'
		   }
		   placeholder={`Masukan Harga Barang..`}
		   onChange={handleNumberInputChange}
		   value={numberValue}
		 />
		 <p className='text-[12px] text-red-400'>{error ? error.message : ''}</p>
	 </div>
      
    </div>
  );
};
export default PriceInput;


