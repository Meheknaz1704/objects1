var student={
    name:'Anam',
    age:22,
    mobile:8088005931,
    address:{
        city:'banglore',
        state:'KA',
        pin:577011
    
},

hobbies:['dancing','reading','skipping','writing','cooking','chating'],
bringhobbies: function(){
    for(i=0;i<=student.hobbies.length-1;i++){
        console.log(student.hobbies[i]);

    }
}
    
}
console.log(student)
console.log(student.bringhobbies())
