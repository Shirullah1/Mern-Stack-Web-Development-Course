import { countryList } from "./countryLIst.js";
countryList.map((item,i)=>{
         let countryId=item['id'];
         let countryName=item['name'];
         let countryNumericCode=item['numeric_code'];
         let countryPhoneCode=item['phone_code'];
         let countryISO2=item['iso2'];
         let countryISO3=item['iso3'];
         // make list using map & JSON array output.. 
         let countryDetails=console.log('Country Id is:'+countryId+', Country Name is:'+countryName+ ', Country ISO2 is :'+countryISO2+' ,  country ISO3 is :'+countryISO3+ ',  Country Numeric code :'+countryNumericCode+',  Country Phone Code :'+countryPhoneCode);
         // array of each object.......
        let countryListArray=[countryId,countryName,countryNumericCode,countryISO2,countryPhoneCode,countryPhoneCode];
        
        console.log(countryListArray);
      
        
         
        

});
 