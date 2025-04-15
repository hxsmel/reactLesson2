export default function LoginForm() {
    return (
        <>
            <form className="loginForm">
                <p className="loginFormTitle">Login Form</p>
                <input type="text" className="usernameInput" placeholder="Username" />
                <input type="text" className="passwordInput" placeholder="Password" />
                <button className="loginButton">LOGIN</button>
            </form>
        </>
    );
}