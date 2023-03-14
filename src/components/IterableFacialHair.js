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
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const IterableFacialHair = ({ target, setFacialHairValue }) => {
  const arr = getUtility(target);

  const [facialValue, setFacialHair] = useState();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setFacialHairValue(arr[idx]);
  }, [idx]);

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
          sx={boxStyle}
          onClick={() => setIdx((idx + 1) % arr.length)}
          className="border"
        >
          <Piece
            style={{
              position: "absolute",
              top: "-50%",
              left: "-52%",
            }}
            pieceType="facialHair"
            pieceSize="100"
            facialHairType={arr[idx]}
          />
        </Box>
      </Tooltip>
      {/* <FormControl sx={{ minWidth: "100px", margin: "20px 0" }}>
        <InputLabel id="demo-simple-select-label">Facial Hair</InputLabel>
        <Select
          label="FACIAL HAIR"
          onChange={(e) => setFacialHair(e.target.value)}
        >
          {arr.map((options) => {
            return (
              <MenuItem
                value={options}
                className="flex-column flex-center flex"
              >
                <Typography className="text-center">{options}</Typography>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl> */}
    </Container>
  );
};

export default IterableFacialHair;

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
