import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';

import { useDictionary, CurrentUserProvider } from '../../hooks';
import getCryptoMarket from '../../services/market';
import { Market } from '../../models';
import { MarketTable } from '../../containers';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const MarketPage: NextPage<Props> = (props) => {
  const market = new Market(props.marketProps);

  return (
    <>
      <CurrentUserProvider value={market}>
        <MarketTable />
      </CurrentUserProvider>
    </>
  );
};

export default MarketPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await getCryptoMarket();
  const marketProps = response.data;
  return {
    props: { marketProps },
    notFound: response.status !== 200,
  };
};
