"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

function Input() {
  const router = useRouter();
  const searchUrl = useSearchParams();
  const [search, setSearch] = useState("");

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    /* get search query */
    const searchQuery = searchUrl ? searchUrl.get("query") : null;

    /* encoded  */
    const encodedSearchQuery = encodeURI(search);
    /* router to set query to url */
    router.push(`/search?=${encodedSearchQuery}`);
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
