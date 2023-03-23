"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
interface Props {
  searchParams: string;
}

function Input({ searchParams }: Props) {
  const router = useRouter();
  const searchUrl = useSearchParams();
  const [search, setSearch] = useState("");

  const getData = async () => {
    const encodedSearchQuery = encodeURI(search);
    const res = await fetch(`/api/search?query=${encodedSearchQuery}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("response", data);
  };

  const onSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("query params: ", searchParams);
    /* get search query */
    const searchQuery = searchUrl ? searchUrl.get("query") : null;

    /* encoded  */
    const encodedSearchQuery = encodeURI(search);
    /* router to set query to url */
    router.push(`/movieId?=${encodedSearchQuery}`);
    getData();
  };
  return (
    <form onSubmit={onSearch} className="space-x-3 w-full">
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="w-full inline px-2 py-1  outline-none "
      />
    </form>
  );
}

export default Input;
