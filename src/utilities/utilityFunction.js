import {
  Accessories,
  Clothes,
  ClothesColor,
  ClothesColorKeys,
  Eyebrows,
  Eyes,
  FacialHair,
  FacialHairColor,
  FacialHairColorKeys,
  HairColor,
  HairColorKeys,
  Mouth,
  Skin,
  Top,
} from "./utilities";

const getUtility = (target) => {
  switch (target) {
    case "Top":
      return Top;

    case "HairColor":
      return HairColor;

    case "Accessories":
      return Accessories;

    case "FacialHair":
      return FacialHair;

    case "Eyebrows":
      return Eyebrows;

    case "Eyes":
      return Eyes;

    case "Mouth":
      return Mouth;

    case "Clothes":
      return Clothes;

    case "ClothesColor":
      return ClothesColor;

    case "Skin":
      return Skin;

    case "HairColorKeys":
      return HairColorKeys;

    case "ClothesColorKeys":
      return ClothesColorKeys;

    case "FacialHairColor":
      return FacialHairColor;

    case "FacialHairColorKeys":
      return FacialHairColorKeys;

    default:
      return "Nothing";
  }
};

export default getUtility;
