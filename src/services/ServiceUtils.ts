const ServiceUtils = {
  async handleResponse<T>(req: Promise<Response>): Promise<T> {
    const resp = await req;
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error(await resp.json());
    }
  },
};

export default ServiceUtils;
