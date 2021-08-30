import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Col, Row, Button } from 'reactstrap';
import * as S from './styled'
import Header from './components/Header'




const App = () => {
  
  const fetchAddress = async () => {
  const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({ ...form, endereco: address.data.logradouro, cidade: address.data.localidade, bairro: address.data.bairro }  );

  };

  const createCandidate = async (candidate) => {
    try {
      const user = await axios.post('https://projeto-star-tech.herokuapp.com/register', form);
      if (user.status === 200) {
        alert('Formulário preenchido com sucesso!');
      }

    } catch (error) {
      setNomeError(true);
      setCargoError(true);
      setDt_nascError(true);
      setCepError(true);
      setEnderecoError(true);
      setBairroError(true);
      setCidadeError(true);
      setCelularError(true);
      setEmailError(true);
      setContatoError(true);
      setIdentidadeError(true);
      setCpfError(true);
    }
  };

  const [form, setForm] = useState({
    cpf: '',
    nome: '',
    cargo: '',
    dt_nasc: '',
    est_civil: 'solteiro',
    sexo: 'masculino',
    endereco: '',
    bairro: '',
    cidade: '',
    cep: '',
    tel1: '',
    tel2: '',
    celular: '',
    contato: '',
    email: '',
    identidade: '',
    veiculo: 'sim',
    habilitacao: 'nao_possui'  
  });
  const [cpfError, setCpfError] = useState(false);
  const [nomeError, setNomeError] = useState(false);
  const [cargoError, setCargoError] = useState(false);
  const [dt_nascError, setDt_nascError] = useState(false);
  const [cepError, setCepError] = useState(false);
  const [enderecoError, setEnderecoError] = useState(false);
  const [bairroError, setBairroError] = useState(false);
  const [cidadeError, setCidadeError] = useState(false);
  const [celularError, setCelularError] = useState(false);
  const [contatoError, setContatoError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [identidadeError, setIdentidadeError] = useState(false);

  
return (
<>
<Header />
<S.HomeContainer>  
      <Container>
    <Form>
      <Row>
    <Col>
    <S.Subtitulo>Dados Pessoais</S.Subtitulo>
      <hr/>

    </Col>
    </Row>
    <Row>
    <Col>  
      <div>
        <label htmlFor="nome">Nome Completo <S.Red>*</S.Red></label><br />
        <S.FormInput onChange={(e) => {
          setForm({ ...form, nome: e.target.value });
        }} value={form.nome} required></S.FormInput>
        <S.ErrorSpan isError={nomeError}>Este campo deve ser preenchido</S.ErrorSpan>
       
      </div>
      </Col>
      <Col>
      <div>
        <label htmlFor="cargo">Cargo Pretendido <S.Red>*</S.Red></label><br />
        <S.FormInput onChange={(e) => {
          setForm({ ...form, cargo: e.target.value });
        }} value={form.cargo} required></S.FormInput>
        <S.ErrorSpan isError={cargoError}>Este campo deve ser preenchido</S.ErrorSpan>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="dt_nasc">Data de Nascimento <S.Red>*</S.Red></label><br />
        <S.FormInput type="date" onChange={(e) => {
          setForm({ ...form, dt_nasc: e.target.value });
        }} value={form.dt_nasc} required></S.FormInput>
        <S.ErrorSpan isError={dt_nascError}>Este campo deve ser preenchido</S.ErrorSpan>
      </div>
      </Col>
        <Col>
        <div>
      <label htmlFor="est_civil">Estado Civil</label><br />
        <S.FormSelect onChange={(e) => {
          setForm({ ...form, est_civil: e.target.value });
        }} value={form.est_civil}>
        <option value="solteiro">Solteiro</option>
        <option value="casado">Casado</option>
        <option value="separado/divorciado">Separado/Divorciado</option>
        <option value="viuvo">Viúvo</option>
        <option value="outro">Outro</option></S.FormSelect>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="sexo">Sexo</label><br />
        <S.FormSelect onChange={(e) => {
          setForm({ ...form, sexo: e.target.value });
        }} value={form.sexo}>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
        <option value="outro">Outro</option>
        <option value="nao_inf">Prefiro não dizer</option></S.FormSelect>
      </div>
        </Col>
        <Col>
        <div>
        <label htmlFor="cep">CEP <S.Red>*</S.Red></label><br />
        <S.FormInput type="tel" maxLength="8" onBlur={() => {
          fetchAddress();
        }} onChange={(e) => {
          setForm({ ...form, cep: e.target.value });
        }} value={form.cep} required></S.FormInput>
        <S.ErrorSpan isError={cepError}>Este campo deve ser preenchido</S.ErrorSpan>
      </div>
        
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="endereco">Endereço <S.Red>*</S.Red></label><br />
        <S.FormInput onChange={(e) => {
          setForm({ ...form, endereco: e.target.value });
        }} value={form.endereco} required></S.FormInput>
        <S.ErrorSpan isError={enderecoError}>Este campo deve ser preenchido</S.ErrorSpan>
      </div>
        </Col>
        <Col>
        <div>
      <label htmlFor="Bairro">Bairro <S.Red>*</S.Red></label><br />
        <S.FormInput onChange={(e) => {
          setForm({ ...form, bairro: e.target.value });
        }} value={form.bairro} required></S.FormInput>
        <S.ErrorSpan isError={bairroError}>Este campo deve ser preenchido</S.ErrorSpan>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="cidade">Cidade <S.Red>*</S.Red></label><br />
        <S.FormInput onChange={(e) => {
          setForm({ ...form, cidade: e.target.value });
        }} value={form.cidade} required></S.FormInput>
        <S.ErrorSpan isError={cidadeError}>Este campo deve ser preenchido</S.ErrorSpan>
      </div>
        </Col>
        <Col>
        <div>
      <label htmlFor="tel1">Telefone Fixo 1</label><br />
        <S.FormInput type="tel" onChange={(e) => {
          setForm({ ...form, tel1: e.target.value });
        }} value={form.tel1}></S.FormInput>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="tel2">Telefone Fixo 2</label><br />
        <S.FormInput type="tel" onChange={(e) => {
          setForm({ ...form, tel2: e.target.value });
        }} value={form.tel2}></S.FormInput>
      </div>
        </Col>
        <Col>
        <div>
      <label htmlFor="celular">Celular <S.Red>*</S.Red></label><br />
        <S.FormInput type="tel" onChange={(e) => {
          setForm({ ...form, celular: e.target.value });
        }} value={form.celular} ></S.FormInput>
        <S.ErrorSpan isError={celularError}>Este campo deve ser preenchido</S.ErrorSpan>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="contato">Contato <S.Red>*</S.Red></label><br />
        <S.FormInput type="tel" onChange={(e) => {
          setForm({ ...form, contato: e.target.value });
        }} value={form.contato} required></S.FormInput>
        <S.ErrorSpan isError={contatoError}>Este campo deve ser preenchido</S.ErrorSpan>
      </div>
        </Col>
        <Col>
        <div>
        <label htmlFor="email">E-mail <S.Red>*</S.Red></label><br />
        <S.FormInput type="email" onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.email} required></S.FormInput>
        <S.ErrorSpan isError={emailError}>Este campo deve ser preenchido</S.ErrorSpan>
        
      </div>
        </Col>
      </Row>
      <Row>
    <Col>
    <br/>
    <S.Subtitulo>Documentos</S.Subtitulo>
      <hr/>
    </Col>
    </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="identidade">Identidade <S.Red>*</S.Red></label><br />
        <S.FormInput  onChange={(e) => {
          setForm({ ...form, identidade: e.target.value });
        }} value={form.identidade} required></S.FormInput>
        <S.ErrorSpan isError={identidadeError}>Digite sua Identidade</S.ErrorSpan>
      </div>
        </Col>
        <Col>
        <div>
        <label htmlFor="cpf">CPF <S.Red>*</S.Red></label><br />
        <S.FormInput type="number" onChange={(e) => {
          setForm({ ...form, cpf: e.target.value });
        }} value={form.cpf} required></S.FormInput>
         <S.ErrorSpan isError={cpfError}>Digite seu CPF</S.ErrorSpan>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
        <label htmlFor="veiculo">Possui Veículo?</label><br />
        <S.FormSelect onChange={(e) => {
          setForm({ ...form, veiculo: e.target.value });
        }} value={form.veiculo}>
        <option value="sim">Sim</option>
        <option value="não">Não</option></S.FormSelect>
      </div>
        </Col>
        <Col>
        <div>
        <label htmlFor="habilitacao">Habilitação</label><br />
        <S.FormSelect onChange={(e) => {
          setForm({ ...form, habilitacao: e.target.value });
        }} value={form.habilitacao}>
        <option value="nao_possui">Não possui</option>
        <option value="catA">Categoria A</option>
        <option value="catB">Categoria B</option>
        <option value="catC">Categoria C</option>
        <option value="catD">Categoria D</option></S.FormSelect>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <S.Botao >
        <Button onClick={() => createCandidate()}>Pronto, acabou!</Button>
        </S.Botao>
        </Col>
      </Row>
      
    </Form>
    </Container>
    </S.HomeContainer>
    </>
  );
};

export default App;
