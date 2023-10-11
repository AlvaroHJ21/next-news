import { NewsResponse } from '@/interfaces';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const params: any = {
    apiKey: process.env.NEWS_API_KEY!,
  };

  if (searchParams.get('q')) {
    params['q'] = searchParams.get('q');
  }
  if (searchParams.get('from')) {
    params['from'] = searchParams.get('from');
  }
  if (searchParams.get('to')) {
    params['to'] = searchParams.get('to');
  }
  if (searchParams.get('sortBy')) {
    params['sortBy'] = searchParams.get('sortBy');
  }
  if (searchParams.get('pageSize')) {
    params['pageSize'] = searchParams.get('pageSize');
  }

  const resp = await fetch('https://newsapi.org/v2/everything?' + new URLSearchParams(params));
  const data = (await resp.json()) as NewsResponse;

  return Response.json(data);
}
