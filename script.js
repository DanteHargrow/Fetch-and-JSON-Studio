// TODO: add code here
window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then((response)=>{
        response.json().then((json)=>{
            console.log(json);
            const theAstronauts = document.querySelector("#container");
            let astronauts ='';
            let count = 0;
            for(person in json){
                count++;
                astronauts += `
            <div class="astronaut">
                <div class="bio">
                    <h3> ${json[person].firstName} ${json[person].lastName} </h3>
                    <ul>
                        <li>Hours in space: ${json[person].hoursInSpace}</li>
                        <li id="active">Active: ${json[person].active}</li>
                        <li>Skills: ${json[person].skills.join(', ')}</li>
                    </ul>
                </div>
                <img class="avatar" src=${json[person].picture}>
            </div>
            `;
            }
            for(obj in person){
                if(json[obj].active === 'true'){
                    let activeObj = document.getElementById("active");
                    activeObj.style.color = "green";
                }

            }


            theAstronauts.innerHTML = astronauts+
            `<div><h3>Total astronauts: ${count}</h3></div>`;
           
            

        });

    });

});