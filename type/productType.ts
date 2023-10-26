export type ProductType = {
	product_images: FileList | any
	title: string
	deskripsi: string
	kabupaten: string
	kecamatan: string
	alamat: string
	nomorWA: string
	harga: string
	jarakMaksimal: number
	kategori : string
	createdAt : string
	id :number
	nego : boolean
	jumlahBarang : number
	ambilDitempat : boolean
	slug : string
}

export type Names = 
	| 'title'
	| 'product_images'
	| 'deskripsi'
	| 'kabupaten'
	| 'kecamatan'
	| 'alamat'
	| 'nomorWA'
	| 'harga'
	| 'jarakMaksimal'
	| 'kategori'
	| 'jumlahBarang'
	| 'nego'
	| 'ambilDitempat'
	;