import React, { useState } from "react";
import Avatar from "avataaars";
import IterableTop from "./components/IterableTop";
import IterableAccessories from "./components/IterableAccessories";
import { Container } from "@mui/system";
import IterableFacialHair from "./components/IterableFacialHair";
import IterableEyebrows from "./components/IterableEyebrows";
import IterableEyes from "./components/IterableEyes";
import IterableMouth from "./components/IterableMouth";
import IterableClothes from "./components/IterableClothes";
import IterableSkin from "./components/IterableSkin";
import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [topValue, setTopValue] = useState();
  const [accValue, setAccValue] = useState();
  const [hairColorValue, setHairColorValue] = useState();
  const [facialHairValue, setFacialHairValue] = useState();
  const [eyebrowsValue, setEyebrowsValue] = useState();
  const [eyesValue, setEyesValue] = useState();
  const [mouthValue, setMouthValue] = useState();
  const [clothesValue, setClothesValue] = useState();
  const [clothesColorValue, setClothesColorValue] = useState();
  const [skinValue, setSkinValue] = useState();

  const handleData = () => {
    const jsonobj = {
      topValue,
      accValue,
      hairColorValue,
      facialHairValue,
      eyebrowsValue,
      eyesValue,
      mouthValue,
      clothesValue,
      clothesColorValue,
      skinValue,
    };

    const refinedData = [];

    Object.keys(jsonobj).map((item) => {
      const arr = [item, jsonobj[item]];
      refinedData.push(arr);
    });

    let csvContent = "";

    refinedData.forEach((row) => {
      csvContent += row.join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8," });
    const objUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", objUrl);
    link.setAttribute("download", "File.csv");
    link.click();
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Box
          sx={{
            margin: "20px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                letterSpacing: "2px",
                fontSize: "30px",
              }}
            >
              TEZVATAR
            </Typography>
            <Button
              style={{
                borderRadius: "50px",
                color: "#4169e1",
                fontWeight: "bolder",
                backgroundColor: "#002147",
              }}
            >
              Connect Wallet
            </Button>
          </Box>
          <Avatar
            style={{ width: "300px", height: "300px" }}
            avatarStyle="Circle"
            topType={topValue}
            accessoriesType={accValue}
            hairColor={hairColorValue}
            facialHairType={facialHairValue}
            clotheType={clothesValue}
            clotheColor={clothesColorValue}
            eyeType={eyesValue}
            eyebrowType={eyebrowsValue}
            mouthType={mouthValue}
            skinColor={skinValue}
          />
        </Box>
        <Container
          sx={{
            display: "flex",
            borderRadius: "20px",
            backgroundColor: "#262729",
            margin: "0 auto 20px",
            width: "850px",
          }}
        >
          <IterableTop
            target="Top"
            setTopValue={setTopValue}
            setHairColorValue={setHairColorValue}
          />
          <IterableAccessories target="Accessories" setAccValue={setAccValue} />
          <IterableFacialHair
            target="FacialHair"
            setFacialHairValue={setFacialHairValue}
          />
          <IterableEyebrows
            target="Eyebrows"
            setEyebrowsValue={setEyebrowsValue}
          />
          <IterableEyes target="Eyes" setEyesValue={setEyesValue} />
          <IterableMouth target="Mouth" setMouthValue={setMouthValue} />
          <IterableClothes
            target="Clothes"
            setClothesColorValue={setClothesColorValue}
            setClothesValue={setClothesValue}
          />
          <IterableSkin target="Skin" setSkinValue={setSkinValue} />
        </Container>
        <Container
          sx={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)",
              borderRadius: "50px",
              color: "white",
              fontWeight: "bolder",
            }}
            onClick={handleData}
          >
            Export to csv
          </Button>
          <FormControl size="small">
            <TextField
              size="small"
              id="outlined-basic"
              label="Input a name for NFT"
              variant="outlined"
            />
          </FormControl>
          <Button
            variant="contained"
            sx={{
              background:
                "linear-gradient(93.06deg, rgb(255, 0, 199) 2.66%, rgb(255, 159, 251) 98.99%)",
              borderRadius: "50px",
              color: "white",
              fontWeight: "bolder",
              width: "150px",
            }}
          >
            Mint
          </Button>
        </Container>
        <Container
          sx={{
            padding: "10px 0",
            textAlign: "center",
            height: "50px",
            margin: "20px auto",
          }}
        >
          Made with
          <span style={{ margin: "0 5px" }}>
            <span className="heartEmojiFloat">💜</span>
          </span>
          by NKNLABS
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default App;
