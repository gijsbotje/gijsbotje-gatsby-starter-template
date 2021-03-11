import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../components/Typography';
import Layout from '../components/Layout';
import Grid from '../components/Grid';
import Button from '../components/Button';

const Blog = ({ location }) => (
  <Layout location={location}>
    <Grid container className="pb-56">
      <Typography variant="display-1">Typography</Typography>
      <hr className="my-24" />
      <Typography variant="display-1">Display 1</Typography>
      <Typography variant="h1">H1</Typography>
      <Typography variant="h2">H2</Typography>
      <Typography variant="subtitle">Subtitle</Typography>
      <Typography variant="paragraph-1">Paragraph 1</Typography>
      <Typography variant="paragraph-2">Paragraph 2</Typography>
      <Typography variant="caption">Caption</Typography>
      <Typography variant="button-1">Button 1</Typography> <br />
      <Typography variant="button-2">Button 2</Typography> <br />
      <Typography variant="button-3">Button 3</Typography> <br />
      <Typography variant="button-4">Button 4</Typography>
      <Typography variant="display-1" className="mt-80">
        Buttons
      </Typography>
      <hr className="my-24" />
      <Typography variant="subtitle" className="mb-16">
        Filled
      </Typography>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="danger">Danger</Button>
      <Button color="warning">Warning</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Typography variant="subtitle" className="mt-32 mb-16">
        Outlined
      </Typography>
      <Button outline>Primary</Button>
      <Button outline color="secondary">
        Secondary
      </Button>
      <Button outline color="danger">
        Danger
      </Button>
      <Button outline color="warning">
        Warning
      </Button>
      <Button outline color="info">
        Info
      </Button>
      <Button outline color="success">
        Success
      </Button>
    </Grid>
  </Layout>
);

Blog.propTypes = {
  location: PropTypes.object,
};

Blog.defaultProps = {
  location: undefined,
};

export default Blog;
