export const Endpoints = {
  sendText: (
    id: string
  ): any => ({
    url: `/films/${ id }`,
    method: "get",
  }),
};
