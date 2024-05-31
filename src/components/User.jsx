import useBuyer from "../../customHook/useBuyer";
import 'firebase/auth'

export const User = () => {

    const {buyer, handleInputChange} = useBuyer();

    const submit =async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }


  return (
    <form className="mt-20">

         <h3>
         </h3>
         <div className="flex flex-col gap-1">
          <span>Email</span>
          <input className="bg-inherit border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-400"
            type="email"
            placeholder="Email"
            name="email"
            value={buyer.email}
            onChange={handleInputChange}
          />
           </div>
           <div className="flex flex-col gap-1">
          <span>Password</span>
          <input className="bg-inherit border-2 border-gray-300 rounded-md p-1 focus:outline-none focus:border-blue-400"
            type="password"
            placeholder="Password"
            name="password"
            value={buyer.password}
            onChange={handleInputChange}
          />
           </div>
           <button
          className="mt-3 bg-blue-400 text-white rounded-md px-2 py-1"
          type="submit"
          onClick={submit}
        >
          Iniciar sesión
        </button>
    </form>
  )
}
