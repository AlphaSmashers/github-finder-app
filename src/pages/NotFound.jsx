import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="hero">
        <div className="text-center hero-content">
            <div className="max-w-lg">
                <div className="h1 text-8xl font-bold mb-8 text-white">
                    Oppsss!
                    <p className="text-5xl mb-8">404 - Page not Found</p>
                    <Link to="/" className="btn btn-primary btn-lg text-white">
                        <FaHome className="mr-2"/>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotFound