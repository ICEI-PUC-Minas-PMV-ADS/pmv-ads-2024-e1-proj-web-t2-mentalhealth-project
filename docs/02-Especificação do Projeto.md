# Especificações do Projeto

## Perfis de Usuários

|Perfil 01| Paciente                 |
|--------------------|----------------------------------------------------------------------------|
|Descrição:  | Trabalhador que não tem tempo para se locomover a um consultório devido a seu trabalho               |
|Necessidades:       | 1. Acesso fácil e rápido a profissionais da área de bem-estar da saúde mental; 2. Realizar consultas on-line com profissional selecionado anteriormente; 3. Ter acesso ao histórico de consultas; 4. Formas facilitadas de pagamento.

|Perfil 02| Profissional da Saúde                 |
|--------------------|----------------------------------------------------------------------------|
|Descrição:  | Profissionais de saúde mental que desejam captar novos pacientes, ter uma agenda centralizada, acompanhamento do histórico de consultas e uma forma simplificada de recebimento que está buscando expandir sua base de pacientes.               |
|Necessidades:       | 1. Exposição a possíveis pacientes; 2. Gestão centralizada de agenda; 3. Acompanhamento do histórico de consultas; 4. Gestão e recebimento de pagamentos simplificado.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Paciente       | preciso realizar meu cadastro no site Saúde Mental                  | para realizar agendamentos e consultas on-line                |
|Paciente       | preciso fazer login em minha conta cadastrada no site Saúde Mental                | para ter acesso a consultas e informações relacionadas a minha conta               |
|Paciente       | quero ter acesso as informações fornecidas no cadastro                 | para verificar se os dados estão corretos                |
|Paciente       | preciso ter acesso a agenda de consultas                 | para me informar sobre os horários disponíveis para marcar uma consulta                |
|Médico  | preciso realizar meu cadastro no site Saúde Mental           | para realizar consultas on-line                |
|Médico  | quero ter acesso a uma agenda contendo dados sobre consultas          | para que possa saber e me organizar a respeito de datas e horários               |
|Médico  | preciso ter acesso ao histórico de atendimentos           | para poder acessar novamente a consulta               |
|Médico  | quero ter acesso as informações fornecidas no cadastro            | para verificar se os dados estão corretos               |
|Paciente       | preciso de uma lembrete via SMS ou Email                 | para me lembrar da consulta agendada                |
|Paciente  | preciso ter acesso ao histórico de consultas           | para poder acessar novamente as informações passadas em consultas anteriores               |
|Paciente       | quero filtrar as minhas buscas                | para poder ter uma pesquisa mais específica                |

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação deve permitir ao paciente cadastrar uma conta | ALTA | 
|RF-002| A aplicação deve permitir ao paciente fazer login em sua conta  | ALTA |
|RF-003| A aplicação deve permitir ao paciente verificar as informações registradas no cadastro na página de perfil | MÉDIA | 
|RF-004| A aplicação deve permitir que o paciente acesse uma agenda com horários disponível para atendimento   | ALTA |
|RF-005| A aplicação deve permitir ao profissional cadastre informações sobre seu currículo acadêmico   | ALTA |
|RF-006| A aplicação deve permitir que o profissional acesse uma área para gestão da agenda e atendimentos | ALTA | 
|RF-007| A aplicação deve permitir o profissional gerenciar histórico de atendimentos dos pacientes    | ALTA |
|RF-008| A aplicação deve permitir ao profissional verificar as informações registradas no cadastro na página perfil | MÉDIA |
|RF-009| Sistema de notificações por e-mail ou SMS para lembretes de consultas e atualizações importantes  | BAIXA |
|RF-010| A aplicação deve permitir ao paciente que acesse as anotações de consultas passadas  | MÉDIA |
|RF-011| A aplicação deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar os profissionais cadastrados no sistema e de temas específicos | MÉDIA |

**Prioridade: Alta / Média / Baixa.

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser compatível com os principais navegadores do mercado: Google Chrome, Firefox e Microsoft Edge | ALTA | 
|RNF-002| A aplicação deverá ser responsiva permitindo a visualização em dispositivos diversos como Computador, smartphones e tablets, de forma adequada |  ALTA | 
|RNF-003| A aplicação deve ser hospedada na internet para que todos os pacientes e médicos possam ter acesso |  ALTA | 
|RNF-004| Requisições para o backend não devem superar 5 segundos |  MÉDIA | 
|RNF-005| Interface intuitiva e fácil de usar para todos os perfis de usuários como jovens, adultos e idosos |  MÉDIA | 

**Prioridade: Alta / Média / Baixa.
