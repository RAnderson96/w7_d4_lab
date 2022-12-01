import React, { useState, useEffect } from 'react';
import NumberOfPeople from '../components/NumberOfPeople';

const MortgageContainer = function() {

    const [numPeople, setNumberPeople] = useState("1");
    const [userSalary, setUserSalary] = useState(null);
    const [userDeposit, setUserDeposit] = useState(null);
    const [userMortgage, setUserMortgage] = useState(null);

    const onNumPeopleSelected = function (setPeople) {
        setNumberPeople(setPeople)
    }

    const onUserSalarySubmitted= function (setSalary) {
        setUserSalary(setSalary)
    }
    const onUserDepositSubmitted= function (setDeposit) {
        setUserDeposit(setDeposit)
    }

    const onUserMortgageSubmitted= function (setMortgage) {
        setUserMortgage(setMortgage)
    }

    return (
        <>
            <h1>Mortgage Calculator</h1>
            <NumberOfPeople onNumPeopleSelected = {onNumPeopleSelected} 
            numPeople={numPeople} 
            onUserSalarySubmitted = {onUserSalarySubmitted} 
            onUserDepositSubmitted = {onUserDepositSubmitted}
            userSalary={userSalary}
            userDeposit ={userDeposit}
            setUserMortgage={setUserMortgage} 
            userMortgage ={userMortgage}
            onUserMortgageSubmitted={onUserMortgageSubmitted}
            />
        </>
    )


}

export default MortgageContainer;