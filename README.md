Projeto Ecommerce teste técnico

Programa que roda uma interface simples que lista pedidos.

### Tecnologias utilizadas ###
Frontend: React.js

Backend: Nest.js

Outros: Node.js e npm

### Rodar o programa ###
-Clone o repositorio na sua máquina
git clone https://github.com/johngitfla/projeto-ecommerce.git

-Instale as dependêcias
cd frontend
npm install
cd..
cd backend
npm install

-Roda o programa na pasta raiz:
npm run dev

Ele rodará o frontend na porta 3000 e o backend na porta 4000


### Funcinalidades ###
-Criar Pedido: Clique no botão de criar pedido que abrirá um modal onde aparecerá os campos. Os campos nome do cliente , nome do produto, quantidade e valor unitário são obrigatórios.
-Deletar Pedido: Clique no botão de deletar pedido e insira o id do pedido a ser deletado. Caso não exista retorna uma mensagem de erro.
-Atualizar Pedido: Insira o id do pedido que deseja atualizar ao lado do botão e clique nele, assim retornará os valores do pedido do id colocado, e fica disponível para você modificar. Os mesmos campos obrigatórios do criar pedido se aplica aqui.








