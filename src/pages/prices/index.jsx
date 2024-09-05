// MUI import
import { Box, Paper, Typography } from "@mui/material";

// Custom import
import PriceCard from "../../components/PriceCard";
import { useTheme } from "@mui/material";

const PricePage = () => {
    const theme = useTheme();
    return (
        <Paper
            sx={{
                maxWidth: 1200,
                mx: "auto",
                p: 4,
                display: "flex",
                flexDirection: "column",
                gap: 5,
                boxShadow: theme.shadows.default,
                borderRadius: theme.customShape.section,
                mt: 4,
            }}
        >
            <Typography
                sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontSize: theme.typography.h1,
                    textAlign: "center",
                    fontWeight: 700,
                }}
            >
                Badge Service Pricing
            </Typography>
            <Typography
                sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontSize: theme.typography.body1,
                }}
            >
                Our Digital Badge Service offers a comprehensive solution for
                recognizing and showcasing achievements in a digital format.
                Ideal for educational institutions, professional organizations,
                and corporate training programs, our service allows you to
                create, manage, and distribute digital badges that are secure,
                verifiable, and easily shareable across social media platforms.
                Each badge is customizable, ensuring it reflects your brand
                identity while celebrating the recipient’s accomplishments.
            </Typography>
            <Box sx={{ width: "100%" }}>
                <PriceCard />
            </Box>
        </Paper>
    );
};

export default PricePage;
