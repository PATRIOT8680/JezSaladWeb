import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function PageReload() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.setItem('reloaded', 'true')
    }

    if(sessionStorage.getItem('reloaded')) {
      sessionStorage.removeItem('reloaded')
      if(location.pathname !== '/404') navigate('/')
    }

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [navigate, location.pathname])

  return null
}

export default PageReload