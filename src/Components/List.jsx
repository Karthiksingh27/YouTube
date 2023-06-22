//  import { useState } from "react";
//  const List = () => {
//     let users = [
//         {
//            Name: "tony",
//             Age: 30,
//             Role:"Engineer",
//             id : 1
//         },
//         {
//             name: "Arun",
//             age: 25,
//             role:"SoftwareEngineer",
//             id: 2
//         },
//         {
//             name: "sanju",
//             age: 35,
//             role:"Actor",
//             id: 3
//         }
//         ]
//         let remove =(id)=>{
//             console.log(id);
//         }
//     return ( 
//         <div className="list">  
//             {users.map((data)=>{
//                 return(
//                     <div className="user">
//                         <h1>Name:{data.name}</h1>
//                         <h2>Name:{data.age}</h2>
//                         <h4>Name:{data.role}</h4>
//                         <button onClick={()=>remove(data.id)}>Remove</button>
//                     </div>
//                 )
//             })

//             }
//         </div>
//      );
//  }
  
//  export default List;