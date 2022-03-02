import React from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardContent from "@mui/material/CardContent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Grid from "@material-ui/core/Grid";
import Card from "@mui/material/Card";
import useCountry from "../custom-hooks/useCountry";
import { useParams } from "react-router-dom";
import { CardMedia } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";


function CountryDetails() {

  const { name } = useParams();
  const [country, error, isLoading] = useCountry(name);

  if (error) {
    return <p>Some problem</p>;
  }
  if (isLoading) {
    return <p>isLoading</p>;
  }
  console.log("yah", country);
  return (
    <div>
      {country.map((country) => (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Card key={country.name.common} sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="300"
              image={country?.flags.png}
              alt="flag"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {country?.name.common}
              </Typography>
            </CardContent>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></AccordionSummary>
              <Typography variant="body2" color="text.secondary">
                {country?.name.common}
              </Typography>

              <Typography
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              ></Typography>

              <Typography>Languages</Typography>

              <CardContent>
                <Typography>
              
                {country.languages
                  ? Object.values(country?.languages).map((value) => (
                      <p key={value}>{value} </p>
                    ))
                  : "N/A"}
                  
               </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">Learn More!</Button>
              </CardActions>
            </Accordion>
          </Card>
        </Grid>
      ))}
    </div>
  );
}
export default CountryDetails;
