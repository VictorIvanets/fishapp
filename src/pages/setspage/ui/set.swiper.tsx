import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { PREFIX_STATIC } from '../../../app/prefix'
import { useEffect, useState } from 'react'
import { loadFotoInFolder } from './getSetsById'

interface SwiperProps {
	img: string[]
	setId: number
}

export default function SwiperComponent({ img, setId }: SwiperProps) {
	const [fotoInFolder, setFotoInFolder] = useState<string | string[]>()

	useEffect(() => {
		const foto = loadFotoInFolder(`${setId}`)

		if (foto) {
			foto.then((res) => setFotoInFolder(res))
			console.log(fotoInFolder)
		}
	}, [setId])

	return (
		<div className="swiperpage">
			<Swiper className="swiperbox" spaceBetween={50} slidesPerView={1}>
				{img && fotoInFolder?.length
					? img.map((i) => {
							return (
								<SwiperSlide className="swiperpage__item">
									<div className="swiperpage__picbox">
										<img
											className="swiperpage__img"
											src={`${PREFIX_STATIC}static/${i}`}
										/>
									</div>
								</SwiperSlide>
							)
					  })
					: ''}
			</Swiper>
		</div>
	)
}
