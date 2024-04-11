import "./stiles/UserCard.css"

const UserCard = ({user, deleteUser, setUserEdit}) => {

  const handleDelete = () =>{
    deleteUser('/users/',user.id);
  }
   const handleEdit =() =>{
       setUserEdit(user)
  }

  return (
    <article className="art">
       <h2 className="h2">{`${user.first_name} ${user.last_name}`}</h2>
      <ul>
        <li className="li"><span className="span">Email</span><span className="span2">{user.email}</span></li>
        <li className="li"><span className="span" >Birthday</span><span className="span2">{user.birthday}</span></li>
        
      </ul>
      <button className="button_delete"onClick={handleDelete}>Delete</button>
      <button  className="button_edit" onClick={handleEdit}>Edit</button>
    </article>
  )
}


export default UserCard