import React from "react";
import { Container, Paper, Grid, Divider } from "@mui/material";
import HeaderCard from "./HeaderCard";
import VacationCard from "./VacationCard";
import HoverShadowCard from "./HoverShadowCard";

function DefaultHomePage({ plans, setActivePage, setVacationIndex }) {
    return (
        <Container maxWidth="lg" sx={{ mt: 6, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                        <HeaderCard setActivePage={setActivePage} />
                    </Paper>
                </Grid>
                {plans.map((plan, index) => (
                    <Grid
                        item
                        xs={4}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <HoverShadowCard
                            element={
                                <VacationCard
                                    vacation={plan}
                                    onClick={() => setVacationIndex(index)}
                                />
                            }
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default DefaultHomePage;
