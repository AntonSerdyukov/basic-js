const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  
  let name='';
  for (let i=0;i<members.length;i++){
    
    if (typeof members[i]==="string")
    name+=members[i].trim().charAt(0).toUpperCase();
  }

  return name.split('').sort().join('');
};
