import Link from "next/link"

import axios from "axios"
import { FaFilm } from "react-icons/fa"

export const dynamic = "force-dynamic"

type propsType = {
	search: string
	type: "all" | "movie" | "series" | "game"
	page?: number
}

const MovieList = async ({ search, type = "all", page = 1 }: propsType) => {
	try {
		type responseType = {
			Search: {
				Title: string
				Year: string
				imdbID: string
				Type: "movie" | "series" | "game"
				Poster: string | "N/A"
			}[]
			totalResults: string
			Response: "True" | "False"
		}

		const responseAPI = await axios.get(
			`${process.env.NEXT_OMDB_API_URL}/?apikey=${
				process.env.NEXT_API_KEY
			}&s=${search}${type !== "all" ? `&type=${type}` : ""}&page=${page}`
		)

		const data: responseType = responseAPI.data

		return (
			<>
				{data.Response === "True" ? (
					<>
						{data.Search.map((item, index) => (
							<Link
								href={`/detail/${item.imdbID}`}
								key={index}
								className="w-[150px] flex flex-col gap-[10px]"
							>
								{item.Poster && item.Poster !== "N/A" ? (
									<img
										className="w-[150px]"
										src={item.Poster}
										alt={`Poster ${item.Title}`}
									/>
								) : (
									<div className="w-[150px] h-[200px] bg-gray-300 overflow-hidden grid place-content-center text-gray-400">
										<FaFilm size={50} />
									</div>
								)}
								<span>{item.Title}</span>
							</Link>
						))}
						{parseInt(data.totalResults) / 10 > 1 ? (
							<div className="m-auto col-span-2 sm:col-span-3 xl:col-span-5 flex gap-[20px]">
								{page > 1 ? (
									<Link
										className="bg-teal-700 text-white inline-block px-[24px] h-[40px] rounded-[6px] leading-[40px] text-center"
										href={`/search/${type}/${search}/${page - 1}`}
									>
										Previous Page
									</Link>
								) : null}
								{data.Search.length + page * 10 <
								parseInt(data.totalResults) ? (
									<Link
										className="bg-teal-700 text-white inline-block px-[24px] h-[40px] rounded-[6px] leading-[40px] text-center"
										href={`/search/${type}/${search}/${page + 1}`}
									>
										Next Page
									</Link>
								) : null}
							</div>
						) : null}
					</>
				) : (
					<p className="font-semibold text-[20px] text-gray-400 text-center col-span-2 sm:col-span-3 xl:col-span-5">
						Tidak ada data ditemukan
					</p>
				)}
			</>
		)
	} catch (error) {
		return (
			<div className="font-semibold text-[20px] text-red-400 text-center col-span-2 sm:col-span-3 xl:col-span-5">
				Error Server
			</div>
		)
	}
}

export default MovieList
