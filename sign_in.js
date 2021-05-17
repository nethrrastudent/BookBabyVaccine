class Signin {

    constructor() {

        this.childname = createInput('Child Name');
        this.dob = createInput('DOB in dd/mm/yyyy');
        this.greeting = createElement('h2');
        this.submitbutton=createButton('SUBMIT');
        this.title1 = createElement('h2');
        this.title2=createElement('h3');
        this.greeting2=createElement('h2');
    }


    hide(){
        this.greeting.hide();
        this.submitbutton.hide();
        this.childname.hide();
        this.dob.hide();
        this.title1.hide();
        this.title2.hide();

      }
    display() {


        this.title1.html("BABY VACCINE TRACKER");
        this.title1.position(150,50);
    
        this.title2.html("Enter the details");
        this.title2.position(220,130);

        this.childname.position(220,200);
        this.dob.position(220,250);
        this.submitbutton.position(250,300);


        this.submitbutton.mousePressed(()=>{
            this.childname.hide();
            this.dob.hide();
            //this.title1.hide();
           this.title2.hide();
           this.submitbutton.hide();
            childName = this.childname.value();
            dob = this.dob.value();
            
            appstate = 2;
          });
    }

    async computeDue(){
        var present_date = new Date();
        
        var htmlContent = "Hello Parent !! </br></br>";
 
        var count = 0;
        for(var key in vaccines){
            var vaccine = vaccines[key];
            for(var dosekey in vaccine.Dosage){
                var childDOB = new Date(dob);
                var dose = vaccine.Dosage[dosekey];
                var numOfDays = 0;
                var actualDue = new Date();
                if(dose.Day){
                    actualDue = new Date(childDOB.setDate(childDOB.getDate() + dose.Day));
                }else if(dose.Week){
                numOfDays = dose.Week*7;
                    actualDue = new Date(childDOB.setDate(childDOB.getDate() + numOfDays));
                }else if(dose.Month){
                    actualDue = new Date(childDOB.setMonth(childDOB.getMonth() + dose.Month));
                }else if(dose.Year){
                    actualDue = new Date(childDOB.setFullYear(childDOB.getFullYear()+dose.Year));
                }

                var diffTime = Math.abs(present_date - actualDue);
                var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)-1); 
                if(present_date < actualDue && diffDays < 15){
                    htmlContent = htmlContent + key + " - " + dosekey + " is due in " + diffDays + " days</br></br>";
                   

                   

                    console.log(key + " - " + dosekey + " is due in " + diffDays);                   
                }
            }
        }

        this.greeting.html(htmlContent);
        this.greeting.position(300,200);

      
    }
}



