import { ResearchProjectProps } from "../../types";

export const researchProject: ResearchProjectProps[] = [
  {
    id: "peacemaker-bot",
    title:
      "Construção de um bot não-intrusivo para monitorar traços de incivilidade de desenvolvedores em conversações de pull requests",
    description:
      "PIBITI 2024/2025 (Desenvolvimento Tecnológico e Inovação) - Edital N 06/2024 - Em ambientes de desenvolvimento de software aberto (OSS), como o GitHub, as interações entre os desenvolvedores são essenciais para o progresso dos projetos. Tais interações tendem a ocorrer por meio de conversações em pull requests. No entanto, essas interações podem ser prejudicadas por comportamentos incivilizados, tais como comentários desrespeitosos e ofensivos. Como consequência desses comportamentos, os desenvolvedores podem ser desencorajados a contribuir com o projeto, ou até mesmo resultar em uma piora na qualidade do código. Nesse contexto, ainda não existem muitas soluções automatizadas para lidar com a ocorrência de traços de incivilidade em conversações de pull requests. Portanto, o principal objetivo desse projeto é propor um bot não-intrusivo e automatizado (The PeacemakerBot) capaz de auxiliar desenvolvedores e gerentes de projetos na identificação e moderação de comportamentos incivilizados em conversações de pull requests. A ideia é utilizar técnicas de Natural Language Processing (NLP) e Large Language Models (LLMs) capazes de analisar grandes volumes de texto, compreender padrões linguísticos e detectar expressões que denotam incivilidade como parte da construção do bot. Para alcançar esse objetivo, primeiramente iremos compreender o estado atual da detecção de incivilidade em conversações em OSS. Em seguida, iremos selecionar e analisar tecnologias baseadas em NLP e LLMs, para que assim seja desenvolvido o PeacemakerBot integrado ao GitHub. Finalmente, iremos conduzir estudos experimentais para avaliar a eficácia e os efeitos causados pela moderação nas interações entre desenvolvedores por meio da utilização do PeacemakerBot. Adicionalmente, iremos propor a criação de diretrizes para o uso responsável do bot em conversações de pull requests. Portanto, espera-se que a solução proposta possa ajudar a promover um ambiente mais saudável e colaborativo para os desenvolvedores.",
    status: "Em andamento",
    nature: "Pesquisa",
    studentsInvolved: {
      undergraduate: 5,
      phd: 1,
    },
    members: [
      {
        name: "Anderson Gonçalves Uchôa",
        role: "Coordenador",
      },
      {
        name: "Matheus Feitosa de Oliveira Rabelo",
        role: "Integrante",
      },
      {
        name: "José Eric Mesquita Coelho",
        role: "Integrante",
      },
      {
        name: "Carlos Jefté Bastos de Mesquita Freire",
        role: "Integrante",
      },
      {
        name: "ANTONIO LUCAS MELO DE SOUSA",
        role: "Integrante",
      },
    ],
  },
  {
    id: "security-automation-ci",
    title:
      "Investigando a Automação de Segurança na Integração Contínua de Sistemas Baseados em Aprendizado de Máquina",
    description:
      "PIBIC 2024/2025 - Edital N 01/2024 - Os sistemas baseados em aprendizado de máquina (ML) estão amplamente difundidos, despertando interesse na academia e na indústria. Com a popularização desses sistemas, a prática de integração contínua (CI) tornou-se fundamental para garantir uma entrega rápida e consistente de novas funcionalidades. No entanto, a segurança é frequentemente negligenciada nesse processo, deixando os sistemas vulneráveis a ataques. Para mitigar esses riscos, torna-se essencial integrar atividades de segurança nos processos de CI, permitindo a detecção precoce de vulnerabilidades de segurança. No contexto dos sistemas baseados em ML, estudos anteriores revelam que uma parcela significativa dos projetos integra serviços de CI em seus fluxos de trabalho, com ênfase em testes e construção de software. No entanto, há uma lacuna de conhecimento sobre a adoção de atividades de segurança nesses processos. Portanto, esse projeto tem como objetivo investigar a automação de segurança em sistemas baseados em ML durante o processo de CI. Para isso, serão selecionados sistemas baseados em ML disponíveis no GitHub e que utilizam práticas de CI. Em seguida, serão identificados e minerados arquivos e logs relacionados a serviços de CI como Travis CI, Circle CI e GitHub Actions. Com base em uma análise manual desses arquivos, serão identificadas e caracterizadas ferramentas de segurança, analisando assim a prevalência e distribuição das atividades de segurança em sistemas baseados em ML. Adicionalmente, será aplicado um questionário aos desenvolvedores dos projetos selecionados, visando compreender sua percepção sobre a importância da automação de segurança em sistemas baseados em ML e os desafios enfrentados na implementação dessas práticas. Portanto, espera-se que com a condução desse estudo seja possível fornecer insights valiosos para fortalecer a segurança em sistemas baseados em ML, contribuindo significativamente para a proteção contra ameaças cibernéticas.",
    status: "Em andamento",
    nature: "Pesquisa",
    studentsInvolved: {
      phd: 1,
    },
    members: [
      {
        name: "Anderson Gonçalves Uchôa",
        role: "Coordenador",
      },
    ],
  },
];
