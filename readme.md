# 🚗 Projeto Full Stack - Cadastro de Carros

Este repositório contém uma aplicação com:

- 🧩 **Back-end**: API REST em **Spring Boot** com java 17
- 🌐 **Front-end**: Aplicação Web em Next.js 15.0.2

Ambos os projetos estão integrados e podem ser executados com um único comando via **Docker Compose**.

docker compose up --build

---

## projeto backend - melhorias futuras
- Afim de simplificar, visto que o projeto é apenas para demostrar entendimento sobre a ferramenta criei apenas uma tabela
(veiculo) para a validação de marcas por exemplo o sistema vai em um enum, isso pode ser melhorado fazendo uma rota
para cadastro de marcas criando uma nova tabela onde o campo marca em veiculo seria FK da tabela Marca

- Criar handler para interceptar erros negociais 
- criar exception genérico para erros negociais.
- usar jwt ou algum tipo de segurança para as rotas

