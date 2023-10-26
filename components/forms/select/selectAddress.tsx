// External Libaries
import { FC, useState } from 'react';
import { data } from '../../..//app/api/data';
// Types
import {
  FieldErrors,
  UseFormClearErrors,
  UseFormRegister,
} from 'react-hook-form';
import { ProductType } from '@/type/productType';
// Components
import SelectInput from './select';

export type SelectProps = {
  register: UseFormRegister<ProductType>;
  error: FieldErrors<ProductType>;
  clearErrors: UseFormClearErrors<ProductType>;
};

const SelectAddress: FC<SelectProps> = ({ register, error, clearErrors }) => {
  const [kabupaten, setKabupaten] = useState<string>('');
  const [kecamatan, setKecamatan] = useState<string>('');

  return (
    <>
      <SelectInput
        options={data.map(({ Kabupaten: opsi_kabupaten }) => (
          <option key={opsi_kabupaten} value={opsi_kabupaten}>
            {opsi_kabupaten}
          </option>
        ))}
        clearErrors={clearErrors}
        name="kabupaten"
        placeholder="Masukkan Kabupaten"
        error={error.kabupaten}
        setValue={setKabupaten}
        value={kabupaten}
        register={register}
      />

      <SelectInput
        options={data.map(
          (wilayahJogja) =>
            wilayahJogja.Kabupaten == kabupaten &&
            wilayahJogja.Kecamatan.map((opsi_kecamatan) => (
              <option value={opsi_kecamatan} className="capitalize">
                {opsi_kecamatan}
              </option>
            ))
        )}
		clearErrors={clearErrors}
		name='kecamatan'
		placeholder='Masukkan Kecamatan'
		error={error.kecamatan}
		setValue={setKecamatan}
		value={kecamatan}
		register={register}
      />
    </>
  );
};
export default SelectAddress;
