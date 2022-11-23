//classes
class HTMLUI{
    displayError(errorMessage){

        //creating new div
        let newDiv = document.createElement("div")

        //div class=error
        newDiv.setAttribute("class" , "error")

        //adding error message to div
        newDiv.appendChild(document.createTextNode(errorMessage))

        //inserts a node before a refrence node as a child of a parent node
        form.insertBefore(newDiv , document.querySelector(".form-group"))

        setTimeout(function(){
            newDiv.remove();
        } , 2650)
        
    }
    
    //display result method
    displayResult(carBrand , time , driverSituation){
        let calculate = new calculatePrice(carBrand , time , driverSituation)
        
        //having access to loading icon
        let loadingIcon = document.querySelector("#loading")

        //brand of the car
        switch(carBrand){
            case "1":
                carBrand = "بی ام و"
                break;
            case "2":
                carBrand = "بنز"
                break;
            case "3":
                carBrand = "بوگاتی"
                break;
        }

        //time 
        time = document.querySelector("#time").value
        if(time ===  "1"){
            time = "1"
        }
        else if(time === "2"){
            time = "2"
        }
        else if(time === "3"){
            time = "3"
        }

        //DRIVER SITUATION
        driverSituation = document.querySelector("input[name='dsituation']:checked").value
        if(driverSituation === "driver"){
            driverSituation = "دارد"
        }
        else{
            driverSituation = "ندارد"
        }


        let finalPrice = calculate.calculateBasedOnDriver(carBrand , driverSituation)

        //having access to result div
        let resultDiv = document.querySelector("#result")

        //creating new div
        let newDiv = document.createElement("div")

        //innerHTML
        newDiv.innerHTML = `<p class="header">نمایش فاکتور</p>
        <p>برند ماشین: ${carBrand}</p>
        <p>زمان استفاده: ${time}h</p>
        <p>راننده: ${driverSituation}</p>
        <p>قیمت نهایی: ${finalPrice}</p>
        `

        loadingIcon.setAttribute("style",  "display: block;")

        setTimeout(function(){
            loadingIcon.setAttribute("style" , "display: none;")

            //adding new div to result div
            resultDiv.appendChild(newDiv)
        } , 2500)


    }
}

//calculate price class
class calculatePrice{
    
    //constructor
    constructor(carBrand , time , driverSituation){
        this.carBrand = carBrand
        this.time = time
        this.driverSituation = driverSituation
    }

    //calaculate based on the brand of car function
    calculateBasedOnBrand(carBrand){
        
        switch(carBrand){
            case "1":
                price = 200
                break;
            case "2":
                price = 300
                break;
            case "3":
                price = 400
                break;                
        }
        
    }

    //calculate based on usage time function
    calculateBasedOnTime(time){
        if(time === "1"){
            price = price *  1
        }
        else if(time === "2"){
            price = price * 1.2
        }
        else if(time === "3"){
            price = price * 1.3
        }
        
    }

    //calculate based on driver situation
    calculateBasedOnDriver(driverSituation , carBrand){
        
        if(driverSituation === "non-driver"){
            price = price * 1
        }
        else{
            switch(carBrand){
                case "1":
                    price = price * 1.1
                    break;
                case "2":
                    price = price * 1.15
                    break;
                case "3":
                    price = price * 1.2
                    break;
            }
        }
        return Math.ceil(price)
    }
    
}



//variables
let form = document.querySelector("#request-quote")
let html = new HTMLUI();
let price;

//functions
function eventListeners(){
    form.addEventListener("submit" , function(p){

        p.preventDefault();
        
        //having access to brand & time & driver situation
        let carBrand = document.querySelector("#brand").value
        let time = document.querySelector("#time").value
        let driverSituation = document.querySelector("input[name='dsituation']:checked").value

        //displaying error
        if(carBrand === "" || time === "" || driverSituation === ""){
            html.displayError("پر کردن همه ی مقادیر الزامی است")
            
        }
        else{
            let calculate = new calculatePrice(carBrand , time , driverSituation)
            let calBasedOnBrand = calculate.calculateBasedOnBrand(carBrand)
            let calBasedOnTime = calculate.calculateBasedOnTime(time)
            let calBasedOnDriver = calculate.calculateBasedOnDriver(driverSituation , carBrand) //dislay this to html
            let resultDiv = document.querySelector("#result")
            if(resultDiv.children.length > 0){
                resultDiv.firstChild.remove();
            }

            html.displayResult(carBrand ,time , driverSituation)
        }

    })
}
eventListeners();

//idea: model of the car