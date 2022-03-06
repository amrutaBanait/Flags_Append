document.querySelector(".search-button").addEventListener("click", ()=>{
    SearchCount()
})

let main = document.getElementById("main")

let maindata = [];

function SearchCount(){
    let inputvalue = document.querySelector(".search-input").value;
    console.log(inputvalue)

    let data = maindata.filter((e)=>{
        return e.name == inputvalue
    })

    try{
        if(data[0].id ==null){

        }else{
            showcountry(data)
        }
    }catch(err){
        main.innerHTML = `<h1>No Country found</h1>`
    }
}

async function dis(){
    let data = await fetch ("https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1709/data.json")

    let codata = await data.json()

    maindata = codata
    showcountry(codata)
}

dis()

function showcountry(data){

    main.innerHTML =""
    data.forEach((e)=>{
        
        let maincodiv = document.createElement("div")
        maincodiv.className = `country-list-${e.id}`

        let img = document.createElement("img")
        img.src = e.flag

        let name = document.createElement("p")
        name.innerText = e.name

        let pop = document.createElement("p")
        pop.innerText = `Population: ${e.population}`

        let reg = document.createElement("p")
        reg.innerText = `Region: ${e.region}`

        let capi = document.createElement("p")
        capi.innerText = `Capital: ${e.capital}`

        maincodiv.append(img,name,pop, reg, capi)

        main.append(maincodiv)

    })
}