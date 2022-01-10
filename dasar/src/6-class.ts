export class User3 {
  public name: string

  constructor(name: string){
    this.name = name
  }
}

let user = new User3('Diva')
console.log(user)
console.log(user.name)

// public = bisa diakses di semua class/ dari luar class
// protected = hanya bisa diakses dari class tersebut, dan kelas turunannya
// private = hanya bisa diakses dari class itu sendiri


export class User2 {
  constructor(public name: string, public age: number){
  }
}
let user2 = new User2('Diva', 30)
console.log(user2)



// Inheritance
export class User {
  name: string

  constructor(name: string, age: number){
    this.name = name
  }

  setName(value: string): void{
    this.name = value
  }

  getName = (): string => {
    return this.name
  }
}

class Admin extends User {
  read: boolean = true
  write: boolean = true
  phone: string
  private _email: string = ""
  static getRoleName: string = "Admin"

  constructor(phone: string, name: string, age: number){
    super(name, age)
    this.phone = phone
  }

  getRole(): {read: boolean, write: boolean}{
    return {
      read: this.read,
      write: this.write
    }
  }

  set email(value: string){
    if(value.length < 5){
      this._email = "Email salah"
    }else{
    this._email = value
    }
  }

  get email(): string {
    return this._email
  }

  static getNameRole(){
    return 'Hey'
  }
}

let admin = new Admin('6289','Diva', 45)
admin.getName()
admin.getRole()
admin.setName('Krishna')

admin.email = "diva@gmail.com"
console.log(admin.email)

let admin2 = Admin.getRoleName
console.log(admin2)

let admin3 = Admin.getNameRole()
console.log(admin3)