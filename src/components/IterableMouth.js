import { boxStyle } from "../utilities/boxStyles";
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
import { Box } from "@mui/system";

const IterableEyes = ({ target, setMouthValue }) => {
  const arr = getUtility(target);

  const [mouthValue, setMouth] = useState();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setMouthValue(arr[idx]);
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
      <Box
        sx={boxStyle}
        className="border"
        onClick={() => setIdx((idx + 1) % arr.length)}
      >
        <Piece
          style={{
            position: "absolute",
            top: "-20%",
            left: "-18.55%",
          }}
          pieceType="mouth"
          pieceSize="300"
          mouthType={arr[idx]}
        />
      </Box>
      {/* <FormControl sx={{ minWidth: "100px", margin: "20px 0" }}>
        <InputLabel id="demo-simple-select-label">Mouth</InputLabel>
        <Select label="MOUTH" onChange={(e) => setMouth(e.target.value)}>
          {arr.map((options) => {
            return (
              <MenuItem
                value={options}
                className="flex-column flex-center flex"
                key={options}
              ></MenuItem>
            );
          })}
        </Select>
      </FormControl> */}
    </Container>
  );
};

export default IterableEyes;
