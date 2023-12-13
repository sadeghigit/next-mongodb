import useSWR from 'swr'
import { fetcher } from './common';

type Collection = {
  name: string;
  type?: string;
}

export function useCollections() {
  const { data, error, isLoading } = useSWR<Collection[]>(`/api/collections`, fetcher)
  return { collections: data, isLoading, error }
}