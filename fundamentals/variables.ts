let nameStr: string = "Amit";
let age: number = 40;
interface Job {
  salary: number;
  designation: string;
}

let job: Job = {
  salary: 100,
  designation: "manager",
};

console.log(`The employee name is ${nameStr} of age ${age} with a salary of ${job.salary} and working as a ${job.designation}`);
