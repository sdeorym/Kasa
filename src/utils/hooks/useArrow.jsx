export function useArrow() {

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return
        setLoading(true)
        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (err) {
                console.log(gerr)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return { isAnimated }
}