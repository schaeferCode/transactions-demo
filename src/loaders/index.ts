import { LoaderFunctionArgs } from "react-router-dom";

import fixture from './fixture'

export const defaultLoader = ({ params }: LoaderFunctionArgs) => {
  // Would normally do a fetch or call a API service that fetches
  // Would grab the user from the params above for the fetch request
  return new Response(JSON.stringify(fixture), {
    status: 200,
    headers: {
      "Content-Type": "application/json; utf-8",
    },
  });
}
