

// pin generation parts

function generatePin(){
    const random=Math.round(Math.random()*10000);
    return random;
}
// careful with the syntax
function pinString(){
    const pin=generatePin();
    const Pinlength=pin + '';
    if(Pinlength.length===4){
        return pin;
    }
    else{
        pinString();
    }
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const generatedPin=pinString();
    const inputfield=document.getElementById('pin-input-field');
    inputfield.value=generatedPin;
    
    
})


//second input field code

document.getElementById('calculator').addEventListener('click',function(event){
    const clicked=event.target.innerText;
    const secondInputfield=document.getElementById('second-input-field');
    const previoustypedNumber=secondInputfield.value;
    if(isNaN(clicked)){
        if(clicked==='C'){
            secondInputfield.value='';

        }
        else if(clicked==='<'){
            const popupbefore=previoustypedNumber;
            
            const newarray=popupbefore.split('');
          
            
            newarray.pop();
            const newvalue=newarray.join('');
            secondInputfield.value=newvalue;


        }
    }
    else{
        
         const newtypedNumber=previoustypedNumber+clicked;
          secondInputfield.value=newtypedNumber;

    }
   

})

//validation parts

document.getElementById('validation').addEventListener('click',function(){
    const inputfield=document.getElementById('pin-input-field');
    const validationInputonevalue=inputfield.value;
    const validationInputtwo=document.getElementById('second-input-field');
    const validationInputtwovalue=validationInputtwo.value;

    const pinsuccess=document.getElementById('pin-success');
    const pinFailure=document.getElementById('pin-failure');
    if(validationInputonevalue===validationInputtwovalue){
        
        
        pinsuccess.style.display='block';
        pinFailure.style.display='none';
    }
    else{
        
        pinFailure.style.display='block';
        pinsuccess.style.display='none';
    }


})





