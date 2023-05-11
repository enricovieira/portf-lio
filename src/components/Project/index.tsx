import {
  Project as ProjectWrapper,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  git_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Response = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos`
      );

      const json = await data.json();

      setRepositories(json);

      if (!data.ok) {
        throw data;
      }

      return json;
    };
    fetchData();
  }, []);

  return (
    <>
      <ProjectWrapper>
        <Text
          as="h2"
          type="heading3"
          css={{ marginBottom: "$3" }}
          color="grey1"
        >
          EzBracket
        </Text>

        <ProjectStack>
          <Text type="body2">Linguagem:</Text>
          <ProjectStackTech>
            <Text color="brand1" type="body2">
              React
            </Text>
          </ProjectStackTech>
        </ProjectStack>

        <Text type="body1" color="grey2">
          Projeto de Gerenciamento de torneios
        </Text>
        <ProjectLinks>
          <ProjectLink
            target="_blank"
            href="https://github.com/ez-Bracket/ez-bracket"
          >
            <FaGithub /> Github Code
          </ProjectLink>

          <ProjectLink target="_blank" href="https://ez-bracket.vercel.app/">
            <FaShare /> Aplicação
          </ProjectLink>
        </ProjectLinks>
      </ProjectWrapper>
      <ProjectWrapper>
        <Text
          as="h2"
          type="heading3"
          css={{ marginBottom: "$3" }}
          color="grey1"
        >
          EzBracket Back-end
        </Text>

        <ProjectStack>
          <Text type="body2">Linguagem:</Text>
          <ProjectStackTech>
            <Text color="brand1" type="body2">
              NodeJs
            </Text>
          </ProjectStackTech>
        </ProjectStack>

        <Text type="body1" color="grey2">
          Projeto de Gerenciamento de torneios
        </Text>
        <ProjectLinks>
          <ProjectLink
            target="_blank"
            href="https://github.com/ez-Bracket/server"
          >
            <FaGithub /> Github Code
          </ProjectLink>
        </ProjectLinks>
      </ProjectWrapper>

      <ProjectWrapper>
        <Text
          as="h2"
          type="heading3"
          css={{ marginBottom: "$3" }}
          color="grey1"
        >
          Kenzie Burguer
        </Text>

        <ProjectStack>
          <Text type="body2">Linguagem:</Text>
          <ProjectStackTech>
            <Text color="brand1" type="body2">
              React
            </Text>
          </ProjectStackTech>
        </ProjectStack>

        <Text type="body1" color="grey2">
          Projeto que simula um e-commerce de um restaurante fast-food
        </Text>
        <ProjectLinks>
          <ProjectLink
            target="_blank"
            href="https://github.com/enricovieira/projeto-hamburgueria"
          >
            <FaGithub /> Github Code
          </ProjectLink>

          <ProjectLink
            target="_blank"
            href="https://kenzie-hamburgueria-sable.vercel.app/"
          >
            <FaShare /> Aplicação
          </ProjectLink>
        </ProjectLinks>
      </ProjectWrapper>
      <ProjectWrapper>
        <Text
          as="h2"
          type="heading3"
          css={{ marginBottom: "$3" }}
          color="grey1"
        >
          KenzieHub
        </Text>

        <ProjectStack>
          <Text type="body2">Linguagem:</Text>
          <ProjectStackTech>
            <Text color="brand1" type="body2">
              React
            </Text>
          </ProjectStackTech>
        </ProjectStack>

        <Text type="body1" color="grey2">
          Projeto para que você possa cadastrar as tencnologias que sabe ou está
          aprendendo
        </Text>
        <ProjectLinks>
          <ProjectLink
            target="_blank"
            href="https://github.com/enricovieira/react-entrega-kenzie-hub"
          >
            <FaGithub /> Github Code
          </ProjectLink>

          <ProjectLink
            target="_blank"
            href="https://react-entrega-kenzie-hub-rho.vercel.app/"
          >
            <FaShare /> Aplicação
          </ProjectLink>
        </ProjectLinks>
      </ProjectWrapper>
    </>
  );
};
