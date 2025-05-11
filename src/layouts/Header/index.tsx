import { Typography } from '@design-system/components';
import { Box, styled } from '@mui/material';

const HeaderWrapper = styled(Box)(
	({ theme }) => `
    height: ${theme.header.height};
    color: ${theme.header.textColor};
    padding: ${theme.spacing(0, 2)};
    right: 0;
    left: 0;
    top: 0;
    z-index: 6;
    background-color: ${theme.palette.primary.main};
    backdrop-filter: blur(8px);
    box-shadow: ${theme.header.boxShadow};
    position: fixed;
    justify-content: space-between;
    width: 100vw; 
    display: flex;
    align-items: center;
    margin: 0 !important;
    padding-left: 16px !important;
    box-sizing: border-box;
  `,
);

function Header() {
	return (
		<HeaderWrapper display="flex" alignItems="center">
			<Typography color="brand" text="Search Anime App" variant="body" fontWeight="regular" />
		</HeaderWrapper>
	);
}

export default Header;
