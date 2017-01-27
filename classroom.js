//Exercise 3 
// ClassRoom
//     Create a Classroom class that is responsible for containing information about a classroom.  

//     It should define the folowing properties:
//         - enrolledStudents:array
//         - capacity:number
//         - instructorName:string
//         - roomNumber:string

//     It should implement the following methods:
//         - addStudent(name, email)
//         - removeStudent(student)
//         - getAllStudents()
//         - findStudent(email)
//         - isFull()
//         - getRemainingSeatCount()




var classroom1 = new Classroom(43,"Hill",14);





// class1.capacity
// class1.name
// class1.number

// var class2 = new Classroom(68,"Carney",2);

// class2.number
// class2.name
// class2.capacity

function Student(name, email){
  this.name=name;
  this.email=email;
}

Student.prototype.getNameAndEmail = function(){
  return this.name + this.email;
};

function Classroom(capacity,name,number){
  this.capacity=capacity;
  this.name=name;
  this.number=number;
  this.enrolledStudents=[];
}
Classroom.prototype.addEnrolledStudents= function(name,email){
  var studentToAdd = new Student(name,email);
  this.enrolledStudents.push(studentToAdd);
};
Classroom.prototype.getAllStudents = function(){
return this.enrolledStudents
};

  
  console.log("Number of students" + classroom1.enrolledStudents.length);


for (var i=0;i< classroom1.enrolledStudents.length; i++){
  console.log(classroom1.enrolledStudents[i].getNameAndEmail());
}
for (var i=0;i< classroom1.getAllStudents().length; i++){
  console.log(classroom1.getAllStudents()[i].getNameAndEmail());
}

Classroom.prototype.removeStudent=function(student){
  var indexToRemove=this.enrolledStudents.indexOf(student);
    this.enrolledStudents.splice(indexToRemove,1);
};
Classroom.prototype.findStudent= function(email){
  var studentLookUp = new Student(email);
  this.findStudent.push(studentLookUp);
  console.log(classroom1.findStudent);
};
var classroom1 = new Classroom ("43","Hill","14");
  classroom1.addEnrolledStudents("Bobby ","Bobby@gmail.com");
  classroom1.addEnrolledStudents("Allen ","Allen@gmail.com");
  console.log(classroom1);
  
  console.log(classroom1.enrolledStudents.length);
  classroom1.removeStudent(classroom1.enrolledStudents[1]);
  console.log(classroom1.enrolledStudents.length);

Classroom.prototype.isFull = function (){
  if (this.enrolledStudents.length >= this.capacity){
  return "true";
  }
  else { return "false";
}
};
console.log(classroom1.isFull);

Classroom.prototype.findStudent = function(email){
  for (i=0;i< this.enrolledStudents.length;i++){
    if(this.enrolledStudents[i].email==email){
      return this.enrolledStudents[i];
    }
  }
};
    