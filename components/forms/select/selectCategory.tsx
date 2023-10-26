// External Libaries
import {FC, useState, useEffect} from 'react'
import axios from 'axios';
// Components
import SelectInput from './select'
import { FieldError, UseFormClearErrors, UseFormRegister } from 'react-hook-form';
import { ProductType } from '@/type/productType';
// Hooks
import useAxios from '@/app/hooks/useAxios';
// Types
type SelectCategoryProps = {
	register: UseFormRegister<ProductType>;
	error: FieldError | undefined;
	clearErrors: UseFormClearErrors<ProductType>;
}

type dataKategoriProps = {
	attributes : {
		judul : string
	}
	id : number
}

const SelectCategory: FC<SelectCategoryProps> = ({register, clearErrors, error}) => {
	const [kategori, setKategori] = useState('')
	const {response, errorRes} = useAxios('categories')

  return (
	<SelectInput 
	options={response[0] ? response.map((item : dataKategoriProps) => (
		<option value={item.id}>{item.attributes.judul}</option>
	)) : (
		<option>Memuat kategori...</option>
	)}
	register={register}
	clearErrors={clearErrors}
	error={error}
	name='kategori'
	placeholder='Masukkan kategori barang'
	setValue={setKategori}
	value={kategori}
	/>
  )
}
export default SelectCategory
