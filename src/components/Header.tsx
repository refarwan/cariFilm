import Link from "next/link"

import { FaPlayCircle, FaSearch } from "react-icons/fa"

const Header = ({ search, type }: { search?: string; type?: boolean }) => {
	return (
		<header className="border-b border-gray-300 grid grid-cols-[111px_auto] gap-[10px] p-[16px] fixed top-0 left-0 w-full sm:px-[40px] sm:grid-cols-[auto_400px] xl:grid-cols-[auto_auto_400px]">
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
			<div className="border border-gray-300 h-[30px] w-full rounded-[6px] flex justify-between px-[8px] gap-[8px] sm:w-[400px] xl:order-3">
				<input type="text" className="outline-none w-full" />
				<button type="button" className="text-teal-700">
					<FaSearch size={15} className="" />
				</button>
			</div>
			{type ? (
				<div className="text-[12px] flex gap-[17px] col-span-2 xl:col-span-1 xl:order-2">
					<button className="font-bold text-teal-700">All</button>
					<button>Movie</button>
					<button>Series</button>
					<button>Game</button>
				</div>
			) : null}
		</header>
	)
}

export default Header
