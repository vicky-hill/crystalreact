

















// import React, { useState } from 'react'
// import { v4 as uuidv4} from 'uuid'

// const Toast = ({ }) => {
//     const [toasts, setToasts] = useState([])
    
//     export const addToast = (title, message) => {
//         console.log('lets make this happen', title, message)
//         const id = uuidv4();
//         setToasts(toasts => [...toasts, {id, title, message}])
//     }

//     const deleteToast = id => {
//         setToasts(toasts => toasts.filter((toast) => toast.id !== id))
//     }

//     return (
//         <div className="toast-container">
//         {
//             toasts.map(toast => (
//                 <div className="toast">
//                 <div className="toast-header">
//                     <div className="toast-img"></div>
//                     <strong className="toast-title">{ toast.title }</strong>
//                     <small>11 mins ago</small>
//                     <button className="toast-close" onClick={() => deleteToast(toast.id)}><span>&times;</span></button>
//                 </div>
//                 <div className="toast-body">
//                     { toast.message }
//                 </div>
//             </div>
//             ))
//         }
//     </div>
//     )
// }


// export default Toast


