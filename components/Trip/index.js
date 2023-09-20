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
    <li>
      <Image src={image} width={100} height={50} alt="" />
      <p>
        <h2>{title}</h2> {startDate} - {endDate} <br></br> {city}, {country}
      </p>
    </li>
  );
}
