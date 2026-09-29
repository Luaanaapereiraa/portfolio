import styled from 'styled-components'
import { media } from '../../styles/breakpoints'
import { hudPanel, monoLabel } from '../../styles/mixins'

export const Banner = styled.section`
  position: fixed;
  left: 50%;
  bottom: 1rem;
  z-index: 9998;
  transform: translateX(-50%);
  width: min(calc(100% - 2rem), 760px);
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem 1.25rem;
  ${hudPanel}
  background-color: ${(props) => props.theme['panel-solid']};

  p {
    flex: 1;
    font-size: 0.85rem;
    line-height: 1.55;
    color: ${(props) => props.theme['text-dim']};
  }

  ${media.md} {
    flex-direction: column;
    align-items: stretch;
    gap: 0.9rem;
  }
`

export const Label = styled.span`
  display: block;
  margin-bottom: 0.25rem;
  ${monoLabel}
  font-size: 0.66rem;
  color: ${(props) => props.theme.accent};
`

export const Actions = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-shrink: 0;

  ${media.md} {
    > * {
      flex: 1;
    }
  }
`
