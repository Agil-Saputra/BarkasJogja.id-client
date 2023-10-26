import { useEffect } from "react"

export const useScrollTop = () => {
	return useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])
}