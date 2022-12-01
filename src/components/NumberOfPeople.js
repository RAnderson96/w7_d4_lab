import React from "react";
import Mortgage from "./Mortgage";
import Result from './Result'
const NumberOfPeople = ({ onNumPeopleSelected, numPeople, onUserDepositSubmitted, onUserSalarySubmitted, userDeposit, userSalary, setUserMortgage, userMortgage, onUserMortgageSubmitted}) => {

    const handleChange = (event) => {
        const chosenNumPeople = event.target.value;
        console.log(chosenNumPeople)
        onNumPeopleSelected(chosenNumPeople);


    }
    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(event)
        // console.log(numPeople)
        if (numPeople==="1") {
            console.log(event)
            const userSalary = parseFloat(event.target[0].value);
            const userDeposit = parseFloat(event.target[1].value);
            const mortgage = (userSalary*3)
            console.log(userSalary, userDeposit)


        }
        else if (numPeople ==="2") {
            console.log(event)
            const userSalary = parseFloat(event.target[0].value) + parseFloat(event.target[2].value);
            const userDeposit = parseFloat(event.target[1].value) + parseFloat(event.target[3].value);
            console.log(userSalary, userDeposit)

        }
        onUserSalarySubmitted(userSalary);
        onUserDepositSubmitted(userDeposit);
        // const mortgage = (parseFloat(userSalary) * 3) + parseFloat(userDeposit);
        // console.log(mortgage)
        onUserMortgageSubmitted(mortgage)
        
        // calculator(userSalary, userDeposit);
        // return userSalary, userDeposit
    }

    const calculator = (userSalary, userDeposit) => {
        const mortgage = userSalary * 3 + userDeposit;
        setUserMortgage(mortgage)

    }
    

    return (
        <div>
            <div>
                <p>Who is this mortgage for?</p>

                <label htmlFor="one person">Just me
                    <input type="radio" id="one person" name="people" value="1" defaultChecked onChange={handleChange}></input></label>
                <label htmlFor="two people">Two of us
                    <input type="radio" id="two people" name="people" value="2" onChange={handleChange}></input></label>
                <form onSubmit={handleSubmit}>
                    <Mortgage/>
                    {numPeople==="2" ? <Mortgage/> : null} 
                    <input type="submit" value="submit" />
                
                </form>
                    <Result userMortgage={userMortgage} />
                

            </div>
        </div>

    )

}

export default NumberOfPeople;