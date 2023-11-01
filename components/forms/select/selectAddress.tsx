// External Libaries
import { FC, useState } from 'react';
import { data } from '../../..//app/api/data';
// Utils
import useAxios from '@/app/hooks/useAxios';
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
  const [kabupatenID, setKabupatenID] = useState<string>('');
  const [kecamatan, setKecamatan] = useState<string>('');
  const {response, errorRes} = useAxios('locations')

  return (
    <>
      <SelectInput
        options={response[0] ? response.map((item : any) => (
			<option value={item.id}>{item.attributes.kabupaten}</option>
		)) : (
			<option>Memuat kabupaten...</option>
		)}
        clearErrors={clearErrors}
        name="kabupaten"
        placeholder="Masukkan Kabupaten"
        error={error.kabupaten}
        setValue={setKabupatenID}
        value={kabupatenID}
        register={register}
      />

      <SelectInput
        options={data.map(
          (wilayahJogja) =>
            wilayahJogja.Kabupaten == response[Number(kabupatenID) - 1]?.attributes.kabupaten &&
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
