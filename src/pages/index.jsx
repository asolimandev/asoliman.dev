import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionEducation from '../components/section-education';
import SectionSkills from '../components/section-skills';
import SectionProjects from '../components/section-projects';
import SectionExperience from '../components/section-experience';
import SectionAwards from '../components/section-awards';
import SectionCertifications from '../components/section-certifications';
import SectionVolunteering from '../components/section-volunteering';
import SectionBlog from '../components/section-blog';
import SEO from '../components/seo';
const Index = ({ data }) => {
  const about = get(data, 'site.siteMetadata.about', false);
  const education = get(data, 'site.siteMetadata.education', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const awards = get(data, 'site.siteMetadata.awards', false);
  const certifications = get(data, 'site.siteMetadata.certifications', false);
  const volunteering = get(data, 'site.siteMetadata.volunteering', false);
  const posts = data.allMarkdownRemark.edges;
  const noBlog = !posts || !posts.length;
  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={noBlog} />
      {about && <SectionAbout about={about} />}
      {education && education.length && <SectionEducation education={education} />}
      {experience && experience.length && ( <SectionExperience experience={experience} /> )}
      {projects && projects.length && <SectionProjects projects={projects} />}
      {awards && awards.length && <SectionAwards awards={awards} />}
      {certifications && certifications.length && <SectionCertifications certifications={certifications} />}
      {skills && skills.length && <SectionSkills skills={skills} />}
      {volunteering && volunteering.length && <SectionVolunteering volunteering={volunteering} />}
      {!noBlog && <SectionBlog posts={posts} />}
    </Layout>
  );
};
export default Index;
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        twitter
        github
        linkedin
        education {
          name
          description
          link
        }
        experience {
          name
          description
          link
        }
        projects {
          name
          description
          link
        }
        awards {
          name
          description
          link
        }
        certifications {
          name
          description
          link
        }
        skills {
          name
          description
        }
        volunteering {
          name
          description
          link
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;