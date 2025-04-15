import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function Form({ formType }: { formType: "login" | "register" }) {
    return (
        <>
            {formType === "login" ? <LoginForm /> : <RegisterForm />}
        </>
    );
}

export default function EnterFile() {
    return (
        <section>
            <Form formType="register" />
        </section>
    );
}
