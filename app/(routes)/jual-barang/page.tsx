'use client'
'use strict'
// External Libaries
import { ChangeEvent, useState } from 'react'
import axios from 'axios'
import {  Controller, SubmitHandler, useForm } from 'react-hook-form'
// Components
import Input from '@/components/forms/basicInput'
import SelectAddressComponent from '../../../components/forms/select/selectAddress'
import InputInfoText from '@/components/forms/titleInformationText'
import PriceInput from '@/components/forms/priceInput'
import Image from 'next/image'
import SelectCategory from '@/components/forms/select/selectCategory'
import { Checkbox } from '@/components/forms/checkbox'
import { Button } from '@/components/general/button'
import HelpText from '@/components/forms/helpText'
// Icons
import { AiFillPlusCircle, AiFillDelete } from 'react-icons/ai'
import { MdDone, MdClose } from 'react-icons/md'
// Types
import { ProductType } from '@/type/productType'
import { ButtonVariants } from '@/components/general/button'


const BASE_URL = 'http://localhost:1337/api/'

const JualBarang = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
	control,
    reset,
  } = useForm<ProductType>()

  const [previewImages, setPreviewImages] = useState<string[]>([])
  const [imageFiles, setimageFiles] = useState<File[]>([])

  const [productSlug, setProductSlug] = useState<string | null>(null)

  const [submiting, setSubmiting] = useState<boolean>(false)
  const [submitError, setSubmitError] = useState<boolean>(false)
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false)
  const [showAntarForm, setShowAntarForm] = useState<boolean>(false)

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files: FileList = event.target.files!
    setimageFiles(Array.from(files))

    if (files && files.length) {
      const imagePreviews: string[] = []

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader()
        reader.onloadend = () => {
          const result = reader.result as string
          imagePreviews.push(result)

          if (imagePreviews.length === files.length) {
            setPreviewImages([...previewImages, ...imagePreviews])
          }
        }
        reader.readAsDataURL(files[i])
      }
    }
  }

  function handleDeleteImage(id: number) {
    const updatedImages = previewImages.filter((item, index) => index !== id)
    const updatedimageFiles = imageFiles.filter((item, index) => index !== id)
    setPreviewImages(updatedImages)
    setimageFiles(updatedimageFiles)
  }

  const onSubmit: SubmitHandler<ProductType> = async (data) => {
    setSubmiting(true)
    document.body.style.overflow = 'hidden'
    axios
      .post(BASE_URL + 'products', {
        data: {
    		...data,
    		slug : data.title.split(" ").join("-")
    	},
      })
      .then((res) => {
        setProductSlug(res.data.data.attributes.slug)
        const formData = new FormData()
        imageFiles.map((file) => formData.append(`files`, file))
        formData.append('ref', 'api::product.product')
        formData.append('refId', res.data.data.id)
        formData.append('field', 'product_images')
        return axios.post(BASE_URL + 'upload', formData)
      })
      .then((res) => {
        setSubmiting(false)
        setSubmitSuccess(true)
        reset()
        setPreviewImages([])
      })
      .catch((err) => {
        setSubmitError(true)
        console.log(err)
      })
  }

  function handleShowAntarForm(e: React.ChangeEvent<HTMLInputElement>) {
    setShowAntarForm(e.target.checked)
  }

  return (
    <>
      <InputInfoText
        title="Lengkapi Data Barang"
        helpText="Unggah Foto dan tulis informasi tentang barangmu"
      />

      <div className="flex gap-2 flex-wrap pt-4">
        <button
          className="w-[6.25rem] h-[6.25rem] bg p-2 border-2 bg-base shadow-md border-secondary grid place-items-center rounded-md border-dashed"
          onClick={() => document.getElementById('uploadFile')?.click()}
        >
          <AiFillPlusCircle size={35} />
          <p className="text-sm text-secondary">Tambah Foto</p>
        </button>

        {previewImages[0] &&
          previewImages.map((item, i) => (
            <div className="relative box-border h-[6.25rem] ">
              <Image
                alt="oke"
                src={item}
                className="w-[6.25rem] h-[6.25rem] border-2 rounded-md border-secondary border-dashed object-cover"
                width={100}
                height={100}
              />
              <button onClick={() => handleDeleteImage(i)}>
                <AiFillDelete
                  color="red"
                  size={25}
                  className="absolute left-1 top-1"
                />
              </button>
            </div>
          ))}
      </div>
      {errors.product_images && (
        <p
          className={(imageFiles[0] && 'hidden') + ' text-red-400 text-[14px]'}
        >
          Tolong masukan gambar produk*
        </p>
      )}

      <form className="mt-4 grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            register={register}
            placeholder="Nama Barang yang ingin Anda jual"
            name="title"
            error={errors.title}
            type="text"
          />
          <HelpText text="Jenis Barang + Merk + Keterangan Kondisi + Kata yang menarik untuk pembeli seperti murah, termurah, dll." />
        </div>

        <PriceInput
          error={errors.harga}
          register={register}
          clearErrors={clearErrors}
        />

        <div>  
			<Controller
            name="nego"
            control={control}
            render={({field}) => <Checkbox {...field} label="Harga Bisa di Nego" />}
          />
          <HelpText text="produkmu akan ada badge khusus menandakan barang ini bisa di Nego" />
        </div>

        <div className="flex items-center gap-2">
          <Input
            name="jumlahBarang"
            error={errors.jumlahBarang}
            register={register}
            placeholder="Masukan jumlah barang"
            type="number"
          />

          <SelectCategory
            register={register}
            clearErrors={clearErrors}
            error={errors.kategori}
          />
        </div>

        <textarea
          rows={5}
          cols={150}
          {...register('deskripsi', { required: true })}
          className={
            (errors.deskripsi && 'placeholder-red-400 border border-red-400') +
            ' outline-none shadow-md p-3 rounded-md resize-none'
          }
          placeholder="Tuliskan deskripsi kondisi, warna, minus dll tentang barang kamu.."
        />

        <InputInfoText
          title="Masukkan Lokasi "
          helpText="Masukkan lokasi kamu (ini akan menjadi lokasi COD dan Ambil ditempat)"
        />

        <input
          className="hidden"
          id="uploadFile"
          type="file"
          accept="image/png, image/gif, image/jpeg"
          multiple
          {...register('product_images', { required: true })}
          onChange={handleFileChange}
        />

        <SelectAddressComponent
          register={register}
          error={errors}
          clearErrors={clearErrors}
        />
        <Input
          name="alamat"
          error={errors.alamat}
          register={register}
          placeholder="Masukan Nama jalan, rumah, patokan,dsb"
          type="text"
        />

        <div>
          <Checkbox
            name="antarKetempat"
            label="Antar Ketempat Pembeli"
            onChange={handleShowAntarForm}
          />
		  
          {!showAntarForm && (
            <HelpText text="kamu akan Mengantar barang ketempat pembeli dengan Jarak Maksimal yang bisa kamu sesuaikan" />
          )}
        </div>
        {showAntarForm && (
          <>
            <InputInfoText
              title="Antar Ketempat"
              helpText="Jarak Maksimal anda dapat mengirimkan barang (Maks 100km)"
            />

            <div className="flex items-center gap-1">
              <p className="font-semibold px-2 border-primary border bg-white h-full grid place-items-center shadow-md rounded-md">
                Km
              </p>
              <Input
                name="jarakMaksimal"
                error={errors.jarakMaksimal}
                register={register}
                placeholder="Masukan Jarak Maksimal antar barang"
                pattern={/^(?:[1-9]\d?|100)$/}
                type="number"
              />
            </div>
          </>
        )}

        <div>
          
		  <Controller
            name="ambilDitempat"
            control={control}
            render={({field}) => <Checkbox label="Ambil Ditempat" {...field} />}
          />
          <HelpText text="Pembeli bisa mengambil barang Di Lokasi kamu" />
        </div>

        <InputInfoText
          title="Kontak Pribadi"
          helpText=" Pembeli akan menghubungi nomor ini"
        />

        <Input
          name="nomorWA"
          error={errors.nomorWA}
          register={register}
          placeholder="Masukan nomor WA contoh:0812345690"
          pattern={/^(\+62|62|0)8[1-9][0-9]{6,9}$/}
          type="number"
        />

        <Button type="submit" size="default" variant="default">
          Jual Barang
        </Button>

        {submiting && (
          <div className="absolute grid place-items-center w-full left-0 h-full  bottom-0 z-50 bg-black bg-opacity-50 ">
            <div className="translate-y-[20rem] grid place-items-center">
              <div className="border-primary border-[5px] rounded-[8rem] w-[4rem] h-[4rem] animate-spin">
                <div className="bg-white rounded-[5rem] w-[1rem] h-[1rem]"></div>
              </div>
              <p className="animate-pulse text-slate-200">
                Mengupload Produk..
              </p>
            </div>
          </div>
        )}

        {submitSuccess && (
          <div className="absolute grid place-items-center w-full left-0 h-full  top-0 z-50 bg-black bg-opacity-50 ">
            <div className="grid gap-3 place-items-center translate-y-[20rem] bg-white shadow-md border-2 border-primary rounded-md p-4">
              <div className="bg-primary rounded-[8rem] p-2">
                <MdDone size={40} />
              </div>
              <p>Produk Kamu sukses terupload</p>
              <a
                href={`/products/${productSlug}`}
                className={ButtonVariants({variant: 'default'})}
              >
                Lihat Barang
              </a>
            </div>
          </div>
        )}

        {submitError && (
          <div className="absolute grid place-items-center w-full left-0 h-full top-0 z-50 bg-black bg-opacity-50 ">
            <div className="grid gap-3 place-items-center translate-y-[20rem] bg-white shadow-md border-2 border-red-400 rounded-md p-4">
              <div className="bg-red-400 rounded-[8rem] p-2">
                <MdClose size={40} />
              </div>
              <p className="w-[28ch]">
                Maaf Produk Gagal terupload, ini merupakan kerusakan pada
                sistem, Silahkan Refresh Page & coba lagi!
              </p>
              <button
                type="submit"
                className={ButtonVariants({variant: 'default'})}
              >
                Coba Lagi
              </button>
            </div>
          </div>
        )}
      </form>
    </>
  )
}

export default JualBarang
