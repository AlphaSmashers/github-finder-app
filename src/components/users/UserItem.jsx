import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import GithubContext from "../../context/github/GithubContext"

function UserItem({user: {login, avatar_url}}) {

    const {getUser} = useContext(GithubContext)

  return (
        <div className='card shadow-md compact side bg-base-100'>
            <div className="flex-row items-center space-x-4 card-body">
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src={avatar_url} alt="Profile" width={100} />
                    </div>
                </div>
                <div className="">
                    <h2 className="card-title">{login}</h2> 
                    <Link to={`/user/${login}`} className='text-base-content text-opacity-40'>Visit Profile</Link> {/* We didn't passed the onClick={} here, because our moto is not to fetch user here, our moto here is to just redirect to the accurate/right page. */}  
                </div>
            </div>
        </div>
  )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem