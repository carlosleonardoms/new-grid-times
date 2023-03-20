import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>
        <SecondaryStorySection>
          <StoryList>
            {SECONDARY_STORIES.map((story, index) => (
              <VerticalStoryWrapper key={story.id}>
                <SecondaryStory  {...story} />
              </VerticalStoryWrapper>
            ))}
          </StoryList>
        </SecondaryStorySection>

        <OpinionSection>
          <SectionTitle>Opinion</SectionTitle>
          <OpinionStoryList>
            {OPINION_STORIES.map((story, index) => (
              <OpinionStoryWrapper  key={story.id}>
                <OpinionStory {...story} />
              </OpinionStoryWrapper>
            ))}
          </OpinionStoryList>
        </OpinionSection>
        
        <AdvertisementSection>
          <Advertisement />
        </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
      gap: 48px 0px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 5fr 4fr 3fr;
    grid-template-areas: 
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';
      gap: 48px 0px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: 2px solid var(--color-gray-300);
    margin-right: 16px;
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    border-right: 2px solid var(--color-gray-300);
    margin-right: 16px;
    padding-right: 16px;
  }
`;

const VerticalStoryWrapper = styled.div`
 
  &:not(:last-of-type){
    border-bottom: 2px solid var(--color-gray-300);
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
`;

const OpinionStoryWrapper = styled(VerticalStoryWrapper)`
  @media ${QUERIES.tabletOnly} {
    flex: 1;
    &:not(:last-of-type){
      border-bottom: revert;
      margin-bottom: revert;
      padding-bottom: revert;
    }
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;
  }
`;
const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    border-top: 2px solid var(--color-gray-300);
    margin-top: 16px;
    padding-top: 16px;
  }
`;

export default MainStoryGrid;
