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
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const IterableEyes = ({ target, setClothesValue, setClothesColorValue }) => {
  const arr = getUtility(target);
  const clothesColorArr = getUtility("ClothesColor");

  const [clothesValue, setClothes] = useState();
  const [clothesColor, setClothesColor] = useState(clothesColorArr[0]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setClothesValue(arr[idx]);
    setClothesColorValue(clothesColor);
  }, [idx, clothesColor]);

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
          sx={{ ...boxStyle, marginBottom: "20px" }}
          className="border"
        >
          <Piece
            style={{
              position: "absolute",
              top: "-44%",
              left: "-22%",
            }}
            pieceType="clothe"
            pieceSize="70"
            clotheType={arr[idx]}
            clotheColor={clothesColor}
          />
        </Box>
      </Tooltip>
      <FormControl size="small">
        <InputLabel id="demo-simple-select-label">Clothe Color</InputLabel>
        <Select
          label="Clothe Color"
          onChange={(e) => setClothesColor(e.target.value)}
        >
          {clothesColorArr.map((options) => {
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

export default IterableEyes;
