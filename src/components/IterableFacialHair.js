import { Box } from "@mui/system";
import { boxStyle, modalBoxstyle } from "../utilities/boxStyles";
import getUtility from "../utilities/utilityFunction";
import "../styles/commonStyles.css";
import { Piece } from "avataaars";
import { Container, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

const IterableFacialHair = ({
  target,
  setFacialHairValue,
  setFacialHairColorValue,
}) => {
  const arr = getUtility(target);
  const facialHairColorArr = getUtility("FacialHairColor");
  const keys = getUtility("FacialHairColorKeys");

  const [idx, setIdx] = useState(0);
  const [idx1, setIdx1] = useState(0);

  useEffect(() => {
    setFacialHairValue(arr[idx]);
    setFacialHairColorValue(keys[idx1]);
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
          onClick={() => setIdx((idx + 1) % arr.length)}
          className="border"
        >
          <Piece
            style={{
              position: "absolute",
              top: "-50%",
              left: "-55%",
            }}
            pieceType="facialHair"
            pieceSize="100"
            facialHairType={arr[idx]}
            facialHairColor={keys[idx1]}
          />
        </Box>
      </Tooltip>
      <Box
        onClick={() => setIdx1((idx1 + 1) % facialHairColorArr.length)}
        sx={{
          width: "30px",
          height: "30px",
          backgroundColor: facialHairColorArr[idx1],
          borderRadius: "50%",
          marginLeft: "8px",
        }}
      />
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
