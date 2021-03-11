import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import Typography from '../../components/Typography';

const HomeTemplate = ({ seo, title, location }) => (
  <Layout location={location}>
    <Helmet
      title={seo?.title}
      meta={[
        {
          name: 'description',
          content: seo?.description,
        },
      ]}
    />
    <Grid container>
      <Typography variant="h1">{title}</Typography>
    </Grid>
  </Layout>
);

HomeTemplate.propTypes = {
  seo: PropTypes.object,
  title: PropTypes.string,
  location: PropTypes.object,
};

HomeTemplate.defaultProps = {
  seo: {},
  title: undefined,
  location: undefined,
};

export default HomeTemplate;
