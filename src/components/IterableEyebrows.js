import { boxStyle } from "../utilities/boxStyles";
import getUtility from "../utilities/utilityFunction";
import "../styles/commonStyles.css";
import { Piece } from "avataaars";
import {
  Avatar,
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";

const IterableEyebrows = ({ target, setEyebrowsValue }) => {
  const arr = getUtility(target);

  const [eyebrowsValue, setEyebrows] = useState();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setEyebrowsValue(arr[idx]);
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
          onClick={() => setIdx((idx + 1) % arr.length)}
          style={boxStyle}
          className="border"
        >
          <Piece
            style={{
              position: "absolute",
              top: "35%",
              left: "-20%",
            }}
            pieceType="eyebrows"
            pieceSize="150"
            eyebrowType={arr[idx]}
          />
        </Box>
      </Tooltip>
      {/* <FormControl sx={{ minWidth: "100px", margin: "20px 0" }}>
        <InputLabel id="demo-simple-select-label">Eyebrows</InputLabel>
        <Select label="EYEBROWS" onChange={(e) => setEyebrows(e.target.value)}>
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

export default IterableEyebrows;
