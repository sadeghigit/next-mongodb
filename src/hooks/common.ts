import axios from 'axios'

export async function fetcher(url: string) {
  return axios.get(url).then(res => res.data)
}