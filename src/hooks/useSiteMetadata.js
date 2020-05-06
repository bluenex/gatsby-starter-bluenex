import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useState } from 'react';

/**
 * @typedef siteMetadataObj
 * @property {string} title
 *
 * useSiteMetadata - this hooks is designed to always return metadata of
 * the latest edition. It does allow changing edition after but need
 * a short wait between state update
 * @returns {siteMetadataObj}
 */
function useSiteMetadata(displayEdition) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  // get default current edition and all editions data from siteMetadata
  const { currentEdition, editions } = data.site.siteMetadata;
  // metadata to be returned if there is edition change
  const [metadata, setMetadata] = useState(undefined);

  // get latest edition data
  const defaultMetadata = editions.find((x) => x.key === currentEdition);

  useEffect(() => {
    // update metadata by watching edition from props
    const metadataOfEdition = editions.find((x) => x.key === displayEdition);

    if (metadataOfEdition) {
      setMetadata(metadataOfEdition);
    }

    // if provided edition doesn't have corresponded data
    // make it undefined
    if (metadataOfEdition === undefined) {
      setMetadata(undefined);
    }

    // console.log('in metadata side effect');
  }, [displayEdition, editions]);

  return metadata || defaultMetadata;
}

export default useSiteMetadata;
