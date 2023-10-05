import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledTrip = styled.li`
  background-color: #bee5fd;
  display: flex;
  border-radius: 3rem;
  border: solid;

  width: 100vb;
  flex-wrap: nowrap;
`;

const StyledTripElement = styled.div`
  display: flex;
  border: solid;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const StyledImage = styled(Image)`
  border-radius: 1rem;
  margin: 1rem;
  display: flex;
  order: 1;
`;
const StyledTripContent = styled.div`
  display: flex;
  flex-direction: column;
  order: 2;
`;
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
    <StyledTrip>
      <StyledTripElement>
        <Link href={`/trips/${id}`}>
          <StyledImage src={image} width={70} height={70} alt="" />

          <StyledTripContent>
            <h2>{title}</h2>
            <p>
              {startDate} - {endDate} <br></br> {city}, {country}
            </p>
          </StyledTripContent>
        </Link>
      </StyledTripElement>
    </StyledTrip>
  );
}
