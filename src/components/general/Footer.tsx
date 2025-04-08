import styled from "styled-components";

const Container = styled.footer`
  background-color: #282c34;
  color: grey;
  font-size: 10px;
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 4px;
`;

const Footer = () => {
  return (
    <Container>
      <span>
        metal table from{" "}
        <a href="https://www.freepik.com/free-vector/metal-kitchen-table-steel-counter-top-surface_393449718.htm">
          freepik
        </a>
      </span>
      <span>|</span>
      <span>
        wall from{" "}
        <a href="https://www.freepik.com/free-photo/white-brick-wall-textured-background_3475673.htm">
          freepik
        </a>
      </span>
      <span>|</span>
      <span>
        lab shelf from{" "}
        <a href="https://www.freepik.com/free-vector/shelves-with-lab-equipment-composition_4005711.htm">
          freepik
        </a>
      </span>
    </Container>
  );
};
export default Footer;
