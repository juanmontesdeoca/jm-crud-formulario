
import { useEffect } from "react"
import{useForm} from "react-hook-form"
import "./stiles/formUser.css"

const FormUser = ({createUser,userEdit,updateUser,setUserEdit}) => {
  
    const {handleSubmit, register, reset } = useForm()

    useEffect(()=> {
        reset(userEdit)
    },[userEdit])

    const submit= (data) =>{
       if (userEdit){
        //update
        updateUser('/users/',userEdit.id,data)
        setUserEdit()
       }else{
        //create
        createUser('/users/',data)
       }
   

   

      reset({
      email:'',
      password: '',
      first_name:'',
      last_name:'',
      birthday: ''
    })
    }

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <h1 className="h1">Nuevo Usuario</h1>
        <label >
        <span className="span">Email.....</span>
        <input className="input"{...register('email')} type="email" />
      </label>
      <label>
        <span className="span">Password</span>
        <input className="input"{...register('password')}type="password" />
      </label>
      <label>
        <span className="span">First_Name</span>
        <input className="input"{...register('first_name')}type="text" />
      </label>
      <label>
        <span className="span">Last_name</span>
        <input className="input"{...register('last_name')} type="text" />
      </label>
      <label>
        <span className="span"> birthday..</span>
        <input className="input" {...register('birthday')}type="date" />
      </label>
      <button className="button" >Submit</button>

    </form>
  )
}

export default FormUser