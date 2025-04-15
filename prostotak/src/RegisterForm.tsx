export default function RegisterForm() {
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target as HTMLFormElement;

        const email = (form.elements.namedItem("email") as HTMLInputElement).value;
        const username = (form.elements.namedItem("username") as HTMLInputElement).value;
        const password = (form.elements.namedItem("password") as HTMLInputElement).value;

        console.log("Пользователь успешно зарегистрирован");
        console.log("Почта: " + email);
        console.log("Логин: " + username);
        console.log("Пароль: " + password);
    }
    return (
        <form className="registerForm" onSubmit={handleSubmit}>
            <p className="registerFormTitle">Register Form</p>
            <input
                type="email"
                name="email"
                className="registerEmailInput"
                placeholder="Email"
            />
            <input
                type="text"
                name="username"
                className="registerUsernameInput"
                placeholder="Username"
            />
            <input
                type="text"
                name="password"
                className="registerPasswordInput"
                placeholder="Password"
            />
            <button className="registerButton">
                WELCOME TO THE CLUB, BODY
            </button>
        </form>
    );
}
