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
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const IterableTop = ({ target, setTopValue, setHairColorValue }) => {
  const arr = getUtility(target);
  const hairColorArr = getUtility("HairColor");

  const [topValue, setTop] = useState();
  const [hairColor, setHairColor] = useState(hairColorArr[0]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setTopValue(arr[idx]);
    setHairColorValue(hairColor);
  }, [idx, hairColor]);

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
        sx={{ ...boxStyle, marginBottom: "20px" }}
        className="border"
        onClick={() => setIdx((idx + 1) % arr.length)}
      >
        <Piece
          style={{
            position: "absolute",
          }}
          pieceType="top"
          pieceSize="100"
          topType={arr[idx]}
          hairColor={hairColor}
        />
      </Box>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Hair Color</InputLabel>
        <Select
          label="Hair Color"
          onChange={(e) => setHairColor(e.target.value)}
        >
          {hairColorArr.map((options) => {
            return (
              <MenuItem value={options}>
                <Typography className="text-center">{options}</Typography>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
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
