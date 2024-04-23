import Button from "../../button"
import Input from "../../input"
import Image from "../../image"
import { Link } from 'react-router-dom';

export const LoginInterface = () => {
    return (
        <>
            <Image src="./src/assets/login_logo recoleta.svg" alt="logoLogin" width={300} height={200} />

            <Input label="Login" type="email" placeholder='E-mail' />
            <Input label="Senha" type="password" placeholder="Digite sua senha" />
            <br />
            <Button text='Entrar' to="#" />
            <Button text='Esqueci minha senha' to="#" />

            <Link to="/registration" style={{ fontFamily: 'Roboto, sans-serif', color: '#FF9A51', fontSize: '18px', fontWeight: 'bold', textDecoration: 'none' }}>
                Ainda não possui cadastro?
            </Link>
        </>
    )
}

