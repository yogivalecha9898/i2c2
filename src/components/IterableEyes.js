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
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";

const IterableEyes = ({ target, setEyesValue }) => {
  const arr = getUtility(target);

  const [eyesValue, setEyes] = useState();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setEyesValue(arr[idx]);
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
              top: "12%",
              left: "-20%",
            }}
            pieceType="eyes"
            pieceSize="150"
            eyeType={arr[idx]}
          />
        </Box>
      </Tooltip>
      {/* <FormControl sx={{ minWidth: "100px", margin: "20px 0" }}>
        <InputLabel id="demo-simple-select-label">Eyes</InputLabel>
        <Select label="EYES" onChange={(e) => setEyes(e.target.value)}>
          {arr.map((options) => {
            return (
              <MenuItem
                value={options}
                className="flex-column flex-center flex"
                key={options}
              >
                <Piece pieceType="eyes" pieceSize="100" eyeType={options} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl> */}
    </Container>
  );
};

export default IterableEyes;
