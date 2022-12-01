import NumberOfPeople from "./NumberOfPeople";
import React from "react";

const Mortgage = ({numPeople}) => {


    return (
        <div>
            <h4>How much do you earn before tax?</h4>
            <div>
                    <label htmlFor="salary" >How much you earn?</label>
                    <input type="number" step="0.01" id="salary" name="salary" ></input>
                    <label htmlFor="deposit" >Deposit value?</label>
                    <input type="number" step="0.01" id="deposit" name="deposit" ></input>
                    
            </div>
            
        </div>
    )

}

export default Mortgage;