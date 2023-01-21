<h1>Desafio Sharenergy</h1>

<details>
 <summary><strong>Regras de Negócio</strong></summary><br />
  <li><strong>A página inicial da aplicação deve ser uma Login Page</strong></li>
    <br />
  <li>
    <strong>
      O usuário deve ser capaz de se autenticar utilizando o username desafiosharenergy 
      e password sh@r3n3rgy, também, deve existir a possibilidade do usuário utilizar o 
      remember me para realizar logins automáticos, sem a necessidade de digitar username e 
      password após o primeiro acesso.
    </strong>
  </li>
    <br />
  <li>
    <strong>
    Após o Login, a página principal deve conter uma listagem de usuários gerada a partir da 
    api Random User Generator, a lista deve conter a foto do usuário, nome completo, email, 
    username e idade. Além disso, os requests devem ser páginados, porém, é de critério do 
    participante do desafio a quantidade de resultados a serem exibidos por página e variações para o mesmo. 
    Também, deve haver uma search para buscar usuários por nome, email ou username.
    </strong>
  </li>
    <br />
  <li>
    <strong>
    Após o Login, a página principal deve conter uma listagem de usuários gerada a partir da api <a href="https://randomuser.me/api/">Random User Generator</a>, a lista deve conter a foto do usuário, nome completo, email, username e idade. Além disso, os requests devem ser páginados, porém, é de critério do participante do desafio a quantidade de resultados a serem exibidos por página e variações para o mesmo. Também, deve haver uma search para buscar usuários por nome, email ou username.
    </strong>
  </li>
    <br />
  <li>
    <strong>
    Em uma segunda página, o usuário deve ser capaz de selecionar um status code http qualquer, e, após a seleção, deve ser retornada uma imagem da api <a href="https://http.cat/">HTTP Cat</a> relacionada ao status escolhido, caso não exista tal imagem, deve ser retornada uma imagem de not found à critério de escolha do participante do desafio.
    </strong>
  </li>
    <br />
  <li>
    <strong>
    Em uma terceira página, deve haver um botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api <a href="https://random.dog/">Random Dog</a>. 
    </strong>
  </li>
    <br />
  <li>
    <strong>
    Em uma quarta página, deve haver uma lista de clientes, através da qual o usuário deve ser capaz de cadastrar novos clientes, visualizar informações de um cliente específico, atualizar um cliente e deletar clientes. O cadastro deve possuir nome, email, telefone, endereço e cpf.
    </strong>
  </li>
    <br />
</details>

<details>
 <summary><strong>Modelo dos documentos MongoDB</strong></summary><br />
 <img src="https://github.com/SHARENERGY-OFICIAL/desafio-sharenergy-2023-01/blob/7fc8a7af42a145a5fde0e0187e5e07c7c48498b2/backend/modelo-mongoDb.png?raw=true" alt="modelo-mongoDB">
</details>

<h2>Ferramentas e tecnologias utilizadas</h2>
<ul>
  <li>React</li>
  <li>Tailwind CSS</li>
  <li>Node</li>
  <li>Express</li>
  <li>Thunder Client</li>
  <li>Axios</li>
  <li>Joi</li>
  <li>JWT</li>
  <li>Bcrypt</li>
  <li>MongoDB</li>
  <li>Atlas</li>
  <li>JavaScript</li>
  <li>LocalStorage</li>
</ul>

<h2>⚠️ IMPORTANTE ⚠️</h2>
<p>Na raiz da pasta "backend" existe um arquivo ".env.example" renomei-o para ".env" 
e configure as variaveis de ambiente "JWT_SECRET" e "PORT" que são respectivamente
o secret utilizado para gerar o token JWT e a porta que o express ficará escutando.
Enquanto ao banco de dados não se precupe ele está rodando no Atlas um serviço de bando de dados 
MongoDB nas nuvens e o projeto já está devidamente configurado para essa conexão.
</p>


<h2>🛠 Em Uso 🛠</h2>

https://youtu.be/Qj5dRWN__ho
