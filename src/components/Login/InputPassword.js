import {useState,useEffect} from 'react';
function InputPassword({flag}){
    function handleChangeIcon2(flag){
        if(flag)
            return (<i className="password__icon--show fa fa-eye"/>);
        return (<i className="password__icon--hide fa fa-eye-slash"/>);
    }
    return(
        <div>
            {()=> handleChangeIcon2(flag)}
        </div>
    )
}
export default InputPassword;