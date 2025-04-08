import blueBin from "../assets/blue_bin.png";
import caixaCartao from "../assets/garbage/caixa_cartao.png";
import folhaPapel from "../assets/garbage/folha_papel.png";
import frascoPerfume from "../assets/garbage/frasco_perfume.png";
import garrafaAgua from "../assets/garbage/garrafa_agua.png";
import garrafaVidro from "../assets/garbage/garrafa_vidro.png";
import garrafaVinho from "../assets/garbage/garrafa_vinho.png";
import jornal from "../assets/garbage/jornal.png";
import lataSpray from "../assets/garbage/lata_spray.png";
import lataSumo from "../assets/garbage/lata_sumo.png";
import pacoteLeite from "../assets/garbage/pacote_leite.png";
import pacoteSumo from "../assets/garbage/pacote_sumo.png";
import pastaDentes from "../assets/garbage/pasta_dentes.png";
import sacoPlastico from "../assets/garbage/saco_plastico.png";
import shampoo from "../assets/garbage/shampoo.png";
import greenBin from "../assets/green_bin.png";
import yellowBin from "../assets/yellow_bin.png";
import { Bin, Garbage, Level } from "./types";

const yellonBinO: Bin = { name: "Amarelo", id: "yellow", img: yellowBin };
const blueBinO: Bin = { name: "Azul", id: "blue", img: blueBin };
const greenBinO: Bin = { name: "Verde", id: "green", img: greenBin };

const garrafaAguaO: Garbage = {
  id: "garrafa-agua",
  displaynName: "Garrafa de água",
  rightBin: "yellow",
  img: garrafaAgua,
};
const lataSumoO: Garbage = {
  id: "lata-bebida",
  displaynName: "Lata de sumo",
  rightBin: "yellow",
  img: lataSumo,
};
const garrafaVidroO: Garbage = {
  id: "garrafa-vidro",
  displaynName: "Garrafa de vidro",
  rightBin: "green",
  img: garrafaVidro,
};
const frascoPerfumeO: Garbage = {
  id: "perfume",
  displaynName: "Frasco de Perfume",
  rightBin: "green",
  img: frascoPerfume,
};
const caixaCartaoO: Garbage = {
  id: "caixa",
  displaynName: "Caixa de Cartão",
  rightBin: "blue",
  img: caixaCartao,
};
const folhaPapelO: Garbage = {
  id: "folha",
  displaynName: "folha de papel",
  rightBin: "blue",
  img: folhaPapel,
};
const pacoteLeiteO: Garbage = {
  id: "pacote-leite",
  displaynName: "pacote de leite",
  rightBin: "yellow",
  img: pacoteLeite,
};
const sacoPlastico0: Garbage = {
  id: "saco-plastico",
  displaynName: "saco de plastico",
  rightBin: "yellow",
  img: sacoPlastico,
};
const lataSpray0: Garbage = {
  id: "spray",
  displaynName: "lata de spray",
  rightBin: "yellow",
  img: lataSpray,
};
const pacoteSumo0: Garbage = {
  id: "pacote-sumo",
  displaynName: "pacote de sumo",
  rightBin: "yellow",
  img: pacoteSumo,
};
const pastaDentes0: Garbage = {
  id: "pasta-dentes",
  displaynName: "pasta de dentes",
  rightBin: "yellow",
  img: pastaDentes,
};
const shampoo0: Garbage = {
  id: "shampoo",
  displaynName: "champo",
  rightBin: "yellow",
  img: shampoo,
};
const garrafaVinho0: Garbage = {
  id: "garrafa-vinho",
  displaynName: "garrafa de vinho",
  rightBin: "green",
  img: garrafaVinho,
};
const jornal0: Garbage = {
  id: "jornal",
  displaynName: "jornal",
  rightBin: "blue",
  img: jornal,
};

// folhetos
// caixa da manteiga

export const level1: Level = {
  bins: [yellonBinO, blueBinO, greenBinO],
  garbage: [garrafaAguaO, garrafaVidroO, caixaCartaoO],
};
export const level2: Level = {
  bins: [yellonBinO, blueBinO, greenBinO],
  garbage: [lataSumoO, frascoPerfumeO, folhaPapelO],
};
export const level3: Level = {
  bins: [yellonBinO, blueBinO, greenBinO],
  garbage: [lataSpray0, jornal0, pastaDentes0],
};
export const level4: Level = {
  bins: [yellonBinO, blueBinO, greenBinO],
  garbage: [pacoteLeiteO, sacoPlastico0],
};
export const level5: Level = {
  bins: [yellonBinO, blueBinO, greenBinO],
  garbage: [pacoteSumo0, garrafaVinho0, shampoo0],
};

export const bins: Bin[] = [
  { name: "Amarelo", id: "yellow", img: yellowBin },
  { name: "Azul", id: "blue", img: blueBin },
  { name: "Verde", id: "green", img: greenBin },
];
export const garbage: Garbage[] = [
  garrafaAguaO,
  lataSumoO,
  garrafaVidroO,
  frascoPerfumeO,
  caixaCartaoO,
  folhaPapelO,
];
