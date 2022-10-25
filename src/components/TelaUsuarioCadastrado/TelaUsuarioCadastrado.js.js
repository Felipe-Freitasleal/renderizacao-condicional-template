import { Div, Titulo } from "./styled";

function TelaUsuarioCadastrado(props) {
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <p>
            <button onClick={props.mudarTelaParaLogin}>Voltar para Login</button>
            </p>
        </Div>
    )
}

export default TelaUsuarioCadastrado;