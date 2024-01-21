import { Suspense } from "react"

import Header from "@/components/Header"
import MovieList from "./MovieList"

type paramsType = {
	params: {
		type: "all" | "movie" | "series" | "game"
		search: string
	}
}

const page = ({ params }: paramsType) => {
	return (
		<>
			<Header
				search={params.search}
				showTypeOption={true}
				searchType={params.type}
			/>
			<main className="w-max mt-[91px] p-[25px] grid grid-cols-2 gap-[25px] m-auto sm:mt-[101px] sm:p-[40px] sm:grid-cols-3 xl:mt-[73px] xl:grid-cols-5 xl:gap-[40px]">
				<Suspense
					fallback={
						<div className="text-gray-400 font-semibold text-[20px] text-center m-auto col-span-2">
							Loding...
						</div>
					}
				>
					<MovieList search={params.search} type={params.type} />
				</Suspense>
			</main>
		</>
	)
}

export default page
