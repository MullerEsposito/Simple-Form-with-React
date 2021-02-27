# Criando um formulário em React .

Crie estilos CSS para seu formulário, de acordo com a sua imaginação.
Faça tudo utilizando as abstrações do React .

## Vamos criar um formulário de cadastro de currículo com base na especificação seguintes:

### Crie um <fieldset> para os dados pessoais a seguir:
1. Nome - Texto
    * Limite de 40 caracteres
    * Todos os caracteres devem ser transformados para UPPER CASE assim que forem digitados.
    * Campo obrigatório

1. Email - Texto
    * Limite de 50 caracteres
    * Campo obrigatório

1. CPF - Texto
    * Limite de 11 caracteres
    * Campo obrigatório

1. Endereço - Texto
    * Limite de 200 caracteres
    * Remover qualquer caracter especial que seja digitado
    * Campo obrigatório

1. Cidade - Texto
    * Limite de 28 caracteres
    * Ao remover o foco desse campo (evento onBlur ), verificar se o nome da cidade começa com números. Caso comece, limpar o campo.
    * Campo obrigatório.

1. Estado - ComboBox
    * Todos os estados do Brasil
    * Campo obrigatório.

1. Tipo - Radio Button
    * Casa, Apartamento
    * Campo obrigatório.

### Crie outro <fieldset> para dados do seu último emprego:

1. Resumo do currículo - TextArea
    * Limite de 1000 caracteres
    * Campo obrigatório.

1. Cargo - TextArea
    * Limite de 40 caracteres
    * Quando o mouse passar por cima deste campo (evento onMouseEnter ), exibir um alerta dizendo 'Preencha com cuidado esta informação.'. Exiba essa mensagem apenas uma vez.
    * Campo obrigatório

1. Descrição do cargo - Texto
    * Limite de 500 caracteres
    * Campo obrigatório

### Crie um botão que, ao ser clicado, monta uma <div> com o consolidado dos dados que foram inseridos no formulário.

### Crie um botão Limpar que limpa todos os campos do formulário e a <div> com seu currículo também.
