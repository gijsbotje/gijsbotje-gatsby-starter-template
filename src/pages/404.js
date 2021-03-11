import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Grid from '../components/Grid';
import Typography from '../components/Typography';

const NotFound = () => (
  <Layout>
    <Helmet title="404 pagina niet gevonden | Afosto" />
    <Grid container className="pt-120 pb-144">
      <Typography variant="h1" className="mb-12">
        Pagina niet gevonden
      </Typography>
      <Typography variant="subtitle-1" className="mb-40">
        Deze pagina is verplaatst of heeft nooit bestaan. Gebruik het menu om verder te gaan.
      </Typography>
      <Typography variant="h5">Hulp nodig?</Typography>
      <Typography variant="body-large" color="gray-700" className="mb-40">
        Vul ons{' '}
        <Link to="/contact/" className="hover-underline">
          contactformulier
        </Link>{' '}
        in en wij nemen zo snel mogelijk contact op.
      </Typography>
      <Typography variant="body-large" component={Link} to="/" className="hover-underline">
        Afosto homepage
      </Typography>
    </Grid>
  </Layout>
);

export default NotFound;
