import {
  StyledContent,
  StyledDestination,
  StyledH2,
  StyledImage,
  StyledLink,
  StyledPDate,
  StyledTrip,
} from "./Trip.styled";

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
    <StyledLink href={`/trips/${id}`}>
      <StyledTrip>
        <StyledImage src={image} width={70} height={70} alt="" />
        <StyledContent>
          <StyledH2>{title}</StyledH2>
          <StyledPDate>
            {startDate} - {endDate}{" "}
          </StyledPDate>
          <StyledDestination>
            {city}, {country}
          </StyledDestination>
        </StyledContent>
      </StyledTrip>
    </StyledLink>
  );
}
