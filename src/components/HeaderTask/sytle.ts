import { styled, keyframes } from "@stitches/react";
import * as Dialog from '@radix-ui/react-dialog';

const Overlay = styled(Dialog.Overlay, {
  background: "rgba(0 0 0 / 0.5)",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "grid",
  placeItems: "center",
  overflowY: "auto",
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const Content = styled(Dialog.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 25,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&:focus": { outline: "none" },
});

const Trigger = styled(Dialog.Trigger, {
  border: "none",
  background: "transparent",
  cursor: "pointer",
});

const ModalHeader = styled("header", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  "& button": {
    background: "transparent",
    border: "none",
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 18,
    cursor: 'pointer'
  },

  "& h2": {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "27px",
    lineHeight: "34px",
    margin: "5px 0",
  },
});


export {ModalHeader, Trigger, Content, Overlay}