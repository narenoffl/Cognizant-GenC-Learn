var averageMarks = 0; // Use this variable to store the average mark
var studentGrade = ""; // Use this variable to store the student grade

//Implement the calculateAverageMark function and use the rest parameter as an argument
//Return the average mark with 2 decimal places

function calculateAverageMark(...args) {
  let total = 0;
  for (var marks of args) {
    total += marks;
  }
  averageMarks = total / args.length;

  return averageMarks.toFixed(2);
}

//Implement the calculateStudentGrade function
//Return the student grade

function calculateStudentGrade(...range) {
  for (var markRange of range) {
    if (markRange < 50) {
      studentGrade = "F";
    } else if (markRange < 60) {
      studentGrade = "D";
    } else if (markRange < 70) {
      studentGrade = "C";
    } else if (markRange < 80) {
      studentGrade = "B";
    } else if (markRange < 90) {
      studentGrade = "A";
    } else {
      studentGrade = "A";
    }
  }
  return studentGrade;
}
