import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Trip() {
  const router = useRouter();
  const { id } = router.query;

  const { data: trips, isLoading } = useSWR(`/api/trips/${id}`);

  if (!trips || isLoading) {
    return <h1>... is loading</h1>;
  }

  const { image, title, startDate, endDate, city, country } = trips;
  console.log(trips);
  return (
    <>
      <Image src={image} width={100} height={50} alt="" />
      <p>
        name:{title} startDate:{startDate} endDate:
        {endDate} city:{city} country:{country}
      </p>
    </>
  );
}
