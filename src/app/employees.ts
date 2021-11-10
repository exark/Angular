export class Employees {
  employeeId:number;
  employeeName:string;
  employeeSalary:number;
  employeeAge:number;
  profileImage:string;


  constructor(employeeId: number, employeeName: string, employeeSalary: number, employeeAge: number, profileImage: string) {
    this.employeeId = employeeId;
    this.employeeName = employeeName;
    this.employeeSalary = employeeSalary;
    this.employeeAge = employeeAge;
    this.profileImage = profileImage;
  }
}
