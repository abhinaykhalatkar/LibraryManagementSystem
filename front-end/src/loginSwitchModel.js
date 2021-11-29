
export class logInSwitch {

    constructor() {
        this.logInPage=document.querySelector("#root");
      }
      render(){
        const loginModal=document.createElement('div');
        loginModal.setAttribute('id','loginModal');
        loginModal.innerHTML=`
        <section class="forms-section">
        <h1 class="section-title">Log In</h1>
        <div class="forms">
          <div class="form-wrapper is-active">
            <button type="button" class="switcher switcher-login">
              User Login
              <span class="underline"></span>
            </button>
            <form class="form form-login"  >
              <fieldset>
                <legend>Please, enter your email and password for login.</legend>
                <div class="input-block">
                  <label for="login-email">User-Id</label>
                  <input id="login-email" >
                </div>
                <div class="input-block">
                  <label for="login-password">Password</label>
                  <input id="login-password" type="password" required>
                </div>
              </fieldset>
              <button id="userSubmit" type="submit" class="btn-login">Login</button>
            </form>
          </div>
          <div class="form-wrapper">
            <button type="button" class="switcher switcher-signup">
              Admin login
              <span class="underline"></span>
            </button>
            <form class="form form-signup" action="logged.html">
              <fieldset>
                <legend>Please, enter your email, password and password confirmation for sign up.</legend>
                <div class="input-block">
                  <label for="signup-email">Admin-Id</label>
                  <input id="signup-email" >
                </div>
                <div class="input-block">
                  <label for="signup-password">Password</label>
                  <input id="signup-password" type="password" required>
                </div>
              </fieldset>
              <button type="submit" class="btn-signup">Login</button>
            </form>
          </div>
        </div>
      </section>
        `
        this.logInPage.appendChild(loginModal);
      }
    run(){

        const switchers = [...document.querySelectorAll('.switcher')]

        switchers.forEach(item => {
            item.addEventListener('click', function() {
                switchers.forEach(item => item.parentElement.classList.remove('is-active'))
                this.parentElement.classList.add('is-active')
            })
        })
        // 1
        let sbtBtn=document.querySelector("#userSubmit");
        console.log(sbtBtn);
        sbtBtn.addEventListener("click",function (e) {
          e.preventDefault();
          console.log(document.querySelector("#login-email").value);
          fetch("http://localhost:3000/login",{method:"post",body:{email:document.querySelector("#login-email").value,pass:document.querySelector("#login-password").value}})
          .then((res)=>{
            console.log(res.status)
          })
        })

        
    }
}