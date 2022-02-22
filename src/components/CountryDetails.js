import React from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardContent from "@mui/material/CardContent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Card from "@mui/material/Card";
import useCountry from "../custom-hooks/useCountry";
import { useParams } from "react-router-dom";
import { CardMedia } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
// import useCountries from "../custom-hooks/useCountries";

function CountryDetails() {
  //   const  {countries} = () => {
  //     const navigate = useNavigate();
  //      const { error, country } = useCountry(countries);
  //   }
  const  { name }  = useParams();
  const {country, error} = useCountry(name)
  console.log("here", countr);
  if (error) {
    return <p>Some problem</p>
  }
  if (!country) {
    return <p>Looding...</p>
  }
  return (
    <div>
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="300"
        image={country.flags.png}
        alt="flag"
      />
    
      
      <CardContent>
      <Typography > 
        {country.name.common}
      </Typography>
      </CardContent>
      <Accordion>
      <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            </AccordionSummary>
            <Typography>Common: {country.name.common}</Typography>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Languages</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {country.languages
                ? Object.values(country.languages).map((value) => (
                    <p key={value}>{value} </p>
                  ))
                : "N/A"}
                  </Typography>
          </AccordionDetails>
          <CardActions>
          <Button size="small">Learn More!</Button>
        </CardActions>
        </Accordion>
        </Card>
        </div>
        

       
         
   );
};
export default CountryDetails;
