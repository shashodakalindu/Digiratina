import { Grid } from "@mui/material";
import React from "react";
import ReactLoading from "react-loading";
import { Section, Title, Article, list } from "./generic";

const Loading = () => (
  <Grid wrapper style={{height: '100%'}}>
      <Section style={{height: '100% !important'}}>
    <Title>Loading</Title>
    {list.map(l => (
      <Article key={l.prop}>
        <ReactLoading type={l.prop} color="#fff" />
      </Article>
    ))}
  </Section>
   </Grid>   
);

export default Loading;