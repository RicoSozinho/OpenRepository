import React from 'react';
import { Link } from 'react-router-dom';

import { InfoSec, InfoRow, InfoColumn, TextWrapper,
          Heading, SubTitle, TopLine,
          ImgWrapper, Img} from './InfoSection.elements.js';
import { Container, Button } from '../../globalStyles';

const InfoSection = ({lightBg, imgStart, lightTopLine,
                      lightText, lightTextDesc, primary,
                      topLine, headline, description, buttonLabel,
                      start, alt, img1}) => {
  return (
    <>
    <InfoSec>
      <Container>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
              <Link to='/sign-up'>
                <Button big fontBig primary={primary}>
                  {buttonLabel}
                </Button>
              </Link>
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
            <ImgWrapper start={start}>
              <Img src= {img1} alt={alt}/>
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
    </>
  );
}

export default InfoSection;
