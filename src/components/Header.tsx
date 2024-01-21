"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { FaPlayCircle, FaSearch } from "react-icons/fa"

type searchType = "all" | "movie" | "series" | "game"

const Header = ({
	search,
	searchType,
}: {
	search?: string
	searchType?: searchType
}) => {
	const [searchState, setSearchState] = useState<string>(
		search ? decodeURIComponent(search) : ""
	)
	const router = useRouter()

	const changeType = (type: searchType) => {
		router.push(`/search/${type}/${search}`)
	}

	const changeSearch = () => {
		router.push(`/search/${searchType}/${searchState}`)
	}

	return (
		<header className="bg-white border-b border-gray-300 grid grid-cols-[111px_auto] gap-[10px] p-[16px] fixed top-0 left-0 w-full sm:px-[40px] sm:grid-cols-[auto_400px] xl:grid-cols-[auto_auto_400px]">
			<Link
				href={"/"}
				className="text-teal-700 flex gap-[6px] items-center xl:order-1"
			>
				<FaPlayCircle size={20} />
				<span className="text-[20px]">
					<span>Cari</span>
					<span className="font-semibold">FILM</span>
				</span>
			</Link>
			<div className="border border-gray-300 h-[30px] w-full rounded-[6px] flex justify-between px-[8px] gap-[8px] sm:h-[40px] sm:w-[400px] xl:order-3">
				<input
					type="text"
					name="search"
					value={searchState}
					onChange={(event) => setSearchState(event.target.value)}
					onKeyUp={(event) => {
						if (event.key === "Enter") changeSearch()
					}}
					className="outline-none w-full"
				/>
				<button type="button" onClick={changeSearch} className="text-teal-700">
					<FaSearch size={15} className="" />
				</button>
			</div>
			<div className="text-[12px] flex gap-[17px] col-span-2 xl:text-[16px] xl:col-span-1 xl:order-2">
				<button
					onClick={() => changeType("all")}
					className={searchType === "all" ? "font-bold text-teal-700" : ""}
				>
					All
				</button>
				<button
					onClick={() => changeType("movie")}
					className={searchType === "movie" ? "font-bold text-teal-700" : ""}
				>
					Movie
				</button>
				<button
					onClick={() => changeType("series")}
					className={searchType === "series" ? "font-bold text-teal-700" : ""}
				>
					Series
				</button>
				<button
					onClick={() => changeType("game")}
					className={searchType === "game" ? "font-bold text-teal-700" : ""}
				>
					Game
				</button>
			</div>
		</header>
	)
}

export default Header
