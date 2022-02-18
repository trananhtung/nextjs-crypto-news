import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import { Hero, Rank, TrendTable } from '../containers';
import { CurrentUserProvider } from '../hooks';
import getCryptoMarket from '../services/market';
import { Market } from '../models';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = (props) => {
  const market = new Market(props.marketProps);

  return (
    <>
      <Hero />
      <CurrentUserProvider value={market}>
        <Rank />
        <TrendTable />
      </CurrentUserProvider>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await getCryptoMarket();
  const marketProps = response.data;
  return {
    props: { marketProps },
    notFound: response.status !== 200,
    // revalidate: after 10 minute
    revalidate: 2 * 60 * 60,
  };
};
