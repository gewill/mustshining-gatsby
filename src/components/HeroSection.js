import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

function HeroSection() {
  return (
    <Wrapper>
      <Link to="/">
        {/*
        这里使用 gatsby-config.js path
        StaticImage 无法使用该 path
        */}
        <img src="images/diamond-svgrepo-com.svg" width={64} alt="logo" />
      </Link>
      <ContentWrapper>
        <TextWrapper>
          <Title>Must Shinning</Title>
          <Description>
            我的名字必须闪闪发光，这是我活着的唯一理由。 --安徒生
          </Description>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

// 自定义组件样式
const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 200px 30px;
  margin: 0 auto;
`
const TextWrapper = styled.div`
  max-width: 360px;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 60px;
  color: white;
`
const Description = styled.p`
  font-size: 17px;
  line-height: 130%;
`
