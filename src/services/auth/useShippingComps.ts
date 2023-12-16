import { useMutation, useQuery } from "@tanstack/react-query";
import { client } from "../client";

const fetchShippingComps = async ({ query = {} }) => {
  return client(`/finance/shippingComps`, {
    params: {
      search: "",
      ...query,
    },
  }).then((data) => data);
};

const useShippingComps = ({ query = {}, options }: any = {}) => {
  return useQuery({
    queryKey: ["shipping-comps", query],
    queryFn: () => fetchShippingComps({ query }),
    ...options,
  });
};

function useCreateShippingComps({ options }: any) {
  return useMutation({
    mutationFn: (reqBody) =>
      client("/finance/shippingComps", {
        method: "POST",
        data: reqBody,
      }),
    ...options,
  });
}

function useUpdateShippingComps({ id, options }: any) {
  return useMutation({
    mutationFn: (updates) =>
      client(`/finance/shippingComps/${id}`, {
        method: "PUT",
        data: updates,
      }),
    ...options,
  });
}

function useDeleteShippingComps({ id, options }: any) {
  return useMutation({
    mutationFn: () =>
      client(`/finance/shippingComps/${id}`, {
        method: "DELETE",
      }),
    ...options,
  });
}

export { useShippingComps, useCreateShippingComps, useUpdateShippingComps, useDeleteShippingComps };
