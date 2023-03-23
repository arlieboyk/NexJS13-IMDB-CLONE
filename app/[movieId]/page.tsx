interface Props {
  searchParams: string;
}

type Movie = {
  id: number;
  title: string;
  year: number;
  description: string;
  slug: string;
  movileImage?: string | null;
};

async function page({ searchParams }: Props) {
  console.log(searchParams);

  const getData = async () => {
    const res = await fetch(`/api/search?query=${searchParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("response", data);
  };

  getData();

  return (
    <>
      <button
        onClick={() => getData}
        className="px-4 py-2 rounded-md bg-yellow-500"
      >
        getData
      </button>
    </>
  );
}

export default page;
