import Button from "../../button"
import Input from "../../input"

export const RegistrationInterface = () => {
    return (
        <>
            <h1 style={{ fontFamily: 'Roboto, sans-serif', color: '#4BD609', fontWeight: 'bold', fontSize: '40px' }}>Cadastre-se</h1>


            <Input type="Email" placeholder='E-mail' label=""/>
            <Input type="password" placeholder='Senha' label=""/>
            <Input type="password" placeholder='Confirmar Senha' label=""/>
            <Input type="text" placeholder="Celular" label=""/>
            <Input type="text" placeholder="Endereço principal" label=""/>
            <Input type="text" placeholder="Endereço secundário" label=""/>

            <Button text='Cadastrar' to="/login" />
            <Button text='Voltar' to="/login" />
        </>
    )
}

