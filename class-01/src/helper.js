//capitalize a string
const capitalize = string => string.charAt(0) + string.slice(1).toLowerCase()

 //Normalize name and lastname  @param students : array of objects
const normalizeNames = students => {
  return students.map( student => {
    const { name, lastname } = student
    return {
      ...student,
      name: capitalize(name),
      lastname: capitalize(lastname),
    }
  });
};

//order ascendent by score. Params studentsApproved : array of objects
const sorting = (a, b) => a.score - b.score

module.exports = { normalizeNames, sorting }