// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
  ProjectLinks,
  ProjectLink,
} from "./style";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Criando experiências por meio da tecnologia{" "}
            </Text>
            <Text type="body1" color="grey6">
              Sou formado em Ciências Biológicas - Licenciatura pela
              Universidade Positivo e Certificado como Desenvolvedor Full-stack
              pela Kenzie Academy Brasil, no momento estou em transição de
              carreira para a área da tecnologia. Durante o período de
              universidade trabalhei em colégios e laboratório, tive experiência
              na área da pesquisa, trabalhando no setor de controle de
              qualidades de vacina no TECPAR. Quando decidi migrar de área
              acabei me encontrando na área de tecnologia e me apaixonei por
              aprender sobre programação. Já desenvolvi trabalhos que simulam o
              mercado de trabalho real do mundo da programação, como e-commerce,
              blogs, rede sociais, etc.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" href="#projetos">
                Projetos
              </Button>
              <Button as="a" href="#tecnologias" type="btLink" color="grey5">
                Tecnologias
              </Button>
            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Vamos trocar uma ideia?
              </Text>
              <Text as="p" type="body1" color="grey2">
                No linkedIn sempre estou compartilhando meus processos diários
                para desenvolver esses projetos e estou disposto a trocar
                algumas ideias por lá
              </Text>
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                Projetos
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Originalidade e{" "}
                <Text as="span" color="brand1" type="heading2">
                  dedicação
                </Text>{" "}
                em cada detalhe
              </Text>
              <Text as="h3" type="heading2" color="grey1">
                Projeto em destaque: Kenzie Motors
              </Text>
              <ProjectLinks>
                <ProjectLink
                  target="_blank"
                  href="https://github.com/grupo24-t13-marcelo/front-end"
                >
                  <FaGithub /> Github Code
                </ProjectLink>
                <ProjectLink>
                  <SiVercel
                    target="_blank"
                    href="motor-shop-dusky.vercel.app"
                  />
                  Vercel Link
                </ProjectLink>
              </ProjectLinks>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
