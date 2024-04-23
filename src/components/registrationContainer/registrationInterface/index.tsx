import Button from "../../button"
import Input from "../../input"
import Image from "../../image"

export const RegistrationInterface = () => {
    return (
        <>
            <Image src="./src/assets/login_logo recoleta.svg" alt="logoLogin" width={300} height={200} />

            <h1>Cadastre-se</h1>

            <Input type="Email" placeholder='E-mail' />
            <Input type="text" placeholder="Celular" />
            <Input type="text" placeholder="Endereço principal" />
            <Input type="text" placeholder="Endereço secundário" />

            <Button text='Cadastrar' to="/login"/>
        </>
    )
}

