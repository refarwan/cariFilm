declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_OMDB_API_URL: string
			NEXT_API_KEY: string
		}
	}
}

export {}
