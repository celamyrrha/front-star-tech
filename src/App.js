import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Col, Row } from 'reactstrap';
import * as S from './styled';
import Header from './components/Header'

const Subtitulo = styled.h2`
  padding-top:10px;
  color: #e5e4e2;
  font-size: 25px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
const FormInput = styled.input`
border: 1px solid #ddd;
height 2rem;
padding: 0 .5rem;
margin-bottom: 0.5rem;
border-radius: .25rem;

`;
const FormSelect = styled.select`
border: 1px solid #fff;
`;
const Red = styled.span`
color: red;
`;
const ErrorSpan = styled.span`
  color: red;
  display: ${(props) => props.isError ? 'block' : 'none'};
`;


const App = () => {

  const fetchAddress = async () => {
  const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({ ...form, endereco: address.data.logradouro, cidade: address.data.localidade, bairro: address.data.bairro }  );

  };

  const createCandidate = async (candidate) => {
    try {
      const user = await axios.post("https://projeto-star-tech.herokuapp.com/", form);
      if (user.status === 200) {
        alert('iti malia deu certo');
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
      setCpfError(true);
      setIdentidadeError(true);
    }
  };

  const [form, setForm] = useState({
    cpf: '',
    nome: '',
    cargo: '',
    dt_nasc: '',
    est_civil: '',
    sexo: '',
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
    veiculo: '',
    habilitacao: '',
    errors: []    
  });

  const [nomeError, setNomeError] = useState(false);
  const [cargoError, setCargoError] = useState(false);
  const [dt_nascError, setDt_nascError] = useState(false);
  const [cepError, setCepError] = useState(false);
  const [enderecoError, setEnderecoError] = useState(false);
  const [bairroError, setBairroError] = useState(false);
  const [cidadeError, setCidadeError] = useState(false);
  const [celularError, setCelularError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [cpfError, setCpfError] = useState(false);
  const [identidadeError, setIdentidadeError] = useState(false);

  useEffect(()=>{
    console.log(form);
  }, [form]);

  return (
<>
<Header />
<S.HomeContainer>  
      <Container>
    <Form>
      <Row>
    <Col>
    <Subtitulo>Dados Pessoais</Subtitulo>
      <hr/>

    </Col>
    </Row>
    <Row>
    <Col>  
      <div>
        <label htmlFor="nome">Nome Completo <Red>*</Red></label><br />
        <FormInput onChange={(e) => {
          setForm({ ...form, nome: e.target.value });
        }} value={form.nome} required></FormInput>
        <ErrorSpan isError={nomeError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      </Col>
      <Col>
      <div>
        <label htmlFor="cargo">Cargo Pretendido <Red>*</Red></label><br />
        <FormInput onChange={(e) => {
          setForm({ ...form, cargo: e.target.value });
        }} value={form.cargo} required></FormInput>
        <ErrorSpan isError={cargoError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="dt_nasc">Data de Nascimento <Red>*</Red></label><br />
        <FormInput type="date" onChange={(e) => {
          setForm({ ...form, dt_nasc: e.target.value });
        }} value={form.dt_nasc} required></FormInput>
        <ErrorSpan isError={dt_nascError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
      </Col>
        <Col>
        <div>
      <label htmlFor="est_civil">Estado Civil</label><br />
        <FormSelect onChange={(e) => {
          setForm({ ...form, est_civil: e.target.value });
        }} value={form.est_civil}>
        <option value="solteiro">Solteiro</option>
        <option value="casado">Casado</option>
        <option value="separado/divorciado">Separado/Divorciado</option>
        <option value="viuvo">Viúvo</option>
        <option value="outro">Outro</option></FormSelect>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="sexo">Sexo</label><br />
        <FormSelect onChange={(e) => {
          setForm({ ...form, sexo: e.target.value });
        }} value={form.sexo}>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
        <option value="outro">Outro</option>
        <option value="nao_inf">Prefiro não dizer</option></FormSelect>
      </div>
        </Col>
        <Col>
        <div>
        <label htmlFor="cep">CEP <Red>*</Red></label><br />
        <FormInput type="tel" maxLength="8" onBlur={() => {
          fetchAddress();
        }} onChange={(e) => {
          setForm({ ...form, cep: e.target.value });
        }} value={form.cep} required></FormInput>
        <ErrorSpan isError={cepError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
        
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="endereco">Endereço <Red>*</Red></label><br />
        <FormInput onChange={(e) => {
          setForm({ ...form, endereco: e.target.value });
        }} value={form.endereco} required></FormInput>
        <ErrorSpan isError={enderecoError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
        </Col>
        <Col>
        <div>
      <label htmlFor="Bairro">Bairro <Red>*</Red></label><br />
        <FormInput onChange={(e) => {
          setForm({ ...form, bairro: e.target.value });
        }} value={form.bairro} required></FormInput>
        <ErrorSpan isError={bairroError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="cidade">Cidade <Red>*</Red></label><br />
        <FormInput onChange={(e) => {
          setForm({ ...form, cidade: e.target.value });
        }} value={form.cidade} required></FormInput>
        <ErrorSpan isError={cidadeError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
        </Col>
        <Col>
        <div>
      <label htmlFor="tel1">Telefone Fixo 1</label><br />
        <FormInput type="tel" onChange={(e) => {
          setForm({ ...form, tel1: e.target.value });
        }} value={form.tel1}></FormInput>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="tel2">Telefone Fixo 2</label><br />
        <FormInput type="tel" onChange={(e) => {
          setForm({ ...form, tel2: e.target.value });
        }} value={form.tel2}></FormInput>
      </div>
        </Col>
        <Col>
        <div>
      <label htmlFor="celular">Celular <Red>*</Red></label><br />
        <FormInput type="tel" onChange={(e) => {
          setForm({ ...form, celular: e.target.value });
        }} value={form.celular} required></FormInput>
        <ErrorSpan isError={celularError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="contato">Contato</label><br />
        <FormInput type="tel" onChange={(e) => {
          setForm({ ...form, contato: e.target.value });
        }} value={form.contato}></FormInput>
      </div>
        </Col>
        <Col>
        <div>
        <label htmlFor="email">E-mail <Red>*</Red></label><br />
        <FormInput type="email" onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.email} required></FormInput>
        <ErrorSpan isError={emailError}>Este campo deve ser preenchido</ErrorSpan>
        
      </div>
        </Col>
      </Row>
      <Row>
    <Col>
    <br/>
    <Subtitulo>Documentos</Subtitulo>
      <hr/>
    </Col>
    </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="identidade">Identidade <Red>*</Red></label><br />
        <FormInput  onChange={(e) => {
          setForm({ ...form, identidade: e.target.value });
        }} value={form.identidade}></FormInput>
        <ErrorSpan isError={identidadeError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
        </Col>
        <Col>
        <div>
        <label htmlFor="cpf">CPF <Red>*</Red></label><br />
        <FormInput type="number" onChange={(e) => {
          setForm({ ...form, cpf: e.target.value });
        }} value={form.cpf}></FormInput>
        <ErrorSpan isError={cpfError}>Este campo deve ser preenchido</ErrorSpan>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
        <label htmlFor="veiculo">Possui Veículo?</label><br />
        <FormSelect onChange={(e) => {
          setForm({ ...form, veiculo: e.target.value });
        }} value={form.veiculo}>
        <option value="sim">Sim</option>
        <option value="não">Não</option></FormSelect>
      </div>
        </Col>
        <Col>
        <div>
        <label htmlFor="habilitacao">Habilitação</label><br />
        <FormSelect onChange={(e) => {
          setForm({ ...form, habilitacao: e.target.value });
        }} value={form.habilitacao}>
        <option value="nao_possui">Não possui</option>
        <option value="catA">Categoria A</option>
        <option value="catB">Categoria B</option>
        <option value="catC">Categoria C</option>
        <option value="catD">Categoria D</option></FormSelect>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <S.Botao onClick={() => createCandidate()}>Pronto, acabou!</S.Botao>
        </Col>
      </Row>
      
    </Form>
    </Container>
    </S.HomeContainer>
    </>
  );
};

export default App;
