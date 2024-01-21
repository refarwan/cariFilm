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
						<Loading />
					</>
				}
			>
				<Detail id={params.imdbID} />
			</Suspense>
		</>
	)
}

export default page
