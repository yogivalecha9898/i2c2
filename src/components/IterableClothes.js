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
      <Box
        onClick={() => setIdx((idx + 1) % arr.length)}
        sx={{ ...boxStyle, margin: "20px" }}
        className="border"
      >
        <Piece
          style={{
            position: "absolute",
          }}
          pieceType="clothe"
          pieceSize="100"
          clotheType={arr[idx]}
          clotheColor={clothesColor}
        />
      </Box>
      {/* <FormControl sx={{ minWidth: "100px", margin: "20px 0" }}>
        <InputLabel id="demo-simple-select-label">Clothes</InputLabel>
        <Select label="CLOTHES" onChange={(e) => setClothes(e.target.value)}>
          {arr.map((options) => {
            return (
              <MenuItem
                value={options}
                className="flex-column flex-center flex"
                key={options}
              >
                <Piece
                  pieceType="clothe"
                  pieceSize="100"
                  clotheType={options}
                  clotheColor={clothesColor}
                />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl> */}
      <FormControl sx={{ minWidth: "100px" }}>
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
