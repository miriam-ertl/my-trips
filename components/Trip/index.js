import Image from "next/image";

export default function Trip({
  image,
  title,
  startDate,
  endDate,
  city,
  country,
}) {
  return (
    <>
      <Image src={image} width={100} height={50} alt="" />
      <p>
        name: {title} startDate: {startDate} endDate:
        {endDate} city: {city} country: {country}
      </p>
    </>
  );
}
