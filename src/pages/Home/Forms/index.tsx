import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { Input, InputDif, Label, Form, Button, Title, BackgroundSection, Contato, ContatoT, ElementInfo } from "./style"

export default function Forms() {
    const [email, setEmail] = useState({ value: "", valid: true });
    return (

        <BackgroundSection>

        <div>
        <Title>Contatos</Title>
        <ContatoT>Informações sobre doações</ContatoT>
        <Contato>instituto@germinare.org.br</Contato>
        <ElementInfo />
        <ContatoT>Imprensa e Relações Institucionais</ContatoT>
        <Contato>comunicacao@germinare.org.br</Contato>
        <ElementInfo />
        <ContatoT>Processo de Admissão</ContatoT>
        <Contato>admissao@germinare.org.br</Contato>
        <ElementInfo />
        <ContatoT>Ouvidoria</ContatoT>
        <Contato>ouvidoria@germinare.org.br</Contato>
        <ElementInfo />
        <ContatoT>Trabalhe conosco</ContatoT>
        <Contato>rh@germinare.org.br</Contato>
        <ElementInfo />
        </div>



<div className="outside-container">
        <div className="inner-container">
            <Form onSubmit={(e) => e.preventDefault()}>
            <Title>Formulário de contato</Title>
            <Label htmlFor="nome">Nome</Label>
            <Input className="nome" type="text" placeholder="Seu nome *" required />
            <Label htmlFor="email">Email</Label>
            <Input
                className="email"
                type="text"
                placeholder="Seu e-mail *"
                value={email.value}
                onChange={(e) =>
                setEmail({
                    value: e.target.value,
                    valid: e.target.value === "" ? true : /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.target.value),
                })
                }
                required
            />
            {!email.valid && (
                <span className="email-error">Digite um email válido</span>
            )}
            <Label htmlFor="assunto">Assunto</Label>
            <Input className="assunto" type="text" placeholder="Assunto" />
            <Label htmlFor="dif">Mensagem</Label>
            <InputDif className="dif"  placeholder="Sua mensagem *" required />
            {/* <ReCAPTCHA
                className="recaptcha"
                sitekey="6LdsuUojAAAAAJxJgTVtmDwwro-7xwbU2isk8kPN"
            /> */}
            <Button type="submit">ENIVAR</Button>
            </Form>
        </div>
        </div>
        </BackgroundSection>
        
    );
}