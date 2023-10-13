import {
  StyledDIVContent,
  StyledDIVTrip,
  StyledH2,
  StyledImage,
  StyledPDate,
  StyledPDestination,
} from "./Trip.styled";

import { StyledLink } from "@/components/Details/Details.styled";
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
  function displayCountdown() {
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
      return <p>{`starts ${countdownAdjusted}`}</p>;
    }
    if (countdown.includes("ago") && parsedCountdown < 1) {
      return <p>starts today</p>;
    }
  }
  return (
    <StyledLink href={`/trips/${id}`}>
      <StyledDIVTrip>
        <StyledImage
          src={image?.url}
          width={70}
          height={70}
          alt={`Image for ${title}`}
        />
        <StyledDIVContent>
          <StyledH2>{title}</StyledH2>
          <StyledPDate>
            {startDate} - {endDate}
          </StyledPDate>
          <StyledPDestination>
            {city}, {country}
          </StyledPDestination>
          {displayCountdown()}
        </StyledDIVContent>
      </StyledDIVTrip>
    </StyledLink>
  );
}
