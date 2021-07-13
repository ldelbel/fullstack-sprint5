const ServiceUtils = {
  async handleResponse(req: Promise<Response>) {
    const resp = await req;
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(await resp.json());
    }
  },
};

export default ServiceUtils;
