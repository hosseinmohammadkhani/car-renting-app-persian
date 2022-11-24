/*
                                <fieldset class="form-group">
                                    <div class="row">
                                         <legend class="col-form-legend full-width col-12">نوع بیمه</legend>

                                      <div dir="rtl" class="col-12 full-width">
                                          <div class="form-check padding-right">
                                            <label class="form-check-label">
                                              ساده - شخص ثالث
                                            </label>
                                            <input  class="form-check-input" type="radio" name="level" value="basic" checked>
                                        </div>
                                        <div class="form-check padding-right">
                                            <label class="form-check-label">
                                              کامل - شخص ثالث با بیمه بدنه
                                            </label>
                                            <input class="form-check-input" type="radio" name="level" value="complete">  
                                        </div>
                                      </div>
                                    </div>
                              </fieldset>
*/
/*
//classes
class bmwModels{
    createTag(model1 , model2 , model3){
        //creating new select tag
        let selectTag = document.createElement("select")

        //creating 3 new option tags
        let option1 = document.createElement("option")
        let option2 = document.createElement("option")
        let option3 = document.createElement("option")

        //adding models to options
        option1.appendChild(document.createTextNode(model1))
        option2.appendChild(document.createTextNode(model2))
        option3.appendChild(document.createTextNode(model3))

        //adding options to select tag
        selectTag.appendChild(option1)
        selectTag.appendChild(option2)
        selectTag.appendChild(option3)

    }
    
}
*/

/*

IDEA: MODEL OF THE CAR
    carModel(carBrand){
        if(carBrand === "1"){
            if(form.children.contains(document.querySelector("#model"))){
                form.children[1].remove();
            }

            //creating new div
            let modelDiv = document.createElement("div")
            modelDiv.setAttribute("class" , "form-group")
            modelDiv.setAttribute("id" , "model")
            let label = document.createElement("label")
            label.appendChild(document.createTextNode("مدل خودرو: "))
            label.setAttribute("class" , "full-width")
            modelDiv.appendChild(label)

            //creating new select
            let newSelect = document.createElement("select")
            newSelect.setAttribute("class" , "form-control")
            modelDiv.appendChild(newSelect)

            //creating options
            let modelOption1 = document.createElement("option")
            modelOption1.appendChild(document.createTextNode("bmw1"))
            let modelOption2 = document.createElement("option")
            modelOption2.appendChild(document.createTextNode("bmw2"))

            //adding option to new div
            newSelect.appendChild(modelOption1)
            newSelect.appendChild(modelOption2)

            //adding model div to the form
            form.insertBefore(modelDiv , document.querySelector("#form-group2"))
        }
    }

*/