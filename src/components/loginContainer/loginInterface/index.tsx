import Button from "../../button"
import Input from "../../input"
import Image from "../../image"

export const LoginInterface = () => {
    return (
        <>
            <Image src="./src/assets/login_logo recoleta.svg" alt="logoLogin" width={300} height={200} />

            <Input label="Login" type="email" placeholder='E-mail' />
            <Input label="Senha" type="password" placeholder="Digite sua senha" />
            <br />
            <Button text='Entrar' to="#"/>
            <Button text='Esqueci minha senha' to="#"/>
            <p>Ainda não possui cadastro?</p>
        </>
    )
}

