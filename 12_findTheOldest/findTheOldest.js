// const findTheOldest = function(array) {
//     const results = array.map((people)=>{
//         let age = people.yearOfDeath - people.yearOfBirth;
//         people['age'] = age;
//         return people;
        
//       })
//       let name;
//       let number = 0;
//       for(let i = 0;i < results.length;i++){
//         if(results[i].age < results[i-1].age){
//           results.splice(i,1)
//         }
//       }
      
//       return name;

// };

const findTheOldest = function(array) {
  return array.reduce((oldest, current)=>{
    const oldestAge = findAge(oldest.yearOfBirth,oldest.yearOfDeath);
    const currentAge = findAge(current.yearOfBirth,current.yearOfDeath);
    return (oldestAge < currentAge) ? current : oldest;
  })

  function findAge(birth, death){
    if(!death){
      death = new Date().getFullYear()
    }
    return death - birth;
  }
};



// Do not edit below this line
module.exports = findTheOldest;
