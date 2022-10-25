import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton, H } from "./styled";

function TelaCadastro(props) {
  return (
    <FormContainer>
      <H>Cadastro </H>
      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input id="titulo" />
        </StyledLabel>
        <StyledLabel htmlFor="foto">
          E-mail:
          <Input id="foto" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Senha:
          <Input id="descricao" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input id="descricao" />
        </StyledLabel>
        <SendButton onClick={props.usuarioCadastrado}>Cadastrar</SendButton>
        <BackToLoginButton onClick={props.mudarTelaParaLogin}>Já possuo um cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
