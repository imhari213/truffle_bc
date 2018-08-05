function abc(number){
    console.log(number);
}
const rev = async() =>{
    await abc(1);
    await abc(2);
    await abc(3);
}
rev();