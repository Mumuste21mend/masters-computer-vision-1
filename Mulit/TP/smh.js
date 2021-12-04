const prompt = require('prompt-sync')();
const input = prompt();


const compress= (input)=>{
    let count=1,currentChar,compressed='',repeated=true;
    let index=0;let subStr='',subStrCount=0; start=true;
    let flag=false;
    while(index<=input.length){
        if( (subStr != input.substring(index,subStr.length+index ))||start ||!(index<=input.length)){
            start=false;
            if((subStrCount===1||subStrCount===0 )&& flag){
                compressed+= repeated? '0 ':'';
                compressed+=' '+ subStr.repeat(subStrCount+1) ;
               flag=false
                subStr='';
                repeated=false;}
            if(subStrCount>=2 && flag){      
            compressed+= ' '+(subStrCount)+' '+subStr+' ';
                subStr='';
            flag=false;
            repeated=true;
            }       
            

            currentChar=input[index];
            if(currentChar==input[index+1] ){
                count++;
               }else{ 
                 
                   if(count>2 ){
                compressed+= ' '+count+' '+currentChar+' ';
                subStrCount=0;
                count=1;
                subStr='';
                flag=true;
                repeated=true;
               }else {
               
                subStr+=currentChar.repeat(count);
                console.log(count+' '+currentChar+' '+subStr);
                count=1;
                flag=false;
                subStrCount=1;
                // repeated=false;
                
               } 
           
            } 
            index++;
        }
    //         }else{
    //             subStrCount++;flag=true
    //    console.log(compressed);
    //    index+= (input.length-index >= subStr.length)?subStr.length:0;
    //    console.log(index+" zzzzzzzzzz"+subStrCount+" zzz" + subStr);
    //          }
       }
       console.log(compressed);
        return compressed;
    }
 
    

// const taux=(input)=>(compress(input.replace(/ /g,'')).replace(/ /g,'').length/input.replace(/ /g,'').length)
console.log(compress(input.replace(/ /g,'')));
// console.log(`the string ${input} is compressed with ${taux(input)}  `);
////////////////////////////////////////////////////////////

const compre= (input)=>{
    let count=1,currentChar,compressed='',repeated=true;
    let index=0;let subStr='',subStrCount=0;

    while(index<input.length){
        if( subStr != input.substring(index,subStr.length+index )||subStrCount==0 ){
            if(subStrCount!=0){
            if(subStrCount==1){
                compressed+= repeated? '0 ':'';
                compressed+=' '+ subStr ;
                subStrCount=0;
                repeated=false;
            }else{      
            compressed+= ' '+subStrCount+' '+subStr+' ';
            subStrCount=0;
            repeated=true;
        }
            }
            currentChar=input[index];
            if(currentChar==input[index+1] ){
                count++;
               }else{ 
                   if(count>2 ){
                compressed+= ' '+count+' '+currentChar+' ';
                subStrCount=1;
                count=0;
                subStr='';
                repeated=true;
               }else {
               
                subStr+=currentChar.repeat(count);
                console.log(count+' '+currentChar+' '+subStr);
                 count=0;
                subStrCount=1;
                repeated=false;
                
               } 
           
            } 
            index++;

            }else{
                subStrCount++;
                console.log(index+" zzzzzzzzzz"+subStrCount+" zzz" + subStr)
                index+=subStr.length;
             }
       }

        return compressed;
    }

    

    function getEndOfRepeat(input , index,str){
       let subStrCount=0 ; let isn=input.length;
        let strln=str.length;let found=0;
        while(index<isn && isn-index>=strln){
            console.log(str == input.substring(index,strln+index ))
            if( str == input.substring(index,strln+index )){

                subStrCount++;
                index+=strln;
                found=1;
            }else{
                found==1?found=-1:null
                index++;
            }
            if(found ==-1)return {index,subStrCount}
    }return {index,subStrCount,found}
    }
//  console.log(getEndOfRepeat(input,0,'zaza'))
    