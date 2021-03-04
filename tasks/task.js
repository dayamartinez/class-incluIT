const  students  = require('./students.json');

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
 const sorting = studentsApproved => studentsApproved.sort((a, b) => a.score - b.score)

//Iterate with: for. Params List:array, minScore: number 
const studentsApproved = (list, minScore) => {
  let approveds = []

  for (let i = 0; i < list.length; i++) {
    if (list[i].score >= minScore) approveds.push(list[i]);
  }
  return approveds;
}

//Iterate with: while. Params List:array, minScore: number 
const studentsApproved2 = (list, minScore) => {
  let approveds = []
  let i = 0

  while (i < list.length) {
    if (list[i].score >= minScore) approveds.push(list[i]);
    i++;
  }
  return approveds;
}

//Iterate with: do... while. Params List:array, minScore: number 
const studentsApproved3 = (list, minScore) => {
  let approveds = []
  let i = 0

  do {
    if (list[i].score >= minScore) approveds.push(list[i]);
    i++;
  } while (i < list.length)

  return approveds;
}

//logs or tables
const resultApproveds = studentsApproved(students, 4)
const resultCapitalize = normalizeNames(resultApproveds)
const listStudentsSort = sorting(resultCapitalize)

console.table(listStudentsSort)
