import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storId,
    },
  });

  return <div>Active Store:{store?.name}</div>;
};

export default DashboardPage;
