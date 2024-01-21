import Link from "next/link"

import axios from "axios"
import { FaFilm } from "react-icons/fa"

export const dynamic = "force-dynamic"

type propsType = {
	search: string
	type: "all" | "movie" | "series" | "game"
}

const MovieList = async ({ search, type = "all" }: propsType) => {
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

	const response = await axios.get(
		`${process.env.NEXT_OMDB_API_URL}/?apikey=${
			process.env.NEXT_API_KEY
		}&s=${search}${type !== "all" ? `&type=${type}` : ""}&page=1`
	)

	const data: responseType = response.data

	return (
		<>
			{data.Response === "True" ? (
				data.Search.map((item, index) => (
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
				))
			) : (
				<p className="font-semibold text-[20px] text-gray-400 text-center col-span-2 sm:col-span-3 xl:col-span-5">
					Tidak ada data ditemukan
				</p>
			)}
		</>
	)
}

export default MovieList
