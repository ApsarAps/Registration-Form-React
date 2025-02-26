import { useState } from "react"


export const Regfrm = () => {
    const[user,setUser]=useState(
        {
            name:"Apsar",
            age:"22",
            gender:"Male",
            isMarried:false,
            country:"India",
            bio:"Write something about yourself....."
        }
    )
    function changeHandler(e) {
        const name=e.target.name
       const value=e.target.type==="checkbox"?e.target.checked:e.target.value
        setUser({...user,[name]:value})
        
    }
  return (
    <>
    <h1 className="text-2xl p-3 font-serif font-bold">Registration Form:</h1>
    <table className=" border border-gray-500 ml-2 rounded-xl overflow-hidden ">
  <thead>
    <tr className="bg-gray-800 text-white">
      <td className=" border-1 font-bold px-4 py-2">Name</td>
      <td className="font-semibold border-1 px-4 py-2">{user.name}</td>
    </tr>   
    <tr className="border-b border-gray-300">
      <td className=" border-1 font-bold px-4 py-2">Age</td>
      <td className="font-semibold border-1 px-4 py-2">{user.age}</td>
    </tr>
    <tr className="border-b border-gray-300">
      <td className=" border-1 font-bold px-4 py-2">Gender</td>
      <td className="font-semibold border-1 px-4 py-2">{user.gender}</td>
    </tr>
    <tr className="border-b border-gray-300">
      <td className=" border-1 font-bold px-4 py-2">Maritial Status</td>
      <td className="font-semibold border-1 px-4 py-2">{user.isMarried?"Married":"Unmarried"}</td>
    </tr>
    <tr className="border-b border-gray-300">
      <td className=" border-1 font-bold px-4 py-2">Country</td>
      <td className="font-semibold border-1 px-4 py-2">{user.country}</td>
    </tr>
    <tr>
      <td className=" border-1 font-bold px-4 py-2">Bio</td>
      <td className="font-semibold border-1 px-4 py-2">{user.bio}</td>
    </tr>
  </thead>
</table>
<form action="" className="mt-5 mx-3 flex flex-col gap-3 font-semibold " >
    <input className=" outline-2 outline-indigo-300 mb-4 rounded-lg p-1 w-100" type="text"name="name" onChange={changeHandler} value={user.name} placeholder="Enter your full name"/>
    <input className="  outline-2  outline-indigo-300  mb-4 rounded-lg p-1 w-100" type="text" name="age" onChange={changeHandler} value={user.age} placeholder="Enter your age"/>
    <div className="gender font-semibold">
        <label htmlFor="male"><input type="radio" name="gender"  onChange={changeHandler} checked={user.gender=="Male"} value="Male" id="male" />Male</label>
        <label htmlFor="female"><input type="radio" name="gender" onChange={changeHandler} checked={user.gender=="Female"} value="Female" id="female" />Female</label>
    </div>
    <div className="isMarried font-semibold ">
        <label htmlFor="isMarried" ><input type="checkbox"name="isMarried" onChange={changeHandler}checked={user.isMarried} value={user.isMarried} id="isMarried"/>Is Married</label>

    </div>
    <div >
        <label htmlFor="country" className="font-semibold flex flex-col">Select Country<select className="mt-2 rounded-2xl outline-indigo-300 outline-2 w-100" name="country" id="country" onChange={changeHandler} value={user.country}>
        <option  value="China">China</option>
            <option value="India">India</option>
            <option value="Canada">Cananda</option>
            <option value="Pakistan">Pakistan</option>
            </select></label>
    </div>
    <textarea className="mt-5 w-100 rounded-2xl outline-indigo-300"  name="bio" id="bio" value={user.bio}  rows='10' placeholder="Write about something you.....!"onChange={changeHandler}></textarea>
    
</form>

    </>
  )
}
