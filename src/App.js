import React, {useState,useEffect} from 'react';
import Users from './components/users/Users'
import Toggle from './components/toggle/Toggle'

export default function App(props) {
  const [users, setUsers] = useState([])
  const [showUsers, setShowUsers] = useState(false)

  useEffect(() => {
      const fecthUsers = async () =>{
        const res = await fetch(
          'https://randomuser.me/api/?seed=rush&nat=br&results=10'
        )
        const json = await res.json()
        setUsers(json.results)
    }
    fecthUsers()
  }, [])
 
  const handleShowUsers = (isChecked) => {
      setShowUsers(isChecked)
  }
    return (
      <div>
       <Toggle enable={showUsers} onToggle={handleShowUsers}/>
        <hr/>
        {showUsers && <Users users={users}/>}
      </div>
    )
}
