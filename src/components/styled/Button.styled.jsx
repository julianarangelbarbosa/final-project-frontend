import styled from "PROJECTFINAL-frontend";

export const StyledButton = styled.button`
    border: none;
    border-radius: 10px;
    height: 4.5vh;
    color: white;
    padding: 0px;
    background-color: ${(props) => (props.primary ? "#676FA3" : "#FF5959")};
    border: none;
    border-radius: 10px;
    height: 4.5vh;
    color: white;
    padding: 0px;
    margin: ${(props) => (props.primary ? "4vh" : "40px 0px 0px 0px")};
  
    h3 {
    margin: 0px 20px 0px 20px;
    }

    :hover {
    background-color: ${(props) => (props.primary ? "#474c70;" : "#cc4747")};
    }

`