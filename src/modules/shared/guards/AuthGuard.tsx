import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../store'
import { PATH } from '@src/modules/auth/routes/paths'

interface MainLayoutProps {
  children: React.ReactNode
}

const AuthGuard = ({ children }: MainLayoutProps) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
  return isAuthenticated ? children : <Navigate to={PATH.LOGIN} />
}

export default AuthGuard
