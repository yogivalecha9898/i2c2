import {
  Accessories,
  Clothes,
  ClothesColor,
  Eyebrows,
  Eyes,
  FacialHair,
  HairColor,
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

    default:
      return "Nothing";
  }
};

export default getUtility;
