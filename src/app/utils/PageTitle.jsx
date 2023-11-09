import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";

const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PageTitle;
