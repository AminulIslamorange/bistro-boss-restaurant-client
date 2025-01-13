import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure=useAxiosSecure();
    const {data:users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async ()=>{
            const res=await axiosSecure.get('/users',{
              headers:{
                authorization:`Bearer ${localStorage.getItem('access-token')}`
              }

            })
            return res.data;


        }
    })
    const handleDeleteUser=user=>{
        Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                    //   Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    //   });
        
                    axiosSecure.delete(`/users/${user._id}`)
                    .then(res=>{
                        if(res.data.deletedCount > 0){
                            refetch();
                              Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
        
                        }
                    })
                    }
                  });

    }
    const handleMakeAdmin=user=>{
      axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount>0){
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Now admin now`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
        
    }
    return (
        <div>
           
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All User</h2>
                <h2 className="text-3xl">Totle User :{users.length}</h2>
            </div>
            <div><div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        users.map((user,index)=><tr key={user._id}>
            <th>{index +1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td> {user?.role === 'admin'?"Admin" : <button onClick={()=>handleMakeAdmin(user)} className="btn btn-warning bg-orange-500"> <FaUsers className="text-white"></FaUsers>
            </button>}</td>
            <td>
                <button onClick={()=>handleDeleteUser(user)} className="btn btn-warning"><RiDeleteBin6Line className="text-red-700"/> 
                </button>
                </td>
          </tr>)
    }
      
    
      
    </tbody>
  </table>
</div></div>
            
        </div>
    );
};

export default AllUsers;