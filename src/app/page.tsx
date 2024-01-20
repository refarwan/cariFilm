"use client"

import { FormEvent, useRef } from "react"
import { useRouter } from "next/navigation"

import { FaPlayCircle, FaSearch } from "react-icons/fa"

export default function Home() {
	const searchRef = useRef<HTMLInputElement>(null)
	const router = useRouter()

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault()
		router.push(`search/${searchRef.current?.value}`)
	}

	return (
		<main className="grid place-content-center w-screen h-screen gap-[10px] p-[30px]">
			<div className="text-teal-700 flex gap-[9px] items-center justify-center">
				<FaPlayCircle size={30} />
				<span className="text-[30px]">
					Cari<span className="font-semibold">FILM</span>
				</span>
			</div>
			<form
				onSubmit={handleSubmit}
				className="border border-gray-300 h-[40px] w-[315px] rounded-[6px] flex justify-between px-[12px] gap-[12px] sm:w-[500px]"
			>
				<input
					ref={searchRef}
					name="search"
					type="text"
					className="outline-none w-full"
				/>
				<button type="submit" className="text-teal-700">
					<FaSearch size={20} />
				</button>
			</form>
		</main>
	)
}
