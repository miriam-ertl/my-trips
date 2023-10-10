import {
  StyledContent,
  StyledDestination,
  StyledH2,
  StyledImage,
  StyledLink,
  StyledPDate,
  StyledTrip,
} from "./Trip.styled";
import { formatDistanceToNowStrict } from "date-fns";

export default function Trip({
  id,
  image,
  title,
  startDate,
  endDate,
  city,
  country,
}) {
  function DisplayCountdown() {
    const countdown = formatDistanceToNowStrict(new Date(startDate), {
      unit: "day",
      roundingMethod: "floor",
      addSuffix: true,
    });

    const parsedCountdown = countdown.replace(/[^0-9]/g, "");

    const countdownAdjusted = formatDistanceToNowStrict(new Date(startDate), {
      roundingMethod: "floor",
      addSuffix: true,
    });

    if (!countdown.includes("ago") && parsedCountdown < 30) {
      return `starts ${countdownAdjusted}`;
    }
    if (countdown.includes("ago") && parsedCountdown < 1) {
      return "starts today";
    }
  }
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
          <DisplayCountdown />
        </StyledContent>
      </StyledTrip>
    </StyledLink>
  );
}
