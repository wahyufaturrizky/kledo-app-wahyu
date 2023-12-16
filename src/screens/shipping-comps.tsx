import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import addIcon from "../assets/image/add.png";
import delIcon from "../assets/image/delete.png";
import Button from "../components/Button";
import Image from "../components/Image";
import Input from "../components/Input";
import SearchInput from "../components/SearchInput";
import Table from "../components/Table";
import Text from "../components/Text";
import useDebounce from "../hook/useDebounce";
import {
  useCreateShippingComps,
  useDeleteShippingComps,
  useShippingComps,
  useUpdateShippingComps,
} from "../services/auth/useShippingComps";

function ShippingComps() {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [idSelected, setIdSelected] = useState<number>();

  const { control, watch: watchSearch } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const debounceFetchShippingComps = useDebounce(watchSearch("search"), 1000);

  const {
    control: addControl,
    handleSubmit: handleSubmitAdd,
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
    },
    shouldUnregister: true,
  });

  const {
    data: dataShipping,
    isPending,
    refetch: refetchShippingComps,
  } = useShippingComps({
    query: {
      search: debounceFetchShippingComps,
    },
    options: {
      onSuccess: () => {},
      select: (res: any) => {
        return res.data.data;
      },
    },
  });

  const { mutate: createShippingComps, isPending: isPendingCreateShippingComps } =
    useCreateShippingComps({
      options: {
        onSuccess: () => {
          setIsAdd(false);
          refetchShippingComps();

          window.alert("Success add data");
        },
      },
    });

  const { mutate: updateShippingComps, isPending: isPendingUpdateShippingComps } =
    useUpdateShippingComps({
      id: idSelected,
      options: {
        onSuccess: () => {
          refetchShippingComps();
          setIsEdit(false);

          window.alert("Success update data");
        },
      },
    });

  const { mutate: deleteShippingComps, isPending: isPendingDeleteShippingComps } =
    useDeleteShippingComps({
      id: idSelected,
      options: {
        onSuccess: () => {
          refetchShippingComps();
          setIsEdit(false);
          window.alert("Success delete data");
        },
      },
    });

  const handleAdd = (data: any) => {
    if (idSelected) {
      updateShippingComps(data);
    } else {
      createShippingComps(data);
    }
  };

  const columns = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "Nama",
      dataIndex: "name",
    },
  ];

  const selectedRow = (data: any) => {
    setIdSelected(data.id);
    setValue("name", data.name);
    setIsEdit(true);
  };

  return (
    <div className="p-4 sm:ml-64 bg-[#BDBDBD] h-screen">
      <div className="bg-white p-4 rounded-lg">
        {isAdd || isEdit ? (
          <div>
            <div className="flex items-center gap-4 mb-5">
              <Text
                label={`${isEdit ? "Edit" : "Tambah"} Shipping Comps`}
                className="font-roboto text-2xl font-bold "
              />

              {isEdit && (
                <Image
                  onClick={() => {
                    if (!isPendingDeleteShippingComps) {
                      deleteShippingComps();
                    }
                  }}
                  className="cursor-pointer"
                  src={delIcon}
                  alt="addIcon"
                />
              )}
            </div>

            <Controller
              control={addControl}
              name="name"
              rules={{
                required: {
                  value: true,
                  message: "Nama harus diisi",
                },
              }}
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <Input
                  onChange={onChange}
                  error={error}
                  onBlur={onBlur}
                  value={value}
                  label="Nama"
                  name="name"
                  type="text"
                  required={true}
                  classNameInput="block w-60 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-kl-blue sm:text-sm sm:leading-6"
                  classNameLabel="block text-sm font-bold leading-6 text-kl-gray"
                />
              )}
            />

            <div className="mt-5">
              <Button
                disabled={
                  isPendingCreateShippingComps ||
                  isPendingUpdateShippingComps ||
                  isPendingDeleteShippingComps
                }
                onClick={handleSubmitAdd(handleAdd)}
                label={
                  isPendingCreateShippingComps ||
                  isPendingUpdateShippingComps ||
                  isPendingDeleteShippingComps
                    ? "Loading..."
                    : "Simpan"
                }
                type="button"
                className="w-auto items-center justify-center rounded-lg bg-kl-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-kl-blue-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kl-blue"
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Text label="Shipping Comps" className="font-roboto text-2xl font-bold" />
                <Image
                  onClick={() => setIsAdd(true)}
                  className="cursor-pointer"
                  src={addIcon}
                  alt="addIcon"
                />
              </div>

              <Controller
                control={control}
                name="search"
                render={({ field: { onChange, onBlur, value } }) => (
                  <SearchInput
                    onChange={onChange}
                    placeholder="Cari"
                    onBlur={onBlur}
                    value={value}
                    name="search"
                    type="text"
                    required
                    className="block w-80 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  />
                )}
              />
            </div>

            <div className="mt-5">
              <Table
                loading={isPending}
                dataSource={dataShipping}
                selectedRow={selectedRow}
                columns={columns.filter((filtering: any) => filtering.dataIndex !== "id")}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShippingComps;
