import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 20px;
  justify-content: center;
`;

const SkillItem = styled.div`
  width: 250px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  background: rgba(17, 25, 40, 0.83);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SkillInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: #2c2c2c;
  border-radius: 10px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${({ level }) => level}%;
  height: 100%;
  background: ${({ color }) => color || "linear-gradient(90deg, #4facfe, #00f2fe)"};
  border-radius: 10px;
  transition: width 1.2s ease-in-out;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Here are some of my skills on which I have been working on for the
          past 3 years.
        </Desc>

        <SkillsContainer>
          {skills.map((item, index) => (
            <Tilt key={`skill-${index}`}>
              <SkillItem>
                <SkillInfo>
                  <SkillImage src={item.image} alt={item.name} />
                  {item.name} ({item.level}%)
                </SkillInfo>
                <ProgressBar>
                  <Progress level={item.level} color={item.color} />
                </ProgressBar>
              </SkillItem>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
