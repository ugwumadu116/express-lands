import React, { Fragment, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Container } from "./elements";
import Layout from "../layout";
import Budget from "../card/Budget";
import Status from "../card/Status";
import { budgetData, statusData } from "../../assets/data";
import BarChart from "../Barchats";


const Home = () => {

  return (
    <Fragment>
      <Helmet>
        <title>Express lands </title>

        <meta name="description" content="" />
        <meta name="author" content="Joel" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="" />
        <meta property="og:image" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
      </Helmet>
      <Layout>
        <Container>
          <div className="dashboard-intro">
            <h3>DashBoard</h3>
            <h3>20 Dec 2019, Friday</h3>
          </div>
          <div className="data-row-container">
            <div>
              {budgetData.map(item => (
                <Budget key={item.id} data={item} />
              ))}
            </div>
            <div>
              {statusData.map(item => (
                <Status key={item.id} data={item} />
              ))}
            </div>
          </div>

          <BarChart />
        </Container>
      </Layout>
    </Fragment>
  );
};

export default Home;
