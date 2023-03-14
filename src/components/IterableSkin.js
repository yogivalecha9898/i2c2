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
} from "@mui/material";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { boxStyle } from "../utilities/boxStyles";

const IterableEyes = ({ target, setSkinValue }) => {
  const arr = getUtility(target);

  const [skinValue, setSkin] = useState();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setSkinValue(arr[idx]);
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
          sx={boxStyle}
          className="border"
        >
          <Piece
            pieceType="skin"
            style={{ position: "absolute", left: "-15%", top: "-10%" }}
            pieceSize="150"
            skinColor={arr[idx]}
          />
        </Box>
      </Tooltip>
      {/* <FormControl sx={{ minWidth: "100px", margin: "20px 0" }}>
        <InputLabel id="demo-simple-select-label">Skin</InputLabel>
        <Select label="SKIN" onChange={(e) => setSkin(e.target.value)}>
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
