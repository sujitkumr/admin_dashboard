import React from 'react'
import { useEffect,useState } from 'react'
import {  useNavigate } from "react-router-dom";


   
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import Pagination from './Pagination';

const UserList = () =>{
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json").then((res) => {
        return res.json();
    }).then((resp) => {
        empdatachange(resp);
    }).catch((err) => {
        console.log(err.message);
    })
}, [])
//by default 10 for page 1




const handleItemDelete = (id)=>{
  empdatachange(empdata.filter(item=>
     item.id!=id
  ))
}

// const Removefunction = (id) => {
//   if (window.confirm('Do you want to remove?')) {
//       fetch("http://localhost:8000/employee/" + id, {
//           method: "DELETE"
//       }).then((res) => {
//           alert('Removed successfully.')
//           window.location.reload();
//       }).catch((err) => {
//           console.log(err.message)
//       })
//   }
// }
const LoadEdit = (id) => {
  navigate("/employee/edit/" + id);
}
  return (
    <div className="container">
    <div className="card">
        <div className="card-title">
            <h2>Employee Listing</h2>
        </div>
        <div>
        <input />
        </div>
        <div className="card-body">
            
            <table className="table table-bordered">
                <thead className="bg-dark text-white">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>

                    {empdata &&
                        empdata.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.role}</td>
                                <td><FaRegEdit onClick={() => { LoadEdit(item.id) }}  />
                                    <MdDeleteOutline onClick={()=>handleItemDelete(item.id)}/>
                                   
                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
            <Pagination
        gotoPage={gotoPage}
        length={data.length}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
          
        </div>
       

    </div>
</div>
  );
}

export default UserList
