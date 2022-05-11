import { useQuery } from "@apollo/client";
import { getDataNota } from "../graphql/query";

export default function useGetDataNotaWhereKodeNota(kodeNota) {
  const { data, loading, error } = useQuery(getDataNota, {
    variables: { _eq: kodeNota, _eq2: kodeNota },
  });

  return {
    data,
    loading,
    error,
  };
}
