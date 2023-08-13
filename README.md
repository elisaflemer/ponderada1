# Criando o ambiente para a execução de uma aplicação containerizada

Nesta atividade ponderada, desenvolveu-se uma aplicação web de currículo do personagem Naruto, utilizando múltiplos containers Docker. A aplicação foi construída com a stack React + Vite para o frontend, um banco de dados MongoDB, e a ferramenta de visualização MongoExpress. O backend foi implementado em Node.js.

## Instruções de Execução
Siga as etapas abaixo para executar a aplicação:

1. Clone este repositório.
2. A partir da pasta raiz, execute o seguinte comando:
   
```
docker-compose up
```

Isso permitirá o download das imagens de todos os serviços, que já estão disponíveis no DockerHub. As imagens serão então instanciadas como containers, conectados em uma mesma rede, e as seguintes portas serão expostas:

- localhost:80 para o frontend.
- localhost:5000 para a API (use /kudos para ver a contagem de recomendações e kudos/new para adicionar um novo kudo).
- localhost:8081 para visualizar o banco de dados com o MongoExpress.
  
## Processo de Desenvolvimento
As tecnologias foram escolhidas com base no estudo de desenvolvimento fullstack nos últimos meses. O desafio consistiu em containerizar essas tecnologias, em vez de adotar uma abordagem mais comum com Python e HTML estático.

Esse desafio revelou-se substancial, uma vez que envolveu lidar com três servidores distintos e expor suas portas não apenas para a rede interna dos containers, mas também para a máquina local, permitindo o acesso via localhost.

Inicialmente, os containers foram criados com base nas imagens oficiais do MongoDB e do Mongo Express. Variáveis de ambiente para nome de usuário e senha foram configuradas, bem como uma rede compartilhada entre ambos os containers, permitindo a comunicação entre eles.

Diante da complexidade dos comandos necessários e da necessidade de configurar múltiplos parâmetros, optou-se por utilizar o docker-compose para simplificar o processo. Um arquivo docker-compose.yaml foi criado para reunir todas essas informações.

Posteriormente, o frontend foi desenvolvido com React e Vite, enquanto o backend foi implementado com Node.js. Para conectar o banco de dados do container, a URL de conexão tradicional "localhost" foi substituída pelo nome do próprio container, ou seja, "mongodb://admin:password@mongo:27017".

Para permitir o acesso ao frontend através do localhost da máquina, quando containerizado, foi necessário adicionar o parâmetro "--host 0.0.0.0" ao comando "npm run dev" no package.json. Isso tornou a aplicação acessível a toda a rede, incluindo de dentro do container.

Esses serviços foram então adicionados ao arquivo docker-compose.yaml. Imagens do backend e frontend foram criadas e armazenadas em repositórios no DockerHub. O comando "docker push" foi utilizado para enviar essas imagens, identificadas por tags específicas (por exemplo, "latest").

Por fim, o arquivo docker-compose.yaml foi atualizado para fazer o download das imagens a partir dos repositórios corretos, seguindo o padrão "elisaflemer/". As imagens resultantes ficaram como "elisaflemer/narutobackend" e "elisaflemer/narutofrontend".

Para garantir a integridade, todas as imagens foram removidas e o comando docker-compose foi executado. Isso resultou no correto download de todos os recursos e na automática execução da aplicação, necessitando apenas acessar localhost:80 para visualizar a interface.