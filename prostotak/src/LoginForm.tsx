export default function LoginForm() {
    function handleSubmit(e) {
        e.preventDefault()
        const form = e.target as HTMLFormElement;

        const username = (form.elements.namedItem("username") as HTMLInputElement).value;
        const password = (form.elements.namedItem("password") as HTMLInputElement).value;

        console.log("Пользователь успешно зарегистрирован");
        console.log("Логин: " + username);
        console.log("Пароль: " + password);
    }
    return (
        <>
            <form className="loginForm" onSubmit={handleSubmit}>
                <p className="loginFormTitle" >Login Form</p>
                <input
                    type="text"
                    name="username"
                    className="usernameInput"
                    placeholder="Username" />
                <input
                    type="text"
                    name="password"
                    className="passwordInput"
                    placeholder="Password" />
                <button className="loginButton">
                    LOGIN
                </button>
            </form>
        </>
    );
}