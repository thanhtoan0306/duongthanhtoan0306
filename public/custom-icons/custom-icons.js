import styled from "styled-components";

const IconWrapper = styled.span`
  padding: 5px;
`;

export const DownloadIcon = (props) => (
  <IconWrapper {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
      <title />

      <g id="Complete">
        <g id="download">
          <g>
            <path
              d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
              fill="none"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />

            <g>
              <polyline
                data-name="Right"
                fill="none"
                id="Right-2"
                points="7.9 12.3 12 16.3 16.1 12.3"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />

              <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="2.7" y2="14.2" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </IconWrapper>
);
