const  students  = require('./students.json');
const { sorting, normalizeNames } = require('./helper') 

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

const resultApproveds = studentsApproved(students, 4)
const resultCapitalize = normalizeNames(resultApproveds).sort(sorting)

//logs or tables
console.table(resultCapitalize)
