import Image from "next/image";
import Link from "next/link";

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
      <Link href={`/trips/${trip._id}`}>
        <Image src={image} width={100} height={50} alt="" />

        <h2>{title}</h2>
        <p>
          {startDate} - {endDate} <br></br> {city}, {country}
        </p>
      </Link>
    </li>
  );
}
