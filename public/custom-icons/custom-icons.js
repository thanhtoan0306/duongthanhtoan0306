import styled from "styled-components";

const IconWrapper = styled.span`
  padding: 0;
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />

            <g>
              <polyline
                data-name="Right"
                fill="none"
                id="Right-2"
                points="7.9 12.3 12 16.3 16.1 12.3"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />

              <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="2.7" y2="14.2" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  </IconWrapper>
);

export const TSignIcon = (props) => (
  <IconWrapper {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-sign-intersection-t-fill" viewBox="0 0 16 16">
      <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM5 5h6v1.5H8.75V12h-1.5V6.5H5V5Z" />
    </svg>
  </IconWrapper>
);