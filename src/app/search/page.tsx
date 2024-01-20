import Header from "@/components/Header"

const page = () => {
	return (
		<>
			<Header type={true} />
			<main className="w-screen h-screen pt-[121px]">
				<p className="font-semibold text-[20px] text-gray-400 text-center">
					Search bar can't be empty
				</p>
			</main>
		</>
	)
}

export default page
