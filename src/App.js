import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Container, Col, Row } from 'reactstrap';
import * as S from './styled';
import Header from './components/Header';

const App = () => {
  
  const fetchAddress = async () => {
  const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({ ...form, endereco: address.data.logradouro, cidade: address.data.localidade, bairro: address.data.bairro }  );

  };

  const createCandidate = async (candidate) => {
    try {
      const user = await axios.post('https://projeto-star-tech.herokuapp.com/register', form);
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
    habilitacao: ''  
  });
  const [cpfError, setCpfError] = useState(false);
  
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
        }} value={form.nome} ></S.FormInput>
       
      </div>
      </Col>
      <Col>
      <div>
        <label htmlFor="cargo">Cargo Pretendido <S.Red>*</S.Red></label><br />
        <S.FormInput onChange={(e) => {
          setForm({ ...form, cargo: e.target.value });
        }} value={form.cargo} ></S.FormInput>
        
      </div>
      </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="dt_nasc">Data de Nascimento <S.Red>*</S.Red></label><br />
        <S.FormInput type="date" onChange={(e) => {
          setForm({ ...form, dt_nasc: e.target.value });
        }} value={form.dt_nasc} ></S.FormInput>
        
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
        }} value={form.cep} ></S.FormInput>
        
      </div>
        
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="endereco">Endereço <S.Red>*</S.Red></label><br />
        <S.FormInput onChange={(e) => {
          setForm({ ...form, endereco: e.target.value });
        }} value={form.endereco} ></S.FormInput>
        
      </div>
        </Col>
        <Col>
        <div>
      <label htmlFor="Bairro">Bairro <S.Red>*</S.Red></label><br />
        <S.FormInput onChange={(e) => {
          setForm({ ...form, bairro: e.target.value });
        }} value={form.bairro} ></S.FormInput>
        
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="cidade">Cidade <S.Red>*</S.Red></label><br />
        <S.FormInput onChange={(e) => {
          setForm({ ...form, cidade: e.target.value });
        }} value={form.cidade} ></S.FormInput>
        
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
        
      </div>
        </Col>
      </Row>
      <Row>
        <Col>
        <div>
      <label htmlFor="contato">Contato</label><br />
        <S.FormInput type="tel" onChange={(e) => {
          setForm({ ...form, contato: e.target.value });
        }} value={form.contato}></S.FormInput>
      </div>
        </Col>
        <Col>
        <div>
        <label htmlFor="email">E-mail <S.Red>*</S.Red></label><br />
        <S.FormInput type="email" onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.email} ></S.FormInput>
        
        
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
        }} value={form.identidade}></S.FormInput>
        
      </div>
        </Col>
        <Col>
        <div>
        <label htmlFor="cpf">CPF <S.Red>*</S.Red></label><br />
        <S.FormInput type="number" onChange={(e) => {
          setForm({ ...form, cpf: e.target.value });
        }} value={form.cpf}></S.FormInput>
         <S.ErrorSpan isError={cpfError}>AAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</S.ErrorSpan>
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
        <button onClick={() => createCandidate()}>Jesus apaga a luz</button>
        </Col>
      </Row>
      
    </Form>
    </Container>
    </S.HomeContainer>
    </>
  );
};

export default App;
