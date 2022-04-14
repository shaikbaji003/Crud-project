import React from "react";

function Serchbar({serachedValue,setSearchedValue}) {
    
    const onChangeHandler=(e)=>{
        setSearchedValue(e.target.value)
    }
    return (
        <div>
            <input style={{width:'300px',marginTop:'30px',height:'20px',outline:'none'}} type='text' value={serachedValue} placeholder='search' onChange={(e)=>{onChangeHandler(e)}} />
        </div>
    );
}

export default Serchbar;

