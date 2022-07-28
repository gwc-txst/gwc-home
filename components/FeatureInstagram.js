import Instagram from "instagram-web-api";

export default function FeatureInstagram({ instagramPosts }) {
  return (
    <div>
      <div></div>
    </div>
  );
}

// getStaticProps is a function available to pages within NextJS
// that allows data to be fetched at build time and passed into page-level components

export async function getStaticProps(context) {
  // create a new client to communicate with  Instagram
  // this service requires authentication
  //with username and password parameters
  const client = new Instagram({
    username: process.env.IG_USERNAME,
    password: process.env.IG_PASSWORD,
  });

  let images = [];
  try {
    //attempt to log into Insta
    await client.login();
  } catch (err) {
    console.log("Something went wrong when logging into Instagram...", err);
  }
  // set posts to empty array as placeholder
  let posts = [];
  return {
    props: {
      // return the posts as the prop instagramPosts
      // for the Index function to use
      instagramPosts: posts,
    },
  };
}
