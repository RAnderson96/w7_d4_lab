import React from "react";
// import MortgageContainer from "../container/MortgageContainer";
// import NumberOfPeople from "./NumberOfPeople";
const Result = ({userMortgage}) => {


    return (
        <div>
            <h4>Your mortgage</h4>
            <div>
                <p>{userMortgage}</p>
            </div>
            
        </div>
    )

}

export default Result;