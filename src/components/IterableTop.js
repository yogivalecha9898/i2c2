import { Box } from "@mui/system";
import { boxStyle, modalBoxstyle } from "../utilities/boxStyles";
import getUtility from "../utilities/utilityFunction";
import "../styles/commonStyles.css";
import { Piece } from "avataaars";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const IterableTop = ({ target, setTopValue, setHairColorValue }) => {
  const arr = getUtility(target);
  const hairColorArr = getUtility("HairColor");
  const keys = getUtility("HairColorKeys");

  const [idx, setIdx] = useState(0);
  const [idx1, setIdx1] = useState(0);

  useEffect(() => {
    setTopValue(arr[idx]);
    setHairColorValue(keys[idx1]);
  }, [idx, idx1]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "20px auto",
        width: "200px",
      }}
    >
      <Tooltip title={arr[idx]}>
        <Box
          sx={{ ...boxStyle, marginBottom: "20px" }}
          className="border"
          onClick={() => setIdx((idx + 1) % arr.length)}
        >
          <Piece
            style={{
              position: "absolute",
              left: "-2%",
            }}
            pieceType="top"
            pieceSize="50"
            topType={arr[idx]}
            hairColor={keys[idx1]}
          />
        </Box>
      </Tooltip>
      <Box
        onClick={() => setIdx1((idx1 + 1) % hairColorArr.length)}
        sx={{
          width: "30px",
          height: "30px",
          backgroundColor: hairColorArr[idx1],
          borderRadius: "50%",
          marginLeft: "10px",
        }}
      />
    </Container>
  );
};

export default IterableTop;

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
