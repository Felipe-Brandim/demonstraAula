Arquivos rc são um tipo especial de arquivo do tipo "Run Commands" e é uma convenção para scripts de inicialização.

Arquivos rc são um tipo especial de arquivo do tipo "Run Commands" e é uma convenção para scripts de inicialização.

Over Engineering - Complicar demais algo que poderia ser simples.

Feature Creep - Quando um projeto tem tanto recurso que mais atrapalha do que ajuda.

Meta#1 - Organizar projeto

Criar um gitpages para esse projeto ?

Documentar por ali talvez seja uma boa ideia para não perder a mão no que eu deveria estar fazendo e de fato estou, organizar.

\*Para organizar tarefas, posso usar os recursos de milestone e issues do github.
A milestone é como se fosse um marco dos projetos e as issues são pequenas tarefas que compõem esses marcos, então eu posso relacionar uma issue a uma milestone e verificar todas as issues que compoẽm uma milestone.

editorconfig - É um configurador de editor, sendo então uma forma de padronizar como você escreve o código enquanto escreve, basicamente você cria um arquivo que pode ser lido por editores para que independente da máquina que o código está sendo escrito, detalhes como espaçamento sejam corrigidos pelo editor ao respeitar os padrões do arquivo .editorconfig (Que pode ser commitado), desde que o editor tenha suporte ou possa ser instalada a extensão para ler o arquivo(caso do vs code). É amplamente aceito.

o comando root = true serve para indicar aonde a leitura do arquivo deve parar. isso pq ele vasculha as pastas em busca de arquivos .editorconfig e permite que você tenha uma configuração para cada pasta por exemplo.

[.] significa que ele vai aplicar a todo tipo de arquivo, mas é possível escolher padrões específicos pra linguagens especificas digitando[.js] por exemplo para arquivos javascript.

npm install prettier -D (adiciona o prettier no package.jason como dependência de desenvolvimento)

Status Pages do projeto até então:
Vercel: https://www.vercel-status.com/
AWS: https://health.aws.amazon.com/health/status
GitHub: https://www.githubstatus.com/

POC - Prova de conceito/Proff of concept

Linha da simplicidade de código ideal:
![alt text](image.png)

Arquitetura de software não é sinônimo de organização de pastas.
É possível implementar MVC e Clean Architecture dentro de uma mesma pasta, ou todos os códigos de todos os tipos de componentes no mesmo arquivo, isso porque separar códigos em arquivos e organizar em pastas não é o que define uma arquitetura de software. O que define é o escopo dos componentes, onde eles começam e terminam em conjunto com o tipo de interação entre eles. E cada arquitetura é uma tentativa de definir esse escopo e essas interações.

TDD- Test Driven Development

Jest - É um framework de testes automatizados, considerado simples de se usar e com foco em testar aplicações escritas em react, mas foi otimizado para outras línguas também.

Ele tem como concorrentes o Mocha(serial), o AVA(paralelo),Playwright (testes end-to-end)
