namespace PrototypePattern {
  class User {
    public name: string
    public username: string 
    public password: string
    public email: string
    public phone: string

    constructor(name: string, username: string, password: string, email: string, phone: string){
      this.name = name
      this.username = username
      this.password = password
      this.email = email
      this.phone = phone
    }

    public clone(): this {
      const clone = Object.assign({}, this)
      return clone
    }
  }

  const user1 = new User('Diva', 'diva', '123', 'diva@gmail.com', '321')
  console.log(user1)
  
  const user4 = user1.clone()
  user4.name = 'Krishna'
  console.log(user4)
}