import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HomeTemplate from './home-page';

const HomePage = ({ data, location }) => {
  const { frontmatter } = data?.markdownRemark || {};
  const { seo, home } = frontmatter ?? {};
  const { title } = home ?? {};

  return <HomeTemplate seo={seo} title={title} location={location} />;
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
  location: PropTypes.object,
};

HomePage.defaultProps = {
  data: {
    markdownRemark: {
      frontmatter: {},
    },
  },
  location: undefined,
};

export default HomePage;

export const pageQuery = graphql`
  query homePage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        seo {
          title
          description
        }
        title
      }
    }
  }
`;
