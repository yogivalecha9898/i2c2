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
  const keys = getUtility("ClothesColorKeys");

  const [idx, setIdx] = useState(0);
  const [idx1, setIdx1] = useState(0);

  useEffect(() => {
    setClothesValue(arr[idx]);
    setClothesColorValue(keys[idx1]);
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
            clotheColor={keys[idx1]}
          />
        </Box>
      </Tooltip>
      <Box
        onClick={() => setIdx1((idx1 + 1) % clothesColorArr.length)}
        sx={{
          width: "30px",
          height: "30px",
          backgroundColor: clothesColorArr[idx1],
          borderRadius: "50%",
          marginLeft: "10px",
        }}
      />
    </Container>
  );
};

export default IterableEyes;
