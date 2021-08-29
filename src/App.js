import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Col, Row } from 'reactstrap';
import { useForm } from "react-hook-form";

const FormInput = styled.input`
border: 1px solid;
`;
const FormSelect = styled.select`
border: 1px solid;
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
      const user = await axios.post('https://projeto-star-tech.herokuapp.com/', form);
      if (user.status === 200) {
        alert('iti malia deu certo');
      }

    } catch (error) {
      setCpfError(true);
    }
  };

  const [form, setForm] = useState({
    cpf: '',
    nome: '',
    cargo: '',
    dt_nasc: '',
    est_civil: 'solteiro',
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
  });

  
  const [cpfError, setCpfError] = useState(false);


  return (
    <Container>    
    <Form>
      <Row>
    <Col>
      <div>
        <label htmlFor="nome">Nome Completo <Red>*</Red></label><br />
        <FormInput onChange={(e) => {
          setForm({ ...form, nome: e.target.value });
        }} value={form.nome}></FormInput>
      </div>
      </Col>
      <Col>
      <div>
        <label htmlFor="cargo">Cargo Pretendido</label><br />
        <FormInput onChange={(e) => {
          setForm({ ...form, cargo: e.target.value });
        }} value={form.cargo}></FormInput>
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="dt_nasc">Data de Nascimento <Red>*</Red></label><br />
        <FormInput type="date" onChange={(e) => {
          setForm({ ...form, dt_nasc: e.target.value });
        }} value={form.dt_nasc}></FormInput>
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
        <label htmlFor="cep">CEP</label><br />
        <FormInput type="tel" maxLength="8" onBlur={() => {
          fetchAddress();
        }} onChange={(e) => {
          setForm({ ...form, cep: e.target.value });
        }} value={form.cep}></FormInput>
      </div>
        
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="endereco">Endereço <Red>*</Red></label><br />
        <FormInput onChange={(e) => {
          setForm({ ...form, endereco: e.target.value });
        }} value={form.endereco}></FormInput>
      </div>
        </Col>
        <Col>
        <div>
      <label htmlFor="Bairro">Bairro <Red>*</Red></label><br />
        <FormInput onChange={(e) => {
          setForm({ ...form, bairro: e.target.value });
        }} value={form.bairro}></FormInput>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="cidade">Cidade <Red>*</Red></label><br />
        <FormInput onChange={(e) => {
          setForm({ ...form, cidade: e.target.value });
        }} value={form.cidade}></FormInput>
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
      <label htmlFor="celular">Celular</label><br />
        <FormInput type="tel" onChange={(e) => {
          setForm({ ...form, celular: e.target.value });
        }} value={form.celular}></FormInput>
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
        <label htmlFor="email">E-mail</label><br />
        <FormInput type="email" onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.email}></FormInput>
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="identidade">Identidade <Red>*</Red></label><br />
        <FormInput  onChange={(e) => {
          setForm({ ...form, identidade: e.target.value });
        }} value={form.identidade}></FormInput>
      </div>
        </Col>
        <Col>
        <div>
        <label htmlFor="cpf">CPF <Red>*</Red></label><br />
        <FormInput type="number" onChange={(e) => {
          setForm({ ...form, cpf: e.target.value });
        }} value={form.cpf}></FormInput>
        <ErrorSpan isError={cpfError}>CPF já cadastrado!</ErrorSpan>
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

      <Button onClick={() => createCandidate()}>Pronto, acabou!</Button>
    </Form>
    </Container>
  );
};

export default App;
