const userList=[
    {
        name:"Vinoth", 
        city:"Chennai",
         description:"BackEnd Devoloper",
          skills:["UI/UX","HTML","CSS","JAVASCRIPT","REACT JS"],
           online:true,
           profile:"images/ima.jpg"
},
{
    name:"Apsar", 
    city:"Tenkasi",
     description:"FrontEnd Devoloper",
      skills:["UI/UX","HTML","CSS","JAVASCRIPT","REACT JS"],
       online:false,
       profile:"images/imag.jpg"
},
{
    name:"Mohith", 
    city:"Coimbatore",
     description:"JavaScript Devoloper",
      skills:["UI/UX","HTML","CSS","JAVASCRIPT","REACT JS"],
       online:true,
       profile:"images/image.jpg"
}

]
function User(props) {
    return(
        <div className="card-container">
            <span className={props.online?"pro online":"pro offline"}>{props.online?"Online":"Offline"}</span>
            <img className="img1" src={props.profile} alt="" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
<div className="btn">
<button className="primary">Message</button>
<button className="primary outline">Follow</button>
</div>
            
            <div className="skills">
                <h2>Skills</h2>
                <ul>
                    {props.skills.map((skills,index) =>[<li key={index}>{skills}</li>])}
                </ul>
            </div>
        </div>
    )
    
}

export const UserCard = () => {
  return (
    <>
    {
    userList.map((user,index) =>
    (<User key={index} name={user.name} city={user.city} online={user.online} profile={user.profile} description={user.description} skills={user.skills}/>)
    )
    }
    </>
  )
}
