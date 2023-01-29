function csvToJson(csv){
    const string=csv.toString();
    const array=string.split("\r");
    let result=[];
    let headers=array[0].split(", ");
    for(let i=1;i<array.length-1;i++){
        let obj={};
        let str=array[i];
        let s='';
        let flag=0;
        for(let ch of str){
            if(ch==='"' && flag===0){
                flag=1;
            }
            else if(ch=='"'&&flag==1){
                flag=0;
            }
            if(ch===', '&& flag===0){
                ch='|';
            }
            if(ch!=='"'){
                s+=ch;
            } 
        }
        let properties=s.split("|");
        for(let j in headers){
            if(properties[j].includes(" ")){
                obj[headers[j]]=properties[j].split(" ").map((item)=>{item.trim()})   
            }
            else{
                obj[headers[j]]=properties[j];
            }
            result.push(obj);
        }
    }
    let json=JSON.stringify(result);
   console.log(json);
}
csvToJson(`
Date	State	Confirmed	Recovered	Deceased	Other	Tested
30-01-2020	Kerala	1	0	0	0	
30-01-2020	India	1	0	0	0	
02-02-2020	Kerala	2	0	0	0	
02-02-2020	India	2	0	0	0	
03-02-2020	Kerala	3	0	0	0	
03-02-2020	India	3	0	0	0	
14-02-2020	Kerala	3	3	0	0	
14-02-2020	India	3	3	0	0	
`)
