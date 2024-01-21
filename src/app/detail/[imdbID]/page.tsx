import { Suspense } from "react"

import Header from "@/components/Header"
import Loading from "@/components/Loading"
import Detail from "./Detail"

const page = async ({ params }: { params: { imdbID: string } }) => {
	return (
		<>
			<Suspense
				fallback={
					<>
						<Header />
						<main className="w-full mt-[91px] p-[25px] m-auto flex flex-col gap-[21px] sm:mt-[101px] sm:p-[40px] sm:grid sm:grid-cols-[200px_auto] xl:mt-[73px] xl:grid-cols-[300px_auto]">
							<Loading />
						</main>
					</>
				}
			>
				<Detail id={params.imdbID} />
			</Suspense>
		</>
	)
}

export default page
