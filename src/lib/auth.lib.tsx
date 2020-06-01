class Auth {
  private authenticated: boolean;

  constructor() {
    this.authenticated = false;
  }

  login(cb: any, token: string) {
    localStorage.setItem("token", token);
    //  this.authenticated = true;
    cb();
  }

  logout(cb: any) {
    localStorage.removeItem("token");
    //this.authenticated = false;

    cb();
  }

  isAuthentication() {
    let auth: string | any = localStorage.getItem("token");

    return typeof auth === "string" ? true : false;
  }
}

export default new Auth();
