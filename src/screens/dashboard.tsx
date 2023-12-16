import Text from "../components/Text";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user") as string);

  return (
    <div className="p-4 sm:ml-64 bg-[#BDBDBD] h-screen">
      <div className="bg-white p-4 rounded-lg">
        <Text label="Dashboard" className="font-roboto text-2xl font-bold" />

        <div className="flex flex-col m-14 items-center justify-center h-96 rounded bg-[#F2F2F2]">
          <Text label="Selamat Datang" className="font-roboto text-4xl font-bold text-[#828282]" />
          <Text
            label={user?.data?.data?.user.name}
            className="font-roboto text-2xl font-bold text-[#BDBDBD]"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
