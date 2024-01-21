import axios from "axios"
import { FaFilm, FaStar } from "react-icons/fa"

type responseAPIType = {
	Title: string
	Year: string
	Rated: string
	Runtime: string
	Genre: string
	Director: string
	Writer: string
	Actors: string
	Plot: string
	Language: string
	Country: string
	Awards: string
	Poster: string | "N/A"
	imdbRating: "N/A"
	Type: "movie" | "series" | "game"
	Response: "True" | "False"
}

const Detail = async ({ id }: { id: string }) => {
	try {
		const responseAPI = await axios.get(
			`${process.env.NEXT_OMDB_API_URL}/?apikey=${process.env.NEXT_API_KEY}&i=${id}&plot=full`
		)

		const data: responseAPIType = responseAPI.data

		return (
			<>
				{data.Poster !== "N/A" ? (
					<img
						src={data.Poster}
						className="w-[200px] m-auto sm:row-span-2 xl:w-[300px]"
					/>
				) : (
					<div className="w-[150px] h-[200px] bg-gray-300 grid place-content-center text-gray-400 m-auto sm:row-span-2 xl:w-[300px] xl:h-[400px]">
						<FaFilm size={50} />
					</div>
				)}
				<div className="flex flex-col gap-[5px]">
					<h1 className="font-semibold text-[25px]">{data.Title}</h1>
					<div className="flex gap-[5px] items-center text-[14px]">
						<span className="font-semibild text-teal-700 flex gap-[6px] items-center">
							<FaStar size={16} />
							<span>{data.imdbRating}</span>
						</span>
						<div className="w-[5px] h-[5px] rounded-full bg-gray-400"></div>
						<span>{data.Rated}</span>
						<div className="w-[5px] h-[5px] rounded-full bg-gray-400"></div>
						<span>{data.Year}</span>
						<div className="w-[5px] h-[5px] rounded-full bg-gray-400"></div>
						<span>{data.Runtime}</span>
						<div className="w-[5px] h-[5px] rounded-full bg-gray-400"></div>
						<span>{data.Type}</span>
					</div>
					<div className="flex gap-[5px]">
						{data.Genre.split(",").map((item, index) => (
							<span
								className="bg-gray-300 text-[10px] px-[5px] py-[2px] rounded-[6px]"
								key={index}
							>
								{item}
							</span>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-[21px]">
					<div className="flex flex-col gap-[5px] sm:flex-row">
						<span className="text-gray-400">Director :</span>
						<span>{data.Director}</span>
					</div>
					<div className="flex flex-col gap-[5px] sm:flex-row">
						<span className="text-gray-400">Actors :</span>
						<span>{data.Actors}</span>
					</div>
					<div className="flex flex-col gap-[5px] sm:flex-row">
						<span className="text-gray-400">Language :</span>
						<span>{data.Language}</span>
					</div>
					<div className="flex flex-col gap-[5px] sm:flex-row">
						<span className="text-gray-400">Country :</span>
						<span>{data.Country}</span>
					</div>
				</div>
				<div className="flex flex-col gap-[5px] sm:col-span-2">
					<span className="text-gray-400">Plot :</span>
					<span>{data.Plot}</span>
				</div>
				<div className="flex flex-col gap-[5px] sm:col-span-2">
					<span className="text-gray-400">Award :</span>
					<span>{data.Awards}</span>
				</div>
			</>
		)
	} catch (error) {
		return (
			<div className="font-semibold text-[20px] text-red-400 text-center">
				Error Server
			</div>
		)
	}
}

export default Detail
