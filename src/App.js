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
import { Button } from "@mui/material";

const App = () => {
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
    <div>
      <Container
        sx={{
          margin: "20px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        AVATAR
        <hr
          style={{
            width: "500px",
            borderTop: "none",
            borderBottom: "3px solid gray",
          }}
        />
        <Avatar
          style={{ width: "200px", height: "200px" }}
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
      </Container>
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
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
      <Container>
        <Button onClick={handleData}>Click</Button>
      </Container>
    </div>
  );
};

export default App;
