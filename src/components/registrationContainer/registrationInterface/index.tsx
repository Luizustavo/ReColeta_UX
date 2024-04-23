import Button from "../../button"
import Input from "../../input"
import Image from "../../image"

export const RegistrationInterface = () => {
    return (
        <>
            <h1 style={{ fontFamily: 'Roboto, sans-serif', color: '#4BD609', fontWeight: 'bold', fontSize: '40px' }}>Cadastre-se</h1>


            <Input type="Email" placeholder='E-mail' />
            <Input type="password" placeholder='Senha' />
            <Input type="password" placeholder='Confirmar Senha' />
            <Input type="text" placeholder="Celular" />
            <Input type="text" placeholder="Endereço principal" />
            <Input type="text" placeholder="Endereço secundário" />

            <Button text='Cadastrar' to="/login" />
            <Button text='Voltar' to="/login" />
        </>
    )
}

