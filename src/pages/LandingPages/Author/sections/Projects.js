/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import project1 from "assets/images/your-path.png";
import project2 from "assets/images/rios-shop.png";
import project3 from "assets/images/project-shipping.png";
import project4 from "assets/images/hot-classifier.png";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h4" mb={6}>
            My Latest Projects
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={project1}
              title="Your Path"
              description="Captivating massively multiplayer online browser game built using JavaScript, HTML, CSS, and SQL"
              action={{
                type: "external",
                route: "https://www.yourpathmmo.com",
                color: "info",
                label: "try it out",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={project2}
              title="Rio's Shop"
              description="Elegant gacha web application with a warm color palette built using CSS, Anvil, and Python"
              action={{
                type: "external",
                route: "https://riosshop.anvil.app/",
                color: "info",
                label: "try it out",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={project3}
              title="Project Shipping"
              description="Simple web application that provides artificial intelligence tools for ship manifests built using CSS, Anvil, and Python"
              action={{
                type: "external",
                route: "https://youtu.be/uhZ5sUa19Ps",
                color: "info",
                label: "demo link",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={project4}
              title="HOT Classifier"
              description="Machine learning pipeline and visualization for High Occupancy Target (HOT) regions using state-of-the-art techniques built using Python and Jupyter"
              action={{
                type: "external",
                route: "https://github.com/justindwang/hot-classifier",
                color: "info",
                label: "github link",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
