"use client";

import { useGetAllFilmsSuspense } from "@/hooks/queries";

function MainTemplate() {
  const { data, error } = useGetAllFilmsSuspense();

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.allFilms?.films?.map((film) => (
        <div key={film?.id}>{film?.title}</div>
      ))}
    </div>
  );
}

export default MainTemplate;
