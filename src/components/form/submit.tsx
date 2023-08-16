import Loader from "../loader";

export default function Submit({title, loading = false}: {title: string, loading: boolean | undefined}) {
  
  const theme = localStorage.getItem("theme")
  
  return (
    <button type="submit" 
    className="bg-zinc-400 p-2 rounded text-white border-2 
    border-zinc-500 hover:bg-zinc-500 transition-all
    dark:bg-zinc-200 dark:text-zinc-600 dark:hover:bg-zinc-50 
    dark:border-zinc-50 w-24 flex justify-center" disabled={loading}>
      {loading ? <Loader dark={theme === "dark"} size="small" /> : title}
    </button>
  )
}
