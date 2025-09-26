import { Suspense } from "react";
import { GET_ALL_FILMS } from "@/graphql/queries";
import { PreloadQuery } from "@/lib/apollo-client";
import MainTemplate from "@/templates/main-template";

export default function Home() {
  return (
    <PreloadQuery query={GET_ALL_FILMS}>
      <Suspense fallback={<div>loading</div>}>
        <MainTemplate />
      </Suspense>
    </PreloadQuery>
  );
}
