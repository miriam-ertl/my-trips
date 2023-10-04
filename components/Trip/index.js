import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const StyledTrip = styled.li`
  background-color: #bee5fd;
  display: flex;
  border-radius: 30px;
  border: solid;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyledImage = styled.image`
  border-radius: 30px;
  border: solid;
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
      <Link href={`/trips/${id}`}>
        <StyledImage>
          <Image src={image} width={100} height={50} alt="" />
        </StyledImage>
        <div>
          <h2>{title}</h2>
          <p>
            {startDate} - {endDate} <br></br> {city}, {country}
          </p>
        </div>
      </Link>
    </StyledTrip>
  );
}
