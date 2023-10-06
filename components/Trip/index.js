import {
  StyledDestination,
  StyledH2,
  StyledImage,
  StyledPDate,
  StyledTrip,
} from "./Trip.styled";

import Link from "next/link";

export default function Trip({
  id,
  image,
  title,
  startDate,
  endDate,
  city,
  country,
}) {
  return (
    <Link href={`/trips/${id}`}>
      <StyledTrip>
        <StyledImage src={image} width={70} height={70} alt="" />

        <StyledH2>{title}</StyledH2>
        <StyledPDate>
          {startDate} - {endDate}{" "}
        </StyledPDate>
        <StyledDestination>
          {city}, {country}
        </StyledDestination>
      </StyledTrip>
    </Link>
  );
}
