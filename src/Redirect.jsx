import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Redirect=()=>{
    const redirect = useNavigate();
    useEffect(() => {
        redirect('/docsync/sc');
      }, [redirect]); 
    
      return null;
}
export default Redirect;