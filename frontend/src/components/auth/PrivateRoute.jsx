import {Navigate} from "react-router-dom";

function PrivateRoute({children}) {
  
    // const {token} = useSelector((state) => state.auth);
    const isAdmin = true;
    if(isAdmin !== false) {
        return children
    }
    else {
        return <Navigate to="/admin"/>
    }
}

export default PrivateRoute