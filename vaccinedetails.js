class VaccineDetails {
    constructor(){
      this.index = null;
    this.dateofbirth = 0;
    this.name = null;
    
  
    }

    getVaccines(){
      var vaccinesRef  = database.ref('VaccineList');
      vaccinesRef.on("value",function(data){
       //console.log(data.val());
       vaccines = data.val();
      })
    }  
}