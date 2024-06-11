import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import resumeFile from '../../../CV.pdf';
import profileImg from '../../images/profile.jpg';
const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150 min-w-100 min-h-100',
  image: 'rounded-full transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link:
    'inline-block py-2 font-semibold text-xs text-gray-600 hover:text-black',
};
const Header = ({ metadata = {}, noBlog = false }) => {
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);
  const twitter = get(metadata, 'twitter', false);
  const createVCard = () => {
    const vcfData = `BEGIN:VCARD
VERSION:3.0
N:Soliman;Abdelrahman;;;
FN:Abdelrahman Soliman
ORG:Carleton University
TITLE:Teaching Assistant
TEL;TYPE=WORK,VOICE:+1-613-853-3666
EMAIL;TYPE=PREF,INTERNET:AbdelrahmanSoliman@cmail.carleton.ca
URL:https://asoliman.dev
ADR;TYPE=WORK:;;3158 Uplands Dr;Ottawa;Ontario;K1V 0A8;Canada
END:VCARD`;

    return vcfData;
  };
  const vCardData = createVCard();
  const vcfDataUrl = `data:text/vcard,${encodeURIComponent(vCardData)}`;
  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Link to="/">
          <img className={classes.image} src={profileImg} alt={metadata.name} />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list}>
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin}>
                LinkedIn
              </a>
            </li>
          )}
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github}>
                GitHub
              </a>
            </li>
          )}
          {twitter && (
            <li className={classes.item}>
              <a
                className={classes.link}
                href={`https://twitter.com/${twitter}`}
              >
                Twitter
              </a>
            </li>
          )}
          {!noBlog && (
            <li className={classes.item}>
              <Link className={classes.link} to="/blog">
                Blog
              </Link>
            </li>
          )}
          <li className={classes.item}>
            <a className={classes.link} href={resumeFile} type="pdf" download="Abdelrahman_Soliman_Resume.pdf">
              <u>Resume ↓</u>
            </a>
          </li>
          <li className={classes.item}>
            <a className={classes.link} href={vcfDataUrl} download="asoliman.vcf">
              👤+
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
