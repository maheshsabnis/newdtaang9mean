export class User{
  constructor(
    public UserName: string,
    public Password: string
  ){}
}

export class Person {
  constructor(
    public PersonId: string,
    public PersonName: string,
    public Email:string,
    public Age: string
  ){}
}

export class AuthResponse {
  constructor(
    public authsuccess: boolean,
    public description: string,
    public accessToken: string
  ){}
}
