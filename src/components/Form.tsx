import React, { useRef, useState } from 'react';

export const Formulaire = () => {

    const firstnameReaf = useRef<HTMLInputElement>(null);
    const lastnameReaf = useRef<HTMLInputElement>(null);
    const ageReaf = useRef<HTMLInputElement>(null);
    const developerReaf = useRef<HTMLInputElement>(null);

    // const [lastname , setLastName] = useState<string>("") // puede ser asi tambien pero renderiza cada vez el componente.

    const handleSubmit = (event) => {
        event.preventDefault();
        // login(firstname, lastname, age, developer)
        console.log(firstnameReaf.current?.value); 
        console.log(lastnameReaf.current?.value); 
        console.log(ageReaf.current?.value); 
        console.log(developerReaf.current?.checked); 
        
        
    }

    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor='firstname'>Firstname</label>
            <input type= "text" id='firstname' ref={firstnameReaf} required = {true}></input>
            <br/>
            <label htmlFor='lastname'>Lastname</label>
            <input type= "text" id='lastname' ref={lastnameReaf} required = {true}></input>
            <br/>
            {/* <label htmlFor='lastname'>Lastname</label>
            <input type= "text" onChance= {(e)=>{setLastName(e.target.value)}}></input> */} 
            <label htmlFor='age'>Age</label>
            <input type= "number" id='age' ref={ageReaf} required = {true}></input>
            <br/>
            <label htmlFor='developer'>Developer</label>
            <input type= "checkBox" id='developer' ref={developerReaf} required = {true}></input>
            <br/>
            <button>Send</button>
            <button type='reset'>Annuler</button>
        </form>
    )

}
// const login = (firstname, lastname, age, developer) => {
//     if(firstname || lastname || age || developer === "") {
//         return alert("All input are required")
//     }
// }