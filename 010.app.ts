//   Intersected type  or   two or more then two type or interface joined

interface Student{
    student_id: number,
    student_name: string
}

interface Teacher{
    teacher_id: number,
    teacher_name: string,
}

type joinedTypes = Student & Teacher

let obj:joinedTypes = {
    student_id: 10219,
    student_name:"Umer",
    teacher_id: 332201,
    teacher_name: "Imran"
}

console.log(obj);
