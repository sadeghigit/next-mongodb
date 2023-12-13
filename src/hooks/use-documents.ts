import useSWR from 'swr'
import { fetcher } from './common';

export function useDocuments(collection: string) {
  const { data, error, isLoading } = useSWR<any[]>(`/api/collections/${collection}`, fetcher)
  return { documents: data, isLoading, error }
}