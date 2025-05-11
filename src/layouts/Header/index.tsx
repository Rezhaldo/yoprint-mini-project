import { Typography } from '@design-system/components';
import { Box, alpha, styled } from '@mui/material';

const HeaderWrapper = styled(Box)(
	({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.header.background, 0.95)};
        backdrop-filter: blur(8px);
        box-shadow: ${theme.header.boxShadow};
        position: fixed;
        justify-content: space-between;
        width: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        }
`,
);

function Header() {
	return (
		<HeaderWrapper display="flex" alignItems="center">
			<Typography text="Client Licenses Quota" variant="body" fontWeight="regular" />
		</HeaderWrapper>
	);
}

export default Header;
