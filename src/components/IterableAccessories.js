import { Box } from "@mui/system";
import { boxStyle, modalBoxstyle } from "../utilities/boxStyles";
import getUtility from "../utilities/utilityFunction";
import "../styles/commonStyles.css";
import { Piece } from "avataaars";
import {
  Avatar,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";

const IterableAccessories = ({ target, setAccValue }) => {
  const arr = getUtility(target);

  const [idx, setIdx] = useState(0);
  const [accValue, setAcc] = useState();

  useEffect(() => {
    setAccValue(arr[idx]);
  }, [idx]);

  console.log(idx);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "20px auto",
        width: "200px",
      }}
    >
      <Box
        onClick={() => setIdx((prevValue) => (prevValue + 1) % arr.length)}
        sx={boxStyle}
        className="border"
      >
        <Piece
          style={{
            position: "absolute",
            top: "-27%",
            left: "-51%",
          }}
          pieceType="accessories"
          pieceSize="200"
          accessoriesType={arr[idx]}
        />
      </Box>
    </Container>
  );
};

export default IterableAccessories;

// <Modal open={true} sx={{margin: 'auto'}}>
//     <Box className="flex-fit flex flex-space" style={modalBoxstyle}>
// {arr.map(options => {
//     return (
//         <Box className="m-10 flex-column flex-center flex">
//             <Typography className="text-center">{options}</Typography>
//             <Avatar sx={boxStyle} className="pointer">
//                 <Piece pieceType="top" pieceSize="100" topType={options} hairColor="Red"/>
//             </Avatar>
//         </Box>
//     )
// })}
//     </Box>
// </Modal>
