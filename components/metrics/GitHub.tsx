import useSWR from 'swr';

import fetcher from '../../libs/fetcher';
import { GitHub } from '../../libs/types';
import MetricCard from '../../components/metrics/Card';

export default function GitHubCard() {
  const { data } = useSWR<GitHub>('/api/github', fetcher);

  const stars = new Number(data?.stars);
  const link = 'https://github.com/yiRMT';

  return (
    <MetricCard
      header="GitHub Stars"
      link={link}
      metric={stars}
      isCurrency={false}
    />
  );
}